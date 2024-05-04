import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const Header = () => {
    const [theme, setTheme] = useState("");

    //   document.documentElement.classList.add(theme);
    useEffect(() => {
        if (theme) {
            document.body.removeAttribute("class")

            document.body.classList.add(theme);
        }
    }, [theme]);
    return (
        <>

            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Next Js Application
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            - TODO Tasks application
                        </Typography>
                        <DarkModeIcon onClick={() => {
                            setTheme("dark")
                        }} className={theme == "dark" ? "active" : ""} />
                        <LightModeIcon onClick={() => {
                            setTheme("light")
                        }} className={theme == "light" ? "active" : ""} />
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};

export default Header;