const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/auth");
import {Course} from "../db"

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  try {
    const isExisted = await Admin.findOne({
      username: username,
      password: password,
    });

    if (!isExisted) {
      Admin.create({
        username: username,
        password: password,
      });
    }
    res.status(403).json({
      msg: "User already exist !",
    });
  } catch (error) {
    console.log(error);
    return res.status(403).json({
      msg: "error while signing in",
    });
  }
});

router.post("/signin", (req, res) => {
  // Implement admin signup logic

  const username = req.body.usename;
  const password = req.body.password;

  try {
    const isExist = Admin.find({
      username: username,
      password: password,
    });

    if (!isExist) {
      return res.status(403).json({
        msg: "Error while signing in!",
      });
    }
    const token = jwt.sign({ username }, JWT_SECRET);

    res.json({
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(403).json({
      msg: "Error while signing in",
    });
  }
});

router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const imageLink = req.body.imageLink;
  const price = req.body.price;

  const newCourse = Course.create({
    title:title,
    description:description,
    imageLink:imageLink,
    price:price,
  })

  return res.json({
    newCourse
  })
  
});

router.get("/courses", adminMiddleware, async(req, res) => {
  // Implement fetching all courses logic
  const response = await Course.find({});

    res.json({
        courses: response
    })
});

module.exports = router;
