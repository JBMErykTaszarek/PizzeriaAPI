import React from 'react'
import { TextField } from '@material-ui/core'


export default function Input(props) {

    const {name, label,value,variant, onChanage,error=null, ...other} = props;
    return (
        <TextField variant={variant || "outlined"}
         label={label} 
         name={name} 
         value={value} 
         onChange={onChanage}
         {...other}
         {...(error && {error: true, helperText:error})} >

        </TextField>
    )
}
