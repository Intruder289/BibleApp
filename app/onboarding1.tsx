import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import ArrowRight from '../assets/svg/arrowright.svg'
import { useNavigation, Link } from "expo-router";

const onboarding1 = () => {
  const navigate = useNavigation();
  return (
    <LinearGradient
      colors={["#BB86FC", "#1E1E1E"]}
      locations={[0, 0.4]}
      className="flex-1"
    >
      <SafeAreaView className="flex-1 items-center justify-center">
        <Text className="text-white text-6xl px-4 font-bold">
          Karibu kwenye Biblia App
        </Text>
        <Text className=" text-white text-2xl px-4 pt-8 font-bold">
          Soma Neno la Mungu kwa Kiswahili, popote ulipo.
        </Text>
        
          <Link href="/onboarding2" className="w-16 h-16 rounded-full bg-blue-500 items-center justify-center absolute bottom-14 right-10" >
          <ArrowRight />
          </Link>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default onboarding1;
