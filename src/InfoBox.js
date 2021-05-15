import React from 'react'
import {Card, CardContent, Typography} from "@material-ui/core"
import './InfoBox.css'

function InfoBox( {title, cases, total, isRed, active, ...props} ) {
    return (
        
        <Card className = {`infoBox ${active && "infoBox--selected"} ${active && isRed && 'infoBox--red'} `}  onClick = {props.onClick}>
            {/* Total Cases*/}
            <Typography className="infobox__title" color="textSecondary">{title}</Typography>
            <h2 className={`infobox__cases ${!isRed && "infoBox__cases--green"}`}>{cases}</h2>
            <Typography className = "infobox__total" color = "textSecondary">{total}</Typography>

        </Card>
    )
}

export default InfoBox
