//? Libs
const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

//? Controller
const {
  getAllEmployee,
  getSingleEmployee,
  createEmployee,
  deleteEmployee,
  updateEmployee,
} = require("../controller/organization");

//? Get all employee
router.get("/", async (req, res) => {
  try {
    const allEmployee = await getAllEmployee();
    res.status(200).json({
      success: true,
      message: "Successfully get all employee",
      data: allEmployee,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: "Failed to get all employee",
      error: error.message,
    });
  }
});

//? Get single employee
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const singleEmployee = await getSingleEmployee(+id);
    res.status(200).json({
      success: true,
      message: "Successfully get single employee",
      data: singleEmployee,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: "Failed to get single employee",
      error: error.message,
    });
  }
});

//? Create employee
router.post("/", async (req, res) => {
  const data = req.body;
  try {
    const createdEmployee = await createEmployee(data);
    res.status(200).json({
      success: true,
      message: "Successfully create employee",
      data: createdEmployee,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: "Failed to create employee",
      error: error.message,
    });
  }
});

//? Update employee
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  try {
    const editedEmployee = await updateEmployee(+id, data);
    res.status(200).json({
      success: true,
      message: "Successfully update employee",
      data: editedEmployee,
    });
  } catch (error) {
    console.log(error);
    res.status(200).json({
      success: false,
      message: "Failed to update employee",
      error: error.message,
    });
  }
});

//? Delete employee
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deletedEmployee = await deleteEmployee(+id);
    res.status(200).json({
      success: true,
      message: "Successfully delete employee",
      data: deletedEmployee,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: "Failed to delete employee",
      error: error.message,
    });
  }
});

module.exports = router;
