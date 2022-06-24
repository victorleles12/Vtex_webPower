const {getAllContacts} = require('../utils/webPowerConfig.js')
const axios = require('axios')
require('dotenv').config()


//função que pega todos os usuarios da webpower.

async function webPowerAllContacts(){
   
    try{
        let listUserData = []

        let url = `/admin/api/index.php/rest/${process.env.WEBPOWER_CAMPAING}/contact?page=1&pagelength=1000`

        let config = await getAllContacts(url)

        let allUser = await axios(config)

        let nextPage = allUser.data.next

      
        let alluserData = allUser.data.result

        alluserData.map((e)=>{
            listUserData.push(e.email)
        })

        while(nextPage){

            config = await getAllContacts(allUser.data.next)
            
            allUser = await axios(config)
            
            alluserData = allUser.data.result
            
            alluserData.map((e)=>{
                listUserData.push(e.email)
            })

            nextPage = allUser.data.next
        }
        
       return listUserData

    }catch(err){

        console.log(err)
    }
}


webPowerAllContacts()

//module.exports = webPowerAllContacts