const  axios              = require('axios');
let {putConfigWebpower}   = require('../utils/webPowerConfig.js');
let UpdateWebPowerUser    = require('../controller/updateContactWebPower.js');

// função usada para atualizar os dados do contato na webpower, precisa como parametro o numero da campanha e o id de usuario da vetex

async function updateUserWebPower(idWebPower, idUsuarioVtex, email) {
    
    let userData = await UpdateWebPowerUser(idUsuarioVtex)

    let config   = await putConfigWebpower(idWebPower, userData)

    try {
        console.log('usuario ' + email + ' localizado, atualizando dados')

        await axios(config)

        console.log('dados do usuario ' + email + ' atualizados com sucesso')

    } catch(err){

        return 'erro ao atualizar o usuario' + email

    }
}

module.exports = updateUserWebPower
