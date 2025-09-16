import { Link } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Search from "../assets/svg/search.svg";
import DropdownArrow from "../assets/svg/dropdownarrow.svg";
import ChapterCard from "../components/ChapterCard";
import { router } from "expo-router";
import { chapters } from "../data/chapters";

export default function browse() {
  const BookTitle = "Kitabu cha Mwanzo";
  

  return (
    <SafeAreaView className="flex-1 bg-brand-black">
      <ScrollView>
        <View>
          {/* Header */}
          <View className="flex flex-row justify-between px-6 pt-6">
            <View className="flex flex-row gap-2 bg-card-background min-w-20 justify-center items-center rounded-md min-h-6">
              <Text className="text-white px-4 py-2 font-bold text-lg">
                soma vitabu
              </Text>
            </View>
            <View className="flex-row">
              <Link href={"/browse"}>
                <Search />
              </Link>
            </View>
          </View>

          {/* book title */}
          <View className="flex-row align-center justify-start pl-6">
            <Text className="text-white text-xl pl-4 pt-8 font-bold">
              {BookTitle}
            </Text>
            <View className="pt-8 pl-0">
              <DropdownArrow />
            </View>
          </View>

          {/* chapters */}

          <View className="mt-4 mx-6">
            {chapters.map((item) => (
              <TouchableOpacity key={item.id} onPress={() => router.push(`/${item.id}`)}>
                <ChapterCard
                  key={item.id}
                  chapter={item.chapter}
                  description={item.description}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
