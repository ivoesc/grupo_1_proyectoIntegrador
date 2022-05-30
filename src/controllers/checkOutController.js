// SDK de Mercado Pago
const mercadopago = require("mercadopago");
// Agrega credenciales
mercadopago.configure({
  access_token: process.env.ACCESS_TOKEN,
});

const checkOutController = {

    checkOut: (req, res) => {
        
        //return res.send('hola')

        let preference = {
            items: [
                {
                    title: "Entrada cine",
                    unit_price: 10,
                    quantity: req.body.quantity,
                }
            ],
            back_urls: {
                "success": "http://localhost:3000",
                "failure": "http://localhost:3000",
                "pending": "http://localhost:3000"
            },
            auto_return: "approved",
        };
    
        mercadopago.preferences.create(preference)
            .then(function (response) {
                res.json({
                    id: response.body.id
                });
            }).catch(function (error) {
                console.log(error);
            });

        console.log(process.env.ACCESS_TOKEN);
    },
    
    feedback: (req, res) => {
        res.json({
            Payment: req.query.payment_id,
            Status: req.query.status,
            MerchantOrder: req.query.merchant_order_id
        });
    }

}

module.exports = checkOutController;