import axios from "axios";

const loading = (gitUser) => ({ type: "LOADING", payload: gitUser });

const loadResult = ({ results: {} }) => ({
  type: "LOAD_RESULT",
  payload: {}
});

export const getResult = (searchTerm) => {
  return async (dispatch) => {
    dispatch(loading(searchTerm));
    try {
      const userData = await fetchUserData(searchTerm);
//      const avatar = await fetchAvatar(userData.avatar_url);
//      const repos = await fetchRepos(userData.repos_url);
    } catch (err) {}
  };
};

// Helper functions
const fetchUserData = async (searchTerm) => {
  try {
    const { data } = await axios.get(
      `https://api.github.com/users/${searchTerm}`
    );
    return data;
  } catch (err) {
    if (data.status === 404) {
      throw new Error(`User ${searchTerm} was not found`);
    }
    throw new Error(err.message);
  }
};
