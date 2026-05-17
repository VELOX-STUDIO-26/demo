export const blogPostsQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  featured,
  publishedAt,
  readTime,
  "category": category->{
    title,
    "slug": slug.current
  },
  "author": author->{
    name,
    image,
    title
  },
  image,
  heroImage
}`;

export const blogPostBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  featured,
  publishedAt,
  readTime,
  lead,
  body,
  "category": category->{
    title,
    "slug": slug.current
  },
  "author": author->{
    name,
    image,
    title
  },
  "tags": tags[]->{
    title,
    "slug": slug.current
  },
  image,
  heroImage
}`;

export const relatedPostsQuery = `*[_type == "post" && slug.current != $slug] | order(publishedAt desc)[0..2] {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  readTime,
  "category": category->{
    title,
    "slug": slug.current
  }
}`;

export const blogPostSlugsQuery = `*[_type == "post" && defined(slug.current)][]{
  "slug": slug.current
}`;
