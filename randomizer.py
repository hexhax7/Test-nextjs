import random

# List of image URLs
image_urls = [
    
          """<Image  className="Gallery_FlexBox_image"  loading="lazy" src="/Gallery/Bathrooms/51.jpg" width="596" height="795" blurDataURL="data:..." placeholder="blur" alt="Loft and Extension Specialist Muswell Hill " />""",
          """<Image  className="Gallery_FlexBox_image" loading="lazy" src="/Gallery/Bathrooms/55.jpg" width="596" height="795" blurDataURL="data:..." placeholder="blur" alt="Loft and Extension Specialist Muswell Hill " />""",
          """<Image className="Gallery_FlexBox_image" loading="lazy" src="/Gallery/Bathrooms/Bathroom Renovation Enfield.jpg" width="596" height="795" blurDataURL="data:..." placeholder="blur" alt="Loft and Extension Specialist Muswell Hill " />""",
          """<Image className="Gallery_FlexBox_image" loading="lazy" src="/Gallery/Bathrooms/Bathroom Renovation Muswell Hill.jpg" width="596" height="795" blurDataURL="data:..." placeholder="blur" alt="Loft and Extension Specialist Muswell Hill " />""",
          """<Image className="Gallery_FlexBox_image" loading="lazy" src="/Gallery/Bathrooms/Loft  ensuite Muswell Hill.jpg" width="596" height="795" blurDataURL="data:..." placeholder="blur" alt="Loft and Extension Specialist Muswell Hill " />""",
          """<Image className="Gallery_FlexBox_image" loading="lazy" src="/Gallery/Kitchens/28.jpg" width="596" height="795" blurDataURL="data:..." placeholder="blur" alt="Loft and Extension Specialist Muswell Hill " />""",
          """<Image className="Gallery_FlexBox_image" loading="lazy" src="/Gallery/Kitchens/34.jpg" width="596" height="795" blurDataURL="data:..." placeholder="blur" alt="Loft and Extension Specialist Muswell Hill " />""",
          """<Image className="Gallery_FlexBox_image" loading="lazy" src="/Gallery/Kitchens/46.jpg" width="596" height="795" blurDataURL="data:..." placeholder="blur" alt="Loft and Extension Specialist Muswell Hill " />""",
          """<Image className="Gallery_FlexBox_image" loading="lazy" src="/Gallery/Kitchens/49.jpeg" width="596" height="795" blurDataURL="data:..." placeholder="blur" alt="Loft and Extension Specialist Muswell Hill " />""",
          """<Image className="Gallery_FlexBox_image" loading="lazy" src="/Gallery/Kitchens/49.jpg" width="596" height="795" blurDataURL="data:..." placeholder="blur" alt="Loft and Extension Specialist Muswell Hill " />""",
          """<Image className="Gallery_FlexBox_image" loading="lazy" src="/Gallery/Kitchens/54.jpg" width="596" height="795" blurDataURL="data:..." placeholder="blur" alt="Loft and Extension Specialist Muswell Hill " />""",
          """<Image className="Gallery_FlexBox_image" loading="lazy" src="/Gallery/Kitchens/58.jpg" width="596" height="795" blurDataURL="data:..." placeholder="blur" alt="Loft and Extension Specialist Muswell Hill " />""",
          """<Image className="Gallery_FlexBox_image" loading="lazy" src="/Gallery/Kitchens/Extension Specialist Clapham.jpg" width="596" height="795" blurDataURL="data:..." placeholder="blur" alt="Loft and Extension Specialist Muswell Hill " />""",
          """<Image className="Gallery_FlexBox_image" loading="lazy" src="/Gallery/Kitchens/Kitchen Extension Clapham.jpg" width="596" height="795" blurDataURL="data:..." placeholder="blur" alt="Loft and Extension Specialist Muswell Hill " />""",
         
          """<Image className="Gallery_FlexBox_image" loading="lazy" src="/Gallery/Kitchens/Kitchen Installation,Chelsea.jpg" width="596" height="795" blurDataURL="data:..." placeholder="blur" alt="Loft and Extension Specialist Muswell Hill " />""",
          """<Image className="Gallery_FlexBox_image" loading="lazy" src="/Gallery/Plastering/37.jpg" width="596" height="795" blurDataURL="data:..." placeholder="blur" alt="Loft and Extension Specialist Muswell Hill " />""",
          """<Image className="Gallery_FlexBox_image" loading="lazy" src="/Gallery/Roofs/39.jpg" width="596" height="795" blurDataURL="data:..." placeholder="blur" alt="Loft and Extension Specialist Muswell Hill " />""",
          """<Image className="Gallery_FlexBox_image" loading="lazy" src="/Gallery/Roofs/40.jpg" width="596" height="795" blurDataURL="data:..." placeholder="blur" alt="Loft and Extension Specialist Muswell Hill " />""",
          """<Image className="Gallery_FlexBox_image" loading="lazy" src="/Gallery/Plastering/53.jpg" width="596" height="795" blurDataURL="data:..." placeholder="blur" alt="Loft and Extension Specialist Muswell Hill " />""",
          """<Image className="Gallery_FlexBox_image" loading="lazy" src="/Gallery/Plastering/Loft Extension Enfield.jpg" width="596" height="795" blurDataURL="data:..." placeholder="blur" alt="Loft and Extension Specialist Muswell Hill " />""",
          """<Image className="Gallery_FlexBox_image" loading="lazy" src="/Gallery/Plastering/Loft Extension Muswell Hill.jpg" width="596" height="795" blurDataURL="data:..." placeholder="blur" alt="Loft and Extension Specialist Muswell Hill " />""",
          """<Image className="Gallery_FlexBox_image" loading="lazy" src="/Gallery/Plastering/Loft Extension North London.jpg" width="596" height="795" blurDataURL="data:..." placeholder="blur" alt="Loft and Extension Specialist Muswell Hill " />""",
          """<Image className="Gallery_FlexBox_image" loading="lazy" src="/Gallery/Plastering/Loft Specialist North London Enfield.jpg" width="596" height="795" blurDataURL="data:..." placeholder="blur" alt="Loft and Extension Specialist Muswell Hill " />""",
          """<Image className="Gallery_FlexBox_image" loading="lazy" src="/Gallery/Plastering/Loft Specialist North London.jpg" width="596" height="795" blurDataURL="data:..." placeholder="blur" alt="Loft and Extension Specialist Muswell Hill " />""",
          """<Image className="Gallery_FlexBox_image" loading="lazy" src="/Gallery/Plastering/North London Loft Specailist Muswell Hill.jpg" width="596" height="795" blurDataURL="data:..." placeholder="blur" alt="Loft and Extension Specialist Muswell Hill " />""",
          """<Image className="Gallery_FlexBox_image" loading="lazy" src="/Gallery/Plastering/Stair Installation North London.jpg" width="596" height="795" blurDataURL="data:..." placeholder="blur" alt="Loft and Extension Specialist Muswell Hill " />""",
          """<Image className="Gallery_FlexBox_image" loading="lazy" src="/Gallery/Roofs/31.jpg" width="596" height="795" blurDataURL="data:..." placeholder="blur" alt="Loft and Extension Specialist Muswell Hill " />""",
          """<Image className="Gallery_FlexBox_image" loading="lazy" src="/Gallery/Roofs/33.jpg" width="596" height="795" blurDataURL="data:..." placeholder="blur" alt="Loft and Extension Specialist Muswell Hill " />""",
         
          """<Image className="Gallery_FlexBox_image" loading="lazy" src="/Gallery/Roofs/35.jpg" width="596" height="795" blurDataURL="data:..." placeholder="blur" alt="Loft and Extension Specialist Muswell Hill " />""",
          """<Image className="Gallery_FlexBox_image" loading="lazy" src="/Gallery/Roofs/38.jpg" width="596" height="795" blurDataURL="data:..." placeholder="blur" alt="Loft and Extension Specialist Muswell Hill " />""",
          """<Image className="Gallery_FlexBox_image" loading="lazy" src="/Gallery/Plastering/43.jpg" width="596" height="795" blurDataURL="data:..." placeholder="blur" alt="Loft and Extension Specialist Muswell Hill " />""",
          """<Image className="Gallery_FlexBox_image" loading="lazy" src="/Gallery/Plastering/52.jpg" width="596" height="795" blurDataURL="data:..." placeholder="blur" alt="Loft and Extension Specialist Muswell Hill " />""",
          """<Image className="Gallery_FlexBox_image" loading="lazy" src="/Gallery/Roofs/41.jpg" width="596" height="795" blurDataURL="data:..." placeholder="blur" alt="Loft and Extension Specialist Muswell Hill " />""",
          """<Image className="Gallery_FlexBox_image" loading="lazy" src="/Gallery/Roofs/42.jpg" width="596" height="795" blurDataURL="data:..." placeholder="blur" alt="Loft and Extension Specialist Muswell Hill " />""",
          """<Image className="Gallery_FlexBox_image" loading="lazy" src="/Gallery/Roofs/56.jpg" width="596" height="795" blurDataURL="data:..." placeholder="blur" alt="Loft and Extension Specialist Muswell Hill " />""",
          """<Image className="Gallery_FlexBox_image" loading="lazy" src="/Gallery/Roofs/Enfield Loft Specailist.jpg" width="596" height="795" blurDataURL="data:..." placeholder="blur" alt="Loft and Extension Specialist Muswell Hill " />""",
          """<Image className="Gallery_FlexBox_image" loading="lazy" src="/Gallery/Roofs/Enfiled Fibre Glass Roof.jpg" width="596" height="795" blurDataURL="data:..." placeholder="blur" alt="Loft and Extension Specialist Muswell Hill " />""",
          """<Image className="Gallery_FlexBox_image" loading="lazy" src="/Gallery/Roofs/London Extension Muswell Hill.jpg" width="596" height="795" blurDataURL="data:..." placeholder="blur" alt="Loft and Extension Specialist Muswell Hill " />""",
          """<Image className="Gallery_FlexBox_image" loading="lazy" src="/Gallery/Roofs/London Fibreglass Roof GRP .jpg" width="596" height="795" blurDataURL="data:..." placeholder="blur" alt="Loft and Extension Specialist Muswell Hill " />""",
          """<Image className="Gallery_FlexBox_image" loading="lazy" src="/Gallery/Roofs/London Loft Extension Enfield.jpg" width="596" height="795" blurDataURL="data:..." placeholder="blur" alt="Loft and Extension Specialist Muswell Hill " />""",
          """<Image className="Gallery_FlexBox_image" loading="lazy" src="/Gallery/Roofs/North London Loft Extension.jpg" width="596" height="795" blurDataURL="data:..." placeholder="blur" alt="Loft and Extension Specialist Muswell Hill " />"""
]

# Shuffle the list of image URLs
random.shuffle(image_urls)

# Print the shuffled list of image URLs
for url in image_urls:
    print(url)
