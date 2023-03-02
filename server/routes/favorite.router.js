const express = require("express");
const pool = require("../modules/pool");
//INJECT ENV VARIABLES
require("dotenv").config();

const router = express.Router();

// return all favorite images
// !
router.get("/", (req, res) => {
  res.sendStatus(200);
});

// add a new favorite
router.post("/", (req, res) => {
  res.sendStatus(200);
  const queryText = `INSERT INTO "favorites" ("url")
  VALUES ($1)`;
  const queryParams = req.body.url;
  pool
    .query(queryText, queryParams)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log("Could not execute SQL query", queryText, " : ", error);
      res.sendStatus(500);
    });
});

// update given favorite with a category id
router.put("/:favId", (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete("/", (req, res) => {
  res.sendStatus(200);
});

// * route request getting favorites from favorites db table 
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM favorites ORDER BY url ASC`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

//GET GIPHS FROM API
router.get("/", (req, res) => {
  axios
    .get(
      `http://api.giphy.com/v1/gifs/gifs?api_key=${process.env.GIPHY_API_KEY}q=${tbd}&limit=20`
    )
    .then((response) => {
      console.log(response.data);
      res.send(response.data);
    })
    .catch((err) => {
      console.log(`error in giphy api request`, err);
    });
});

module.exports = router;
