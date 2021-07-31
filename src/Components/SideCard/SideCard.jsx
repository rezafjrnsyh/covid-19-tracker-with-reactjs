import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import {  dailyData  } from '../../api/index'
import IconVirus from "../../assets/icon.png"
import smile from "../../assets/smile.png"
import death from "../../assets/death.png"

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
    backgroundColor: '#48ff3b'
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
      marginLeft:10
  },
  judulHari:{
    color: '#696969',
    paddingBottom:10,
    borderBottom:'1px solid grey',
    textAlign:'center'
  },
  update:{
      backgroundColor:"red",
      width:'40%',
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
      borderRadius:10
  }
}));

export default function SideCard() {
  const styles = useStyles();
  const [NewUpdate,setDate]= useState()
  const [Case,setCase]=useState()

  useEffect(()=>{
    async function getData(){
        const data = await dailyData()
        const lastUpdateData = data[data.length-1]
        setDate(new Date().toDateString())
        setCase(lastUpdateData)
    }
    getData()
  },[])

  if(!Case){
      return "...Loading"
  }

  return (
    <div className={styles.container}>
      <Card className={styles.root} raised={true}>
        <CardContent >
          <Typography className={styles.update}>Last Update </Typography>
          <Typography className={styles.title}>
            {NewUpdate}
          </Typography>
        </CardContent>
        <CardContent>
            <Typography className={styles.judulHari}>UPDATE PER HARI</Typography>
        </CardContent>
          <div className={styles.dataContainer}>
            <CardMedia
            className={styles.icon1}
            image={IconVirus}
            />
            <div className={styles.dataText}>
            <Typography className={styles.dataTitle}>Positif</Typography>
            <Typography className={styles.dataSubTitle}>{Case.positif.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</Typography>
            </div>
            </div>
            <div className={styles.dataContainer}>
            <CardMedia
            className={styles.icon2}
            image={smile}
            />
            <div className={styles.dataText}>
            <Typography className={styles.dataTitle}>Sembuh</Typography>
            <Typography className={styles.dataSubTitle}>{Case.sembuh.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</Typography>
            </div>
            </div>
            <div className={styles.dataContainer}>
            <CardMedia
            className={styles.icon2}
            image={death}
            />
            <div className={styles.dataText}>
            <Typography className={styles.dataTitle}>Meninggal</Typography>
            <Typography className={styles.dataSubTitle}>{Case.meninggal.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</Typography>
            </div>
            </div>

      </Card>
    </div>
  );
}
