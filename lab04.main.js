// Update this constant with your ServiceNow credentials
const options = {
  url: 'https://dev75273.service-now.com',
  username: 'admin',
  password: 'PY9vzhMMKux7',
  serviceNowTable: 'change_request'
};


// Import built-in Node.js package path.
const path = require('path');

/**
 * Import the ServiceNowConnector class from local Node.js module connector.js.
 *   and assign it to constant ServiceNowConnector.
 * When importing local modules, IAP requires an absolute file reference.
 * Built-in module path's join method constructs the absolute filename.
 */
const ServiceNowConnector = require(path.join(__dirname, './connector.js'));

// This section is used to call your request and log any errors
function main() {
get({ serviceNowTable: 'change_request' }, (data, error) => {
if (error) {
console.error(`\nError returned from GET request:\n${JSON.stringify(error)}`);
}
console.log(`\nResponse returned from GET request:\n${JSON.stringify(data)}`)
});
post({ serviceNowTable: 'change_request' }, (data, error) => {
if (error) {
console.error(`\nError returned from POST request:\n${JSON.stringify(error)}`);
}
console.log(`\nResponse returned from POST request:\n${JSON.stringify(data)}`)
});
}

// This section is used to call your request and log any errors
function mainOnObject() {
const connector = new ServiceNowConnector(options);
connector.get((results, error)=> {
if (error) {
console.log(`\nError returned from GET request:\n${JSON.stringify(error)}`);
}
console.log(`\nResponse returned from GET request:\n${JSON.stringify(results)}`);
});
//connector.get(x);
connector.post((results, error)=> {
if (error) {
console.log(`\nError returned from POST request:\n${JSON.stringify(error)}`);
}
console.log(`\nResponse returned from POST request:\n${JSON.stringify(results)}`);
});
//connector.post(y);
}

// Call mainOnObject to run it.
mainOnObject();