import React from "react";
import "./sidebar.css";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PeopleIcon from "@mui/icons-material/People";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AssessmentIcon from "@mui/icons-material/Assessment";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FeedbackIcon from "@mui/icons-material/Feedback";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Sidebar() {
  const history = useHistory();
  return (
    <div className="sidebar">
      <div className="sidebarwrapper">
        <div className="sidebarMenu">
          <h2 className="sidebarTitle">Dashboard</h2>
          <hr />
          <ul className="sidebarList">
            <li
              className="sidebarListItem active"
              onClick={() => history.push("./Home")}
            >
              <LineStyleIcon className="sidebarIcon" />
              Home (Active)
            </li>
            <li
              className="sidebarListItem"
              onClick={() => history.push("./Home")}
            >
              <TimelineIcon className="sidebarIcon" />
              Analytics (Active)
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Products</h3>
          <hr />
          <ul className="sidebarList">
            <li
              className="sidebarListItem active"
              onClick={() => history.push("/Product")}
            >
              <Inventory2Icon className="sidebarIcon " />
              Products (Active)
            </li>
            <li
              className="sidebarListItem"
              onClick={() => history.push("/add")}
            >
              <Inventory2Icon className="sidebarIcon " />
              Add Products (Active)
            </li>
            <li className="sidebarListItem">
              <MonetizationOnIcon className="sidebarIcon" />
              Transaction
            </li>
            <li className="sidebarListItem">
              <AssessmentIcon className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Users</h3>
          <hr />

          <ul className="sidebarList">
            <li
              className="sidebarListItem active"
              onClick={() => history.push("./Users")}
            >
              <PeopleIcon className="sidebarIcon" />
              Users (Active)
            </li>
            <li className="sidebarListItem ">
              <MailOutlineIcon className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <FeedbackIcon className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem ">
              <ChatBubbleOutlineIcon className="sidebarIcon " />
              Message
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
