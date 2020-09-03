//A)
//1. db.shows.find({runtime:{$lt:60}}).pretty()  
//2. db.shows.find({runtime:{$gt:30,$lt:60}}).pretty()  
//3. db.shows.find({"rating.average":{$gte:8}}, {"rating.average":1}).pretty()  
//4. db.shows.find({"rating.average":{$gt:8,$lt:9}}, {"rating.average":1}).pretty()  
//5. db.shows.find({genres:"Horror"}).pretty()  
//6. db.shows.find({genres:["Horror"]}).pretty()  

const { Db } = require("mongodb");

//B.
//1. db.shows.find({genres:{$in:["Drama" , "Horror"]}}).pretty()
//2. db.shows.find({"type" : {$in: ["Animation", "Reality"]}}, {type:1}).pretty()
//3. db.shows.find({genres:{$nin:["Drama" , "Horror"]}}, {genres:1}).pretty()
//4. db.shows.find({"type" : {$nin: ["Animation", "Reality"]}}, {type:1}).pretty()
//5. db.shows.find({"network.name":{$nin:["HBO", "FOX"]}}, {"network.name":1})

//C.
//1. db.shows.find({$or: [ {genres:"Drama"}, {genres:"Horror"}]}).pretty()
//2. db.shows.find({ genres:{$not:{$in:["Drama" , "Horror"]}}} , {genres:1})
//3. db.shows.find({$and:[{genres:"Drama"} ,{genres:"Horror"}]})
//4. db.show.find({$and:[{genres:{$ne:"Horror"}}, {genres:"Drama"}]})
//5. db.shows.find({$or:[{genres:{$ne:"Horror"}}, {genres:{$ne:"Drama"}}]})

//D.
//1. db.shows.count({webChannel:{$exists:true, $not:{$type:"null"}}}) //  db.shows.count({webChannel:{$ne:null}}, {webchannel:true}).pretty()
//2. 

db.students.insertMany([
    {name:"Harry Potter", 
     scores:[
         {subject:"Defence Against the Dark Arts" , score:100} , {subject:"Potions" , score:95}
     ]
    },
    {
        name:"Hermione Granger", 
        scores:[
            {subject:"Defence Against the Dark Arts" , score:100} , {subject:"Devinition" , score:100} , {subject:"Potions" , score:100}
        ]
    },
    {
        name:"Ron Weasly" ,
        scores:[
            {subject:"Transfiguration" , score:50} , {subject:"Defence Against the Dark Arts", score:80 } , {subject:"Herbology" , score:100}
        ]
    }
]);

//find all students that have taken up potions and have more than 90 in some subject
db.students.find({"scores.subject":"Potions" ,
                "scores.score":{$gt:90}}
);

//find all students with more than 90 in Defence against the dark arts
db.students.find({scores:{
        $elemMatch:{
            subject:"Defence Against the Dark Arts" , 
            score:{$gt:90}
        }
    }
}
)

//find students that have taken up 2 subjects
db.students.find({scores:{$size:2}})

//find all students who have taken up potions and project the matching subject details
db.students.find({"scores.subject":"Potions"} ,  { name:1 , "scores.$":1 });

//find all students who have taken up potions and project the first 2 subjects  details
db.students.find({"scores.subject":"Potions"} ,  { name:1 , scores:{$slice:2}});


// Find all shows that are in English and have network -> country code as US, and set
// the language as English (US) instead. Also add a new field locale and set it to “enUS”
db.shows.updateMany({"network.country.code" : "US"}, {
    $set:{
        language:"English(US)",
        locale:"en-US"
    }
})


// Find the first show that has a weight of less than 40 and rating more than 7 and
// increase weight by 10. Also set a new field “criticsChoice” to true
db.shows.updateMany({weight:{$lt:40} , 
                    "rating.average" : {$gt:7}}, 
                    {$inc:{weight:10}, 
                     $set:{criticsChoice:true}});

// Find the first show that has a weight of more than 80 and rating less than 6 and
// decrease weight by 10. Also set a new field “criticsChoice” to false.
db.shows.updateOne({weight:{$gt:80}, "rating.average":{$lt:6}}, {$inc:{weight:-10}, $set:{criticsChoice:false}})

// Find all shows that have a weight of less than 60 and greater than 40 and rating more 7 and increase
// weight to maximum( 50, current value )
db.shows.updateMany({weight:{$lt:60, $gt:40} , "rating.average":{$gt:7}}, {$max:{weight:50}})

