import express from "express";
import Review from "../models/reviewModel.js";

const router = express.Router();

// Create a new review
router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message, rating } = req.body;
    const newReview = new Review({ name, email, subject, message, rating });
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ message: "Error creating review", error });
  }
});

// Get all reviews
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 }); // Sort by newest first
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Error fetching reviews", error });
  }
});

// Update a review
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params; //request eke parameter walin id ek gannwa
    const updatedReview = await Review.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedReview) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.status(200).json(updatedReview);
  } catch (error) {
    res.status(500).json({ message: "Error updating review", error });
  }
});

// Delete a review
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedReview = await Review.findByIdAndDelete(id);
    if (!deletedReview) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.status(200).json({ message: "Review deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting review", error });
  }
});

export default router;
//path eka hadanwa