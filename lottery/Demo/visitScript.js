const axios = require('axios');

const arr = [];
for (let i = 0; i < 30; i += 1) {
    arr.push(axios.get('http://192.168.123.17:12001/loupan/'))
}
// for (let i = 0; i < 1000; i += 1) {
//     axios.get('http://192.168.123.17:13000/loupan/')
// }
console.log(arr);
// axios.all(arr);

// $