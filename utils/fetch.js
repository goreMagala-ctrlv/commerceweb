const URL = "https://681917a21ac115563503e08a.mockapi.io";

const request = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${URL}${endpoint}`, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Fetch error for ${endpoint}:`, error);
    throw error;
  }
};

export const fetchShoes = () => request("/shoes");

export const fetchShoeById = (id) => request(`/shoes/${id}`);

export const deleteShoeById = (id) =>
  request(`/shoes/${id}`, { method: "DELETE" });

export const insertShoe = (data) =>
  request("/shoes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
