import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
import png from "./card.png";
import {FaBook} from 'react-icons/fa';

function Dashboard() {
  const courses = db.courses;
  return (
      <div className="col">
        <div className="myRow">
          <div className="TitleFlex">
            <div className="Title">Dashboard</div>

            <hr />

            <div className="SubHeader">
              <div className="Title">Published Courses (6)</div>
              <hr />
            </div>
            
            <div className="col">
            <div class="col-sm-3 col-md-6 col-lg-8">
              <div className="row cardRow">
                {courses.map((course) => (
                  <div className="card px-0">
                    <img src={png} className="card-img-top" />


                    <div class="card-body">
                      <h5 class="card-title text-truncate">
                        <Link
                          key={course._id}
                          to={`/Kanbas/Courses/${course._id}`}
                        >
                          {course.name}
                        </Link>
                      </h5>


                      <p class="card-text">{course.number}</p>
                      <p class="card-text text-truncate">
                        <small>202410_1 Fall 2023 Semester Full Term</small>
                      </p>
                      <p class="card-text">
                      <i><FaBook /></i>
                      </p>
                    </div>
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
