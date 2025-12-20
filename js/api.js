const API_BASE = "https://localhost:7178/api/Product";


async function getProducts() {
  const res = await fetch(`${API_BASE}/GetProducts`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return await res.json();
}


async function getProduct(id) {
  const res = await fetch(`${API_BASE}/GetProduct/${id}`);
  if (!res.ok) throw new Error("Product not found");
  return await res.json();
}


async function createProduct(data) {
  const res = await fetch(`${API_BASE}/AddProduct`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error("API ERROR:", errorText);
    throw new Error(errorText);
  }

  return await res.text();
}


async function updateProduct(data) {
  const res = await fetch(`${API_BASE}/UpdateProduct`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error("UPDATE ERROR:", errorText);
    throw new Error(errorText);
  }

  return await res.text();
}


async function deleteProduct(id) {
  const res = await fetch(`${API_BASE}/DeleteProduct/${id}`, {
    method: "DELETE"
  });

  if (!res.ok) throw new Error("Failed to delete product");
}
