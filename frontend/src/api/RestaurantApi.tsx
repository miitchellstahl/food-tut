const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useSearchRestaurants = (city?: string) => {
  const createSearchRequest = async () => {
    const response = await fetch(`${API_BASE_URL}/api/restaurant/search/:city`);

    if (!response) {
    }
  };
};
