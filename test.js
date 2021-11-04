const axios = require('axios');

const testing = async function (){
    try {
        await axios.get('http://127.0.0.1:3000/jwks');
    } catch(e) {
        console.log('caughted');
    }
}

testing();