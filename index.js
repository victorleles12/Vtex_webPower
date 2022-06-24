const validEmail                    = require('./src/controller/validEmail.js'); 
const vtexClientId                  = require('./src/model/getVtexClientId.js');
const {createAndUpdateUserWebPower} = require('./src/utils/orchestrator.js')
require('dotenv').config()


async function execute() {

    try {

        let clientEmailVtex = await vtexClientId()

        clientEmailVtex.map( async (e) => {

            console.log(e)
    
            if (validEmail(e[0]) == false){
                await createAndUpdateUserWebPower(e[0], e[1]);
                
            }
        }) 

    } catch(err) {

        console.log(err)

        return err
    }
}

execute()
