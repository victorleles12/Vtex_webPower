const createUserWebPower    = require('../model/postWebPowerCreateContact');
const updateUserWebPower    = require('../model/putWebPowerUpdateContact');
const {moveContactsToGroup, moveContactsToGroupIfExists}   = require('../model/webPowerMoveContacts.js');
const getContactIfExists    = require('../model/getContactIfExists.js');
const env = require('dotenv').config()

// função que organiza a execução do codigo

async function createAndUpdateUserWebPower(email, idUsuarioVtex){

    try {
        
        let dataUserExists = await getContactIfExists(email);

        let idWebpowerUser = 0

        let userExists = await dataUserExists.totalRecords;

        switch (userExists){
            
            case 0:
                let createNewUserResult = await createUserWebPower(idUsuarioVtex);

                idWebpowerUser = await createNewUserResult

                await moveContactsToGroup(email)

                break;
            
            case 1:

                await updateUserWebPower(dataUserExists.result[0].id, idUsuarioVtex, email);

                idWebpowerUser = await dataUserExists.result[0].id

                await moveContactsToGroupIfExists(email, idWebpowerUser)

                break;
                
            default:
                    
                break;
        }
                
    }catch(err){

        console.log(err)

        return err
    }

}

module.exports = {moveContactsToGroup, createAndUpdateUserWebPower}

