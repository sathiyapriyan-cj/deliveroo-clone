/* eslint-disable import/order */
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityClient } from '@sanity/client';
import type { Image } from '@sanity/image-url/lib/types/types';

// Create the client
const client: SanityClient = createClient({
  projectId: 'fvjno3bm', // Replace with your actual project ID
  dataset: 'production',
  useCdn: true,
  apiVersion: '2025-04-21',
});

// Create image URL builder
const builder = imageUrlBuilder(client);

// Helper to get image URL
export const urlFor = (source: Image) => builder.image(source);

// Export client as default
export default client;
