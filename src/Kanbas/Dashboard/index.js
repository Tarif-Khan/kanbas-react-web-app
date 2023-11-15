import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
import png from "./card.png";
import { FaBook } from "react-icons/fa";
import { React, useState, useEffect } from "react";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  const paddingLeft = {
    paddingLeft: "30px",
    paddingBottom: "10px",
  };

  return (
    <div className="col">
      <div className="myRow">
        <div className="TitleFlex">
          <div className="Title">Dashboard</div>

          <hr />

          <div className="SubHeader">
            <div className="Title">Published Courses ({courses.length})</div>
            <hr />
          </div>

          <div className="col">
            <div class="col-sm-3 col-md-6 col-lg-8">
              <div className="row cardRow">
                <div style={paddingLeft}>
                  <h5>Course</h5>
                  <input
                    value={course.name}
                    className="form-control"
                    onChange={(e) =>
                      setCourse({ ...course, name: e.target.value })
                    }
                  />

                  <input
                    value={course.number}
                    className="form-control"
                    onChange={(e) =>
                      setCourse({ ...course, number: e.target.value })
                    }
                  />
                  <input
                    value={course.startDate}
                    className="form-control"
                    type="date"
                    onChange={(e) =>
                      setCourse({ ...course, startDate: e.target.value })
                    }
                  />
                  <input
                    value={course.endDate}
                    className="form-control"
                    type="date"
                    onChange={(e) =>
                      setCourse({ ...course, endDate: e.target.value })
                    }
                  />

                  <button className="btn btn-success" onClick={addNewCourse}>
                    Add
                  </button>

                  <button
                    className="btn btn-primary"
                    onClick={() => updateCourse(course)}
                  >
                    Update
                  </button>
                </div>
                {courses.map((course) => (
                  <div className="card px-0">
                    <img src={png} className="card-img-top" />

                    <div class="card-body">
                      <h5 class="card-title text-truncate">
                        <Link
                          key={course._id}
                          to={`/Kanbas/Courses/${course._id.$oid}`}
                        >
                          {course.name}
                        </Link>
                      </h5>

                      <p class="card-text">{course.number}</p>
                      <p class="card-text text-truncate">
                        <small>202410_1 Fall 2023 Semester Full Term</small>
                      </p>
                      <p class="card-text">
                        <i>
                          <FaBook />
                        </i>
                      </p>
                    </div>

                    <button
                      className="btn btn-danger"
                      onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}
                    >
                      Delete
                    </button>

                    <button
                      className="btn btn-warning"
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                    >
                      Edit
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
