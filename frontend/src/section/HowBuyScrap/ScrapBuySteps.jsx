import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Container,
    Typography,
    Button
} from '@mui/material';
import {
    Share,
    TrendingUp,
    LocalShipping,
    Payment
} from '@mui/icons-material';

const StepCard = ({ stepNumber, title, description, }) => (
    <Card
        sx={{
            maxWidth: { xs: 'auto', sm: "auto", md: 400 },
            minWidth: { xs: 100 },
            borderRadius: 3,
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            backgroundColor: "#111827",
            color: 'white',
            textAlign: 'start',
            p: 2,
            mx: 'auto',
            transition: 'all 0.3s ease',
            '&:hover': {
                transform: "translateY(-8px)",
                boxShadow: "0 12px 20px rgba(34, 0, 158, 0.68)"
            }
        }}
    >
        <CardContent sx={{ textAlign: 'start' }}>
            <Box
                sx={{
                    width: "100%",
                    height: 'auto',
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'flex-start',
                    mx: 'auto',
                    mb: 3,
                    textAlign: 'start',

                }}
            >
                <Typography variant="h1" fontWeight="bold" sx={{ color: 'white', textAlign: "start" }}>
                    {stepNumber}
                </Typography>
            </Box>

            {/* <Box sx={{ mb: 2 }}>
                {React.cloneElement(icon, {
                    sx: { fontSize: 48, color: 'rgba(255,255,255,0.9)' }
                })}
            </Box> */}

            <Typography variant="h6" fontWeight="bold" gutterBottom>
                {title}
            </Typography>

            <Typography variant="body1" sx={{ opacity: 0.9 }}>
                {description}
            </Typography>
        </CardContent>
    </Card>
);

export default function ScrapSellingSteps() {
    const steps = [
        {
            number: 1,
            title: "Share Scrap Details",
            description:
                "Send us the type of scrap material you have (e.g., HMS, MS, Aluminium, Copper, Industrial Waste) along with estimated quantity, photos, and your location.",

        },
        {
            number: 2,
            title: "Get the Best Price",
            description:
                "Our procurement team will evaluate your material and offer you a competitive price based on current market rates, quantity, and scrap condition.",

        },
        {
            number: 3,
            title: "Schedule Pickup",
            description:
                "Once the price is confirmed, we'll arrange pickup logistics from your location. We handle all transportation and ensure a smooth collection process.",

        },
        {
            number: 4,
            title: "Get Paid Instantly",
            description:
                "After inspection and pickup, instant payment is made via your preferred method — bank transfer, UPI, or cash.",

        }
    ];

    return (
        <Box
            sx={{
                minHeight: 'auto',
                // backgroundColor: '#f9f9f9',
                // backgroundImage: 'linear-gradient(135deg, #f5f7fa 0%, #e4edf5 100%)',

            }}
        >
            <Container maxWidth="lg">
                {/* Header */}
                <Box sx={{ textAlign: 'center', mb: { xs: 4, sm: 4, md: 8 } }}>
                    <Typography
                        variant="h4"
                        component="h1"
                        sx={{
                            py: { xs: 4, md: 6 },
                            fontWeight: 700,
                            fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
                            textAlign: "center",
                            color: "black",
                            position: "relative",
                            "&::after": {
                                content: '""',
                                position: "absolute",
                                bottom: { xs: 20, md: 30 },
                                left: "50%",
                                transform: "translateX(-50%)",
                                width: { xs: 80, md: 120 },
                                height: 4,
                                backgroundColor: "#111827",
                                borderRadius: 2
                            }
                        }}
                    >
                        How To Sell Scrap
                    </Typography>

                </Box>

                {/* Timeline Container */}
                <Box sx={{ position: 'relative', px: 2 }}>
                    {/* Vertical Timeline Line */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: 4,
                            height: '100%',
                            background: '#111827',
                            zIndex: 1,
                            display: { xs: 'none', sm: "block", md: 'block' }
                        }}
                    />

                    {/* Timeline Steps */}
                    {steps.map((step, index) => {
                        const isLeft = index % 2 === 0;
                        return (
                            <Box
                                key={step.number}
                                sx={{
                                    display: 'flex',
                                    justifyContent: { xs: 'center', sm: "center", md: isLeft ? 'flex-start' : 'flex-end' },
                                    mb: 4,
                                    position: 'relative'
                                }}
                            >
                                <Box sx={{ width: { xs: 'auto', sm: 'auto', md: '50%' }, zIndex: 2, p: 2 }} >
                                    <StepCard
                                        stepNumber={step.number}
                                        title={step.title}
                                        description={step.description}
                                        icon={step.icon}
                                    />
                                </Box>

                                {/* Dot Connector to Timeline */}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 40,
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        width: 20,
                                        height: 20,
                                        borderRadius: '50%',
                                        backgroundColor: '#111827',
                                        border: '4px solid white',
                                        zIndex: 3,
                                        display: { xs: 'none', md: 'block' }
                                    }}
                                />
                            </Box>
                        );
                    })}
                </Box>


            </Container >
        </Box >
    );
}
