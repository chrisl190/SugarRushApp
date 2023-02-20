import {createSlice} from '@reduxjs/toolkit';
const UUID = require('pure-uuid');

const initialState = {
  first_name: '',
  last_name: '',
  date_of_birth: '',
  email: '',
  address_1: '',
  address_2: '',
  county: '',
  country: '',
  postcode: '',
  password: '',
  password_confirmation: '',
  terms_and_conditions: false,
  industries: [],
  experiences: [],
};

export const userSignup = createSlice({
  name: 'userSignup',
  initialState: initialState,
  reducers: {
    reset() {
      return initialState;
    },
    setNameFirst(state, action) {
      return {
        ...state,
        first_name: action.payload,
      };
    },
    setNameLast(state, action) {
      return {
        ...state,
        last_name: action.payload,
      };
    },
    setDateOfBirth(state, action) {
      return {
        ...state,
        date_of_birth: action.payload,
      };
    },
    setEmail(state, action) {
      return {
        ...state,
        email: action.payload,
      };
    },
    setAddress1(state, action) {
      return {
        ...state,
        address_1: action.payload,
      };
    },
    setAddress2(state, action) {
      return {
        ...state,
        address_2: action.payload,
      };
    },
    setCounty(state, action) {
      return {
        ...state,
        county: action.payload,
      };
    },
    setCountry(state, action) {
      return {
        ...state,
        country: action.payload,
      };
    },
    setPostcode(state, action) {
      return {
        ...state,
        postcode: action.payload,
      };
    },
    setPassword(state, action) {
      return {
        ...state,
        password: action.payload,
      };
    },
    setPasswordConfirmation(state, action) {
      return {
        ...state,
        password_confirmation: action.payload,
      };
    },
    setTermsAndConditions(state, action) {
      return {
        ...state,
        terms_and_conditions: action.payload,
      };
    },
    setIndustries(state, action) {
      return {
        ...state,
        industries: action.payload,
      };
    },
    setExperiences(state, action) {
      return {
        ...state,
        experiences: action.payload,
      };
    },
    addExperience(state, action) {
      const experience = {
        ...action.payload,
        id: new UUID(4).format('std'),
      };

      return {
        ...state,
        experiences: [...state.experiences, experience],
      };
    },
    removeExperience(state, action) {
      const experiencesNew = [...state.experiences];
      const experienceToDelete = experiencesNew.findIndex(
        e => e.id === action.payload,
      );

      if (experienceToDelete > -1) {
        experiencesNew.splice(experienceToDelete, 1);
      }

      return {
        ...state,
        experiences: experiencesNew,
      };
    },
  },
});

export const selectorUserSignup = state => state.userSignup;
