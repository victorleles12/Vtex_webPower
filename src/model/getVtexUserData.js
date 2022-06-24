const axios = require('axios');
let {configVtex} = require('../utils/vtexConfig.js')

//função usada para consulta os dados de um usuario especifico dentro da vtex, retorna um objeto com esses valores

async function getUsersData(idUser){
    
    const cliente = `/api/dataentities/CL/documents/${idUser}?_fields=_all`

try{

    let vtexDataUser = await axios(configVtex(cliente))

    return vtexDataUser.data

}catch(err){

    return err
}

}

module.exports = getUsersData