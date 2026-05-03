import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import CopyButton from "../component/CopyButton";
import HomeHeader from "../component/HomeHeader";
import MacroGrid from "../component/MacroGrid";
import RecentMeals from "../component/RecentMeals";
import ShareButton from "../component/ShareButton";
import { getMeals, Meal } from "../storage/meals";
import { globalStyles } from "../styles/global";
import ReminderToggle from "../component/ReminderToggle";

export default function HomeScreen() {
  const [meals, setMeals] = useState<Meal[]>([]);

  const loadMeals = async () => {
    const data = await getMeals();
    setMeals(data);
    console.log("Loaded meals:", data);
  };

  useFocusEffect(
    useCallback(() => {
      loadMeals();
    }, []),
  );

  return (
    <ScrollView style={globalStyles.container}>
      <View style={globalStyles.header}>
        <Text style={globalStyles.title}>MicroApp</Text>
        <ShareButton meals={meals} />
      </View>
      <HomeHeader />
      <MacroGrid meals={meals} />
      <CopyButton meals={meals} />
      <ReminderToggle />
      <RecentMeals meals={meals} onDelete={loadMeals} />
    </ScrollView>
  );
}
