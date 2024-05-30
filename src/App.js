import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import TeacherTabs from "./components/TeacherTabs";

const App = () => {
  return (
    <Provider store={store}>
      <TeacherTabs />
    </Provider>
  );
};

export default App;
