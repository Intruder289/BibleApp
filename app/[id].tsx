import { Link, router, useLocalSearchParams } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Share from "../assets/svg/share.svg";
import { chapters } from "../data/chapters";
import genesisData from "../data/genesis.json";
import Home from "../assets/svg/home.svg";

interface Chapter {
  id: string;
  chapter: string;
  description: string;
}

interface Verse {
  [verseNumber: string]: string;
}

interface ChapterData {
  title: string;
  verses: Verse;
}

interface GenesisData {
  Genesis: {
    [chapterNumber: string]: ChapterData;
  };
}

export default function ChapterDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const genesis = genesisData as GenesisData;
  const chapterData = id ? genesis.Genesis[id] : null;
  const chapterInfo = chapters[Number(id) - 1];

  if (!chapterData || !chapterInfo) {
    return (
      <SafeAreaView className="flex-1 bg-brand-black items-center justify-center">
        <Text className="text-white text-xl">Chapter not found</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-brand-black">
      <ScrollView>
        <View>
          {/* Header */}
          <View className="flex flex-row justify-between px-6 pt-6">
            <View className="flex-row">
              <View className="flex flex-row gap-2 bg-card-background min-w-20 justify-center items-center rounded-l-md min-h-6">
                <Link href={`/browse`} className="px-2">
                  <Text className="text-white py-2 font-bold text-lg">
                    {chapterInfo.chapter}
                  </Text>
                </Link>
              </View>
              <View className="flex flex-row bg-card-background min-w-20 justify-center rounded-r-md items-center ml-2 min-h-6">
                <Link href={`/`}>
                  <Home
                    stroke="white"
                    strokeWidth={2}
                    width={15}
                    height={15} />
                </Link>
              </View>
            </View>
            <View className="flex-row">
              <Link href={`/${id}`}>
                <Share />
              </Link>
            </View>
          </View>

          {/* Chapter Content */}
          <View className="mt-8 mx-6">
            <Text className="text-white text-4xl font-bold py-2">
              {chapterData.title}
            </Text>
            {Object.entries(chapterData.verses).map(([verseNumber, verseText]) => (
              <Text
                key={verseNumber}
                className="text-secondary-text text-2xl text-justify mb-4"
              >
                <Text className="text-white text-sm"> {verseNumber}</Text> {verseText}
              </Text>
            ))}
          </View>

          {/* Actions */}
          <View className="flex flex-row justify-between px-10 pt-6 mb-6">
            <TouchableOpacity
              onPress={() => {
                if (Number(id) > 1) {
                  router.push(`/${Number(id) - 1}`);
                }
              }}
              className="bg-card-background rounded-md px-4 py-2">
              <Text className="text-white text-lg font-bold">{"< "}Sura iliopita </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (Number(id) < chapters.length) {
                  router.push(`/${Number(id) + 1}`);
                }
              }}
              className="bg-card-background rounded-md px-4 py-2">
              <Text className="text-white text-lg font-bold">sura inayofata{" >"}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
