import { API } from "../../config/api.config";

export const BaseURL = API.hostUrl;

const axios = require("axios").default;

export const ApiPostNoAuth = (type, userData) => {
  console.log(type, userData);
  console.log(BaseURL + type);
  axios
    .post(BaseURL + type, ...userData)
    .then((responseJson) => {
      console.log(responseJson);
    })
    .catch((error) => {
      console.error(error);
    });
};

export const ApiGetNoAuth = (type) => {
  axios
    .get(BaseURL + type)
    .then((responseJson) => {
      console.log(responseJson);
    })
    .catch((error) => {
      console.error(error);
    });
};
