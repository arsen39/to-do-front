import React, {useState} from 'react';
import styles from './TaskInput.module.scss';
import addLogo from '../../img/add.svg';
import calendarLogo from '../../img/calendar.svg';
import { differenceInCalendarDays, format } from "date-fns";
import {getTasks, createTask} from '../../store/tasks/actions';
import {useDispatch} from "react-redux";

const TaskInput = () => {
  const [date, setDate] = useState(format(new Date(),"Y-MM-dd"))
  const [body, setBody] = useState("")
  const dispatch = useDispatch();
  
  const dataHandler = ({target:{value}}) => {
    setDate(value);
  }

  const bodyHandler = ({target:{value}}) =>{
    setBody(value)
  }

  const  createHandler  = async () => {
    await dispatch(createTask({body, deadline: date}));
    await dispatch(getTasks());
  }


  return (
    <div className={styles.wrapper}>
      <input type="text" className={styles.textInput} value={body} onChange={bodyHandler}/>
      <img src={addLogo} alt="Add Task" className={styles.addBtn} onClick={createHandler}/>
      {/* <img src={calendarLogo} alt="Set Date" className={styles.calBtn}/> */}
      <input type="date" value={date} onChange={dataHandler} className={styles.dataInput}/>
    </div>
  );
}

export default TaskInput;
