/* eslint-disable no-undef */
import React from "react";
import {
    AppBar,
    Toolbar,
    Divider,
    List,
    ListItem,
    Box,
    Collapse,
    Typography
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import {
    ClassOutlined,
    SubjectOutlined,

    ExpandLess,
    ExpandMore,
    PasswordOutlined,
    InfoOutlined,

    Announcement,
    ProductionQuantityLimits,
    DesignServices,
    Home,
    DetailsOutlined,
} from "@mui/icons-material";

// import logo from "../assets/logo/physics-wallah-logo-7C6D7E25BB-seeklogo.com.png";

function SideBar() {
    // const [settingsOpen, setSettingsOpen] = useState(false);

    // const toggleSettings = () => {
    //     setSettingsOpen((prev) => !prev);
    // };

    const items = [
        { icon: <Home />, text: "Heroes", to: "/" },
        { icon: <Announcement />, text: "Announcement", to: "/announcement" },
        { icon: <SubjectOutlined />, text: "Our Clients", to: "/clients" },
        { icon: <DesignServices />, text: "Products", to: "/products" },
        { icon: <ProductionQuantityLimits />, text: "Products Category", to: "/productCategory" },
        { icon: <InfoOutlined />, text: "Who we are", to: "/who-we-are" },
        { icon: <DetailsOutlined />, text: "Testimonials", to: "/testimonials" },
        // {
        //     icon: <SubscriptionsOutlined />,
        //     text: "Subscription",
        //     to: "/subscription",
        // },
        // { icon: <PaymentOutlined />, text: "Payment", to: "/payment" },
        // {
        //     icon: <SettingsOutlined />,
        //     text: "Settings",
        //     isExpandable: true,
        //     onClick: toggleSettings,
        //     open: settingsOpen,
        //     subItems: [
        //         { icon: <PasswordOutlined />, text: "Change Password", to: "/change-password" },
        //         { icon: <InfoOutlined />, text: "About Us", to: "/about-us" },
        //         { icon: <FeedbackOutlined />, text: "Testimonials", to: "/testimonials" },
        //         { icon: <ContactMailOutlined />, text: "Contact Us", to: "/contact-us" },
        //         { icon: <ContactMailOutlined />, text: "Meta Data", to: "/meta-data" },
        //     ],
        // },
    ];

    return (
        <AppBar
            elevation={0}
            position="fixed"
            sx={{
                width: "20%",
                height: "100vh",
                left: 0,
                top: 0,
                backgroundColor: "primary.main",
                overflowY: "auto",
                "&::-webkit-scrollbar": {
                    width: 0,
                },
            }}
        >
            <Toolbar
                sx={{
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: 2,
                    p: 2,
                    textAlign: "start",
                }}
            >
                {/* Logo */}
                <Box display="flex" alignItems="center">
                    <RouterLink to="/" style={{ textDecoration: "none" }}>
                        {/* <Box
                            component="img"
                            src={logo}
                            alt="Logo"
                            sx={{
                                width: 80,
                                height: 40,
                                objectFit: "contain",
                                filter: "invert(1)",
                                cursor: "pointer",
                            }}
                        /> */}

                        <Typography variant="h6" sx={{ color: "white", fontFamily: "Roboto, sans-serif" }}>
                            Samanee Global CMS
                        </Typography>
                    </RouterLink>
                </Box>

                <Divider sx={{ width: "100%", backgroundColor: "white" }} />

                {/* Sidebar Items */}
                <List sx={{ width: "100%", p: 0 }}>
                    {items.map((item, index) => (
                        <Box key={index}>
                            <ListItem
                                onClick={item.isExpandable ? item.onClick : undefined}
                                sx={{
                                    display: "flex",
                                    gap: 1.5,
                                    p: "8px 10px",
                                    cursor: item.isExpandable ? "pointer" : "default",
                                    "&:hover": {
                                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                                        transform: "scale(1.05)",
                                        transition: "transform 0.3s ease, background-color 0.3s ease",
                                    },
                                    fontFamily: "Roboto, sans-serif",
                                    fontWeight: 500,
                                    fontSize: 16,
                                    color: "white",
                                }}
                            >
                                {item.icon}
                                {item.isExpandable ? (
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            width: "100%",
                                        }}
                                    >
                                        <Box>{item.text}</Box>
                                        {item.open ? <ExpandLess /> : <ExpandMore />}
                                    </Box>
                                ) : (
                                    <RouterLink
                                        to={item.to}
                                        style={{ color: "white", textDecoration: "none" }}
                                    >
                                        <Box>{item.text}</Box>
                                    </RouterLink>
                                )}
                            </ListItem>

                            {/* Expandable subItems */}
                            {item.isExpandable && (
                                <Collapse in={item.open} timeout="auto" unmountOnExit>
                                    <List disablePadding>
                                        {item.subItems.map((subItem, subIndex) => (
                                            <ListItem
                                                key={subIndex}
                                                sx={{
                                                    pl: 4,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 1.5,
                                                    fontSize: "0.875rem",
                                                    fontFamily: "Roboto, sans-serif",
                                                    fontWeight: 400,
                                                    color: "white",
                                                    "&:hover": {
                                                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                                                        transform: "scale(1.02)",
                                                        transition: "transform 0.3s ease, background-color 0.3s ease",
                                                    },
                                                }}
                                            >
                                                // eslint-disable-next-line no-undef
                                                {React.cloneElement(subItem.icon, {
                                                    sx: { fontSize: 20 },
                                                })}
                                                <RouterLink
                                                    to={subItem.to}
                                                    style={{ color: "white", textDecoration: "none" }}
                                                >
                                                    {subItem.text}
                                                </RouterLink>
                                            </ListItem>
                                        ))}
                                    </List>
                                </Collapse>
                            )}
                        </Box>
                    ))}
                </List>
            </Toolbar>
        </AppBar>
    );
}

export default SideBar;
