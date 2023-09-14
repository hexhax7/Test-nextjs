import React, { useEffect, useState } from 'react';

export default function GalleryComponent() {
  const [enlargedImage, setEnlargedImage] = useState(null);

  useEffect(() => {
    // Function to toggle the image size and position
    function toggleSizeAndPosition(event) {
      const gallery = event.currentTarget;

      if (!gallery) return;

      if (gallery !== enlargedImage) {
        // Close the previously enlarged image (if any)
        closeEnlargedImage();

        // Calculate the aspect ratio of the image
        const aspectRatio = gallery.offsetWidth / gallery.offsetHeight;

        // Define different scale factors for landscape and portrait images
        let scaleFactor = 1.2; // Default scale factor
        if (aspectRatio > 1) {
          // Landscape image
          scaleFactor = 1.5; // Adjust the scale factor for landscape images
        }

        // Apply the scale factor and center the image
        gallery.style.transform = `scale(${scaleFactor})`;
        gallery.style.position = 'fixed';
        gallery.style.top = '50%';
        gallery.style.left = '50%';
        gallery.style.transformOrigin = 'center center';
        gallery.style.transition = 'transform 0.3s ease-in-out';
        gallery.style.zIndex = '1000';
        gallery.style.marginLeft = `-${gallery.offsetWidth / 2}px`;
        gallery.style.marginTop = `-${gallery.offsetHeight / 2}px`;

        // Create a blurred background
        const blurredBackground = document.createElement('div');
        blurredBackground.className = 'blurred-background'; // Add a class for easy removal
        blurredBackground.style.position = 'fixed';
        blurredBackground.style.top = '0';
        blurredBackground.style.left = '0';
        blurredBackground.style.width = '100%';
        blurredBackground.style.height = '100%';
        blurredBackground.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
        blurredBackground.style.zIndex = '999';
        blurredBackground.addEventListener('click', closeEnlargedImage);

        document.body.appendChild(blurredBackground);

        // Set the currently enlarged image
        setEnlargedImage(gallery);
      } else {
        // Close the clicked image if it's the already opened one
        closeEnlargedImage();
      }
    }

    // Function to close the enlarged image
    function closeEnlargedImage() {
      if (enlargedImage) {
        enlargedImage.style.transform = 'none';
        enlargedImage.style.position = 'static';
        enlargedImage.style.transition = 'none';
        enlargedImage.style.zIndex = 'auto';
        enlargedImage.style.marginLeft = '2%';
        enlargedImage.style.marginTop = '5%';

        // Remove the blurred background
        const blurredBackground = document.querySelector('.blurred-background');
        if (blurredBackground) {
          blurredBackground.remove();
        }

        // Clear the currently enlarged image
        setEnlargedImage(null);
      }
    }

    // Try to find all elements with the class "Gallery_FlexBox_image"
    const galleries = document.querySelectorAll('.Gallery_FlexBox_image');

    // Loop through each element and add the click event listener
    galleries.forEach((gallery) => {
      if (gallery) {
        gallery.addEventListener('click', toggleSizeAndPosition);
      }
    });

    // Add a click event listener to the document to close the image
    const closeOnClickOutside = (event) => {
      // Check if the click event occurred outside the enlarged image
      if (enlargedImage && !enlargedImage.contains(event.target)) {
        closeEnlargedImage();
      }
    };

    document.addEventListener('click', closeOnClickOutside);

    // Don't forget to remove the event listener when the component unmounts
    return () => {
      galleries.forEach((gallery) => {
        if (gallery) {
          gallery.removeEventListener('click', toggleSizeAndPosition);
        }
      });

      // Remove the click event listener from the document
      document.removeEventListener('click', closeOnClickOutside);
    };
  }, [enlargedImage]);

  return (
    <div>
      {/* Your component JSX */}
    </div>
  );
}
