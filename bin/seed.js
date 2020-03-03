require("dotenv").config(); // import all key/value pairs from .env in process.env : really useful when going online :)
require("./../config/mongo");
// const mongoose = require('mongoose');

// const userModel = require("./../models/User");
const seedModel = require("./../models/Seeds");

// const dbName = 'shannonsGarden';

// mongoose.connect(`mongodb://localhost/${dbName}`);

// const books = [
//   {
//     title: "The Hunger Games",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     author: "Suzanne Collins",
//     rating: 10
//   },

async function seedIt() {

  try {

    // const style = {
    //   name: "default",
    //   color: "#10ADED",
    //   wikiURL: ""
    // };

    
    
    // const user =
    // {   
    //     role: "user",
    //     name: "Original User",
    //     email: "shannon@shannon.com",
    //     username: "original",
    //     about: "I love trading seeds!",
    //     password: 1234,
    //     confirmPassword: 1234
    // };

    const seeds =
    [
      {   
      commonName: "Tepary Beans",
      latinName: "Phaseolus acutifolius",
      variety: 'Mitla Black',
      notes: "Tepary beans are one of the most heat and drought tolerant crop varieties in the world. This is a rare black bean.",
      isOpenPollinated: true,
      isHeirloom: true,
      isHybrid: false,
      isMedicinal: false,
      isEdible: true,
      edibleParts: "cooked seeds, shoots, leaves",
      id: 0   
    },
    {   
      commonName: "Basil",
      latinName: "Ocimum basilicum",
      variety: 'Genovese',
      notes: "great for Italian dishes",
      isOpenPollinated: true,
      isHeirloom: true,
      isHybrid: false,
      isMedicinal: true,
      isEdible: true,
      edibleParts: "leaves, flower buds", 
      id: 0 
  
    }
  ];
    
    // const userSeed = await userModel.create(user);
    const seedSeed = await seedModel.create(seeds);

    console.log("All good");
    // console.log(userSeed);
    console.log(seedSeed);

  }
  catch (err) {
    console.error(err)
  }
}

seedIt()


// Book.create(books, (err) => {
//     if (err) { throw(err) }
//     console.log(`Created ${books.length} books`)
//     mongoose.connection.close();
//   });

