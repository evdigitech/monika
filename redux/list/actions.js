import {
  UNIVERSITY_DATA,
  UNIVERSITY_DATA_SUCCESS,
  UNIVERSITY_DATA_ERROR,
} from "../actions";

export const universityAction = (data)=>({
    type:UNIVERSITY_DATA,
    payload:data,
});

export const universitySuccessAction = (data)=>({
    type:UNIVERSITY_DATA_SUCCESS,
    payload:data,
});
export const universityErrorAction = (error)=>({
    type:UNIVERSITY_DATA_ERROR,
    payload:error,
});