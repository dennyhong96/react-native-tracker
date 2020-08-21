import { useState, useEffect } from "react";
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync,
} from "expo-location";

const useLocation = (callback) => {
  const [err, setErr] = useState(null);

  useEffect(() => {
    startWatching();
  }, []);

  const startWatching = async () => {
    try {
      // Ask for user permission to track location
      const { granted } = await requestPermissionsAsync();
      if (!granted) {
        throw new Error("Location permission not granted.");
      }

      // Start recording location
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        callback
      );
    } catch (error) {
      setErr(error);
    }
  };

  return [err];
};

export default useLocation;
