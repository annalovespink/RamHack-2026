import pandas as pd

df = pd.read_csv("Combined_Sewer_Overflows_(CSOs)__Beginning_2013_20260328.csv")

# Filter to NYC counties only
nyc_counties = ["Bronx", "Kings", "New York", "Queens", "Richmond"]
df = df[df["County"].isin(nyc_counties)].copy()

# Drop the mostly-null link column
df = df.drop(columns=["Link to Real-time Information", "Georeference"])

# Fix longitude typo
df = df.rename(columns={"Longtitude": "Longitude"})

# Clean up numeric columns
df["Latitude"]  = pd.to_numeric(df["Latitude"],  errors="coerce")
df["Longitude"] = pd.to_numeric(df["Longitude"], errors="coerce")
df = df.dropna(subset=["Latitude", "Longitude"])

df = df.reset_index(drop=True)
df.to_csv("cleaned_datasets/combined_sewer_overflows.csv", index=False)
print(f"Saved {len(df)} rows")
print(df.dtypes)
print("\nUnique Discharge Activation Types:")
print(df["Discharge Activation Type"].unique())
