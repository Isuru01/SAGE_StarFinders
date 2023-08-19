import React from 'react'
import {
    Container,
    Card,
    CardActions,
    CardContent,
    Box,
    Divider,
    Typography,
    Button,
    Paper,
    Stack
} from "@mui/material";

const Dashboard = () => {
    return (
        <Container>
            <Stack spacing={2}>
            <Typography variant="h2" component="div" sx={{ fontFamily: 'Arial', textAlign: 'center' }} gutterBottom>
                Welcome User
            </Typography>    
                <Card sx={{ width: '100%', marginBottom: '16px' }}>
                    <CardContent>
                        <Paper style={{ backgroundColor: 'rgba(77, 71, 195, 1)', padding: '14px' }}>
                            <Typography variant="h5" component="div" sx={{ fontFamily: 'Arial' }} gutterBottom>
                                Ticket Details
                            </Typography>
                        </Paper>
                        <Paper style={{ backgroundColor: 'rgba(232, 231, 255, 1)', padding: '16px' }}>
                            <Typography variant="h5" color="black" sx={{ fontFamily: 'Arial', fontSize: '16px' }}>Earth</Typography>
                            <Typography variant="h5" color="black" sx={{ fontFamily: 'Arial', fontSize: '16px' }}>Fri, May 12, 4.40pm</Typography>
                            <Box
                                component="hr"
                                sx={{
                                    borderTop: '2px solid #000', // Adjust color and size as needed
                                    margin: '16px 0',
                                }}
                            />
                            <Typography variant="h5" color="black" sx={{ fontFamily: 'Arial', fontSize: '16px' }}>Departure &nbsp;&nbsp;&nbsp; 01h 50m &nbsp;&nbsp;&nbsp; Arrival</Typography>
                            <Box
                                component="hr"
                                sx={{
                                    borderTop: '2px dashed #000', // Adjust color and size as needed
                                    margin: '16px 0',
                                }}
                            />
                            <Typography variant="h5" color="black" sx={{ fontFamily: 'Arial', fontSize: '16px' }}>LHR &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lukana &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MXP</Typography>
                            <Box
                                component="hr"
                                sx={{
                                    borderTop: '2px solid #000', // Adjust color and size as needed
                                    margin: '16px 0',
                                }}
                            />  
                                                        <Typography variant="h5" color="black" sx={{ fontFamily: 'Arial', fontSize: '16px' }}>Mars</Typography>
                            <Typography variant="h5" color="black" sx={{ fontFamily: 'Arial', fontSize: '16px' }}>Fri, May 14, 4.40pm</Typography>                      
                        </Paper>
                    </CardContent>
                </Card>
            </Stack>
        </Container>
    )
}

export default Dashboard