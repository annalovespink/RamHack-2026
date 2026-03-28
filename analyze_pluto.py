import pandas as pd
import numpy as np

print("Loading PLUTO dataset...")
df = pd.read_csv("cleaned_datasets/pluto_land_use.csv")
print(f"Total rows: {len(df):,}")
print(f"\nColumns: {list(df.columns)}")

# Check yearbuilt
print("\n" + "="*60)
print("YEAR BUILT ANALYSIS")
print("="*60)
null_year = df["yearbuilt"].isna().sum()
zero_year = (df["yearbuilt"] == 0).sum()
valid_year = ((df["yearbuilt"] > 0) & df["yearbuilt"].notna()).sum()

print(f"Null yearbuilt: {null_year:,} ({null_year/len(df)*100:.1f}%)")
print(f"Zero yearbuilt: {zero_year:,} ({zero_year/len(df)*100:.1f}%)")
print(f"Valid yearbuilt: {valid_year:,} ({valid_year/len(df)*100:.1f}%)")

# Sample buildings with null/0 yearbuilt
print("\n--- Sample buildings with null/0 yearbuilt ---")
no_year = df[(df["yearbuilt"].isna()) | (df["yearbuilt"] == 0)]
print(no_year[["borough", "address", "landuse", "bldgclass", "yearbuilt", 
               "bldgarea", "numfloors", "numbldgs"]].head(20))

# Check landuse distribution
print("\n" + "="*60)
print("LAND USE DISTRIBUTION")
print("="*60)
print(df["landuse"].value_counts().head(15))

# Check building class
print("\n" + "="*60)
print("BUILDING CLASS DISTRIBUTION (top 20)")
print("="*60)
print(df["bldgclass"].value_counts().head(20))

# Check for vacant/parking lots
print("\n" + "="*60)
print("POTENTIAL ROWS TO FILTER")
print("="*60)

# Buildings with no building area
no_bldg_area = (df["bldgarea"].isna()) | (df["bldgarea"] == 0)
print(f"No building area: {no_bldg_area.sum():,} ({no_bldg_area.sum()/len(df)*100:.1f}%)")

# Vacant land (landuse 11)
vacant = df["landuse"] == "11"
print(f"Vacant land (landuse=11): {vacant.sum():,} ({vacant.sum()/len(df)*100:.1f}%)")

# Parking lots (landuse 10)
parking = df["landuse"] == "10"
print(f"Parking lots (landuse=10): {parking.sum():,} ({parking.sum()/len(df)*100:.1f}%)")

# No buildings
no_bldgs = (df["numbldgs"].isna()) | (df["numbldgs"] == 0)
print(f"No buildings: {no_bldgs.sum():,} ({no_bldgs.sum()/len(df)*100:.1f}%)")

# Combination: no building area AND no buildings
no_structure = no_bldg_area & no_bldgs
print(f"No building area AND no buildings: {no_structure.sum():,} ({no_structure.sum()/len(df)*100:.1f}%)")

print("\n" + "="*60)
print("RECOMMENDATION")
print("="*60)
print("Rows with actual structures (bldgarea > 0 OR numbldgs > 0):")
has_structure = (~no_bldg_area) | (~no_bldgs)
print(f"  {has_structure.sum():,} rows ({has_structure.sum()/len(df)*100:.1f}%)")
print(f"  Would remove: {(~has_structure).sum():,} rows")
