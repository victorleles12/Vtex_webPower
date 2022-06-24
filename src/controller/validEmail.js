async function separateEmailprovider(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.exec(String(await email).toLowerCase())[8];

}

async function isValidEmail(userEmail){
    
    let emailProvedor = await separateEmailprovider(userEmail)

    if (emailProvedor === 'mailinator.' || emailProvedor === 'mailinatorr.' || emailProvedor === 'mailintor.' || emailProvedor === 'mailiantor.'){
        
        return true
    
    }else{

        return false
    }

}

module.exports = isValidEmail