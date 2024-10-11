export const TEXTFIELD = {
    type: "text",
    controlEl: "TextField"
}
export const TYPE_OF_FIELDS = {
    login: TEXTFIELD,
    first_name: TEXTFIELD,
    last_name: TEXTFIELD,
    job_title: TEXTFIELD,
    country: TEXTFIELD,
    city: TEXTFIELD,
    address: TEXTFIELD,
    education: TEXTFIELD,
    email: {
        type: "email",
        controlEl: "TextField"
    },
    birth_date: {
        type: "date",
        controlEl: "TextField"
    },
    age: {
        type: "number",
        controlEl: "TextField"
    },
    is_active: {
        type: "checkbox",
        controlEl: "Checkbox"
    },
    phone: {
        type: "tel",
        controlEl: "TextField"
    },
    interest: {
        type: "select",
        controlEl: "Select"
    },
    skill: {
        type: "select",
        controlEl: "Select"
    },
    experience: {
        type: "number",
        controlEl: "TextField"
    },
    salary: {
        type: "number",
        controlEl: "TextField"
    },
    description: {
        type: "text",
        controlEl: "MultiLine"
    },
    notes: {
        type: "text",
        controlEl: "MultiLine"
    }
}

export const initialInterests = [
    "programming",
    "music",
    "sports",
    "gaming",
    "travel",
    "photography"
]
export const initialSkills = [
    "JavaScript",
    "Python",
    "HTML",
    "CSS",
    "Java",
    "C++",
    "SQL"
]

export enum ROUTES {
    MAIN = "/",
    LOGIN = "/login",
    CARDS = "/cards",
    PROFILE = "/profile"
}

export enum API_ACTIONS {
    SIGN_IN = 'sign_in',
    GET_WORDS = 'get_words',
}

