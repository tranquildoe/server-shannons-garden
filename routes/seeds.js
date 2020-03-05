/*------------------------------------------
// SEEDS ROUTING
------------------------------------------*/


const express = require("express");
const router = new express.Router();
// const seedInstanceModel = require("../models/SeedInstance");
const seedModel = require("./../models/Seed")

router.get("/seeds", async (req, res, next) => {
  try {
    //populate with 'plantID' is added here so can access the info through this Id, to the plants doc in the DB - Cool!
    res.json({ seedInstances: await seedInstanceModel.find().populate('plantId') });
  } catch (dbErr) {
    next(dbErr);
  }
});

router.post("/seeds", async (req, res, next) => {
  console.log("this", req.body);  
  try {
    const dbRes = await seedModel.create(req.body)
    res.status(200).json(dbRes);
    console.log("yes")
  } catch (dbErr) {
    console.log("here")
    next(dbErr);
  }
});

// router.post("/styles", (req, res, next) => {
//   const { name, color, wikiURL } = req.body;

//   styleModel
//     .create({ name, color, wikiURL })
//     .then(dbRes => res.status(200).json(dbRes))
//     .catch(next);
// });

// router.post("/create-shop/:id", uploadCloud.single("image"), (req, res, next) => {
  //   const {
  //     address,
  //     phone,
  //     description
  //   } = req.body; //type
  //   const newPoulet = {
  //     address,
  //     phone,
  //     description,
  //   };
  //   if (req.file) newPoulet.image = req.file.secure_url;
  //   shopModel
  //     .findByIdAndUpdate(req.params.id, newPoulet, {
  //       new: true
  //     })
  //     .then(dbRes => {
  //       res.json(dbRes);
  //     })
  //     .catch(next);
  // });

router.get("/seeds/:id", async (req, res, next) => {
  try {
    res.json(await seedInstanceModel.findById(req.params.id));
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
