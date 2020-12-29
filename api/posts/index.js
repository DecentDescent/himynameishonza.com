import fetch from "isomorphic-fetch";

export function getPosts() {
  return fetch(
    `https://bm7iwd96.api.sanity.io/v1/data/query/production?query=*[_type%20in%20["film","knihy","povidky","blog"]]|%20order(publishedAt desc)`
  );
}

export function getPost(slug) {
  return fetch(
    `https://bm7iwd96.api.sanity.io/v1/data/query/production?query=*[slug.current=="${slug}"]`
  );
}

export function getPostsInCategory(category) {
  return fetch(
    `https://bm7iwd96.api.sanity.io/v1/data/query/production?query=*[_type%20==%20"${category}"]|%20order(publishedAt desc)`
  );
}
