/*------------------------------------------
// SEEDS ROUTING
------------------------------------------*/

const express = require("express");
const router = new express.Router();
const seedsModel = require("../models/Seeds");

router.get("/seeds", async (req, res, next) => {
  try {
    res.json({ seeds: await seedModel.find() });
  } catch (dbErr) {
    next(dbErr);
  }
});

router.get("/seeds/:id", async (req, res, next) => {
  try {
    res.json(await seedModel.findById(req.params.id));
  } catch (dbErr) {
    next(dbErr);
  }
});

// router.get("/users/:id/favorites", async (req, res, next) => {
//   res.status(200).json({ msg: "@todo" })
// });

// router.patch("/users/favorites/:resourceType/:id", async (req, res, next) => {
//   res.status(200).json({ msg: "@todo" })
// });

module.exports = router;


/*------------------------------------------
// RATES ROUTING
------------------------------------------*/

// const express = require("express");
// const router = new express.Router();

// const models = {
//   albums: require("../models/Album"),
//   artists: require("../models/Artist")
// };

// router.get("/rates/:resourceType/:rId/users/:uId", async (req, res, next) => {
//   models[req.params.resourceType]
//     .findById(req.params.rId, {
//       rates: { $elemMatch: { author: req.params.uId } }
//     })
//     .then(userRate => res.status(200).send({ userRate }))
//     .catch(next);
// });

// router.patch("/rates/:resourceType/:id", async (req, res, next) => {
//   const currentModel = models[req.params.resourceType];

//   if (!currentModel) return next();

//   const currentUserId = req.user._id;
//   const { rate } = req.body;

//   try {
//     // try to find the previous rate, if nay
//     const  = await currentModel.findOneAndUpdate(
//       { _id: req.params.id, "rates.author": currentUserId },
//       { $set: { "rates.$": { rate: req.body.rate, author: currentUserId } } },
//       { new: true }
//     );

//     if () return res.status(200).json();

//     if (!) {
//       // the user has not rate this album yet
//       const 2 = await currentModel.findByIdAndUpdate(req.params.id, {
//         $push: { rates: { rate, author: currentUserId } }
//       });
//       res.status(200).json(2);
//     }

//     // done !
//   } catch (dbErr) {
//     res.status(500).json(dbErr);
//   }
// });

// module.exports = router;
