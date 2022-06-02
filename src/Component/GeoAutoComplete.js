import { Autocomplete, TextField } from "@mui/material";
import { autoCompleteService } from "../services/map";


const options = ["lci", '2sdf']
export function GeoAutoComplete(props) {


  const autocomplete = async (e,a)=>{
    // console.log("a ===> ",a)
    const resp = await autoCompleteService(a.inputValue).catch((e)=>{
      console.log(e)
    })
    console.log(resp)
    return e
  }

  return (
    <Autocomplete
      options={options}
      renderInput={(params) => <TextField {...params} label="Movie" />}
      filterOptions={autocomplete}
    />
  )
}