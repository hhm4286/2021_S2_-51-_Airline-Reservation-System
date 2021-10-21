import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import Commerce from '@chec/commerce.js';
const commerce = new Commerce(process.env.NEXT_PUBLIC_CHEC_PUBLIC_API_KEY)
const axios = require('axios');

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

async function sendToCheckout(items) {
    console.log(items);
    const res = await fetch("/api/checkout_sessions", { method: 'POST', body: JSON.stringify(items), headers: { "Content-Type": 'application/json' }})
    console.log(res);
    const body = await res.json();
    console.log(body.url);
    window.location.href = body.url;
}

function testButton() {
    commerce.cart.contents().then((items) => sendToCheckout(items));
}


export default function CheckoutButton() {
  return (
    <form action="/api/checkout_sessions" method="POST">
      <section>
        <button type="button" onClick={testButton} role="link">
          Checkout
        </button>
      </section>
      <style jsx>
        {`
          section {
            background: #ffffff;
            display: flex;
            flex-direction: column;
            width: 400px;
            height: 112px;
            border-radius: 6px;
            justify-content: space-between;
          }
          button {
            height: 36px;
            background: #556cd6;
            border-radius: 4px;
            color: white;
            border: 0;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
          }
          button:hover {
            opacity: 0.8;
          }
        `}
      </style>
    </form>
  );
}
