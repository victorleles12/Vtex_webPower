const axios = require('axios');
let {configIdVtex} = require('../utils/vtexConfig.js');
let validEmail = require('../controller/validEmail.js')

//função usada para obter o id e email de todos os usuarios registrados da vtex, retorna um array com o id e email dentro de uma array maior.

async function getIduserVtex() {
  
  let url = '/api/dataentities/CL/search?Id?do?Registro'

  try {

    let emailAndId = [];

    let data = await axios(configIdVtex(url));

    
    data.data.map((e) => { 

      return emailAndId.push([e.email,e.id])

    });

   return emailAndId;

  } catch(err) {

    return err;
    
  }
    
}

module.exports = getIduserVtex;