const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;

const corsConfig = {
  origin: "*",
  Credential: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
};

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use(cors(corsConfig));
app.use(express.json());
app.options("", cors(corsConfig));



app.get("/", (req, res) => {
  res.send("Hello World!");
});


const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.emrwzgv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
   await client.connect();

    const touristSpotCollection = client
      .db("touristspotDB")
      .collection("touristspotsDb");

    // create users database collection
    const usersCollection = client.db("touristspotDB").collection("users");

    // create countries database collection
    const countriesCollection = client
      .db("touristspotDB")
      .collection("countriesDb");

    // get all tourist spot data
    app.get("/spots", async (req, res) => {
      const allsports = touristSpotCollection.find();
      const result = await allsports.toArray();
      res.send(result);
    });

    // get single data using the id
    app.get("/spots/:id", async(req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await touristSpotCollection.findOne(query);
      // console.log(result);
      res.send(result);
    })


    //delete data
    app.delete("/spots/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await touristSpotCollection.deleteOne(query);
      res.send(result);
    });


    // get countries data
    app.get("/countries", async (req, res) => {
      const movies = countriesCollection.find();
      const result = await movies.toArray();
      res.send(result);
    });

    // update the data
    app.put("/spots/:id", async (req, res) => {
      const sports = req.body;
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedData = {
        $set: {
          cost: `${sports.cost}`,
          countryName: `${sports.countryName}`,
          description: `${sports.description}`,
          image: `${sports.image}`,
          location: `${sports.location}`,
          season: `${sports.season}`,
          spotName: `${sports.spotName}`,
          travleTime: `${sports.travleTime}`,
          visitorsAmount: `${sports.visitorsAmount}`,
        },
      };

      const result = await touristSpotCollection.updateOne(
        filter,
        updatedData,
        options
      );
      res.send(result);
      // console.log(sports);
    });

    app.post("/spots", async (req, res) => {
      const spot = req.body;
      const result = await touristSpotCollection.insertOne(spot);
      res.send(result);
    });

    // create countries data
    app.post("/countries", async (req, res) => {
      const countries = req.body;
      const result = await countriesCollection.insertOne(countries);
      res.send(result);
    });

    app.post("/users", async (req, res) => {
      const uers = req.body;
      const result = usersCollection.insertOne(uers);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
