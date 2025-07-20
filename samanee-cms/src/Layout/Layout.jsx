import { AppBar, Container, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import DrawerNav from "../components/DrawerNav";
import SideBar from "../components/Sidebar";
import AppRouter from "../routes/AppRouter";
import React from "react";

function Layout() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
    const [drawerOpen, setDrawerOpen] = useState(false);

    const location = useLocation();
    const isLoginPage = location.pathname === "/login";

    const handleDrawerToggle = () => {
        setDrawerOpen((prev) => !prev);
    };

    return (
        <>
            {!isLoginPage &&
                (isSmallScreen ? (
                    <DrawerNav open={drawerOpen} onClose={handleDrawerToggle} />
                ) : (
                    <SideBar />
                ))},
            <AppBar />
            <Container
                sx={{
                    transition: "margin 0.3s ease",
                    display: 'flex',
                    flexDirection: 'column',

                    height: 'auto',
                    width: isSmallScreen ? '100%' : '80vw',
                    marginTop: isSmallScreen ? 8 : 0,
                    marginRight: isSmallScreen ? 2 : 0,
                    right: isSmallScreen ? 0 : 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    padding: 0,
                    margin: 0,
                    overflow: "hidden"
                }}
            >
                <AppRouter />
            </Container>
        </>
    );
}

export default Layout;