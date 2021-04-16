import styles from "./App.module.scss";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { Provider } from "react-redux";
import store from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <div className={styles.appWrapper}>
        <div className={styles.appInnerWrapper}>
          <TaskInput />
          <TaskList />
        </div>
      </div>
    </Provider>
  );
}

export default App;
