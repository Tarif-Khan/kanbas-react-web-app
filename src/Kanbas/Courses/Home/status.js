import './index.css'
import {
    FaCheckCircle,
    FaBan,
    FaFileImport,
    FaChevronCircleRight,
    FaBullseye,
    FaChartBar,
    FaSpeakerDeck,
    FaBell,
    FaCalendarAlt,

  } from "react-icons/fa";
  
  const paddingBTN = {
   paddingbottom: "20px"
  };

  const widthBTN = {
    width: "120px"
  }

  const red = {
    color:"red"
  }

function Status(){
    return(
        <div class="Status">
            <span class="StatusHead">Course Status</span>
            <div class="btn-group" style={paddingBTN}>
                <button type="button" style={widthBTN}
                    class="btn btn-outline-secondary">
                    <span>
                        <FaBan />
                    </span> Unpublish</button>
                <button type="button" style={widthBTN} class="btn btn-success">
                    <span>
                        <FaCheckCircle />
                    </span>Published</button>
            </div>

            <button type="button" class="btn btn-outline-secondary">
                <span><FaFileImport /></span> Import Existing Content
            </button>

            <button type="button" class="btn btn-outline-secondary">
                <span><FaChevronCircleRight /></span> Import From
                Commons
            </button>

            <button type="button" class="btn btn-outline-secondary">
                <span><FaBullseye /></span> Choose Home Page
            </button>

            <button type="button" class="btn btn-outline-secondary">
                <span><FaChartBar /></span> View Course Stream
            </button>

            <button type="button" class="btn btn-outline-secondary">
                <span><FaSpeakerDeck /></span> New Announcement
            </button>

            <button type="button" class="btn btn-outline-secondary">
                <span><FaChartBar /></span> New Analytics
            </button>

            <button type="button" class="btn btn-outline-secondary">
                <span><FaBell /></span> View Course Notifications
            </button>

            <span class="StatusHead">To Do</span>
            <hr />
            <span class="toDo">1 <span>Grade A1 - ENV + HTML</span></span>
            <small>100 points | Sep 18 at 11:59pm </small>

            <span class="Coming"> <span class="StatusHead">Coming Up</span> <span class="cal"> <FaCalendarAlt />
             <span class="cal2"><span
                            >View
                            Calendar</span></span></span> </span>
            <hr />
            <span>
            <FaCalendarAlt /> <span>
                    <span class="toDoItem">Lecture</span>
                    <div class="desc">
                        <small>
                            CS4550.12631.202410
                            <br />
                            Sep 11 at 11:45am
                        </small>
                    </div>
                </span>
            </span>

            <span>
            <FaCalendarAlt /> <span>
                    <span class="toDoItem">CS5610 06 SP23 Lecture</span>
                    <div class="desc">
                        <small>
                            CS4550.12631.202410
                            <br />
                            Sep 11 at 6pm
                        </small>
                    </div>
                </span>
            </span>

            <span>
            <FaCalendarAlt /> <span>
                    <span class="toDoItem">CS5610 Web development Summer 1 2023 -
                        LECTURE</span>
                    <div class="desc">
                        <small>
                            CS4550.12631.202410
                            <br />
                            Sep 11 at 7pm
                        </small>
                    </div>
                </span>
            </span>

            <small style={red}>12 more in the next week...</small>
        </div>
    );
}export default Status





           
