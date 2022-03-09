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

const fetchAvatar = (url) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

const fetchRepos = (url) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};
