"""
Filter cleaned_precipitation, pavement_ratings, and water_main_breaks
to only keep rows from 2020-01-01 onwards.
bedrock_depth has no date column so it is left unchanged.
"""
import pandas as pd

CUTOFF = pd.Timestamp("2020-01-01")

# --- Precipitation ---
prcp = pd.read_csv("cleaned_datasets/cleaned_precipitation.csv")
prcp["DATE"] = pd.to_datetime(prcp["DATE"], errors="coerce")
before = len(prcp)
prcp = prcp[prcp["DATE"] >= CUTOFF]
prcp.to_csv("cleaned_datasets/cleaned_precipitation.csv", index=False)
print(f"Precipitation: {before} -> {len(prcp)} rows")

# --- Pavement ratings ---
pave = pd.read_csv("cleaned_datasets/pavement_ratings.csv")
pave["inspection_date"] = pd.to_datetime(
    pave["inspection_date"], format="%m/%d/%Y %I:%M:%S %p", errors="coerce"
)
before = len(pave)
pave = pave[pave["inspection_date"] >= CUTOFF]
# Restore original date format string before saving
pave["inspection_date"] = pave["inspection_date"].dt.strftime("%m/%d/%Y 12:00:00 AM")
pave.to_csv("cleaned_datasets/pavement_ratings.csv", index=False)
print(f"Pavement ratings: {before} -> {len(pave)} rows")

# --- Water main breaks ---
wmb = pd.read_csv("cleaned_datasets/water_main_breaks.csv")
wmb["created_date"] = pd.to_datetime(wmb["created_date"], errors="coerce")
before = len(wmb)
wmb = wmb[wmb["created_date"] >= CUTOFF]
wmb.to_csv("cleaned_datasets/water_main_breaks.csv", index=False)
print(f"Water main breaks: {before} -> {len(wmb)} rows")

print("Done.")
