import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseOutlined from "@mui/icons-material/CloseOutlined";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import BookIcon from "@mui/icons-material/Book";
import NoteIcon from "@mui/icons-material/Note";
import Home from "@mui/icons-material/Home";
import Announcement from "@mui/icons-material/Announcement";
import SubjectOutlined from "@mui/icons-material/SubjectOutlined";
import DesignServices from "@mui/icons-material/DesignServices";
import ProductionQuantityLimits from "@mui/icons-material/ProductionQuantityLimits";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import DetailsOutlined from "@mui/icons-material/DetailsOutlined";

import EventIcon from "@mui/icons-material/Event";
import SubscriptionIcon from "@mui/icons-material/Subscriptions";
import PaymentIcon from "@mui/icons-material/Payment";
import ArticleIcon from "@mui/icons-material/Article";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
// import logo from "../assets/logo/physics-wallah-logo-7C6D7E25BB-seeklogo.com.png";
// import { Collapse } from "@mui/material";
import { useState } from "react";
import React from "react";
// import {
//     PasswordOutlined,
//     InfoOutlined,
//     FeedbackOutlined,
//     ContactMailOutlined,
//     PhoneOutlined,
//     EditOutlined,
//     VisibilityOutlined,
//     AddCircleOutline,
// } from "@mui/icons-material";

const drawerWidth = 240;

const items = [
    { icon: <Home />, text: "Heroes", to: "/" },
    { icon: <Announcement />, text: "Announcement", to: "/announcement" },
    { icon: <SubjectOutlined />, text: "Our Clients", to: "/clients" },
    { icon: <DesignServices />, text: "Products", to: "/products" },
    { icon: <ProductionQuantityLimits />, text: "Products Category", to: "/productCategory" },
    { icon: <InfoOutlined />, text: "Who we are", to: "/who-we-are" },
    { icon: <DetailsOutlined />, text: "Testimonials", to: "/testimonials" },
];

// const settingsItems = [
//     { icon: <PasswordOutlined />, text: "Change Password", to: "/change-password" },
//     { icon: <InfoOutlined />, text: "About Us", to: "/about-us" },
//     { icon: <FeedbackOutlined />, text: "Testimonials", to: "/testimonials" },
//     { icon: <ContactMailOutlined />, text: "Contact Us", to: "/contact-us" },
//     { icon: <ContactMailOutlined />, text: "Meta Data", to: "/meta-data" },
//     { icon: <PhoneOutlined />, text: "Get in touch", to: "/get-in-touch" },
// ];

// const blogItems = [
//     { icon: <VisibilityOutlined />, text: "Blogs", to: "/blog" },
//     { icon: <AddCircleOutline />, text: "Add Blog", to: "/add-blog" },
//     { icon: <EditOutlined />, text: "Blog Categories", to: "/Category-blog" },
// ];

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "space-between",
}));

