import {GET_FACULTY, CREATE_FACULTY, UPDATE_FACULTY, DELETE_FACULTY} from '../types'

const initialState = {
    faculties:[],
    loading:true
}

export default function(state = initialState, action){
    switch(action.type){

        case GET_FACULTY:
        return {
            ...state,
            faculties:action.payload,
            loading:false

        }

        case CREATE_FACULTY:
            return {
                ...state,
                faculties: action.payload,
                loading:false
        }


        case UPDATE_FACULTY:
            let newFaculty = state.faculties.find(t => t.id === action.payload.id);
            newFaculty.title = action.payload.title;
            newFaculty.budget = action.payload.budget;
            return {               
                ...state,
                loading:false
        }   

        case DELETE_FACULTY:
            return {               
                ...state,
                users: action.payload,
                loading:false
        }   

        default: return state
    }
}