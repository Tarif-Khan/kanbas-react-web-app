import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import {
  FaCheckCircle,
  FaCaretDown,
  FaPlus,
  FaEllipsisV,
  FaGripVertical,
  FaBook,
} from "react-icons/fa";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const fontWeightSt = {
    fontweight: 700,
  };

  const roundedPill = {
    outline: "solid thin black",
    padding: "8px",
  };

  const bookStyling = {
    paddingleft: "10px",
    color: "green",
  };

  const smallTextStyling = {
    margintop: 20,
    marginleft: 100,
  };

  const w40 = {
    width: "40px",
  };

  const marginR = {
    marginright: "700px",
  };

  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div>
      <div class="Content">
        <div id="buttonRow">
          <buttton
            id="EditButton"
            class="btn btn-outline-secondary float-end"
            style={w40}
          >
            <FaEllipsisV />
          </buttton>

          <buttton id="EditButton" class="btn btn-danger float-end">
            <FaPlus />
            Assignment
          </buttton>

          <buttton id="EditButton" class="btn btn-outline-secondary float-end">
            <FaPlus />
            Group
          </buttton>

          <input
            class="form-control w-25"
            placeholder="Search for Assignment"
            style={marginR}
          />
        </div>

        <hr />
        <div className="list-group">
          <div class="HomeWeek">
            <div class="list-group-item list-group-item py-3">
              <FaGripVertical />
              <FaCaretDown />
              <span class="Week" style={fontWeightSt}>
                Assignments
              </span>
              <div class="float-end">
                <span class="rounded-pill" style={roundedPill}>
                  40% of Total
                </span>
                <FaCheckCircle color="green" />
                <FaCaretDown />
                <FaPlus />
                <FaEllipsisV />
              </div>
            </div>
          </div>
          {courseAssignments.map((assignment) => (
            <Link
              key={assignment._id}
              to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            >
              <div class="HomeItemOItem">
                <div class="list-group-item py-3">
                  <FaGripVertical />
                  <FaBook style={bookStyling} />
                  <span class="Dimension1">{assignment.title}</span>

                  <div class="float-end">
                    <FaCheckCircle color="green" />
                    <FaEllipsisV />
                  </div>

                  <div style={smallTextStyling}>
                    <small class="text-secondary">
                      Week 0 - SETUP - Week starting on Monday September 5th
                      (9/5/2022) Module | <br />
                      Due Sep 18, 2022 at 11:59pm | 100 pts
                    </small>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div class="list-group"></div>
    </div>
  );
}
export default Assignments;
