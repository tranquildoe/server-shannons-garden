require("dotenv").config(); // import all key/value pairs from .env in process.env : really useful when going online :)
require("./../config/mongo");
// const mongoose = require('mongoose');

// const userModel = require("./../models/User");
const seedInstanceModel = require("./../models/SeedInstance");
// const plantModel = require("./../models/Plant")

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

    
    
  //   const users =
  //  [
  //   {   
  //       role: "admin",
  //       name: "Shannon",
  //       email: "shannon@shannon.com",
  //       username: "TranquilDoe",
  //       about: "I love trading seeds!",
  //       zipCode: 75011,
  //       password: "shannon",
  //       confirmPassword: "shannon"
  //   },

  //   {   
  //     role: "user",
  //     name: "Whitman",
  //     email: "whitman@whitman.com",
  //     username: "I'mWhitty",
  //     about: "Seeds are amazing!",
  //     zipCode: 10013,
  //     password: "whitman",
  //     confirmPassword: "whitman"
  // },

  // {   
  //   role: "user",
  //   name: "Emerson",
  //   email: "emerson@emerson.com",
  //   username: "Emmy",
  //   about: "I really enjoy eating food I've grown.",
  //   zipCode: 10437,
  //   password: "emerson",
  //   confirmPassword: "emerson"
  // }
  // ];

const seedInstances =
[
  {
    userID: "5e5f852818dabe218008b029",
  plantId: "5e5f76818a563f1485f28938",
 
  
  variety: 'Genovese',

  myNotes: "great with Italian dishes",
  forTrade: true,
  isOpenPollinated: true,
  isHeirloom: true,
  isHybrid: false,
  isMedicinal: true,
  isEdible: true,
  edibleParts: "leaves, flower buds",
  },

  {
    userID: "5e5f852818dabe218008b02a",
  plantId: "5e5f76818a563f1485f28939",
 
  
  variety: "none",

  myNotes: "great flavor",
  forTrade: true,
  isOpenPollinated: true,
  isHeirloom: true,
  isHybrid: false,
  isMedicinal: true,
  isEdible: true,
  edibleParts: "leaves, flower buds",
  },

  {
    userID: "5e5f852818dabe218008b02b",
  plantId: "5e5f76818a563f1485f28937",
 
  
  variety: 'Mitla Black',

  myNotes: "A rare black tepary bean. Tepary beans are among the most heat and drought tolerant crops in the world.",
  forTrade: true,
  isOpenPollinated: true,
  isHeirloom: true,
  isHybrid: false,
  isMedicinal: false,
  isEdible: true,
  edibleParts: "flowers, leaves(tough), cooked seeds(beans)",
  }
];
  //   const plants =
  //   [
  //     {   
  //     commonName: "Tepary Beans",
  //     latinName: "Phaseolus acutifolius",
  //     isOpenPollinated: true,
  //     isHeirloom: true,
  //     isHybrid: false,
  //     isMedicinal: false,
  //     isEdible: true,
  //     edibleParts: "flowers, leaves(tough), cooked seeds",
  //     id: 0   
  //   },
  //   {   
  //     commonName: "Basil",
  //     latinName: "Ocimum basilicum",
  //     isOpenPollinated: true,
  //     isHeirloom: true,
  //     isHybrid: false,
  //     isMedicinal: true,
  //     isEdible: true,
  //     edibleParts: "leaves, flower buds", 
  //     id: 0 
  //   },
  //   {   
  //     commonName: "Oregano",
  //     latinName: "Origanum vulgare",
  //     isOpenPollinated: true,
  //     isHeirloom: true,
  //     isHybrid: false,
  //     isMedicinal: true,
  //     isEdible: true,
  //     edibleParts: "leaves, flower buds", 
  //     id: 0 
  //   }
  // ];
    
    // const userSeed = await userModel.create(users);
    const seedInstanceSeed = await seedInstanceModel.create(seedInstances);
    // const plantSeed = await plantModel.create(plants);
    console.log("All good");
    // console.log(userSeed);
    console.log(seedInstanceSeed);
    // console.log(plantSeed);

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

