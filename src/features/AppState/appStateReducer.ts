import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { AppState, User} from '../../types/types'
import { fetchMock } from '../../mocks/mockServer'


const initialSignIn = {
  error: false,
  error_text: '',
  success: false
}
const initialUser = {
  login: "",
  first_name: "",
  last_name: "",
  email: "",
  birth_date: "",
  age: 0,
  is_active: false,
  country: "",
  city: "",
  address: "",
  phone: "",
  interest: '',
  skill: '',
  education: "",
  experience: 0,
  salary: 0,
  job_title: "",
  description: "",
  notes: ""
}

const initialInterests =  [
  "programming",
  "music",
  "sports",
  "gaming",
  "travel",
  "photography"
]
const initialSkills = [
  "JavaScript",
  "Python",
  "HTML",
  "CSS",
  "Java",
  "C++",
  "SQL"
]

const initialState: AppState = {
  user: initialUser,
  words: [],
  value: 0,
  signIn: initialSignIn,
  skills:initialSkills,
  interests: initialInterests,
}
enum API_ACTIONS {
  SIGN_IN = 'sign_in',
  GET_WORDS = 'get_words',
  GET_WORDS_CATEGORIES = 'get_words_categories'
}

export const signInFetch = createAsyncThunk('appData/signInFetch', async (payload:any) => {
  const user = await fetchMock(API_ACTIONS.SIGN_IN, payload);
  return user
});

export const getWordsWithCategoriesFetch = createAsyncThunk('appData/getWordsWithCategoriesFetch', async () => {
  const words = await fetchMock(API_ACTIONS.GET_WORDS)
  return words
});


export const appStateSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    signOut: (state) => {
      state.signIn = initialSignIn
    },
    saveFormFields: (state, payload:PayloadAction<User>)=>{
      const data = payload.payload
      state.user = data
    }
  },
  extraReducers(builder) {
    builder
    .addCase(signInFetch.fulfilled, (state, {payload}: PayloadAction<any>) => {
      if(!payload.error) state.signIn.success = true
      state.user = payload.data
      state.signIn.error = payload.error
      state.signIn.error_text = payload.errorText
    })
    .addCase(getWordsWithCategoriesFetch.fulfilled, (state, {payload}: PayloadAction<any>) => {
      state.words = payload.data
    })
  }
})

export const { signOut, saveFormFields} = appStateSlice.actions

export const selectUser = (state: RootState) => state.appState.user
export const selectWords = (state: RootState) => state.appState.words
export const selectSignInInfo = (state:RootState)=> state.appState.signIn
export const selectUserSkills = (state:RootState)=> state.appState.skills
export const selectUserInterests = (state:RootState)=> state.appState.interests

export default appStateSlice.reducer