import db from "../../Kanbas/Database";
import "./index.css";
import { FaGlasses, FaBars } from "react-icons/fa";
import CourseNavigation from "./CourseNavigation";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import Modules from "./Modules/index";
import { useLocation } from "react-router-dom";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import { useState, useEffect } from "react";
import axios from "axios";

function Courses() {
  const { courseId } = useParams();
  const breadcrubDivider = {
    "--bs-breadcrumb-divider": "'>'",
  };
  const URL = "http://localhost:4000/api/courses";
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(`${URL}/${courseId}`);
    console.log(response);
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  const routeConfig = {
    Home: "Home",
    Modules: "Modules",
    Assignments: "Assignments",
    Grades: "Grades",
    Piazza: "Piazza",
    "Zoom%20Meetings": "Zoom Meetings",
    Quizzes: "Quizzes",
    People: "People",
    "Panopto%20Video": "Panopto Video",
    Discussions: "Discussions",
    Announcements: "Announcements",
    Pages: "Pages",
    Files: "Files",
    Rubrics: "Rubrics",
    Outcomes: "Outcomes",
    Collaborations: "Collaborations",
    Syllabus: "Syllabus",
    "Progress%20Reports%20(EAB%20Navigate)": "Progress Reports (EAB Navigate)",
    Settings: "Settings",
  };

  // Determine the label for the breadcrumb based on the current route
  const location = useLocation();
  const currentRoute = location.pathname.split("/").pop();
  var breadcrumbLabel = routeConfig[currentRoute];
  const lastTwoParts = location.pathname.split("/").slice(-2);

  const courseAssignment = db.assignments.find(
    (assignment) => assignment._id === lastTwoParts[1]
  );

  // Check if the last part is "Assignments" and there's something after it
  if (lastTwoParts.length === 2 && lastTwoParts[0] === "Assignments") {
    breadcrumbLabel = routeConfig[
      lastTwoParts.join("/")
    ] = `Assignments > ${courseAssignment.title}`;
  }

  console.log("Tarif");
  console.log(currentRoute);
  console.log(lastTwoParts);
  console.log(
    (routeConfig[lastTwoParts.join("/")] = `Assignments > ${course.name}`)
  );

  return (
    <div class="col">
      <div class="Heading d-none d-md-block">
        <button class="btn btn-outline-secondary float-end">
          <i>
            <FaGlasses color="black"></FaGlasses>
            <span color="black">Student View</span>
          </i>
        </button>
        <h2>
          <nav style={breadcrubDivider} aria-label="breadcrumb">
            <ol class="breadcrumb">
              <i>
                <FaBars color="red" size={20}></FaBars>
              </i>
              <li class="breadcrumb-item CourseTitle">
                <a href="">{course.name}</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                {" "}
                {breadcrumbLabel}
              </li>
            </ol>
          </nav>
        </h2>
      </div>

      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "400px",
            top: "100px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;
