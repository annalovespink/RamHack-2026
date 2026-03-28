import pandas as pd
import re

df = pd.read_csv("DEP_Green_Infrastructure_(Point_Layer)_20260328.csv")

# Extract lat/lon from the_geom "POINT (lon lat)"
coords = df["the_geom"].str.extract(r"POINT \(([^ ]+) ([^ ]+)\)")
df["longitude"] = pd.to_numeric(coords[0], errors="coerce")
df["latitude"]  = pd.to_numeric(coords[1], errors="coerce")

# Keep relevant columns
df = df[[
    "Asset_ID", "GI_ID", "Borough", "Sewer_Type",
    "Asset_Type", "Status", "Status_Gro",
    "Constructed_Date", "Outfall", "NYC_Waters",
    "latitude", "longitude"
]].copy()

# Rename for consistency
df.columns = [
    "asset_id", "gi_id", "borough", "sewer_type",
    "asset_type", "status", "status_group",
    "constructed_date", "outfall", "nyc_waters",
    "latitude", "longitude"
]

# Parse date
df["constructed_date"] = pd.to_datetime(df["constructed_date"], errors="coerce")

# Drop rows missing coordinates
df = df.dropna(subset=["latitude", "longitude"]).reset_index(drop=True)

df.to_csv("cleaned_datasets/dep_green_infrastructure.csv", index=False)
print(f"Saved {len(df)} rows")
print("\nUnique sewer types:")
print(df["sewer_type"].value_counts().to_string())
