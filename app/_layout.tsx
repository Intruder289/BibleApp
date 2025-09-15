import { Stack } from "expo-router";
import "../global.css"

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="index" options={{ headerShown: false }} />
    <Stack.Screen name="browse" options={{ headerShown: false }} />
    <Stack.Screen name="details" options={{ headerShown: false }} />
    <Stack.Screen name="onboarding1" options={{ headerShown: false }} />
    <Stack.Screen name="onboarding2" options={{ headerShown: false }} />
    <Stack.Screen name="onboarding3" options={{ headerShown: false }} />
  </Stack>;
}
