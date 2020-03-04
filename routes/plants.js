/*------------------------------------------
// PLANTS ROUTING
------------------------------------------*/


const express = require("express");
const router = new express.Router();
const plantModel = require("../models/Plant");

router.get("/plants", async (req, res, next) => {
  try {
    res.json({ plants: await plantModel.find() });
  } catch (dbErr) {
    next(dbErr);
  }
});

router.post("/plants", async (req, res, next) => {
  console.log(req.body);
  
  try {
    const dbRes = await plantModel.create(req.body)
    res.status(200).json(dbRes);
  } catch (dbErr) {
    next(dbErr);
  }
});

router.get("/plants/:id", async (req, res, next) => {
  try {
    res.json(await plantModel.findById(req.params.id));
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
