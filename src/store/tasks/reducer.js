import {STATE_STATUSES} from '../../constants';
import {success, error} from 'redux-saga-requests';
import {CREATE_TASK, GET_TASKS, DELETE_TASK, UPDATE_TASK} from './actions'

const initialState = {
  tasks: [],
  status: STATE_STATUSES.INIT
}

 const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case CREATE_TASK: {
      return {
        ...state,
        status: STATE_STATUSES.PENDING
      }
    }

    case success(CREATE_TASK): {
      return {
        ...state,
        status: STATE_STATUSES.READY
      }
    }

    case error(CREATE_TASK): {
      return {
        ...state,
        status: STATE_STATUSES.ERROR
      }
    }

    case DELETE_TASK: {
      return {
        ...state,
        status: STATE_STATUSES.PENDING
      }
    }

    case success(DELETE_TASK): {
      return {
        ...state,
        status: STATE_STATUSES.READY
      }
    }

    case error(DELETE_TASK): {
      return {
        ...state,
        status: STATE_STATUSES.ERROR
      }
    }

    case UPDATE_TASK: {
      return {
        ...state,
        status: STATE_STATUSES.PENDING
      }
    }

    case success(UPDATE_TASK): {
      return {
        ...state,
        status: STATE_STATUSES.READY
      }
    }

    case error(UPDATE_TASK): {
      return {
        ...state,
        status: STATE_STATUSES.ERROR
      }
    }

    case GET_TASKS: {
      return {
        ...state,
        status: STATE_STATUSES.PENDING
      }
    }

    case success(GET_TASKS): {
      return {
        ...state,
        tasks: action.data,
        status: STATE_STATUSES.READY
      }
    }

    case error(GET_TASKS): {
      return {
        ...state,
        status: STATE_STATUSES.ERROR
      }
    }

    default:
      return state;
  }
}




export default taskReducer