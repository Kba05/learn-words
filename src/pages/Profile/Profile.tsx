import React from 'react'
import { EditView } from '../../components/EditView'
import { IProfileField, User } from '../../types/types'
import { useAppSelector } from '../../app/hooks'
import { selectUser, selectUserInterests, selectUserSkills } from '../../features/AppState/appStateReducer'

const TYPE_OF_FIELDS={
    login: "text",
    first_name: "text",
    last_name: "text",
    email: "email",
    birth_date: "date",
    age: 'number',
    is_active: 'checkbox',
    country: "text",
    city: "text",
    address: "text",
    phone: "tel",
    interest: 'select',
    skill: 'select',
    education: "text",
    experience: "number",
    salary: "number",
    job_title: "text",
    description: "text",
    notes: "text"
}
function formatPropertyName(propertyName: string): string {
  return propertyName
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

const getArrayOfFields = (userField: User) => {
  const arrOffields = []
  let key:keyof User
  for (key in userField) {
    const label = formatPropertyName(key)
    const type = TYPE_OF_FIELDS[key]
    const defaultValue = userField[key]
    arrOffields.push({label,type, defaultValue})
  }
  console.log(arrOffields)
  return arrOffields
}

export const Profile = () => {
  const userInfo = useAppSelector(selectUser)
  const userSkills = useAppSelector(selectUserSkills)
  const profileFields: IProfileField[] = getArrayOfFields(userInfo)
  const userInterests = useAppSelector(selectUserInterests)
  return (
    <EditView fields={profileFields} userSkills={userSkills} userInterests={userInterests}/>
  )
}
