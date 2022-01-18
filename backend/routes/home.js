const router = require("express").Router();
const verify = require("./verifyToken");
const User = require("../model/User");


router.get("/", verify, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user });
    res.json(user);
  } catch (err) {
    res.json({ message: err });
  }
});

router.put("/save", verify, async (req, res) => {
  let updatedUser = {};
  const user = await User.findOne({ _id: req.user });

  try {
    if (req.body.isSaved === true) {
      updatedUser = await User.updateOne(
        { _id: req.user },
        { $push: { savedCountries: req.body.savedCountry } }
      );
    }
    if (req.body.isSaved === false) {
      updatedUser = await User.updateOne(
        { _id: req.user },
        {
          $pull: {
            savedCountries: { iataCode: req.body.savedCountry.iataCode },
          },
        }
      );
    }
    res.json("saved successfully");
  } catch (error) {
    res.json("save failed");
  }
});


module.exports = router;
