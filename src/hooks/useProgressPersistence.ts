import { useState, useEffect, useCallback } from 'react';
import localforage from 'localforage';

interface ProgressData {
  checkedSections: string[];
  lastUpdated: number;
}

export const useProgressPersistence = (gameTitle: string) => {
  const [checkedSections, setCheckedSections] = useState<Set<string>>(
    new Set(),
  );
  const [isLoading, setIsLoading] = useState(true);

  // Generate a consistent key from the game title
  const getStorageKey = useCallback((title: string) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '_') + '_progress';
  }, []);

  // Load progress from IndexedDB
  const loadProgress = useCallback(async () => {
    try {
      const storageKey = getStorageKey(gameTitle);
      const savedProgress = await localforage.getItem<ProgressData>(storageKey);

      if (savedProgress?.checkedSections) {
        setCheckedSections(new Set(savedProgress.checkedSections));
      }
    } catch (error) {
      console.error('Failed to load progress from IndexedDB:', error);
    } finally {
      setIsLoading(false);
    }
  }, [gameTitle, getStorageKey]);

  // Save progress to IndexedDB
  const saveProgress = useCallback(
    async (sections: Set<string>) => {
      try {
        const storageKey = getStorageKey(gameTitle);
        const progressData: ProgressData = {
          checkedSections: Array.from(sections),
          lastUpdated: Date.now(),
        };

        await localforage.setItem(storageKey, progressData);
      } catch (error) {
        console.error('Failed to save progress to IndexedDB:', error);
      }
    },
    [gameTitle, getStorageKey],
  );

  // Toggle section and save to IndexedDB
  const toggleSection = useCallback(
    (sectionId: string) => {
      setCheckedSections((prevChecked) => {
        const newChecked = new Set(prevChecked);
        if (newChecked.has(sectionId)) {
          newChecked.delete(sectionId);
        } else {
          newChecked.add(sectionId);
        }

        // Save to IndexedDB asynchronously
        saveProgress(newChecked);

        return newChecked;
      });
    },
    [saveProgress],
  );

  // Clear all progress
  const clearProgress = useCallback(async () => {
    try {
      const storageKey = getStorageKey(gameTitle);
      await localforage.removeItem(storageKey);
      setCheckedSections(new Set());
    } catch (error) {
      console.error('Failed to clear progress from IndexedDB:', error);
    }
  }, [gameTitle, getStorageKey]);

  // Download progress as JSON
  const downloadProgress = useCallback(() => {
    try {
      const progressData: ProgressData = {
        checkedSections: Array.from(checkedSections),
        lastUpdated: Date.now(),
      };

      const dataStr = JSON.stringify(progressData, null, 2);
      const dataBlob = new Blob([dataStr], { type: 'application/json' });

      const url = URL.createObjectURL(dataBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${getStorageKey(gameTitle)}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Failed to download progress:', error);
    }
  }, [checkedSections, gameTitle, getStorageKey]);

  // Upload progress from JSON file
  const uploadProgress = useCallback(
    async (file: File) => {
      try {
        const text = await file.text();
        const progressData: ProgressData = JSON.parse(text);

        if (
          progressData.checkedSections &&
          Array.isArray(progressData.checkedSections)
        ) {
          const newCheckedSections = new Set(progressData.checkedSections);
          setCheckedSections(newCheckedSections);
          await saveProgress(newCheckedSections);
          return true;
        } else {
          throw new Error('Invalid progress file format');
        }
      } catch (error) {
        console.error('Failed to upload progress:', error);
        return false;
      }
    },
    [saveProgress],
  );

  // Load progress on mount
  useEffect(() => {
    loadProgress();
  }, [loadProgress]);

  return {
    checkedSections,
    toggleSection,
    clearProgress,
    downloadProgress,
    uploadProgress,
    isLoading,
  };
};
