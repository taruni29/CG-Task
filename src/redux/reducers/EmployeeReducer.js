import * as actions from '../constants';

const initialState = {
    employeeData :[],
    employeeDetails :[],
    employeeOffers : []
};

export const employeeReducer = (state=initialState, action)=>{
    switch(action.type){
        case actions.GET_EMPLOYEE_DATA:
            return{
                ...state,
                employeeData: action.payload
            };
        case actions.GET_EMPLOYEE_SPORT_DATA:
        return{
            ...state,
            employeeDetails: action.payload
        };
        case actions.CLEAR_EMPLOYEE_DETAILS:
        return{
            ...state,
            employeeDetails: action.payload
        };
        case actions.GET_EMPLOYEE_OFFERS_DATA:
        return{
            ...state,
            employeeOffers: action.payload
        };
            default:
                return state;
    }
}