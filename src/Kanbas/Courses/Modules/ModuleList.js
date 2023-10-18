import React from "react";
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

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (


<div className="Content">
    <div class="buttonRow">
        <span id="threeDots" class="btn btn-outline-secondary">
        <FaEllipsisV /></span>

        <span id="EditButton" class="btn btn-danger">
        <FaPlus />Module</span>

        <span id="EditButton" class="btn btn-outline-secondary">
        <FaCheckCircle color="green" />Publish All</span>

        <span id="EditButton" class="btn btn-outline-secondary">View Progress</span>

        <span id="EditButton" class="btn btn-outline-secondary">Collapse All</span>

       
    </div>
    <hr />
                    
    <ul className="list-group">
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
