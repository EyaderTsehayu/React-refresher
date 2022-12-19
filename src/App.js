import React, { useState } from "react";
import "./App.css";
import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";

function App(props) {
  console.log(props.goals);
  const [courseGoals, setCourseGoals] = useState([
    { id: "cg1", text: "Finish the Course" },
    { id: "cg2", text: "Learn all about the course main topic" },
    { id: "cg3", text: "Help other students in Q&amp;A" },
  ]);

  const addNewGoalHandler = (newGoal) => {
    // setCourseGoals(courseGoals.concat(newGoal)); -- when we re render it many times the correct state of the course goal may not be got there.
    setCourseGoals((prevCourseGoals) => prevCourseGoals.concat(newGoal));
    // courseGoals.push(newGoal);
    // console.log(courseGoals);
  };

  return (
    <div className="course-goal">
      <h2>Course Goal</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />

      <GoalList goals={courseGoals} />
    </div>
  );
}

export default App;
