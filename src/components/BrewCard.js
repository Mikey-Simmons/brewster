import React from 'react'
import Card from "@mui/material/Card";
import {CardActionArea} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


export const BrewCard = ({name, city, address_1, state ,postal_code}) => {
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="200"
                        image="https://cdn.britannica.com/96/90096-050-514D5088/Glasses-beer-bar-Brussels.jpg"
                        alt=""
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            {address_1} {city}, {state}, {postal_code}  </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
}
