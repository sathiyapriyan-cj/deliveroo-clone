import { useNavigation } from '@react-navigation/native';
import Categories from 'components/Categories';
import FeaturedRow from 'components/FeaturedRow';
import * as React from 'react';
import { SafeAreaView, View, Text, Image, TextInput, ScrollView, Platform } from 'react-native';
import {
  ChevronDownIcon,
  UserIcon,
  AdjustmentsVerticalIcon,
  ArrowRightIcon,
} from 'react-native-heroicons/outline';

export function HomeScreen() {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView className="flex-1 bg-white pt-5">
      {/* Header */}
      <View className="mx-4 flex-row items-center space-x-2 pb-3">
        <Image
          source={{ uri: 'https://links.papareact.com/wru' }}
          className="h-7 w-7 rounded-full bg-gray-300"
          resizeMode="cover"
        />
        <View className="flex-1">
          <Text className="text-xs font-bold text-gray-400">Deliver Now!</Text>
          <View className="flex-row items-center space-x-1">
            <Text className="text-xl font-bold">Current Location</Text>
            <ChevronDownIcon size={20} color="#00ccbb" />
          </View>
        </View>
        <UserIcon size={35} color="#00ccbb" />
      </View>

      {/* Search Bar */}
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-1 flex-row items-center space-x-2 rounded-lg bg-gray-100 p-3">
          <ArrowRightIcon color="gray" size={20} />
          <TextInput
            placeholder="Search for services or categories..."
            keyboardType="default"
            className="flex-1 pl-2"
            placeholderTextColor="gray"
            style={{ paddingVertical: Platform.OS === 'web' ? 10 : 0 }}
          />
        </View>
        <AdjustmentsVerticalIcon color="#00ccbb" />
      </View>

      {/* Scroll View */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}>
        {/* Categories */}
        <Categories />

        {/* Feature row  */}
        {/* Featured */}
        <FeaturedRow id="123" title="Featured" description="Paid placements from our partners" />

        {/* Tasty Discounts */}
        <FeaturedRow
          id="1234"
          title="Tasty Discounts"
          description="Everyone's been enjoying these juicy discounts!"
        />

        {/* Offers near you */}
        <FeaturedRow
          id="1235"
          title="Offers near you!"
          description="Why not support your local restaurant tonight!"
        />
      </ScrollView>
    </SafeAreaView>
  );
}
