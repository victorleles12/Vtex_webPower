const axios = require('axios');
const {getConfigWebpower} = require('../utils/webPowerConfig.js')

//função que verifica se um usuario existe na webpower, se existir retorna um objeto com o valor 1 e se não existir retorna com o valor 0

async function getContactIfExists(email) {
    try {

        let url     = `https://fswp.webpower.eu/admin/api/index.php/rest/${process.env.WEBPOWER_CAMPAING}/contact?match={"email":"${email}"}`       
        
        let data    = await axios(await getConfigWebpower(url))

        return data.data
        
    } catch(err){

        return err
    }

} 

module.exports = getContactIfExists