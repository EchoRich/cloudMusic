/* eslint-disable import/no-anonymous-default-export */
import {fromJS} from 'immutable'
import * as actionTypes from  './constants'
const defaultState =   fromJS({
singerList: [],
enterLoading: true, // 控制进场动画 
pullUpLoading: false , //控制上拉加载的动画 
pullDownLoading: false,
pageCount:  0  // 这里是当前页数 
})
export default  (state=defaultState, action) => {
  switch(action.type){
    case actionTypes.CHANGE_SINGER_LIST:
      return state.set('singerList',action.data)
      case  actionTypes.CHANGE_PAGE_COUNT:
        return state.set('pageCount', action.data)
        case actionTypes.CHANGE_ENTER_LOADING:
          return state.set('enterLoading',action.data)
          case actionTypes.CHANGE_PULLDOWN_LOADING: 
          return state.set("pullDownLoading",action.data)
          case actionTypes.CHANGE_PULLUP_LOADING:
            return state.set('pullUpLoading',action.data)
            default: 
            return state
  }
}