import { useState, useEffect } from "react";
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync,
} from "expo-location";

const useLocation = (shouldTrack, callback) => {
  const [err, setErr] = useState(null);
  const [subscriber, setSubscriber] = useState(null);

  // Toggle watching location
  useEffect(() => {
    if (shouldTrack) {
      startWatching();
    } else {
      subscriber.remove(); // Stop existing sub
      setSubscriber(null);
    }
  }, [shouldTrack]);

  const startWatching = async () => {
    try {
      // Ask for user permission to track location
      const { granted } = await requestPermissionsAsync();
      if (!granted) {
        throw new Error("Location permission not granted.");
      }

      // Start recording location
      const sub = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        callback
      );

      // Sub is a different value each location update
      setSubscriber(sub);
    } catch (error) {
      setErr(error);
    }
  };

  return [err];
};

export default useLocation;
