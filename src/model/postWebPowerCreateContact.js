const  axios              = require('axios');
let {postConfigWebpower}  = require('../utils/webPowerConfig.js');
let webPowerNewUser       = require('../controller/CreateUserWebPower.js');

//função usada para criar um novo contato na webpower, necessita do id do usuario da vtex como parametro

async function createUserWebPower(idUsuarioVtex, email){
    
    let userData = await webPowerNewUser(await idUsuarioVtex)

    let config   = await postConfigWebpower(userData)
    
    try{
        console.log('Usuario '+ email+ ' não localizado, criando usuario')

        let data = await axios(config)

        console.log('Usuario '+ email+ ' criado com sucesso')
        
        return await data.data.id

    }catch(err){

        return 'erro ao criar o usuario ' +  email
    }

}


module.exports = createUserWebPower