import { View, Text, ScrollView } from 'react-native';
import CategoryCard from './CategoryCard';
import { useEffect, useState } from 'react';
import { urlFor } from './../lib/sanity'; // Import urlFor if not done already
import sanityClient from './../lib/sanity';

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
          *[_type == "category"]
        `
      )
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {/* Category Card */}
      {categories.map((category) => (
        <CategoryCard
          key={category._id}
          imgUrl={urlFor(category.image).width(200).url()} // Make sure urlFor is imported
          title={category.name}
        />
      ))}
    </ScrollView>
  );
}
