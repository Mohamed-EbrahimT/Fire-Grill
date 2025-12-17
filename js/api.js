const API_BASE = "https://localhost:7178/api/Product";

/* ============================
GET ALL PRODUCTS
============================ */
async function getProducts() {
  const res = await fetch(`${API_BASE}/GetProducts`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return await res.json();
}

/* ============================
GET PRODUCT BY ID
============================ */
async function getProduct(id) {
  const res = await fetch(`${API_BASE}/GetProduct/${id}`);
  if (!res.ok) throw new Error("Product not found");
  return await res.json();
}

/* ============================
ADD PRODUCT
============================ */
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

  // 🔥 FIX: backend returns TEXT, not JSON
  return await res.text();
}

/* ============================
UPDATE PRODUCT
============================ */
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

  // backend likely returns text
  return await res.text();
}

/* ============================
DELETE PRODUCT
============================ */
async function deleteProduct(id) {
  const res = await fetch(`${API_BASE}/DeleteProduct/${id}`, {
    method: "DELETE"
  });

  if (!res.ok) throw new Error("Failed to delete product");
}
