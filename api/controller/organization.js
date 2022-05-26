const prisma = require("../database/index");

const getAllEmployee = async () => {
  const employee = await prisma.organization.findMany();
  return employee;
};

const getSingleEmployee = async (id) => {
  const employee = await prisma.organization.findUnique({
    where: { employee_id: id },
  });
  return employee;
};

const createEmployee = async (data) => {
  const { name, managerId } = data;
  const latestId = await prisma.organization.findFirst({
    select: { employee_id: true },
    orderBy: { id: "desc" },
  });
  await prisma.organization.create({
    data: {
      employee_id: +latestId.employee_id + 1,
      name: name,
      manager_id: managerId ? managerId : null,
    },
  });
};

const updateEmployee = async (id, data) => {
  const { name, manager_id } = data;
  await prisma.organization.update({
    where: { employee_id: id },
    data: {
      name: name,
      manager_id: +manager_id,
    },
  });
};

const deleteEmployee = async (id) => {
  await prisma.organization.delete({
    where: { employee_id: id },
  });
};

module.exports = {
  getAllEmployee: getAllEmployee,
  getSingleEmployee: getSingleEmployee,
  createEmployee: createEmployee,
  updateEmployee: updateEmployee,
  deleteEmployee: deleteEmployee,
};
