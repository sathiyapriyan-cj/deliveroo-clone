import { View, Text, TouchableOpacity, Image } from 'react-native';

export default function CategoryCard({ imgUrl, title }) {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image source={{ uri: imgUrl }} className="h-20 w-20" />
      <Text className="absolute bottom-1 left-1 font-bold text-white">{title}</Text>
    </TouchableOpacity>
  );
}
