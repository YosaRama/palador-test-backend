const prisma = require("../database/index");

const getAllEmployee = async () => {
  const employee = await prisma.organization.findMany();
  return employee;
};

module.exports = {
  getAllEmployee: getAllEmployee,
};
