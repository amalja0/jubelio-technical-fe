const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const DashboardApi = {
  fetchMostSoldProducts: async (filter) => {
    const params = new URLSearchParams();
    if (filter?.state) params.append("state", filter?.state);

    const response = await fetch(`${API_BASE_URL}most-sold-products?${params.toString()}`, { cache: 'no-store' });
    if (!response.ok) throw new Error('Failed to fetch most sold products');

    return await response.json();
  },

  fetchMostSoldProductsByState: async (filter) => {
    const params = new URLSearchParams();
    if (filter?.state) params.append("state", filter?.state);

    const response = await fetch(`${API_BASE_URL}most-sold-products-by-state`, { cache: 'no-store' });
    if (!response.ok) throw new Error('Failed to fetch most sold products');

    return await response.json();
  }
}