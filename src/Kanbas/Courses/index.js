import db from "../../Kanbas/Database";
import "./index.css";
import { FaGlasses, FaBars } from "react-icons/fa";
import CourseNavigation from "./CourseNavigation";
import { Navigate, Route, Routes, useParams } from "react-router-dom";

function Courses() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  const breadcrubDivider = {
    "--bs-breadcrumb-divider": "'>'",
  };
  const { navItem } = useParams();

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
                Home
                {/* Home {navItem} */}
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
            left: "500px",
            top: "50px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<h1>Home</h1>} />
            <Route path="Modules" element={<h1>Modules</h1>} />
            <Route path="Assignments" element={<h1>Assignments</h1>} />
            <Route
              path="Assignments/:assignmentId"
              element={<h1>Assignment Editor</h1>}
            />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>      
    </div>
  );
}
export default Courses;
