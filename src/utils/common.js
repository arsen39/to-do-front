import {RG_GRAD} from '../constants'

export const deadlineHandler = (dayAmount) => {
  if (dayAmount < 0) {
    return [`${dayAmount*-1} d. late`, RG_GRAD[0]]
  } else  if (dayAmount === 0) {
    return ["TODAY", RG_GRAD[1]]
  } else  if (dayAmount > 0 && dayAmount <= 3) {
    return [`${dayAmount} d. left`, RG_GRAD[2]]
  } else  if (dayAmount > 3 && dayAmount <= 7) {
    return [`${dayAmount} d. left`, RG_GRAD[3]]
  } else  if (dayAmount > 7 && dayAmount <= 14) {
    return [`${dayAmount} d. left`, RG_GRAD[4]]
  } else  if (dayAmount > 14 && dayAmount <= 30) {
    return [`${dayAmount} d. left`, RG_GRAD[5]]
  } else  if (dayAmount > 30) {
    return [`${dayAmount} d. left`, RG_GRAD[6]]
  }
};