import {GET_SUBJECTS, CREATE_SUBJECT, UPDATE_SUBJECT, DELETE_SUBJECT, SUBJECTS_ERROR} from '../types'
import axios from 'axios'

export const getSubjects = (facultyId) => async dispatch => {
    
    try{
        const res = await axios.get(`https://localhost:44395/api/Subject/${facultyId}`)
        dispatch( {
            type: GET_SUBJECTS,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: SUBJECTS_ERROR,
            payload: console.log(e),
        })
    }
}


export const createSubject = (subject) => async (dispatch) => {
    try{
        await axios.post(`https://localhost:44395/api/Subject`, subject)
        const res = axios.get(`https://localhost:44395/api/Subject/${subject.facultyId}`)

        dispatch({
            type: CREATE_SUBJECT,
            payload: res.data
        })
    }
    catch(e){
        dispatch({
            type: SUBJECTS_ERROR,
            payload: console.log(e),
        })
    }
}

export const updateSubject = (subject) => async (dispatch) => {
    try{
        await axios.put(`https://localhost:44395/api/Subject`, subject)

        dispatch({
            type: UPDATE_SUBJECT,
            payload: subject
        })
    }
    catch(e){
        dispatch({
            type: SUBJECTS_ERROR,
            payload: console.log(e),
        })
    }
}

export const deleteSubject = (id) => async (dispatch) => {
    try{
        debugger;
        await axios.delete(`https://localhost:44395/api/Subject/${id}`)

        dispatch({
            type: DELETE_SUBJECT,
            payload: id
        })
    }
    catch(e){
        dispatch({
            type: SUBJECTS_ERROR,
            payload: console.log(e),
        })
    }
}