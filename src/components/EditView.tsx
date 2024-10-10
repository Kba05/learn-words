import React from 'react'
import { Field } from './Field'
import { v4 as uuidv4 } from 'uuid';
import { IEditViewProps } from '../types/types';

export const EditView = (props:IEditViewProps) => {
  const { fields, userSkills, userInterests } = props;
  return (
    <form
      style={{
        display:"flex",
        flexDirection:"column"
      }} 
    >
      {
        fields.map(field=>(
          <Field 
            key={uuidv4()} 
            type={field.type} 
            label={field.label} 
            defaultValue={field.defaultValue} 
            selectValue={field.selectValue}
            userSkills={userSkills}
            userInterests={userInterests}
          />
        ))
      }
    </form>
  )
}
