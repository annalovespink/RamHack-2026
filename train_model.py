"""
Sinkhole prediction - Random Forest
Uses stratified sampling: all sinkhole=1 rows + 10x random sinkhole=0 rows
"""
import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import (classification_report, confusion_matrix,
                             roc_auc_score)

# ── Load ──────────────────────────────────────────────────────────────────────
print("Loading features...")
df = pd.read_parquet("sinkhole_features.parquet")
print(f"  Full dataset: {df.shape}")

# ── Stratified sample ─────────────────────────────────────────────────────────
NEGATIVE_RATIO = 10  # keep 10x as many negatives as positives

pos = df[df["sinkhole_occurred"] == 1]
neg = df[df["sinkhole_occurred"] == 0].sample(
    n=min(len(pos) * NEGATIVE_RATIO, len(df[df["sinkhole_occurred"] == 0])),
    random_state=42
)
sample = pd.concat([pos, neg]).sample(frac=1, random_state=42).reset_index(drop=True)
print(f"  Positives: {len(pos)}, Negatives sampled: {len(neg)}")
print(f"  Sample size: {len(sample)}")

# ── Features & target ─────────────────────────────────────────────────────────
FEATURES = [
    "prior_month_complaint", "last_3_months_complaints",
    "monthly_rain", "rain_last_3_months",
    "water_breaks_this_month", "water_breaks_last_3_months",
    "bedrock_depth_ft", "bedrock_elev_ft",
    "month",  # seasonality
]
TARGET = "sinkhole_occurred"

X = sample[FEATURES].fillna(0)
y = sample[TARGET]

# ── Train / test split ────────────────────────────────────────────────────────
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y)
print(f"  Train: {len(X_train)}, Test: {len(X_test)}")

# ── Train ─────────────────────────────────────────────────────────────────────
print("\nTraining Random Forest...")
rf = RandomForestClassifier(
    n_estimators=200,
    max_depth=15,
    min_samples_leaf=5,
    class_weight="balanced",
    n_jobs=-1,
    random_state=42,
)
rf.fit(X_train, y_train)
print("  Done.")

# ── Evaluate ──────────────────────────────────────────────────────────────────
y_pred  = rf.predict(X_test)
y_proba = rf.predict_proba(X_test)[:, 1]

print("\nClassification Report:")
print(classification_report(y_test, y_pred))
print("Confusion Matrix:")
print(confusion_matrix(y_test, y_pred))
print(f"ROC-AUC: {roc_auc_score(y_test, y_proba):.4f}")

# ── Feature importance ────────────────────────────────────────────────────────
print("\nFeature Importances:")
fi = pd.Series(rf.feature_importances_, index=FEATURES).sort_values(ascending=False)
print(fi.to_string())
