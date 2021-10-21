import NextCors from "nextjs-cors";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE", "OPTIONS"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  if (req.method === "POST") {
    console.log(req.body);
    let items = [];
    for(let i = 0; i < req.body.length; i++) {
        let item = {
            price: req.body[i].sku,
            quantity: req.body[i].quantity,
        }
        items.push(item);
    }
    console.log(items);
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: items,
        payment_method_types: ["card"],
        mode: "payment",
        success_url: `${req.headers.origin}/checkout?success=true&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/checkout?canceled=true`,
      });
      console.log(session.url)
      res.json({url: session.url});
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}