/*------------------------------------------
// SEEDS ROUTING
------------------------------------------*/


const express = require("express");
const router = new express.Router();
const seedInstanceModel = require("../models/SeedInstance");

router.get("/seeds", async (req, res, next) => {

  const q = {};
  if (req.query.isForTrade === "true") {
    q.forTrade = true
  }

  try {
    //populate with 'plantID' is added here so can access the info through this Id, to the plants doc in the DB - Cool!
    res.json({ seedInstances: await seedInstanceModel.find(q).populate('plantId').populate("userID")});
  } catch (dbErr) {
    next(dbErr);
  }
});


router.get("/seeds/:userID", async (req, res, next) => {

  const q = {
    userID: req.params.userID
  };
  
  if (req.query.isForTrade === "true") {
    q.forTrade = true
  }

  console.log(q);
  

  try {
    //populate with 'plantID' is added here so can access the info through this Id, to the plants doc in the DB - Cool!
    res.json({ seedInstances: await seedInstanceModel.find(q).populate('plantId').populate("userID")});
  } catch (dbErr) {
    next(dbErr);
  }
});



router.post("/seeds", async (req, res, next) => {

  const newSeed = {...req.body};

  newSeed.userID = req.user._id
  
  try {
    const dbRes = await seedInstanceModel.create(newSeed)
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

router.patch("/seeds/:id", async (req, res, next) => {
  try {
    res.json(await seedInstanceModel.findByIdAndUpdate(req.params.id, req.body));
  } catch (dbErr) {
    next(dbErr);
  }
});


// router.get("/users/:id/favorites", async (req, res, next) => {
//   res.status(200).json({ msg: "@todo" })
// });


module.exports = router;
