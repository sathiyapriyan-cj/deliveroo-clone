import {defineField, defineType} from 'sanity'
import type {Rule} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Title',
      validation: (Rule: Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      type: 'string',
      title: 'Short description',
      validation: (Rule: Rule) => Rule.max(200),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image of the Restaurant',
    }),
    defineField({
      name: 'lat',
      type: 'number',
      title: 'Latitude of the Restaurant',
    }),
    defineField({
      name: 'long',
      type: 'number',
      title: 'Longitude of the Restaurant',
    }),
    defineField({
      name: 'address',
      type: 'string',
      title: 'Restaurant address',
      validation: (Rule: Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      type: 'number',
      title: 'Enter a Rating from (1-5 Stars)',
      validation: (Rule: Rule) =>
        Rule.required().min(1).max(5).error('Please enter a Value between 1 and 5'),
    }),
    defineField({
      name: 'type',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
      validation: (Rule: Rule) => Rule.required(),
    }),
    defineField({
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    }),
  ],
})
