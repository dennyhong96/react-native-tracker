import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider, useSelector, useDispatch } from "react-redux";

import { localSignin } from "./src/redux/actions/auth";
import store from "./src/redux/store";
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";

const AuthStack = createStackNavigator();
const AuthFlow = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Signup" component={SignupScreen} />
    <AuthStack.Screen name="Signin" component={SigninScreen} />
  </AuthStack.Navigator>
);

const TrackStack = createStackNavigator();
const TrackFlow = () => (
  <TrackStack.Navigator>
    <TrackStack.Screen name="TrackList" component={TrackListScreen} />
    <TrackStack.Screen name="TrackDetail" component={TrackDetailScreen} />
  </TrackStack.Navigator>
);

const Tab = createBottomTabNavigator();
const MainFlow = () => (
  <Tab.Navigator>
    <Tab.Screen name="TrackStack" component={TrackFlow} />
    <Tab.Screen name="TrackCreate" component={TrackCreateScreen} />
    <Tab.Screen name="Account" component={AccountScreen} />
  </Tab.Navigator>
);

const App = () => {
  const auth = useSelector(({ auth }) => auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(localSignin());
  }, []);

  return (
    <NavigationContainer>
      {auth.isAuthenticated ? <MainFlow /> : <AuthFlow />}
    </NavigationContainer>
  );
};

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
