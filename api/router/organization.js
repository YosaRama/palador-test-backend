//? Libs
const express = require("express");
const router = express.Router();

//? Controller
const { getAllEmployee } = require("../controller/organization");

router.get("/", async (req, res) => {
  const allEmployee = await getAllEmployee();
  res.status(200).json({
    success: true,
    data: allEmployee,
    message: "This is Organization",
  });
});

module.exports = router;
