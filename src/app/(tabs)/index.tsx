import { ScrollView, Text } from "react-native";
import HomeHeader from "../component/HomeHeader";
import MacroGrid from "../component/MacroGrid";
import RecentMeals from "../component/RecentMeals";
import { globalStyles } from "../styles/global";

export default function HomeScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>MicroApp</Text>
      <HomeHeader />
      <MacroGrid />
      <RecentMeals />
    </ScrollView>
  );
}
