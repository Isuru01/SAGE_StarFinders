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

const paymentSuccess = () => {
  return (
    <>
                <Card sx={{ width: '100%', marginBottom: '16px' }}>
                    <CardContent>
                        <Paper style={{ backgroundColor: 'rgba(77, 71, 195, 1)', padding: '14px' }}>
                            <Typography variant="h1" component="div" sx={{ fontFamily: 'Arial' }} gutterBottom>
                                Payment Successful
                            </Typography>
                        </Paper>                   
                    </CardContent>
                </Card>
    </>
  )
}

export default paymentSuccess