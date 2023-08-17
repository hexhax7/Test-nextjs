import os

def rename_files(folder_path):
    # Get a list of all files in the folder
    file_list = os.listdir(folder_path)
    
    # Iterate through the list and rename each file
    for index, filename in enumerate(file_list, start=1):
        file_extension = os.path.splitext(filename)[1]  # Get the file extension
        new_filename = str(index) + file_extension  # Construct the new filename
        new_filepath = os.path.join(folder_path, new_filename)  # Construct the new filepath
        
        # Rename the file
        old_filepath = os.path.join(folder_path, filename)
        os.rename(old_filepath, new_filepath)
        print(f"Renamed {filename} to {new_filename}")

if __name__ == "__main__":
    folder_path = input("Enter the folder path: ")
    
    if os.path.isdir(folder_path):
        rename_files(folder_path)
        print("File renaming completed.")
    else:
        print("Invalid folder path.")
