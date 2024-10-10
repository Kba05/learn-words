import { HTMLInputTypeAttribute, useRef } from "react"

export interface AppState {
    user: User
    words: Word[]
    value: number
    signIn: ISignIn
    skills: string[]
    interests: string[]
}
export interface ISignIn {
    error: boolean
    error_text: string
    success: boolean
}
export interface User {
    login: string;
    first_name: string;
    last_name: string;
    email: string;
    birth_date: string; // ISO date format
    age: number;
    is_active: boolean;
    country: string;
    city: string;
    address: string;
    phone: string;
    interest: string;
    skill: string;
    education: string;
    experience: number;
    salary: number;
    job_title: string;
    description: string;
    notes: string;
}

export interface Word {
    id: Number,
    category: String
    name: String
    type: String
    meaning: String
    example: String
    translate: Array<String>
}

export interface WordCardProps {
    cardData: Word,
}

export interface CardsProps {
    cardsData: Word[],
}

export interface ISignInData {
    login: string,
    password: string
}

export interface IMockFetchData {
    data: User | Array<Word> | null
    error: boolean;
    errorText: string;
}

export type mockFetchAction = 'sign_in' | 'get_words'


export interface IProfileField {
    label: string
    type: HTMLInputTypeAttribute
    controlEl: string
    name: keyof User
    data: User
}

export interface IEditViewProps {
    fields: IProfileField[]
    userInterests:string[]
    userSkills:string[]
}
export type FormRef = Record<keyof User, string|HTMLElement|null|number|boolean>
export type FormRefCurr = {current:FormRef}

export interface IFieldProps extends IProfileField {
    isEditField:boolean
    customRef?:FormRefCurr
    userInterests:string[]
    userSkills:string[]
}

