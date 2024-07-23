const RatingAndReview = require("../models/RatingAndReview")
const Course = require("../models/Course");
const mongoose = require("mongoose");

// Create a new rating and review
exports.createRating = async (req,res)=>{
  try {
    const userId = req.user.id;
    const {rating, review,courseId} = req.body;

    // Check if the user is enrolled in the course
    const courseDetails= await Course.find({
        _id: courseId,
        studentsEnrolled: {$elemMatch: { $eq: userId }}
    });
 
    if(!courseDetails){
        return res.status(404).json({
        success:false,
        message: "Student not enrolled in course"
       })
    }
         // Check if the user has already reviewed the course
     const alreadyReviewed =await RatingAndReview.findOne({ 
        user:userId,
        course:courseId
     })
 
     if(alreadyReviewed){
         return res.status(404).json({
            success: false,
            message: "Already reviewed"
        })
     }
     //creae a new rating and review
     const ratingReview= await RatingAndReview.create({
         rating,
         review,
         course:courseId,
         user:userId
     })
 
     // Add the rating and review to the course
     await Course.findByIdAndUpdate(courseId, {
        $push:{
           ratingAndReviews: ratingReview
        }
    })
    await courseDetails.save()
 
    return res.status(200).json({
        success: true,
        message: "Rating and review added successfully",
        ratingReview,
    })
  } 
  catch (error) {
    console.log(error);
    return res.status(500).json({message: error.message}); 
  }
}


exports.getAverageRating = async (res,req)=>{
    try {
        const courseId = req.body.courseId;

        // Calculate the average rating using the MongoDB aggregation pipeline
        const result= await RatingAndReview.aggregate([
            {
               $match:{
                  course:new mongoose.Types.ObjectId(courseId),
                }
            },
            {
               $group:{
                  _id:null,
                  averageRating: {$avg:"$rating"}
                }
            }
        ]) 

        if(result.length > 0) {
            return res.status(200).json({
                success:true,
                averageRating: result[0].averageRating
            })
        }
        //if no ratings are found, then return 0 as default rating
        return res.status(200).json({success:true, averageRating:0}) 
    } 
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Failed to retrieve the rating for the course",
            error: error.message,
        })
    }
};

// Get all rating and reviews
exports.getAllRatingReview = async (req,res) => {
    //get sorted by rating
    try {
        const allReviews = await RatingAndReview.find({})
            .sort({rating: "desc" })
            .populate({
               path: "user",
               select: "firstName lastName email image"
            })
            .populate({
               path: "course",
               select: "courseName"
            })
            .exec();
            
        return res.status(200).json({
            success: true,
            message:"all reviews fetched successfully",
            data:allReviews,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Failed to retrieve the rating and review for the course",
        })
    }
}
