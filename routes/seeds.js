/*------------------------------------------
// SEEDS ROUTING
------------------------------------------*/


const express = require("express");
const router = new express.Router();
const seedInstanceModel = require("../models/SeedInstance");

router.get("/seeds", async (req, res, next) => {
  try {
    //populate with 'plantID' is added here so can access the info through this Id, to the plants doc in the DB - Cool!
    res.json({ seedInstances: await seedInstanceModel.find().populate('plantId') });
  } catch (dbErr) {
    next(dbErr);
  }
});

router.post("/seeds", async (req, res, next) => {
  console.log(req.body);
  
  try {
    const dbRes = await seedInstanceModel.create(req.body)
    res.status(200).json(dbRes);
  } catch (dbErr) {
    next(dbErr);
  }
});

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
