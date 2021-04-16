import React from "react";
import styles from "./Task.module.scss";
import trueLogo from "../../../img/trueLogo.svg";
import falseLogo from "../../../img/falseLogo.svg";
import deleteLogo from "../../../img/delete.svg";
import { differenceInCalendarDays } from "date-fns";
import { deadlineHandler } from "../../../utils/common";
import {getTasks, updateTask, deleteTask} from '../../../store/tasks/actions';
import {useDispatch} from "react-redux";

const Task = (props) => {
  const { id, body, isDone, deadline } = props;
  const dispatch = useDispatch();

  const  doneHandler  = async () => {
    await dispatch(updateTask(id));
    await dispatch(getTasks());
  }

  const  deleteHandler  = async () => {
    await dispatch(deleteTask(id));
    await dispatch(getTasks());
  }

  

  const dayAmount = differenceInCalendarDays(new Date (deadline), new Date());
  const [text, color] = deadlineHandler(dayAmount);

  return (
    <div className={styles.wrapper}>
      <img
        src={isDone ? trueLogo : falseLogo}
        alt="Done/Undone button"
        className={styles.done}
        onClick={doneHandler}
      />
      <p
        className={styles.body}
        style={{ textDecoration: isDone ? "line-through" : "none" }}
      >
        {body}
      </p>
      <div className={styles.rightSide}>
        {isDone ? undefined : (
          <p className={styles.deadline} style={{ backgroundColor: color }}>
            {text}
          </p>
        )}

        <img
          src={deleteLogo}
          alt="Done/Undone button"
          className={styles.delete}
          onClick={deleteHandler}
        />
      </div>
    </div>
  );
};

export default Task;
