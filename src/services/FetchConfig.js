const URL = "https://khoaluantotnghiep-kcc7.onrender.com/api";
export default async function fetchApi(url, options) {
  try {
    const token = localStorage.getItem("token");
    options.headers = {
      ...options.headers,
      Authorization: `${token}`,
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
