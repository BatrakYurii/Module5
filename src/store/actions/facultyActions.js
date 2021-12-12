import {GET_FACULTY, CREATE_FACULTY, UPDATE_FACULTY, DELETE_FACULTY, FACULTY_ERROR} from '../types'
import axios from 'axios'

export const getFaculty = () => async dispatch => {
    
    try{
        const res = await axios.get(`https://localhost:44395/api/Faculty`)
        dispatch( {
            type: GET_FACULTY,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: FACULTY_ERROR,
            payload: console.log(e),
        })
    }
}

export const createFaculty = (faculty) => async (dispatch) => {
    try{
        debugger;
        await axios.post(`https://localhost:44395/api/Faculty`, faculty)
        const res = await axios.get(`https://localhost:44395/api/Faculty`)

        dispatch({
            type: CREATE_FACULTY,
            payload: res.data
        })
    }
    catch(e){
        dispatch({
            type: FACULTY_ERROR,
            payload: console.log(e),
        })
    }
}

export const updateFaculty = (faculty) => async (dispatch) => {
    try{
        debugger;
        await axios.put(`https://localhost:44395/api/Faculty`, faculty)

        dispatch({
            type: UPDATE_FACULTY,
            payload: faculty
        })
    }
    catch(e){
        dispatch({
            type: FACULTY_ERROR,
            payload: console.log(e),
        })
    }
}

export const deleteFaculty = (id) => async (dispatch) => {
    try{
        debugger;
        await axios.delete(`https://localhost:44395/api/Faculty/${id}`)

        dispatch({
            type: DELETE_FACULTY,
            payload: id
        })
    }
    catch(e){
        dispatch({
            type: FACULTY_ERROR,
            payload: console.log(e),
        })
    }
}