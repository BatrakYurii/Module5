import {GET_SUBJECTS, GET_SUBJECT, CREATE_SUBJECT, UPDATE_SUBJECT, DELETE_SUBJECT} from '../types'

const initialState = {
    subjects:[],
    loading:true
}

export default function(state = initialState, action){
    switch(action.type){

        case GET_SUBJECTS:
        return {
            ...state,
            subjects:action.payload,
            loading:false

        }

        case GET_SUBJECT:
            return {
                ...state,
                subjects:action.payload,
                loading:false
        }

        case CREATE_SUBJECT:
            return {
                ...state,
                subjects: action.payload,
                loading:false
        }


        case UPDATE_SUBJECT:
            let newSubject = state.subjects.find(t => t.id === action.payload.id);
            newSubject.title = action.payload.title;
            newSubject.teacher = action.payload.teacher;
            return {
                ...state,
                loading:false
        }

        case DELETE_SUBJECT:
            return {
                ...state,
                subjects:state.subjects.filter(({ id }) => id !== action.payload),
                loading:false
            }
        default: return state
    }
}