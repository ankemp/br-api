const request = require('request-promise-native');

const battlerite_api_key = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJmNGMzMTU3MC1iNWZmLTAxMzUtMDlkMC0wYTU4NjQ2MGYwOTUiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTExODI4NDY5LCJwdWIiOiJzdHVubG9jay1zdHVkaW9zIiwidGl0bGUiOiJiYXR0bGVyaXRlIiwiYXBwIjoibXljb29sYXBwIiwic2NvcGUiOiJjb21tdW5pdHkiLCJsaW1pdCI6MTB9.axeG3WZWUjdVizrdKqmYm9UE6-hVcbMbDdG1I70QJlg';
const API_ROOT = 'https://api.dc01.gamelockerapp.com/shards/global';
const headers = {
  'Accept': 'application/vnd.api+json',
  'Authorization': `Bearer ${battlerite_api_key}`
};

module.exports = function (endpoint, options) {
  const defaults = {
    uri: `${API_ROOT}/${endpoint}`,
    method: 'GET',
    followRedirect: true,
    headers,
    json: true,
    resolveWithFullResponse: true
  };
  const requestOptions = Object.assign({}, defaults, options);
  return request(requestOptions)
    .then((response) => {
      if (response.statusCode !== 200) {
        return Promise.reject(response);
      }
      return Promise.resolve(response.body);
    })
}
