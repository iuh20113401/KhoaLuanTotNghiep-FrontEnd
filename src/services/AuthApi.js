import fetchApi from "./FetchConfig";
const URL = import.meta.env.PROD
  ? import.meta.env.VITE_SERVER_API_URL
  : import.meta.env.VITE_SERVER_API_URL_LOCAL;
async function dangNhap({ maSo, password }) {
  try {
    const response = await fetch(URL + "/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        maSo,
        password,
      }),
      credentials: "include", // Include cookies
    });

    const data = await response.json();

    if (response.status === 409) {
      throw new Error(data || "Có lỗi xuất hiện");
    }
    if (!response.ok) {
      throw new Error(
        `Server responded with ${response.status}: ${
          data.message || "An error occurred"
        }`
      );
    }
    // No more localStorage handling for token, token will be in cookies now
    return data;
  } catch (error) {
    throw new Error(`${error.message}`);
  }
}

const logOut = () =>
  fetchApi(`/user/logout`, {
    method: "GET",
  });
const getMe = () =>
  fetchApi(`/user/me`, {
    method: "GET",
  });

export { dangNhap, getMe, logOut };
