import * as React from "react"
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"
import { SelectChangeEvent } from "@mui/material"
import { ShopContext } from "../../../../../contexts/ShopContext/ShopContext"

const InputGender = () => {
  const {valueRadioGender,setValueRadioGender,filterOptions, setFilterOptions } =React.useContext(ShopContext)

  const handleChange = (event: SelectChangeEvent) => {
    setFilterOptions({...filterOptions,genre:event.target.value as string});
  }
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Genêro</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue=""
        name="radio-buttons-group"
        onChange={handleChange}
      >
        <FormControlLabel value="" control={<Radio />} label="Todos" />
        <FormControlLabel value="Female" control={<Radio />} label="Feminino" />
        <FormControlLabel value="Male" control={<Radio />} label="Masculino" />
      </RadioGroup>
    </FormControl>
  )
}

export default InputGender
