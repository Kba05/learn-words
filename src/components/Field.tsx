import React from 'react'
import { IFieldProps } from '../types/types';
import { Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';


export const Field = (props: IFieldProps) => {
  const {
    name,
    label,
    type,
    data,
    controlEl,
    userSkills,
    userInterests,
    customRef,
    isEditField
  } = props

  const defaultValue = data[name]

  const date = (type === "date" && typeof defaultValue === 'string') ? defaultValue.slice(0, 10) : ''
  const defValue = type !== "date" ? defaultValue : date

  const selectOptions = name === "interest" ? userInterests : userSkills
  const select = <FormControl fullWidth variant={isEditField?'filled':'outlined'}>
    <InputLabel>{label}</InputLabel>
    <Select
      slotProps={{
        input: {
          readOnly: isEditField,
        }
      }}
      defaultValue={defaultValue}
      label={label}
      onChange={(event)=> customRef!.current[name] = event.target.value}
    >
      {selectOptions.map(el => <MenuItem key={uuidv4()} value={el}>{el}</MenuItem>)}
    </Select>
  </FormControl>


  const textInput = <TextField
    slotProps={{
      input: {
        readOnly: isEditField,
      }
    }}
    fullWidth
    label={label}
    variant={isEditField?'filled':'outlined'}
    type={type}
    multiline={controlEl === "MultiLine"}
    defaultValue={defValue}
    onChange={(event)=>customRef!.current[name] = event.target.value}
  />

  const checkBox = <FormControl fullWidth>
    <FormControlLabel
      disabled={isEditField}
      control={
        <Checkbox 
          defaultChecked={typeof defaultValue === 'boolean' && defaultValue}  
          onChange={(event=>customRef!.current[name] = event.target.checked)}
        />}
      label={label}
    />
  </FormControl>


  return (
    <>
      {(controlEl === "TextField" || controlEl === "MultiLine") && textInput}
      {controlEl === "Checkbox" && checkBox}
      {controlEl === "Select" && select}
    </>
  )
}
