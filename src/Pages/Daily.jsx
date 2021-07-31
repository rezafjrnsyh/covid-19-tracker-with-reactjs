import React from 'react';
import SideCard from "../Components/SideCard/SideCard";
import SideCardVaccine from "../Components/SideCard/SideCardVaccine";
import {Grid} from "@material-ui/core";

function Daily() {
    return (
        <div style={{width:'100%'}}>
            <h1>Information Daily</h1>
            <Grid container style={{ width: "100%"}} spacing={1}>
                <Grid item xs={12}style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                    <Grid item xs={12} md={5}>
                        <SideCard/>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <SideCardVaccine/>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default Daily;
