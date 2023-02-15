const functions = require("firebase-functions");
const express = require('express')
const cors = require("cors");
const stripe = require("stripe")('pk_test_51M2TzCSCDpoEKLp8bOFcG5A2jPWhCGe7X1vkysZKFSAO9oBXwO1HwUiXx7ciQV4tBhzvrcZIalDsmsMfQuhsvDGu00v6M9MFfU')
const app = express();

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));
app.get('/', (req, res) => res.status(200).send('hello world'));
// app.post("/payments/create", async(request, response) => {
//     const total = request.query.total;

//     console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

//     const paymentIntent = await stripe.paymentIntent.create({
//         amount: total, // subunits of the currency
//         currency: 'inr',
//     });

//     // OK - Created
//     response.status(201).send({
//         clientSecret: paymentIntent.client_secret,
//     });
// });
app.post('/payments/create', async(req, res) => {
    const total = req.query.total;
    console.log(total);
    const session = await stripe.checkout.sessions.create({
        line_items: [{
            price_data: {
                currency: 'usd',
                product_data: {
                    name: 'T-shirt',
                },
                unit_amount: total,
            },
            quantity: 1,
        }, ],
        mode: 'payment',
    });
    res.status(201).json({
        clientSecret: session.client_secret,
    });

});
exports.api = functions.https.onRequest(app);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
// http://localhost:5001/stone-lodge-327016/us-central1/api
// response.status(201).send({
//         clientSecret: paymentIntent.client_secret,
//     });