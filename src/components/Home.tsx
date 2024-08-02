import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Operation from "./Operation";
import Record from "./Record";

const Home: React.FC = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <div className="container">
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Operations" value="1" />
                        <Tab label="Records" value="2" />
                    </TabList>
                </Box>
                <TabPanel value="1"><Operation /></TabPanel>
                <TabPanel value="2"><Record /></TabPanel>
            </TabContext>
        </div>
    );
};

export default Home;