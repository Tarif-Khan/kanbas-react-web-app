import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";

function CourseNavigation() {
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom Meetings",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
    "Panopto Video",
    "Discussions",
    "Announcements",
    "Pages",
    "Files",
    "Rubrics",
    "Outcomes",
    "Collaborations",
    "Syllabus",
    "Progress Reports (EAB Navigate)",
    "Settings",
  ];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
          <span className="profile-bar">
          <div id="CourseHeading">
            <small class="text-truncate">
              202410_1 Fall 2023 Semester Full Term
            </small>
          </div>

            {links.map((link, index) => (
              <Link
                key={index}
                to={`/Kanbas/Courses/${courseId}/${link}`}
                className={`list-group-item ${
                  pathname.includes(link) && "active"
                }`}
              >
                {link}
              </Link>
            ))}
          </span>
  );
}

export default CourseNavigation;
