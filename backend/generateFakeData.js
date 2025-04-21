const {createClient} = require('@sanity/client')
const {faker} = require('@faker-js/faker')

// Initialize the Sanity client
const client = createClient({
  projectId: 'fvjno3bm', // Replace with your Sanity project ID
  dataset: 'production', // Your dataset name (usually 'production')
  useCdn: false, // Set to 'false' to write data to Sanity
  apiVersion: '2025-04-21', // API version
})

// Generate fake data for Restaurants
const generateRestaurants = () => {
  const restaurants = []
  for (let i = 0; i < 6; i++) {
    const restaurant = {
      _type: 'restaurant',
      name: faker.company.name(),
      short_description: faker.lorem.sentence(),
      address: faker.address.streetAddress(),
      lat: parseFloat(faker.address.latitude()),
      long: parseFloat(faker.address.longitude()),
      rating: faker.datatype.number({min: 1, max: 5}),
      type: {
        _type: 'reference',
        _ref: 'category',
      },
      dishes: [
        {
          _type: 'reference',
          _ref: 'dish',
        },
      ],
    }
    restaurants.push(restaurant)
  }
  return restaurants
}

// Generate fake data for Menu Categories
const generateCategories = () => {
  const categories = []
  for (let i = 0; i < 6; i++) {
    const category = {
      _type: 'category',
      name: faker.commerce.department(),
      image: faker.image.image(), // Use a generic image URL
    }
    categories.push(category)
  }
  return categories
}

// Generate fake data for Dishes
const generateDishes = () => {
  const dishes = []
  for (let i = 0; i < 12; i++) {
    const dish = {
      _type: 'dish',
      name: faker.commerce.productName(),
      short_description: faker.lorem.sentence(),
      price: parseFloat(faker.commerce.price()),
      image: faker.image.food(),
    }
    dishes.push(dish)
  }
  return dishes
}

// Generate fake data for Featured Menu Categories
const generateFeaturedCategories = () => {
  const featuredCategories = []
  for (let i = 0; i < 4; i++) {
    const featuredCategory = {
      _type: 'featured',
      name: faker.commerce.department(),
      short_description: faker.lorem.sentence(),
      restaurants: [
        {
          _type: 'reference',
          _ref: 'restaurant',
        },
      ],
    }
    featuredCategories.push(featuredCategory)
  }
  return featuredCategories
}

// Insert all generated fake data into Sanity
const insertFakeData = async () => {
  try {
    // Generate fake data
    const fakeRestaurants = generateRestaurants()
    const fakeCategories = generateCategories()
    const fakeDishes = generateDishes()
    const fakeFeaturedCategories = generateFeaturedCategories()

    // Insert Categories
    for (let category of fakeCategories) {
      await client.create(category)
      console.log(`Category "${category.name}" inserted.`)
    }

    // Insert Dishes
    for (let dish of fakeDishes) {
      await client.create(dish)
      console.log(`Dish "${dish.name}" inserted.`)
    }

    // Insert Restaurants
    for (let restaurant of fakeRestaurants) {
      await client.create(restaurant)
      console.log(`Restaurant "${restaurant.name}" inserted.`)
    }

    // Insert Featured Categories
    for (let featuredCategory of fakeFeaturedCategories) {
      await client.create(featuredCategory)
      console.log(`Featured Category "${featuredCategory.name}" inserted.`)
    }

    console.log('Fake data insertion completed successfully!')
  } catch (error) {
    console.error('Error inserting fake data:', error)
  }
}

// Run the function to insert data
insertFakeData()
