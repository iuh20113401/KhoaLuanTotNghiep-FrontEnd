const API_URL = import.meta.env.PROD
  ? import.meta.env.VITE_SERVER_API_URL
  : import.meta.env.VITE_SERVER_API_URL_LOCAL;
export default async function fetchApi(url, options) {
  try {
    const response = await fetch(API_URL + url, {
      ...options,
      credentials: "include",
      headers: {
        ...options.headers,
      },
    });
    const data = await response.json();

    if (!response.ok) {
      const errorMessage =
        data.data?.message || data.message || "Có lỗi xuất hiện";
      // Ném lỗi là một instance của Error
      const error = new Error(errorMessage);
      error.status = response.status; // Gắn thêm thuộc tính status vào instance
      throw error;
    }

    return { ...data.data };
  } catch (error) {
    if (error instanceof Error) {
      throw error; // Giữ nguyên nếu đã là instance của Error
    } else {
      // Tạo mới instance nếu không phải là Error
      const err = new Error(error.message || "Unknown error");
      err.status = error.status || 500;
      throw err;
    }
  }
}
