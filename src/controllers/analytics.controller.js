const Post = require("../models/Post");

const getDashboardAnalytics = async (req, res, next) => {
  try {
    const analytics = await Post.aggregate([
      {
        $facet: {
          // 1️⃣ Total posts + average content length
          totalStats: [
            {
              $group: {
                _id: null,
                totalPosts: { $sum: 1 },
                avgContentLength: {
                  $avg: { $strLenCP: "$content" }
                }
              }
            }
          ],

          // 2️⃣ Posts grouped by status
          postsByStatus: [
            { $sortByCount: "$status" }
          ],

          // 3️⃣ Top 5 authors with user details
          topAuthors: [
            {
              $group: {
                _id: "$authorId",
                postCount: { $sum: 1 }
              }
            },
            { $sort: { postCount: -1 } },
            { $limit: 5 },
            {
              $lookup: {
                from: "users",   // MongoDB collection name
                localField: "_id",
                foreignField: "_id",
                as: "authorDetails"
              }
            },
            { $unwind: "$authorDetails" },
            {
              $project: {
                postCount: 1,
                authorName: "$authorDetails.name"
              }
            }
          ],

          // 4️⃣ Recent 5 posts
          recentPosts: [
            { $sort: { createdAt: -1 } },
            { $limit: 5 },
            {
              $lookup: {
                from: "users",
                localField: "authorId",
                foreignField: "_id",
                as: "authorDetails"
              }
            },
            { $unwind: "$authorDetails" },
            {
              $project: {
                title: 1,
                status: 1,
                createdAt: 1,
                authorName: "$authorDetails.name"
              }
            }
          ]
        }
      }
    ]);

    res.status(200).json({
      success: true,
      data: analytics[0]
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getDashboardAnalytics
};
