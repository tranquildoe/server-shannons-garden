/*------------------------------------------
// SEEDS ROUTING
------------------------------------------*/


const express = require("express");
const router = new express.Router();
const seedsModel = require("../models/Seeds");

router.get("/seeds", async (req, res, next) => {
  try {
    res.json({ seeds: await seedsModel.find() });
  } catch (dbErr) {
    next(dbErr);
  }
});

router.post("/seeds", async (req, res, next) => {
  console.log(req.body);
  
  try {
    const dbRes = await seedsModel.create(req.body)
    res.status(200).json(dbRes);
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
