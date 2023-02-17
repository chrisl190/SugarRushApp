import { useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
      case 'sign_up': {
        return {
            first_name: state.first_name,
            last_name: state.last_name,
            date_of_birth: state.date_of_birth,
            email: state.email,
            address_1: state.address_1,
            address_2: state.address_2,
            county: state.county,
            country: state.country,
            postcode: state.postcode,
            password: state.password,
            password_confirmation: state.password_confirmation,
            terms_and_conditions: state.terms_and_conditions,
        };
      }
      case 'industries': {
        return {
          industries: state.industries,
        };
      }
    }
    throw Error('Unknown action: ' + action.type);
  }

const initialState = {

};

const SignupReducer = useReducer(...reducer, initialState);