import fetchApi from "./FetchConfig";
const BASE_URL = "/chat";
const layMessages = (id) =>
  fetchApi(`${BASE_URL}/messages/${id}`, {
    method: "GET",
  });

export { layMessages };
