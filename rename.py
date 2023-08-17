import os

# Path to the folder containing the image files
image_folder_path = "D:\LoftmakerLondon\Current-project-images"

# Image file extension (adjust if needed)
image_extension = ".jpg"

# Template for the HTML image block
image_block_template = """
<div class="embla__slide">
    <div class="embla__slide__number"><span>{number}</span></div>
    <Image classname="embla__slide__img" loading='lazy' src={"/Current-project-images/" + str({number}) + ".jpg"} blurDataURL="data:..." automatically provided placeholder="blur" width={100} alt="finished loft exterior" 
        style={{objectFit: "cover"}}
    />
</div>
"""

# Get the list of image files in the folder
image_files = [f for f in os.listdir(image_folder_path) if f.endswith(image_extension)]

# Generate the HTML blocks
html_blocks = []
for index, image_file in enumerate(image_files, start=1):
    html_block = image_block_template.format(number=index)
    html_blocks.append(html_block)

# Combine the HTML blocks
final_html = "\n".join(html_blocks)

print(final_html)
