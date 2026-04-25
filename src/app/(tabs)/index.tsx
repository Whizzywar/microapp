import { Link } from "expo-router";
import { ScrollView, Text } from "react-native";
import HomeHeader from "../component/HomeHeader";
import { globalStyles } from "../styles/global";

export default function HomeScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>MicroApp</Text>
      <HomeHeader />
      <Link href="/AddMealScreen" style={{ fontSize: 18, color: "#007bff" }}>
        Go to Add Meal
      </Link>
    </ScrollView>
  );
}
