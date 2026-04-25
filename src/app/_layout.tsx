import { Stack } from "expo-router";
import { colors } from "./styles/global";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: colors.header },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="index"
        options={{ headerShown: false, title: "Home" }}
      />
      <Stack.Screen options={{ title: "Meals" }} name="meals" />
      <Stack.Screen options={{ title: "Add Meal" }} name="AddMealScreen" />
    </Stack>
  );
}
