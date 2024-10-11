import React, { useRef, useState } from 'react'
import { Field } from './Field'
import { v4 as uuidv4 } from 'uuid';
import { IEditViewProps, User } from '../types/types';
import { Box, Button, Divider } from '@mui/material';
import { EditOff, ModeEdit, Save } from '@mui/icons-material';
import { useAppDispatch } from '../app/hooks';
import { saveFormFields } from '../features/AppState/appStateReducer';
import { getArrayOfFields } from '../helpers/functions';

export const EditView = (props: IEditViewProps) => {
  const { userInfo, userSkills, userInterests } = props
  const [isEditForm, setIsEditForm] = useState<boolean>(false)
  const fields = getArrayOfFields(userInfo)

  const initialRef = {
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
    interest: "",
    skill: "",
    education: "",
    experience: 0,
    salary: 0,
    job_title: "",
    description: "",
    notes: ""
  }

  const formRef = useRef<User>(initialRef)
  
  const dispatch = useAppDispatch()

  const handleEdit = ()=>setIsEditForm(!isEditForm)

  const handleSave = ()=>dispatch(saveFormFields(formRef.current))

  return (
    <>
      <Box display="flex" justifyContent='flex-end'>
        <Button
          disabled={!isEditForm}
          sx={{ color: 'black'}} 
          startIcon={<Save/>}
          onClick={handleSave}/>
        <Button 
          sx={{ color: 'black', justifyContent:"flex-end"}} 
          startIcon={isEditForm?<EditOff/>:<ModeEdit />}
          onClick={handleEdit}/>
      </Box>
      <Divider orientation='horizontal' sx={{ my: "20px" }} />
      <form
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px"
        }}
      >
        {
          fields.map(field => (
            <Field
              isEditField={isEditForm}
              customRef={formRef}
              key={uuidv4()}
              name={field.name}
              type={field.type}
              label={field.label}
              controlEl={field.controlEl}
              data={field.data}
              userSkills={userSkills}
              userInterests={userInterests}
            />
          ))
        }
      </form>
    </>
  )
}
