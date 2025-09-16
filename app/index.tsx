import { Link } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import Streak from "../assets/svg/streak.svg";
import Share from "../assets/svg/share.svg";
import Download from "../assets/svg/download.svg";
import Copy from "../assets/svg/copy.svg";
import Card from "../components/Card";
import LongArrow from "../assets/svg/longarrow.svg";
import { getRandomVerse } from "../utils/verseUtils";

interface Verse {
  text: string;
  reference: string;
}

export default function Index() {
  const [randomVerse, setRandomVerse] = useState<Verse | null>(null);

  useEffect(() => {
    // Get a random verse when the component mounts
    setRandomVerse(getRandomVerse());
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-brand-black">
      <ScrollView>
        <View>
          {/* Header */}
          <View className="flex flex-row justify-between px-6 pt-6">
            <View className="flex flex-row gap-2 bg-card-background min-w-20 justify-center items-center rounded-md min-h-6">
              <Text className="text-white px-4 py-2 font-bold text-lg">
                Neno la leo
              </Text>
            </View>
            <View className="flex-row">
              <Streak />
              <Text className=" px-4 py-2 font-bold text-lg text-gold-accent">
                2
              </Text>
            </View>
          </View>

          {/* card */}
          <View className="mt-8 mx-6">
            {randomVerse && (
              <Card
                title={randomVerse.reference}
                content={randomVerse.text}
              />
            )}
          </View>

          {/*actions*/}
          <View className="flex flex-row justify-between px-10 pt-6">
            <View className=" flex-col  align-center ">
              <Copy />
              <Text className=" text-white text-l pt-0 ">
                copy
              </Text>
            </View>
            <View className="flex-col align-center ">
              <Download width={40} height={40} />
              <Text className=" text-white text-l  pt-0 ">
                download 
              </Text>
            </View>
            <View className="flex-col justify-start align-center ">
              <Share />
              <Text className=" text-white text-l  pt-0 ">
                share
              </Text>
            </View>
          </View>

          {/* footer */}
          <View className="flex flex-col justify-center align-center px-10 pt-6">
            <Text className=" text-white text-4xl  pt-2 pb-4 font-bold">want a perticular one 
            read a specific verse from the book </Text>
            <LongArrow/>
            <Link href="/browse" className="text-white ml-28 mt-8 bg-gold-accent px-4 py-2 rounded-2xl h-12 text-center w-2/3 text-2xl font-bold">explore book</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
