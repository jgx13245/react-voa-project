import {CHANGE_INDEX} from './actionTypes'
import {CHANGE_FOOT} from './actionTypes'

const defaultState ={
    Index:{
        list:[],
        list1:[]
    }
}

export default  (state=defaultState,action)=>{
    if(action.type===CHANGE_INDEX){
        //Object 首字母要大写 
        const newState = Object.assign({},state);
        newState.Index.list = action.value;
        console.log(newState)
        return  newState;
    }
    if(action.type===CHANGE_FOOT){
        const newState = Object.assign({},state);
        newState.Index.list1 = action.value;
        return  newState;
    }
    return state;
}

