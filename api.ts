import { BASE_URL } from "./constants";

export async function getUsers() {
  const response = await fetch(BASE_URL + "/api/get-users");
  const { users } = await response.json();
  return users.rows;
}

// export async function getProducts() {
//   const response = await fetch("/api/get-products");
//   const { products } = await response.json();
//   return products;
// }

// export async function getProduct(productId: number) {
//   const response = await fetch(`${BASE_URL}/api/get-products/${productId}`);
//   if (!response.ok) {
//     console.error("Error fetching product:", response.statusText);
//     throw new Error("Product not found");
//   }
//   const { product } = await response.json();
//   console.log("Fetched product:", product);
//   return product;
// }

// export async function getProducts() {
//   const response = await fetch(`/api/get-products`);
//   if (!response.ok) {
//     throw new Error("Failed to fetch products");
//   }
//   const { products } = await response.json();
//   return products;
// }

// export async function getProducts(category?: string) {
//   const url = category
//     ? `/api/get-products?category=${category}`
//     : `/api/get-products`;
//   const response = await fetch(url);
//   if (!response.ok) {
//     throw new Error("Failed to fetch products");
//   }
//   const { products } = await response.json();
//   return products;
// }
export async function getProducts(category?: string, brands?: string[]) {
  let url = "/api/get-products";
  if (category || brands?.length) {
    const params = new URLSearchParams();
    if (category) params.append("category", category);
    if (brands?.length)
      brands.forEach((brand) => params.append("brand", brand));
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

export async function createUser(name: string, email: string, age: string) {
  return await fetch(BASE_URL + "/api/create-user", {
    method: "POST",
    body: JSON.stringify({ name, email, age }),
  });
}

// export async function deleteUser(id: number) {
//   "use server";
//   await fetch(`${BASE_URL}/api/delete-user/${id}`, {
//     method: "DELETE",
//   });
// }

export async function updateUser(
  id: string,
  name: string,
  email: string,
  age: string
) {
  return await fetch(BASE_URL + "/api/edit-user", {
    method: "PUT",
    body: JSON.stringify({ id, name, email, age }),
  });
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
