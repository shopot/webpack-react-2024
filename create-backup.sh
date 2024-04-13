#!/bin/sh

if [ ! -f .env ];then
    echo "Error: .env file not found"
    exit
fi

export $(cat .env | xargs)

PROJECT_NAME="${PROJECT_NAME%%[[:cntrl:]]}"

# Install zip to Git-Bash on Windows

# Navigate to https://sourceforge.net/projects/gnuwin32/files/zip/3.0/
# Download zip-3.0-bin.zip
# In the zipped file, in the bin folder, find the file zip.exe.
# Extract the file zip.exe to your mingw64 bin folder (for me: C:\Program Files\Git\mingw64\bin)

# Navigate https://sourceforge.net/projects/gnuwin32/files/bzip2/1.0.5/
# Download bzip2-1.0.5-bin.zip
# In the zipped file, in the bin folder, find the file bzip2.dll
# Extract bzip2.dll to your mingw64\bin folder (same folder as above: C:\Program Files\Git\mingw64\bin)

zip -x "*.git/*" -x "*node_modules/*" -x "*build/*" -x "*.zip" -r "$PROJECT_NAME"-backup-$(date +%Y%m%d_%H%M%S).zip .
