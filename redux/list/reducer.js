import {
    UNIVERSITY_DATA,
    UNIVERSITY_DATA_SUCCESS,
    UNIVERSITY_DATA_ERROR,
  } from "../actions";

  const initialState ={
    university_details_data: [],
    universityLoading:false,
    Error:'',
  };

  const universityListReducer = (state = initialState,actions) => {    
    switch (actions.type) {
       
        case UNIVERSITY_DATA:
        return {
          ...state,
          university_details_data: actions.payload,
          itemListLoading:true,
          Error:'',
        };
        case UNIVERSITY_DATA_SUCCESS:
        return {
          ...state,
          university_details_data:actions.payload,
          universityLoading:false,
          Error:'',
        };
  
        case  UNIVERSITY_DATA_ERROR:
        return {
          ...state,
          universityLoading:false,
          Error:message
        };
      default:
        return {
          ...state,
        };
    }
  };
  export default universityListReducer;
  