import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
  setModules,
} from "./modulesReducer";
import { findModulesForCourse, createModule } from "./client";
import * as client from "./client";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  useEffect(() => {
    findModulesForCourse(courseId).then((modules) =>
      dispatch(setModules(modules))
    );
  }, [courseId]);

  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

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
          <button className="btn btn-success" onClick={handleAddModule}>
            Add
          </button>

          <button className="btn btn-primary" onClick={handleUpdateModule}>
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
                      onClick={() => handleDeleteModule(module._id)}
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
