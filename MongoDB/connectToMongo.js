const mongodb = require("mongodb");
const mongoClient =  mongodb.MongoClient;
const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "persons";
mongoClient.connect(connectionURL ,{useNewUrlParser : true , useUnifiedTopology:true}  , function(error , client){
    if(error){
        console.log("Error conncting to databse");
    }
    const db = client.db(databaseName); 
    db.collection("person").findOne({name:"Harry Potter"}, (err, person)=>{
        if(err){
            console.log(err);
        }
        console.log(person);
    });
    const filterDoc = {name : "Pam Beesly"} ;
    const updateDoc = {
        $set : {
            name : "Pam B. Halpert"
        }
    }
    db.collection("person").updateOne(filterDoc , updateDoc);
    db.collection("person").deleteOne({_id:mongodb.ObjectId("5f4f46a830c59c3478d84689")});
    db.collection("person").updateOne({_id : mongodb.ObjectId("5f4f3da9956d48a4de304b08")} ,
                                      {$set : { "family.wife" : "Pam B. Halpert" , 
                                                "family.daughter" : "Cece Halpert"}});
    db.collection("person").countDocuments({} , (err, count)=>{
        if(err){
            console.log(err);
        }
        console.log(count);
    });      
    db.collection("person").replaceOne({name:"Michael Scott"} , {name:"Michael Gary Scott"}); // Id remains the same
    
});

//insert records

// for(let i=0;i<1000;i++){
//     db.testData.insertOne(
//         {name:`company${i}` , 
//          price: parseInt(Math.random()*1000)
//         }
//     )
// }