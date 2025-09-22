import { useEffect, useState } from 'react';

interface UseImagePreloaderResult {
  imagesLoaded: boolean;
  progress: number;
}

export const useImagePreloader = (imageUrls: string[]): UseImagePreloaderResult => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (imageUrls.length === 0) {
      setImagesLoaded(true);
      setProgress(100);
      return;
    }

    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    const updateProgress = () => {
      const currentProgress = (loadedCount / imageUrls.length) * 100;
      setProgress(currentProgress);
      
      if (loadedCount === imageUrls.length) {
        setImagesLoaded(true);
      }
    };

    imageUrls.forEach((url, index) => {
      const img = new Image();
      images[index] = img;
      
      img.onload = () => {
        loadedCount++;
        updateProgress();
      };
      
      img.onerror = () => {
        // Still count as "loaded" to prevent hanging
        loadedCount++;
        updateProgress();
      };
      
      // Start loading
      img.src = url;
    });

    return () => {
      // Cleanup
      images.forEach(img => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [imageUrls]);

  return { imagesLoaded, progress };
};