const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const articleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } //this argument tells the mongoose to add a createdAt and updatedAt fields to the schema.
);
module.exports = mongoose.model("Article", articleSchema);
