const getWebPowerToken  = require('../model/webPowerOauth.js')

//configuração usada pelo axios para pegar dados da webpower.

async function getConfigWebpower(addresUrl){

  let bearCode = await getWebPowerToken()

    let config = {
        method: 'get',
        url: addresUrl,
        headers: { 
          'Authorization': 'Bearer ' + bearCode
        }
      };
 
      return config
}


// função post, que retorna um objeto que é usado pelo axios para mover um contato da webpower para um grupo

async function postMoveContactConfigWebPower(campaingId, webPowerUserID, webPowerGroupId){

  let bearCode = await getWebPowerToken()

  let config = {
    method: 'post',
    url: `https://fswp.webpower.eu/admin/api/index.php/rest/${campaingId}/contact/${webPowerUserID}/group`,
    headers: { 
      'Authorization': 'Bearer ' + bearCode, 
      'Content-Type': 'application/json'
    },
    data: webPowerGroupId
  };

  return config
}

// função post, que retorna um objeto que é usado pelo axios para criar um contato na webpower, precisa dos dados do usuario como parametro

async function postConfigWebpower(userData){

  let bearCode = await getWebPowerToken()

  let config = {
    method: 'post',
    url: 'https://fswp.webpower.eu/admin/api/index.php/rest/76/contact',
    headers: { 
      "Content-Type"  : "application/json; charset=UTF-8",
      "Accept"        : "application/json",
      'Authorization' : 'Bearer ' + bearCode
    },
    data : userData
  };

  return config

}

// função put, que retorna um objeto que é usado pelo axios para atualizar os dados de um contato na webpower precisa dos dados do usuario
// como parametro

async function putConfigWebpower(idWebPower, userData) {

  let bearCode = await getWebPowerToken()

  let config = {
    method: 'put',
    url: `https://fswp.webpower.eu/admin/api/index.php/rest/76/contact/${idWebPower}`,
    headers: { 
      "Accept"        : "application/json",
      'Content-Type'  : 'application/json',
      'Authorization' : 'Bearer ' + bearCode
    },
    data : userData
  };

  return  config
}  

// rota para pegar todos os usuarios da webpower alternativa para a rota de varificar se o usuario já esta cadastrado.

async function getAllContacts(end){
  
  let bearCode = await getWebPowerToken()

  let config = {
    method: 'get',
    url: `https://fswp.webpower.eu${end}`,
    headers: { 
      'Authorization': 'Bearer ' + bearCode, 
      'Content-Type': 'application/json'
    },
  };

  return config
}


module.exports = { getConfigWebpower, postConfigWebpower, postMoveContactConfigWebPower, putConfigWebpower, getAllContacts }