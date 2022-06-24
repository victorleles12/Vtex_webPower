const env = require('dotenv').config()


//config usada pelo axios para consultar os dados dos usuarios da vtex, usado em getVtexUserData.js

function configVtex(end){
    var config = {
        method: 'get',
        url: process.env.URL_VTEX_CONFIG + end,
        headers: { 
          'Accept': 'application/json', 
          'Content-Type': 'application/json', 
          'X-VTEX-API-AppKey'  : process.env.VTEX_KEY, 
          'X-VTEX-API-AppToken': process.env.VTEX_SECRET
        }
      };
      
      return config
}

// config usada pelo axios para consultar o id e email dos usuarios da vtex, utilizado no getVtexClientId.js

function configIdVtex(end){

  var config = {
    method: 'get',
    url:  `${process.env.URL_VTEX_CONFIG}${end}`,
    headers: { 
      'Accept'              : 'application/json', 
      'Content-Type'        : 'application/json', 
      'X-VTEX-API-AppKey'   : process.env.VTEX_KEY,
      'X-VTEX-API-AppToken' : process.env.VTEX_SECRET,
      'REST-Range'          : 'resources=0-1500',
    }
  };
  return config
}


module.exports = {configVtex, configIdVtex}