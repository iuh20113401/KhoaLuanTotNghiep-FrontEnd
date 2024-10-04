const URL = import.meta.env.PROD
  ? import.meta.env.VITE_SERVER_API_URL
  : import.meta.env.VITE_SERVER_API_URL_LOCAL;
export default async function fetchApi(url, options) {
  try {
    options.headers = {
      ...options.headers,
    };
    options = {
      ...options,
      credentials: "include",
    };
    const response = await fetch(URL + url, options);
    const data = await response.json();
    if (response.status.toString().startsWith("4")) {
      throw new Error(data.data?.message || data.status || "Có lỗi xuất hiện");
    }
    if (!response.ok) {
      throw new Error(
        `Server responded with ${response.status}: ${
          data.message || "An error occurred"
        }`
      );
    }
    return { ...data.data };
  } catch (error) {
    throw new Error(`${error.message}`);
  }
}
