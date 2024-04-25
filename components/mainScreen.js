import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import CameraScreen from "./cameraScreen";
import ImageClassifier from "./objectDetectionScreen";
import { auth } from "../firebase";

const Tab = createBottomTabNavigator();

const MainScreen = () => {
  const navigation = useNavigation();

  const HandleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: "SignIn" }],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;

          if (route.name === "Capture") {
            iconName = "camera";
          } else if (route.name === "Classifier") {
            iconName = "aperture";
          } else if (route.name === "SignOut") {
            iconName = "log-out";
          }
          // Define colors based on focused state
          const iconColor = focused ? "#1D4C85" : "#CCCCCC";
          return <Feather name={iconName} size={size} color={iconColor} />;
        },
      })} >
      <Tab.Screen name="Capture" component={CameraScreen} />
      
      <Tab.Screen name="Classifier" component={ImageClassifier} />
    
      <Tab.Screen
        name="SignOut"
        component={() => null}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            HandleSignOut();
          },
        })}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;
