import React from "react";

// Will render out just tasks
export function OverviewList(props) {
  const listItems = props.tasks.map((task) => <li key={task.toString()}>{task}</li>);
  return <ol className="list Container">{listItems}</ol>;
}
