
import "react-native-reanimated";
import React, { useEffect } from "react";
import { useFonts } from "expo-font";
import { Stack, router } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { SystemBars } from "react-native-edge-to-edge";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useColorScheme, Alert } from "react-native";
import { useNetworkState } from "expo-network";
import {
  DarkTheme,
  DefaultTheme,
  Theme,
  ThemeProvider,
} from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { WidgetProvider } from "@/contexts/WidgetContext";
import { LanguageProvider } from "@/contexts/LanguageContext";

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const networkState = useNetworkState();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  React.useEffect(() => {
    if (
      !networkState.isConnected &&
      networkState.isInternetReachable === false
    ) {
      Alert.alert(
        "🔌 You are offline",
        "You can keep using the app! Your changes will be saved locally and synced when you are back online."
      );
    }
  }, [networkState.isConnected, networkState.isInternetReachable]);

  if (!loaded) {
    return null;
  }

  const CustomDarkTheme: Theme = {
    ...DarkTheme,
    colors: {
      primary: "#BB86FC",
      background: "#121212",
      card: "#1E1E1E",
      text: "#FFFFFF",
      border: "#292929",
      notification: "#FF4081",
    },
  };

  return (
    <>
      <StatusBar style="light" animated />
      <ThemeProvider value={CustomDarkTheme}>
        <LanguageProvider>
          <WidgetProvider>
            <GestureHandlerRootView>
              <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen
                  name="about"
                  options={{
                    presentation: "card",
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="presskit"
                  options={{
                    presentation: "card",
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="collaborate"
                  options={{
                    presentation: "card",
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="fanhub"
                  options={{
                    presentation: "card",
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="news"
                  options={{
                    presentation: "card",
                    headerShown: false,
                  }}
                />
              </Stack>
              <SystemBars style={"light"} />
            </GestureHandlerRootView>
          </WidgetProvider>
        </LanguageProvider>
      </ThemeProvider>
    </>
  );
}
