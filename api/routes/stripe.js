const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);

router.post("/payment", (req, res) => {
  try {
    stripe.charges.create(
      {
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd",
      },
      (stripeErr, stripeRes) => {
        if (stripeErr) {
          res.send(500).json(stripeErr);
          console.log("1");
          return;
        } else {
          res.status(200).json(stripeRes);
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
