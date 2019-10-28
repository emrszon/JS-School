import {UPDATE_DISPLAY, SEARCH } from '../actions/userAction';

export default function userReducer(state={
    search: '',
    diplay: false,
    isList: false
},{type, payload}){
    switch(type){
        case UPDATE_DISPLAY:
            return payload.user;
        case SEARCH:
            return payload.user;
        default:
            return state;
    }

} 