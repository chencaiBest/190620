/*
reduer函数：根据原有的state和指定的action，产生并返回一个新的state
*/


import {
  DECREEMENT,
  INCREEMENT
} from './action-types'

export default function count (state=1 ,action ){
  switch (action.type){
    case INCREEMENT:
      return state + action.data
    case DECREEMENT:
      return state - action.data
    default :
      return this.state
  }
}