// Find all shows that have a weight of less than 60 and rating more 8 and multiply the
// weight by 1.333333
db.shows.updateMany({weight:{$lt:60} , "rating.average":{$gt:8}}, {$mul:{weight:1.33}})

//Rename criticsChoice field as cc in all documents
db.shows.updateMany({criticsChoice:{$exists:true}}, {$rename:{'criticsChoice':'cc'}})

//Remove field cc (criticsChoice) from all documents
db.shows.updateMany({}, {$unset:{cc:""}})

// Try finding a document with a show name that does not exist (also use language :
// “English” while finding). Set the rating and genres for it. Use the upsert option and
// check that the upserted documented has fields that are part of the filter clause, as
// well as the update clause.
db.shows.updateOne({name:"The Umbrella Academy" , language:"English"} , {$set:{"rating.average" : 8  ,genres:["Horror", "Drama"]}}, {upsert:true})

// Update all shows that have a scheduled screening on “Monday”, and replace the
// item “Monday” with “monday” (lowercase). Hint: Use $ operator.
db.shows.updateMany({"schedule.days":"Monday"} , {$set:{"schedule.days.$":"monday"}});

//Update all shows with genre “Horror” by adding another genre “Supernatural”
db.shows.updateMany({genres:"Horror"}, {$push:{genres:"Supernatural"}})

// Update all shows with genre “Horror” by adding 2 other genres “Supernatural” and
// “Spook” (you will need to use $each). Also explore how $sort and $slice can be used
// in this case.
db.shows.updateMany({genres:"Horror"}, {$push:{genres:{$each:["Supernatural", "Spook"]}}});

//Remove the genre Supernatural from the first matching document
db.shows.updateOne({genres:"Supernatural"}, {$pull:{genres:"Supernatural"}})



//pipeline

//Find all shows that have Drama as a genre
db.shows.aggregate(
    [
        {
            $match : {
                genres:"Drama"
            }
        }
    ]
)

//Find all shows on HBO
db.shows.aggregate(
    [
        {
            $match : {
                "network.name":"HBO"
            }
        }
    ]
)

// Group shows by the name of network they are running on, and also find the number
// of shows in each network

db.shows.aggregate(
    [
        {
            $group : {
                _id : "$network.name",
                numShows: {
                    $sum: 1
                }
            }
        }
    ]
)

// Group shows by name of network and country they are running in, and also find the
// number of shows, and average runtime of shows in each group (network+country
// combination)
db.shows.aggregate(
    [
        {
            $group:{
                _id:{
                    network : "$network.name" , 
                    country : "$network.country.name"
                },
                numShows:{
                    $sum :1
                },
                averageRuntime : {
                    $avg : "$runtime"
                }
            }
        },
        { 
          $sort:{
              "_id.network" : 1
          }  
        }
    ]
)

// Repeat the above query but create a new field called “stats” in the output
// documents. The “stats” field should have number of shows, and average runtime of
// shows for the group.

db.shows.aggregate(
    [
        {
            $group:{
                _id:{
                    network : "$network.name" , 
                    country : "$network.country.name"
                },
                numShows:{
                    $sum :1
                },
                averageRuntime : {
                    $avg : "$runtime"
                }
            }
        },
        { 
          $sort:{
              "_id.network" : 1
          }  
        }
    ]
)

// Just like we can transform document to form new fields with subdocuments while
// projecting, we can also create a new array. Using the $push operator in $group stage,
// we can create a new array with one item per document in the group! This is a special
// feature of MongoDB with no equivalent in SQL (you can calculate only aggregate
// values like sum, average etc. there). Repeat the above exercise, and create an
// additional field “names” that is an array of names of all shows in the group.

db.shows.aggregate(
    [
        {
            $group : {
                _id:{
                    network : "$network.name" , 
                    country : "$network.country.name"
                },
                numShows:{
                    $sum :1
                },
                averageRuntime : {
                    $avg : "$runtime"
                },
                shows: {
                    $push:'$name'
                }
            }
        }
    ]
)


// Select all shows that are in English (“language” value), and then group them by their
// type. The output should have the names of the group in the type field, along with
// the number of shows in each group.

db.shows.aggregate([
    {
        $match:{
            language:"English"
        }
    },
    {
        $group:{
            type:"$type"
        },
        numShows:{
            $sum:1
        }
    }
])


