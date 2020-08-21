import { useState, useEffect } from "react";
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync,
} from "expo-location";

const useLocation = (shouldTrack, callback) => {
  const [err, setErr] = useState(null);

  // Toggle watching location
  useEffect(() => {
    let subscriber;
    const startWatching = async () => {
      try {
        // Ask for user permission to track location
        const { granted } = await requestPermissionsAsync();
        if (!granted) {
          throw new Error("Location permission not granted.");
        }

        // Start recording location
        subscriber = await watchPositionAsync(
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

    if (shouldTrack) {
      startWatching();
    } else {
      if (subscriber) {
        subscriber.remove(); // Stop existing sub
      }
      subscriber = null;
    }

    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };
  }, [shouldTrack, callback]);

  return [err];
};

export default useLocation;
