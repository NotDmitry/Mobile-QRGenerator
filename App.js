import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScan from "./components/screens/HomeScan";
import GenerateCode from "./components/screens/GenerateCode";

const Stack = createNativeStackNavigator();

export default function App() {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeScan">

                <Stack.Screen
                    name="HomeScan"
                    component={HomeScan}
                    options={{
                        title: "Scan",
                        headerStyle: {
                            backgroundColor: "#d929ef"
                        },
                        headerTitleAlign: "center",
                        headerTintColor: "#fff",
                        headerTitleStyle: {
                            fontWeight: "500",
                            fontSize: 24,
                        },
                    }}
                />

                <Stack.Screen
                    name="GenerateCode"
                    component={GenerateCode}
                    options={{
                        title: "Generate",
                        headerStyle: {
                            backgroundColor: "#d929ef"
                        },
                        headerTitleAlign: "center",
                        headerTintColor: "#fff",
                        headerTitleStyle: {
                            fontWeight: "500",
                            fontSize: 24,
                        },
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );

}