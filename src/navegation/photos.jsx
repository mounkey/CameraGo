import {ListPhoto, NewPhoto, ViewPhoto} from "../screeens";
import {Platform, TouchableOpacity} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import colors  from "../constants/color";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const PhotoNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="ListPhoto"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="ListPhoto"
        component={ListPhoto}
        options={({ navigation }) => ({
          title: "Lista de Fotos",
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("NewPhoto")}
              style={{ marginRight: 10 }}
            >
              <Ionicons name= {Platform.OS === "android" ? "md-add" :"ios-add" } size={30} color={colors.white} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="NewPhoto"
        component={NewPhoto}
        options={{
          title: "Nueva Foto",
        }}
      />
      <Stack.Screen
        name="ViewPhoto"
        component={ViewPhoto}
        options={{
          title: "Visualizar Foto",
        }}
      />
    </Stack.Navigator>
  );
};

export default PhotoNavigator;