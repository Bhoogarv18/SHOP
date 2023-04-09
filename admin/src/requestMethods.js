import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MWRkZGFkZWU4OTFkZDg4MDg5MGE2MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MDUzMDkwOCwiZXhwIjoxNjgwNzkwMTA4fQ.tXF_TaGJOcmWHRX_9h7QLgIyjrH7UVKMbSd5pt8-3SU";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

console.log(Json.parse(JSON.parse(localStorage.getItem("persist:root")).currentUser))

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
