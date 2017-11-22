import {CHANGE_INDEX,CHANGE_FOOT}  from './actionTypes'

export const getActionIndex=(value)=>({
    type:CHANGE_INDEX,
    value:value
})

export const getActionIndexFoot=(value)=>({
    type:CHANGE_FOOT,
    value:value
})