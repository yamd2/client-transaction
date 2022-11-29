import axios from "axios";

const rootUrl = "http://localhost:8000/api/v1";
const userUrl = rootUrl + "/user";

// send data to server to add to Database

export const postUser = (formData) => {
  try {
    return axios.post(userUrl, formData);
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      mesage: error.message,
    };
  }
};

// login user

export const loginUser = (formData) => {
  try {
    return axios.post(userUrl + "/login", formData);
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      mesage: error.message,
    };
  }
};
