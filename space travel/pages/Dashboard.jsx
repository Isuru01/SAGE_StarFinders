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

const tickets = [
    {
        origin: "Earth",
        boardingTime: "Fri, May 12, 4.40pm",
        duration:"01h 50m",
        originCode:"LHR",
        destination: "Mars",
        terminal: "Lukana",
        destinationCode: "MXP",
        arrivalTime: "Fri, May 14, 4.40pm",
    },
    {
        origin: "Earth",
        boardingTime: "Fri, May 12, 4.40pm",
        duration:"08h 50m",
        originCode:"LHR",
        destination: "Saturn",
        terminal: "Lukana",
        destinationCode: "SXP",
        arrivalTime: "Fri, May 30, 4.40pm",
    }
]

const Dashboard = () => {
    const renderTickets = tickets.map((tickets) => {
        return (
            <Card sx={{ width: '100%', marginBottom: '16px' }}>
                    <CardContent>
                        <Paper style={{ backgroundColor: 'rgba(77, 71, 195, 1)', padding: '14px' }}>
                            <Typography variant="h5" component="div" sx={{ fontFamily: 'Arial' }} gutterBottom>
                                Ticket Details
                            </Typography>
                        </Paper>
                        <Paper style={{ backgroundColor: 'rgba(232, 231, 255, 1)', padding: '16px' }}>
                            <Typography variant="h5" color="black" sx={{ fontFamily: 'Arial', fontSize: '16px' }}>{tickets.origin}</Typography>
                            <Typography variant="h5" color="black" sx={{ fontFamily: 'Arial', fontSize: '16px' }}>{tickets.boardingTime}</Typography>
                            <Box
                                component="hr"
                                sx={{
                                    borderTop: '2px solid #000', // Adjust color and size as needed
                                    margin: '16px 0',
                                }}
                            />
                            <Typography variant="h5" color="black" sx={{ fontFamily: 'Arial', fontSize: '16px' }}>Departure &nbsp;&nbsp;&nbsp; {tickets.duration} &nbsp;&nbsp;&nbsp; Arrival</Typography>
                            <Box
                                component="hr"
                                sx={{
                                    borderTop: '2px dashed #000', // Adjust color and size as needed
                                    margin: '16px 0',
                                }}
                            />
                            <Typography variant="h5" color="black" sx={{ fontFamily: 'Arial', fontSize: '16px' }}>{tickets.originCode} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {tickets.terminal} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {tickets.destinationCode}</Typography>
                            <Box
                                component="hr"
                                sx={{
                                    borderTop: '2px solid #000', // Adjust color and size as needed
                                    margin: '16px 0',
                                }}
                            />
                            <Typography variant="h5" color="black" sx={{ fontFamily: 'Arial', fontSize: '16px' }}>{tickets.destination}</Typography>
                            <Typography variant="h5" color="black" sx={{ fontFamily: 'Arial', fontSize: '16px' }}>{tickets.arrivalTime}</Typography>
                        </Paper>
                    </CardContent>
                </Card>
        )
    })
    return (
        <Container>
            <Stack spacing={2}>
                <Typography variant="h2" component="div" sx={{ fontFamily: 'Arial', textAlign: 'center' }} gutterBottom>
                    Welcome User
                </Typography>
                {renderTickets}
            </Stack>
        </Container>
    )
}

export default Dashboard