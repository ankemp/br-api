const request = require('request-promise-native');
const JSONBigInt = require('json-bigint-string');

const battlerite_api_key = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI3NWVlMDgwMC1jNjI4LTAxMzUtODA2Mi0wYTU4NjQ2MGRjM2YiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTEzNjA1MDg0LCJwdWIiOiJzdHVubG9jay1zdHVkaW9zIiwidGl0bGUiOiJiYXR0bGVyaXRlIiwiYXBwIjoiYmF0dGxlbGVnZW5kLWRldiIsInNjb3BlIjoiY29tbXVuaXR5IiwibGltaXQiOjUwfQ.kJxEF-Zk-n2Xk-OrPKOGS_Q9eOFBRuLXlQNo3aQdYOE';
const API_ROOT = 'https://api.dc01.gamelockerapp.com/shards/global';

const DEFAULTS = {
  method: 'GET',
  followRedirect: true,
  headers: {
    'Accept': 'application/vnd.api+json',
    'Authorization': `Bearer ${battlerite_api_key}`
  },
  json: false,
  resolveWithFullResponse: true
};

module.exports = function (endpoint, options) {
  const uri = endpoint.includes('http') ? endpoint : `${API_ROOT}/${endpoint}`;
  let requestOptions = Object.assign({}, DEFAULTS, { uri });
  if (!!options) {
    requestOptions = Object.assign({}, requestOptions, options);
  }
  return request(requestOptions)
    .then((response) => {
      if (response.statusCode !== 200) {
        return Promise.reject(response);
      }
      return Promise.resolve(JSONBigInt.parse(response.body));
    })
}
