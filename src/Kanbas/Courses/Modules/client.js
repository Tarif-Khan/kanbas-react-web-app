import axios from "axios";

// const MODULES_URL = "http://localhost:4000/api/modules";
// const MODULES_URL =
//   "https://kanbas-node-server-app-cs1234-sp23.onrender.com/api/modules";
// Testing
const API_BASE = process.env.REACT_APP_API_BASE;
const MODULES_URL = `${API_BASE}/api/modules`;
const COURSES_URL = `${API_BASE}/api/courses`;
console.log(MODULES_URL);
console.log(COURSES_URL);

export const createModule = async (courseId, module) => {
  const response = await axios.post(
    `${COURSES_URL}/${courseId}/modules`,
    module
  );
  console.log(response);
  return response.data;
};

export const findModulesForCourse = async (courseId) => {
  const response = await axios.get(`${COURSES_URL}/${courseId}/modules`);
  return response.data;
};

export const deleteModule = async (moduleId) => {
  const response = await axios.delete(`${MODULES_URL}/${moduleId}`);
  return response.data;
};

export const updateModule = async (module) => {
  const response = await axios.put(`${MODULES_URL}/${module._id}`, module);
  return response.data;
};
