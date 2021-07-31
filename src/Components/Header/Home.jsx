import React from 'react'
import {AppBar, Tab, Tabs} from '@material-ui/core'
import Daily from "../../Pages/Daily";
import Grafik from "../../Pages/Grafik";

function Home(props){
    const { match, history } = props;
    console.log(`match : ${JSON.stringify(match)}, history : ${JSON.stringify(history)}`)
    const { params } = match;
    const { page } = params;
    const tabNameToIndex = {
        0: "daily",
        1: "graph"
    };

    const indexToTabName = {
        daily: 0,
        graph: 1
    };

    const [selectedTab, setSelectedTab] = React.useState(indexToTabName[page]);

    const handleCallToRouter = (event, newValue) => {
        history.push(`/c-19/${tabNameToIndex[newValue]}`);
        setSelectedTab(newValue)
    }
    return(
        <>
            <AppBar position="static">
                <Tabs
                    value={selectedTab}
                    onChange={handleCallToRouter}
                    indicatorColor="primary"
                    centered
                >
                    <Tab label="Daily" />
                    <Tab label="Grafik" />
                </Tabs>
            </AppBar>
            {selectedTab === 0 && <Daily />}
            {selectedTab === 1 && <Grafik />}
        </>
    )
}

export default Home
