import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import {
  FaCheckCircle,
  FaCaretDown,
  FaPlus,
  FaEllipsisV,
  FaGripVertical,
} from "react-icons/fa";

import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <div className="Content">
      <div class="buttonRow">
        <span id="threeDots" class="btn btn-outline-secondary">
          <FaEllipsisV />
        </span>

        <span id="EditButton" class="btn btn-danger">
          <FaPlus />
          Module
        </span>

        <span id="EditButton" class="btn btn-outline-secondary">
          <FaCheckCircle color="green" />
          Publish All
        </span>

        <span id="EditButton" class="btn btn-outline-secondary">
          View Progress
        </span>

        <span id="EditButton" class="btn btn-outline-secondary">
          Collapse All
        </span>
      </div>
      <hr />

      <ul className="list-group">
        <li className="list-group-item">
          <button
            className="btn btn-success"
            onClick={() => dispatch(addModule({ ...module, course: courseId }))}
          >
            Add
          </button>

          <button
            className="btn btn-primary"
            onClick={() => dispatch(updateModule(module))}
          >
            Update
          </button>

          <input
            className="form-control"
            value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }
          />
          <textarea
            className="form-control"
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }
          />
        </li>

        {modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <div className="HomeWeek" key={index}>
              <div className="HomeWeek">
                <div class="list-group-item list-group-item-secondary py-3">
                  <FaGripVertical />
                  <FaCaretDown />
                  <span Class="Week">{module.week}</span>

                  <div class="float-end">
                    <button
                      className="btn btn-danger"
                      onClick={() => dispatch(deleteModule(module._id))}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-success"
                      onClick={() => dispatch(setModule(module))}
                    >
                      Edit
                    </button>

                    <FaCheckCircle color="green" />
                    <FaCaretDown />
                    <FaPlus />
                    <FaEllipsisV />
                  </div>
                </div>
              </div>

              <div class="HomeItems">
                <div class="list-group-item py-3">
                  <FaGripVertical />
                  <span Class="Dimension1">
                    LEARNING OBJECTIVES - {module.name}
                  </span>
                  <div class="float-end">
                    <FaCheckCircle color="green" />
                    <FaEllipsisV />
                  </div>
                </div>
              </div>

              <div Class="HomeItemOItem">
                <div class="list-group-item py-3">
                  <FaGripVertical />
                  <span Class="Dimension1">{module.description}</span>
                  <div class="float-end">
                    <FaCheckCircle color="green" />
                    <FaEllipsisV />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </ul>
    </div>
  );
}
export default ModuleList;
