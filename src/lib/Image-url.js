import imageUrlBuilder from '@sanity/image-url';
import client from './Client';

const builder = imageUrlBuilder(client);

export function urlFor(source) {
	return builder.image(source);
}
