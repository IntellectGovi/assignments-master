const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { Course, User } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    try {
        await User.create({
            username:username,
            password:password
        })

        return res.status(200).json({
            msg:"Successfully created the user!"
        })
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            msg:"Error while creating new user"
        })
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({})
    res.json({
        courses:response
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;

    await User.findOne({
        username:username,
    },{
        "$push":{
            coursePurchased:courseId,
        }
    })
    res.json({
        msg:"Course purchased !"
    })
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;
    const user = User.findOne({
        username
    })

    const courses = await Course.find({
        _id:{
            "$in":user.coursePurchased
        }
    })

    res.json({
        courses:courses
    })
});

module.exports = router