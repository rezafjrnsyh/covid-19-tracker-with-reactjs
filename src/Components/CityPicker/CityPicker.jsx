import React, { useState, useEffect } from "react";
import { FormControl, NativeSelect  } from "@material-ui/core";

import { province } from "../../api";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(()=>({
  containerCity: {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width:'100%'
  },
  form:{
    width:'40vw',
    margin:'20px'
  }
}))

export default function CityPicker({ handleCity }) {
  const [city, setCity] = useState("");
  const [selected,setSelected]=useState('Semua')
  const styles = useStyles()


  useEffect(() => {
    async function getProvince() {
      const Province = await province();
      setCity(Province);
    }
    getProvince();
  }, []);

  const handleChange = (event) => {
    setSelected(event.target.value);
    handleCity(event.target.value)
  };

  if(!city){
      return "...loading"
  }

  return (
    <div className={styles.containerCity}>
      <FormControl className={styles.form} >
        <span>Silahkan pilih provinsi dibawah untuk melihat data :</span><br/>
        <NativeSelect defaultValue={selected} onChange={handleChange}>
          <option value={'Semua'}>Semua Provinsi</option>
      { city.data.map((city,i)=> <option key={i} value={city.provinsi}>{city.provinsi}</option> )}
        </NativeSelect>
      </FormControl>
    </div>
  );
}
