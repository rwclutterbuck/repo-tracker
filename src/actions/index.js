import axios from "axios";

const loading = (gitUser) => ({ type: "LOADING", payload: gitUser });

const loadResult = (userData) => ({
  type: "LOAD_RESULT",
  payload: { userData }
});

export const getResult = (searchTerm) => {
  return async (dispatch) => {
    dispatch(loading(searchTerm));
    try {
      const userData = await fetchUserData(searchTerm);
      const avatar = await fetchAvatar(userData.avatar_url);
      const repos = await fetchRepos(userData.repos_url);
      dispatch(loadResult(userData));
    } catch (err) {
      console.warn(err.message);
      dispatch({ type: "SET_ERROR", payload: err.message });
    }
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
    throw new Error(err.message);
  }
};

const fetchAvatar = async (url) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const fetchRepos = async (url) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};
