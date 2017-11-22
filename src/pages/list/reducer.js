import {CHANGE_LIST} from './actionTypes'

const defaultState= {
    list:[]
}

export default (state=defaultState,action)=>{
    if(action.type === CHANGE_LIST){
        const newState = Object.assign({},state)
        newState.list= action.value;
        return newState

    }
    return state
}