import { BASE_URL } from "../env/Config";

//Fetch GET, POST, PUT, DELETE işlemlerini yapmak için js tarafından geliştirilen bir functiondur.
//Base Manager servisi sayesinde taslak olarak hazırladığımız get,post,put,delete işlemlerini her projede kullanabiliriz.

export const baseManager = {
  get: async (url) => {
    let result = [];

    await fetch(`${BASE_URL + url}`)
      .then((res) => res.json())
      .then((data) => {
        result = data;
      });

    return result;
  },

  post: async (url, data) => {
    let responseData;

    let requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    await fetch(BASE_URL + url, requestOptions)
      .then((res) => res.json())
      .then((data) => (responseData = data));

    return responseData;
  },

  put: async (url, data) => {
    let responseData = [];

    let requestOptions = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    await fetch(BASE_URL + url, requestOptions)
      .then((res) => res.json())
      .then((data) => (responseData = data));

    return responseData;
  },

  del: async (url, data) => {
    let responseData = [];

    let requestOptions = {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    await fetch(BASE_URL + url, requestOptions)
      .then((res) => res.json())
      .then((data) => (responseData = data));

    return responseData;
  },
};
