const express = require("express");
const graphqlHttp = require("express-graphql").graphqlHTTP;
const graphqlSchema = require("./graphql/schema");
const graphqlResolver = require("./graphql/resolvers");
const mongoose = require("mongoose");
const { assertAbstractType } = require("graphql");
const { deleteOne } = require("./models/article");

const app = express();

app.use(
  "/graphql",
  graphqlHttp({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true,
  })
);
const uri =
  "mongodb+srv://ush:tanvi88@cluster0.gwuxm.mongodb.net/gptest?retryWrites=true&w=majority";
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose
  .connect(uri, options)
  .then(() =>
    app.listen(3000, () => console.log("Server is running on localHost:3000"))
  )
  .catch((error) => {
    throw error;
  });
