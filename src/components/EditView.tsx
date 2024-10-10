import React, { useRef, useState } from 'react'
import { Field } from './Field'
import { v4 as uuidv4 } from 'uuid';
import { FormRef, IEditViewProps } from '../types/types';
import { Box, Button, Divider } from '@mui/material';
import { ModeEdit, Save } from '@mui/icons-material';

export const EditView = (props: IEditViewProps) => {
  const { fields, userSkills, userInterests } = props
  const [isEditForm, setIsEditForm] = useState<boolean>(false)
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
  const formRef = useRef<FormRef>(initialRef)

  const saveFormFields = ()=>{
    console.log(formRef.current)
  }
  const handleEditSave = ()=>{
    if(!isEditForm){
      saveFormFields()
    }
    setIsEditForm(!isEditForm)
  }

  return (
    <>
      <Box display="flex" justifyContent='flex-end'>
        <Button 
          sx={{ color: 'black', justifyContent:"flex-end"}} 
          startIcon={isEditForm?<ModeEdit />:<Save/>}
          onClick={handleEditSave}
        >
          {isEditForm?'Edit':'Save'}
        </Button>
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
