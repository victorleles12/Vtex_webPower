const axios = require('axios');
let { postMoveContactConfigWebPower } = require('../utils/webPowerConfig.js')
let getContactIfExists = require('./getContactIfExists.js')
require('dotenv').config()

// função que add os contatos em um grupo espeficicado no parametro webPowerGroupId, não retira de outros grupos que o usuario pode estar.

async function moveContactsToGroup(email){

    let idWebpower = await getContactIfExists(process.env.WEBPOWER_CAMPAING, email)

    let idUserWebpower =  idWebpower.result[0].id

    try{

        let data = axios(await postMoveContactConfigWebPower(process.env.WEBPOWER_CAMPAING, idUserWebpower, process.env.WEBPOWER_GROUP))

        console.log('usuario ' + email + ' movido com sucesso!!!')

    }catch(err){

        console.log(err)
    }
}

async function moveContactsToGroupIfExists(email, idUserWebPower){
    
    try{

        let data = axios(await postMoveContactConfigWebPower(process.env.WEBPOWER_CAMPAING, idUserWebPower, process.env.WEBPOWER_GROUP))

        console.log('usuario ' + email + ' movido com sucesso!!!')

    }catch(err){

        console.log(err)
    }
}

module.exports = {moveContactsToGroup, moveContactsToGroupIfExists}