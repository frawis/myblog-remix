// Image asset fragment
const imageAsset = `
  _id,
  _type,
  altText,
  description,
  metadata {
    blurHash
  }
`

// Image fragment
const image = `
crop,
hotspot,
asset->{${imageAsset}}`

// Hero block fragment
const heroBlock = `
_key,
_type,
title,
subtitle,
slogans,
image { ${image} },
`

// Text with image block fragment
const textWithImageBlock = `
_key,
_type,
layout,
title,
subtitle,
image { ${image} },
excerpt,
`

export const postsQuery = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc)`
export const postQuery = `*[_type == "post" && slug.current == $slug][0]{
  "createdAt": coalesce(createdAt, _createdAt),
  "publishedAt": coalesce(publishedAt, _updatedAt),
  "slug": slug.current,
  "categories": categories[]->{
    title,
  },
  "author": author->{
    name,
    "image": image
  },
  title,
  summary,
  "mainImage": mainImage{
    ${image}
  },
  "body": body[]{
    ...,
  },
  "tableOfContents": body[style in ["h2", "h3"]],
}`

export const homeQuery = `*[_type == "home" && _id == "home"][0]{
  ...,
  "pageSections": pageSections{
    sections[]{
      // hero
      _type == "hero" => {
        ${heroBlock}
      },
      // text with image
      _type == "textWithImage" => {
        ${textWithImageBlock}
      },
    }
  }
}`

export const pageQuery = `*[_type == "page" && slug.current == $slug][0]{
  "createdAt": coalesce(createdAt, _createdAt),
  "publishedAt": coalesce(publishedAt, _updatedAt),
  "slug": slug.current,
  _type,
  title,
  body[]{
    ...,
  },
}`
