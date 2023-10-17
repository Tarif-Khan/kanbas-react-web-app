import { Link, useLocation } from "react-router-dom";
import './index.css';
import PNG from './NEU.png'
import { FaUser, FaTachometerAlt, FaBook, FaCalendar, FaInbox, FaClock, FaDesktop, FaChevronCircleRight, FaQuestionCircle } from 'react-icons/fa';

function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
  const { pathname } = useLocation();

  const linksToIconsMap = {
    Account: <FaUser className="text-secondary"/>,
    Dashboard: <FaTachometerAlt className="red-icon"/>,
    Courses: <FaBook className="red-icon"/>,
    Calendar: <FaCalendar className="red-icon"/>,
    Inbox: <FaInbox className="red-icon"/>,
    History: <FaClock className="red-icon"/>,
    Studio: <FaDesktop className="red-icon"/>,
    Commons: <FaChevronCircleRight className="red-icon"/>,
    Help: <FaQuestionCircle className="red-icon"/>
  };


  return (
    <div id="sidebar">
    <div className="list-group">
    <img src={PNG} class="list-group-item"></img>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}>
             {linksToIconsMap[link]}
          {link}
        </Link>
      ))}
    </div>
    </div>
  );



}
export default KanbasNavigation;