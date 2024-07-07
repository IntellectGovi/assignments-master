const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, User, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    try{
        const existed = User.findOne({username : username});
        if(existed){
            return res.status(401).json({
                msg:"User already existed",
            })
        }

        await Admin.create({
            username:username,
            password : password,
        })

        res.json({
            msg:"Admin created Successfully"
        })
    }catch(e){
        console.log(e);
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    try{
        const newCourse = await Course.create({
            title:title,
            description:description,
            imageLink:imageLink,
            price:price
        })
    
        return res.status(200).json({
            message:"Course Created Successfully!",
            courseId : newCourse._id
        })
    }catch(e){
        console.log(error)
        return res.status(401).json({
            msg:"Error while creating course"
        })
    }
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    try{
        const response = Course.find({})

        res.json({
            courses:response,
        })
    }catch(e){
        return res.status(401).json({
            msg:"Error while fetching the message!"
        })
        console.log(error);
    }
});

module.exports = router;