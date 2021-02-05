import axios from "axios";

let api_url;
if (process.env.NODE_ENV === "development")
  api_url = "http://localhost:5001/api/";
else api_url = "https://strives.herokuapp.com/api/";

class ApiCall {
  post = (url, data, headers) =>
    new Promise((resolve, reject) => {
      axios
        .post(api_url + url, data, headers)
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
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
          reject(error);
        });
    });

  delete = (url, token) =>
    new Promise((resolve, reject) => {
      var headers = {
        Authorization: "Bearer " + token,
      };

      axios
        .delete(api_url + url, { headers })
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
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
          reject(error);
        });
    });
}

export default new ApiCall();
