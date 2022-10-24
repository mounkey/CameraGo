import { NavigationContainer } from "@react-navigation/native";
import PhotoNavigator from "./photos";
import React from "react";

export default () => {
  return (
    <NavigationContainer>
      <PhotoNavigator />
    </NavigationContainer>
  );
};