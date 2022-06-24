const axios = require('axios');
const env   = require('dotenv').config()

// função que faz a autenticação 2.0 na webpower e gera e retorna o bear token

async function getWebPowerToken(){
  
  let config = {
    method: 'get',
    url: process.env.URL_AUTH_TOKEN,
    headers: { }
  };
  
  try {

    let token = await axios(config)
    
    return token.data.access_token


  } catch(err){
    
    console.log(err)

  }

}

module.exports = getWebPowerToken
