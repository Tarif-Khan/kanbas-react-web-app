import db from "../../Database";
import { useParams } from "react-router-dom";
import "./index.css";
import { FaSearch, FaCog, FaFileExport, FaFileImport } from "react-icons/fa";

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter(
    (assignment) => assignment.course === courseId
  );
  const enrollments = db.enrollments.filter(
    (enrollment) => enrollment.course === courseId
  );
  const width40 = {
    width: "40px",
  };

  const width100 = {
    width: "100px",
  };

  const f6d20 = {
    fontWeight: "600px",
    fontSize: "20px",
  };

  return (
    <div>
      <div className="buttonRow">
        <button
          id="EditButton"
          class="btn btn-outline-secondary float-end"
          style={width40}
        >
          <FaCog />
        </button>

        <button
          class="btn btn-outline-secondary dropdown-toggle dropdown"
          type="button"
          id="Export"
        >
          <FaFileExport /> Export
        </button>

        <button class="btn btn-outline-secondary float-end" style={width100}>
          <FaFileImport /> Import
        </button>
      </div>

      <form class="form-inline">
        <div class="row">
          <div class="col-md-6 form-group mb-3">
            <label for="student-names" style={f6d20}>
              Student Names:
            </label>

            <select class="form-select" id="student-names">
              <option value="N/A">
                <span>
                  <FaSearch />
                  Search Students
                </span>
              </option>
              {enrollments.map((enrollment) => {
                const user = db.users.find(
                  (user) => user._id === enrollment.user
                );
                return <option value={user.firstName}>{user.firstName}</option>;
              })}
            </select>
          </div>
          <div class="col-md-6 form-group mb-3">
            <label for="assignment-names" style={f6d20}>
              Assignment Names:
            </label>
            <select class="form-select" id="assignment-names">
              <option value="N/A">
                <span>
                  <FaSearch />
                  Search Assignment
                </span>
              </option>
              {assignments.map(({ title }) => (
                <option value={title}>{title}</option>
              ))}
            </select>
          </div>
        </div>
        <a
          href="#"
          id="EditButton"
          class="btn btn-outline-secondary"
          style={width100}
        >
          <i class="fas fa-filter"></i>Apply Filters
        </a>
      </form>

      <h1>Grades</h1>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <th>Student Name</th>
            {assignments.map((assignment) => (
              <th>{assignment.title}</th>
            ))}
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find(
                (user) => user._id === enrollment.user
              );
              return (
                <tr>
                  <td>
                    {user.firstName} {user.lastName}
                  </td>
                  {assignments.map((assignment) => {
                    const grade = db.grades.find(
                      (grade) =>
                        grade.student === enrollment.user &&
                        grade.assignment === assignment._id
                    );
                    return <td>{grade?.grade || ""}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Grades;
