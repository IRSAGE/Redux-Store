import React, { useState } from "react";
import TeacherTabContent from "./TeacherTabContent";
import { Tab, Tabs } from "@mui/material";

const TeacherTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div>
      <Tabs value={activeTab} onChange={handleChange}>
        <Tab label="Teacher One" />
        <Tab label="Teacher Two" />
      </Tabs>
      {activeTab === 0 && <TeacherTabContent teacher="teacherOne" />}
      {activeTab === 1 && <TeacherTabContent teacher="teacherTwo" />}
    </div>
  );
};

export default TeacherTabs;
