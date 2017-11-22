//目的是合并各个页面的reducer.
import {combineReducers} from 'redux';
import {reducer as indexReducer} from "../pages/index/";
import {reducer as listReducer} from "../pages/list/";
export default  combineReducers({
    index:indexReducer,
    list:listReducer
})
    