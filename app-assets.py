import os
import re

# Step 1: List all files in the public/app-assets directory
app_assets_dir = 'public/app-assets'
app_assets_files = [os.path.join(root, file)
                    for root, dirs, files in os.walk(app_assets_dir)
                    for file in files]

# Step 2: Check each file in the project directory
project_dir = '.'  # adjust as needed
for root, dirs, files in os.walk(project_dir):
    for file in files:
        if file.endswith(('.php', '.html', '.js', '.css')):  # adjust as needed
            try:
                with open(os.path.join(root, file), 'r') as f:
                    content = f.read()
                    for asset_file in app_assets_files:
                        if asset_file in content:
                            app_assets_files.remove(asset_file)
            except UnicodeDecodeError:
                continue  # Skip files that can't be read due to encoding errors

# Step 3: The remaining files in app_assets_files are likely unused
# Write them to a file instead of printing
with open('unused_files.txt', 'w') as f:
    for file in app_assets_files:
        f.write(file + '\n')
