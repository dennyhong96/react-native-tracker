import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

/**
 * Listen to screen change and invoke given function before sceen change
 * @param {function} callback - The function to be called while leaving current screen
 */
const useOnRouteChange = (callback) => {
  const navigation = useNavigation();
  useEffect(() => {
    const unsubscribe = navigation.addListener("blur", callback);
    return unsubscribe;
  }, [navigation]);
  return null;
};

export default useOnRouteChange;
