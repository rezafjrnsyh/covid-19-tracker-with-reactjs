import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import {dailyDataVaccine} from '../../api/index'
import lansia from "../../assets/lansia.png"
import sdmk from "../../assets/sdmk.png"
import pekerja from "../../assets/petugas.png"

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "center",
    margin: "50px 5px",
  },
  root: {
    width: "80%",
    borderRadius: "20px",
    textAlign: "left",
    backgroundColor: '#f6ff47'
  },
  dataContainer:{
    display:'flex',
    margin:'10px 5px'
  },
  dataText:{
    marginLeft:30,
    display:"flex",
    flexDirection:'column',
    justifyContent:"start"
  },
  dataTitle:{
    color:'#696969',
    fontSize:18
  },
  dataSubTitle:{
    fontSize:27,
    fontWeight:"bold",
    color:'#999999'
  },
  title:{
      color:'#696969',
      marginLeft:10,
      fontSize:20
  },
  judulHari:{
    color: '#696969',
    paddingBottom:10,
    borderBottom:'1px solid grey',
    textAlign:'center'
  },
  update:{
      backgroundColor:"red",
      width:'60%',
      textAlign:'center',
      borderRadius:10,
      color:'#ebe8e8',
      fontWeight:'bold'
  },
  icon1:{
      height:'5vw',
      width:'5vw',
      marginLeft:20,
      backgroundColor:"grey",
      borderRadius:10
  },
  icon2:{
      height:"5vw",
      width:'5vw',
      marginLeft:20,
      borderRadius:'60%'
  }
}));

export default function SideCardVaccine() {
  const styles = useStyles();
  const [Data,setData]= useState()

  useEffect(()=>{
    async function getData(){
        const data = await dailyDataVaccine()
        setData(data)
    }
    getData()
  },[])

  if(!Data){
      return "...Loading"
  }

  return (
    <div className={styles.container}>
      <Card className={styles.root} raised={true}>
        <CardContent >
          <Typography className={styles.update}>Total Sasaran Vaksin</Typography>
          <Typography className={styles.title}>
              {Data.totalsasaran.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
          </Typography>
        </CardContent>
        <CardContent>
            <Typography className={styles.judulHari}>VAKSINASI</Typography>
        </CardContent>
          <div className={styles.dataContainer}>
            <CardMedia
            className={styles.icon1}
            image={lansia}
            />
            <div className={styles.dataText}>
            <Typography className={styles.dataTitle}>Vaksinasi Lansia </Typography>
            <Typography className={styles.dataSubTitle}>{Data.sasaranvaksinlansia.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</Typography>
            </div>
            </div>
            <div className={styles.dataContainer}>
            <CardMedia
            className={styles.icon2}
            image={sdmk}
            />
            <div className={styles.dataText}>
            <Typography className={styles.dataTitle}>Vaksinasi SDMK</Typography>
            <Typography className={styles.dataSubTitle}>{Data.sasaranvaksinsdmk.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</Typography>
            </div>
            </div>
            <div className={styles.dataContainer}>
            <CardMedia
            className={styles.icon2}
            image={pekerja}
            />
            <div className={styles.dataText}>
            <Typography className={styles.dataTitle}>Vaksinasi Petugas Publik</Typography>
            <Typography className={styles.dataSubTitle}>{Data.sasaranvaksinpetugaspublik.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</Typography>
            </div>
            </div>

      </Card>
    </div>
  );
}
