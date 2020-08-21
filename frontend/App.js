import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider, useSelector } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";

import store from "./src/redux/store";
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import LoadingScreen from "./src/screens/LoadingScreen";

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
    <Tab.Screen
      name="TrackStack"
      component={TrackFlow}
      options={() => ({
        title: "Tracks",
        tabBarIcon: () => (
          <FontAwesome name="th-list" size={24} color="black" />
        ),
      })}
    />
    <Tab.Screen
      name="TrackCreate"
      component={TrackCreateScreen}
      options={() => ({
        title: "Add Track",
        tabBarIcon: () => <FontAwesome name="plus" size={24} color="black" />,
      })}
    />
    <Tab.Screen
      name="Account"
      component={AccountScreen}
      options={() => ({
        title: "Acount",
        tabBarIcon: () => <FontAwesome name="gear" size={24} color="black" />,
      })}
    />
  </Tab.Navigator>
);

const App = () => {
  const auth = useSelector(({ auth }) => auth);

  return (
    <NavigationContainer>
      {auth.loadingLocalToken ? (
        <LoadingScreen />
      ) : auth.isAuthenticated ? (
        <MainFlow />
      ) : (
        <AuthFlow />
      )}
    </NavigationContainer>
  );
};

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
