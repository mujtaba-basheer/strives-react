import axios from "axios";
import store from "../redux/store";

import { logout } from "../redux/actions/userActions";

let api_url;
if (process.env.NODE_ENV === "development")
  api_url = "http://localhost:5001/api/";
else api_url = "https://api.thestrives.com/api/";

class ApiCall {
  post = (url, data, headers) =>
    new Promise((resolve, reject) => {
      axios
        .post(api_url + url, data, headers)
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            alert("Session Expired");
            store.dispatch(logout());
          }
          reject(error);
        });
    });

  put = (url, data, headers) =>
    new Promise((resolve, reject) => {
      axios
        .put(api_url + url, data, headers)
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            alert("Session Expired");
            store.dispatch(logout());
          }
          reject(error);
        });
    });

  delete = (url, headers) =>
    new Promise((resolve, reject) => {
      axios
        .delete(api_url + url, headers)
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            alert("Session Expired");
            store.dispatch(logout());
          }
          reject(error);
        });
    });

  get = (url, headers) =>
    new Promise((resolve, reject) => {
      axios
        .get(api_url + url, headers || { headers: {} })
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            alert("Session Expired");
            store.dispatch(logout());
          }
          reject(error);
        });
    });
}

export default new ApiCall();
