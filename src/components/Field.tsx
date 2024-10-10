import React from 'react'
import { IFieldProps } from '../types/types';


export const Field = (props:IFieldProps) => {
  const {label, type, defaultValue, userSkills, userInterests, ref} = props;
  return (
    <div>    
      <label>{label}</label>
      {
        typeof defaultValue !=='boolean' && type !== 'select'? 
          <input type={type} defaultValue={defaultValue}/>
        : null
      }
      {
        typeof defaultValue !=='number' && typeof defaultValue !== 'string' && type !== 'select'
        ? 
        <input type={type} checked={defaultValue}/>
        : null
      }
      {
        type === 'select' && typeof defaultValue !=='boolean'?
          label === "Skill"  ?
          <select value={defaultValue}>
            {userSkills.map(el=><option>{el}</option>)}
          </select>
          :
          <select value={defaultValue}>
            {userInterests.map(el=><option>{el}</option>)}
          </select>
          :
          null
      }
      
    </div>

  )
}
