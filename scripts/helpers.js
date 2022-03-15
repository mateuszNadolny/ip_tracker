import { TIMEOUT_SEC } from "./config.js";

const timeout = function (s) {
    return new Promise(function (_, reject) {
      setTimeout(function () {
        reject(new Error(`Request took too long! Timeout after ${s} second`));
      }, s * 1000);
    });
  };

  export const AJAX = async function (url, uploadData = undefined) {
    try {
      const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://mateusznadolny.github.io/ip_tracker/',
        'Access-Control-Request-Method': 'PUT, GET, POST',
        'Access-Control-Request-Headers': 'Content-Type'
      }
      
      const fetchPro = uploadData
        ? fetch(url, {
            method: 'POST',
            mode: "no-cors",
            headers,
            body: JSON.stringify(uploadData),
          })
        : fetch(url, headers);
  
      const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
      const data = await res.json();
  
      if (!res.ok) throw new Error(`${data.message} (${res.status})`);
      return data;
    } catch (err) {
      throw err;
    }
  };