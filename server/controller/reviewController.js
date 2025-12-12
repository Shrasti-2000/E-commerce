const Review = require("../models/reviewModel")

const addReview = async(req , res) => { 
    const { rating, comment } = req.body;
  const review = await Review.create({
    user: req.user.uid,
    product: req.params.pid,
    rating,
    comment
  });
  res.status(201).json(review);
}

const getReview = async(req , res) => { 
   const review  = await Review.find({ product: req.params.pid }).populate("user", "name");
      if (!review) {
        res.status(404)
        throw new Error("Reviews Not Found!")
    } else {
        res.status(200).json(review)
    }
}


module.exports = {addReview, getReview}