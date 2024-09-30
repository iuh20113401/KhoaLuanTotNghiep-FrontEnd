import fetchApi from "./FetchConfig";
const URL = "https://khoaluantotnghiep-kcc7.onrender.com/api";
async function dangNhap({ maSo, password }) {
  try {
    const response = await fetch(URL + "/user/singin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        maSo,
        password,
      }),
    });
    const data = await response.json();
    if (response.status === 409) {
      throw new Error(data || " có lỗi xuất hiện");
    }
    if (!response.ok) {
      throw new Error(
        `Server responded with ${response.status}: ${
          data.message || "An error occurred"
        }`
      );
    }
    localStorage.setItem("token", `Bearer ${data.token}`);
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
