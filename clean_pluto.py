import pandas as pd

print("Loading PLUTO dataset...")
df = pd.read_csv("Primary_Land_Use_Tax_Lot_Output_(PLUTO)_20260328.csv")
print(f"  Original shape: {df.shape}")

# Keep only useful columns
useful_cols = [
    "borough", "address",
    "landuse", "bldgclass", "yearbuilt",
    "lotarea", "bldgarea", "numfloors", "numbldgs",
    "unitsres", "unitstotal",
    "bsmtcode",
    "assessland", "assesstot",
    "latitude", "longitude"
]

df = df[useful_cols].copy()

# Clean coordinates
df["latitude"]  = pd.to_numeric(df["latitude"],  errors="coerce")
df["longitude"] = pd.to_numeric(df["longitude"], errors="coerce")
df = df.dropna(subset=["latitude", "longitude"])

# Clean numeric columns
for col in ["yearbuilt", "lotarea", "bldgarea", "numfloors", "numbldgs",
            "unitsres", "unitstotal", "assessland", "assesstot"]:
    df[col] = pd.to_numeric(df[col], errors="coerce")

# Remove empty lots (no building area AND no buildings)
before = len(df)
df = df[((df["bldgarea"] > 0) & df["bldgarea"].notna()) | 
        ((df["numbldgs"] > 0) & df["numbldgs"].notna())]
print(f"  Removed {before - len(df):,} empty lots")

df = df.reset_index(drop=True)
df.to_csv("cleaned_datasets/pluto_land_use.csv", index=False)
print(f"  Cleaned shape: {df.shape}")
print("Saved to cleaned_datasets/pluto_land_use.csv")
