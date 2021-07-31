import React, {useEffect, useState} from 'react';
import CityPicker from "../Components/CityPicker/CityPicker";
import {Grid} from "@material-ui/core";
import Cards from "../Components/Card/Card";
import Graph from "../Components/Graph/Graph";
import {fetchData, province} from "../api";

function Grafik() {
    const [data, setData] = useState(null);
    useEffect(() => {
        async function getData() {
            const { data } = await fetchData();
            setData(data);
        }
        getData();
    }, []);

    const handleCity = async (city) => {
        if (city === "Semua") {
            try {
                const { data } = await fetchData();
                setData(data);
            } catch (error) {
                return error;
            }
        } else {
            try {
                const { data } = await province();
                const proiviceData = data.find((e) => e.provinsi === city);
                // const newObjData = {
                //   jumlahKasus: proiviceData.kasusPosi,
                //   sembuh: proiviceData.kasusSemb,
                //   meninggal: proiviceData.kasusMeni,
                // };
                setData(proiviceData);
            } catch (error) {
                return error;
            }
        }
    };
    return (
        <div>
            <Grid container style={{ width: "100%"}} spacing={1}>
                <CityPicker handleCity={handleCity} />
                <Grid container style={{ width: "100%"}} spacing={1}>
                    <Grid item xs={12} md={12}>
                        <Cards data={data} />
                        <Graph provinsi={data} />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default Grafik;