export default function DrawerNav({ open, onClose }) {
    const theme = useTheme();
    const [, setSettingsOpen] = useState(false);
    const [, setBlogsOpen] = useState(false);

    const toggleSettings = () => {
        setSettingsOpen((prev) => !prev);
    };

    const toggleBlogs = () => {
        setBlogsOpen((prev) => !prev);
    };

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} elevation={0}>
                <Toolbar sx={{ paddingLeft: open ? `${drawerWidth}px` : 0 }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={onClose}
                        edge="start"
                        sx={{
                            marginRight: 2,
                            ...(open && { display: "none" }),
                        }}
                    >
                        <MenuIcon sx={{ marginLeft: 2 }} />
                    </IconButton>
                    {/* <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            justifyContent: "flex-end",
                            paddingRight: "0",
                        }}
                    >
                        <img
                            src={logo}
                            alt="logo"
                            style={{
                                padding: ".2rem 0 .2rem .2rem",
                                width: "40px",
                                height: "auto",
                                objectFit: "contain",
                                filter: "invert(1) brightness(2)",
                            }}
                        />
                    </Box> */}
                </Toolbar>
            </AppBar>

            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box",
                        background: theme.palette.primary.main,
                        color: theme.palette.primary.contrastText,
                        transition: theme.transitions.create("transform", {
                            easing: theme.transitions.easing.easeOut,
                            duration: theme.transitions.duration.standard,
                        }),
                        overflowY: "auto",
                        "&::-webkit-scrollbar": { display: "none" },
                        msOverflowStyle: "none",
                        scrollbarWidth: "none",
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
                onClose={onClose}
            >
                <DrawerHeader>
                    <IconButton onClick={onClose} sx={{ color: theme.palette.primary.contrastText }}>
                        <CloseOutlined />
                    </IconButton>
                </DrawerHeader>
                <List>
                    {items.map(({ text, icon, to, isExpandable }) => (
                        <Box key={text}>
                            <ListItem disablePadding>
                                <Link
                                    to={isExpandable ? "#" : to || "/home"}
                                    style={{
                                        textDecoration: "none",
                                        color: theme.palette.primary.contrastText,
                                        width: "100%",
                                    }}
                                >
                                    <ListItemButton
                                        onClick={
                                            isExpandable
                                                ? text === "Blogs"
                                                    ? toggleBlogs
                                                    : toggleSettings
                                                : undefined
                                        }
                                        sx={{
                                            paddingLeft: 2,
                                            paddingRight: 2,
                                            "&:hover": { background: theme.palette.primary.light },
                                            fontFamily: "'Roboto', sans-serif",
                                            fontSize: "16px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        <ListItemIcon
                                            sx={{
                                                color: theme.palette.primary.contrastText,
                                                minWidth: "auto",
                                                marginRight: 1,
                                            }}
                                        >
                                            {icon}
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={text}
                                            sx={{
                                                marginLeft: 0,
                                                color: theme.palette.primary.contrastText,
                                            }}
                                        />
                                    </ListItemButton>
                                </Link>
                            </ListItem>

                            {/* Settings Dropdown */}
                            {/* {text === "Settings" && isExpandable && (
                                <Collapse in={settingsOpen} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        {settingsItems.map(({ text, icon, to }) => (
                                            <ListItem key={text} disablePadding>
                                                <Link
                                                    to={to}
                                                    style={{
                                                        textDecoration: "none",
                                                        color: theme.palette.primary.contrastText,
                                                        width: "100%",
                                                    }}
                                                >
                                                    <ListItemButton
                                                        sx={{
                                                            paddingLeft: 4,
                                                            paddingRight: 2,
                                                            "&:hover": {
                                                                background: theme.palette.primary.light,
                                                            },
                                                            fontFamily: "'Roboto', sans-serif",
                                                            fontSize: "14px",
                                                            fontWeight: "400",
                                                        }}
                                                    >
                                                        <ListItemIcon
                                                            sx={{
                                                                minWidth: "auto",
                                                                marginRight: 1,
                                                                color: theme.palette.primary.contrastText,
                                                            }}
                                                        >
                                                            {icon}
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            primary={text}
                                                            sx={{ color: theme.palette.primary.contrastText }}
                                                        />
                                                    </ListItemButton>
                                                </Link>
                                            </ListItem>
                                        ))}
                                    </List>
                                </Collapse>
                            )} */}

                            {/* Blogs Dropdown */}
                            {/* {text === "Blogs" && isExpandable && (
                                <Collapse in={blogsOpen} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        {blogItems.map(({ text, icon, to }) => (
                                            <ListItem key={text} disablePadding>
                                                <Link
                                                    to={to}
                                                    style={{
                                                        textDecoration: "none",
                                                        color: theme.palette.primary.contrastText,
                                                        width: "100%",
                                                    }}
                                                >
                                                    <ListItemButton
                                                        sx={{
                                                            paddingLeft: 4,
                                                            paddingRight: 2,
                                                            "&:hover": {
                                                                background: theme.palette.primary.light,
                                                            },
                                                            fontFamily: "'Roboto', sans-serif",
                                                            fontSize: "14px",
                                                            fontWeight: "400",
                                                        }}
                                                    >
                                                        <ListItemIcon
                                                            sx={{
                                                                minWidth: "auto",
                                                                marginRight: 1,
                                                                color: theme.palette.primary.contrastText,
                                                            }}
                                                        >
                                                            {icon}
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            primary={text}
                                                            sx={{ color: theme.palette.primary.contrastText }}
                                                        />
                                                    </ListItemButton>
                                                </Link>
                                            </ListItem>
                                        ))}
                                    </List>
                                </Collapse>
                            )} */}
                        </Box>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
}
