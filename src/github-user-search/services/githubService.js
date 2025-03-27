import axios from "axios";

const BASE_URL = "https://api.github.com/search/users?q=";

export const fetchUserData = async (username, location, repos) => {
  try {
    let query = `${username}`;

    if (location) query += `+location:${location}`;
    if (repos) query += `+repos:>${repos}`;

    const response = await axios.get(`${BASE_URL}${query}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};
