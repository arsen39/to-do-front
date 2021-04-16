import React, { useEffect, useState } from "react";
import {STATE_STATUSES} from '../../constants';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styles from "./TaskList.module.scss";
import Loader from "../Loader";
import Task from "./Task";
import { getTasks } from "../../store/tasks/actions";

const testData = [
  { id: 1, body: "Hello world", isDone: false, deadline: new Date("04-16-21") },
];

const TaskList = () => {
  const { tasks, status } = useSelector((store) => store.taskReducer);
  const dispatch = useDispatch();
  
  useEffect (()=>{
    if (status === STATE_STATUSES.INIT) {
      dispatch(getTasks());
    }
  })

  const lineConstructor = (array) =>
    array.map((o, i) => (
      <Task
        id={o.id}
        body={o.body}
        isDone={o.isDone}
        deadline={o.deadline}
        key={o.id}
      />
    ));

  return (
    <div className={styles.wrapper}>
      {lineConstructor(tasks)}
      {status === "pending" ? <Loader /> : undefined}
    </div>
  );
};

export default TaskList;
