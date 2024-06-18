import { BASE_URL } from "./constants";

export async function getBlogs() {
  const response = await fetch(BASE_URL + "/api/get-blogs");
  const { blogs } = await response.json();
  console.log(blogs.rows);
  return blogs.rows;
}

export async function getProducts(category?: string) {
  let url = "/api/get-products";
  if (category) {
    const params = new URLSearchParams();
    if (category) params.append("category", category);

    url += `?${params.toString()}`;
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const { products } = await response.json();
  return products;
}

export async function getProduct(productId: number) {
  const response = await fetch(`${BASE_URL}/api/get-products/${productId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }
  const { product } = await response.json();
  return product;
}

export async function createBlog(
  title: string,
  description: string,
  author_name: string,
  author_email: string
) {
  return await fetch(BASE_URL + "/api/create-blog", {
    method: "POST",
    body: JSON.stringify({ title, description, author_name, author_email }),
  });
}

export async function getBlog(blogtId: number) {
  const response = await fetch(`${BASE_URL}/api/get-blogs/${blogtId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch blog");
  }
  const { blog } = await response.json();
  return blog;
}

// AUTH_USER

export async function createAuthUser(
  name: string,
  email: string,
  picture: string,
  user_id: string
) {
  return await fetch(BASE_URL + "/api/auth-user/create-auth-user", {
    method: "POST",
    body: JSON.stringify({ name, email, picture, user_id }),
    cache: "no-store",
  });
}

export async function updateAuthUser(picture: string, user_id: string) {
  return await fetch(BASE_URL + "/api/auth-user/update-auth-user", {
    method: "PUT",
    body: JSON.stringify({ picture, user_id }),
    cache: "no-store",
  });
}
