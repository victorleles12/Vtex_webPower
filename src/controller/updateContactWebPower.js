let vtexDataUser = require('../model/getVtexUserData.js')

//função contrutora que retorna um objeto com os valores usados na putWebPowerUpdateContact.js para atualizar os dados do cliente.
//precisa do id do usuario vtex como parametro

async function UpdateWebPowerUser(vtexIdUser) {

  let vtexUserData = await vtexDataUser(vtexIdUser)

  if(vtexUserData.businessPhone != null){
        
    let webPowerUserData = JSON.stringify({
        "email"     : vtexUserData.email,
        "lang"      : "es",
        "mobile_nr" : `+34${vtexUserData.businessPhone}`,
        "custom"    : [
                    {
                        "field": "nombre_empresa",
                        "value": vtexUserData.corporateName || ""
                    },
                    {
                        "field": "cif",
                        "value": vtexUserData.corporateDocument || ""
                    },
                    {
                        "field": "direccion_cif",
                        "value": vtexUserData.cifAddress || ""
                    },
                    {
                        "field": "direccion_entrega",
                        "value": vtexUserData.deliveryAddress || ""
                    },
                    {
                        "field": "seller_activo",
                        "value": vtexUserData.sellerSelected || ""
                    },
                    {
                        "field": "sellers_disponibles",
                        "value": vtexUserData.sellers || ""
                    },
                    {
                        "field": "fecha_registro_seller",
                        "value": vtexUserData.sellerRegistrationDate || ""
                    },
                    {
                        "field": "primer_acceso",
                        "value": vtexUserData.createdIn || ""
                    },
                    {
                        "field": "fecha_acceso",
                        "value": vtexUserData.lastInteractionIn || ""
                    },
                    {
                        "field": "ultima_compra",
                        "value": vtexUserData.lastPurchase || ""
                    },
                    {
                        "field": "total_ultima_compra",
                        "value": vtexUserData.rclastcartvalue || ""
                    },
                    {
                        "field": "order_id",
                        "value": vtexUserData.orderId || ""
                    },
                    {
                        "field": "cantidad_compras",
                        "value": vtexUserData.rclastcart || ""
                    },
                    {
                        "field": "valor_medio_pedidos",
                        "value": vtexUserData.mediaSeller || ""
                    },
                    {
                        "field": "last_open_date",
                        "value": vtexUserData.lastOpenDate || ""
                    },
                    {
                        "field": "last_click_date",
                        "value": vtexUserData.rclastsession || ""
                    },
                    {
                        "field": "last_mail_date",
                        "value": vtexUserData.lastEmailData || ""
                    },
                    {
                        "field": "consent",
                        "value": vtexUserData.isNewsletterOptIn == false ? 0 : 1 || "0"
                    },
                    {
                        "field": "first_name",
                        "value": vtexUserData.firstName || ''
                    },
                    {
                        "field": "last_name",
                        "value": vtexUserData.lastName || ''
                    },
                    ]
                    
    });

    return webPowerUserData
    
}else{
    
    let webPowerUserData = JSON.stringify({
        "email"     : vtexUserData.email,
        "lang"      : "es",
        "custom"    : [
                    {
                        "field": "nombre_empresa",
                        "value": vtexUserData.corporateName || ""
                    },
                    {
                        "field": "cif",
                        "value": vtexUserData.corporateDocument || ""
                    },
                    {
                        "field": "direccion_cif",
                        "value": vtexUserData.cifAddress || ""
                    },
                    {
                        "field": "direccion_entrega",
                        "value": vtexUserData.deliveryAddress || ""
                    },
                    {
                        "field": "seller_activo",
                        "value": vtexUserData.sellerSelected || ""
                    },
                    {
                        "field": "sellers_disponibles",
                        "value": vtexUserData.sellers || ""
                    },
                    {
                        "field": "fecha_registro_seller",
                        "value": vtexUserData.sellerRegistrationDate || ""
                    },
                    {
                        "field": "primer_acceso",
                        "value": vtexUserData.createdIn || ""
                    },
                    {
                        "field": "fecha_acceso",
                        "value": vtexUserData.lastInteractionIn || ""
                    },
                    {
                        "field": "ultima_compra",
                        "value": vtexUserData.lastPurchase || ""
                    },
                    {
                        "field": "total_ultima_compra",
                        "value": vtexUserData.rclastcartvalue || ""
                    },
                    {
                        "field": "order_id",
                        "value": vtexUserData.orderId || ""
                    },
                    {
                        "field": "cantidad_compras",
                        "value": vtexUserData.rclastcart || ""
                    },
                    {
                        "field": "valor_medio_pedidos",
                        "value": vtexUserData.mediaSeller || ""
                    },
                    {
                        "field": "last_open_date",
                        "value": vtexUserData.lastOpenDate || ""
                    },
                    {
                        "field": "last_click_date",
                        "value": vtexUserData.rclastsession || ""
                    },
                    {
                        "field": "last_mail_date",
                        "value": vtexUserData.lastEmailData || ""
                    },
                    {
                        "field": "consent",
                        "value": vtexUserData.isNewsletterOptIn == false ? 0 : 1 || "0"
                    },
                    {
                        "field": "first_name",
                        "value": vtexUserData.firstName || ''
                    },
                    {
                        "field": "last_name",
                        "value": vtexUserData.lastName || ''
                    },
                    ]
    });
    return webPowerUserData
}

      
}

module.exports = UpdateWebPowerUser