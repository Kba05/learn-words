import React, { useState } from 'react'
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import { WordCardProps } from '../types/types'
import { v4 as uuidv4 } from 'uuid';

export const WordCard = (props: WordCardProps) => {
  const [isTurnOver, setIsturnOver] = useState(false)
  const [isClicked,setIsClicked] = useState(false)
  const { cardData } = props

  const handleLearnMore = () => {
    setIsClicked(true)
    setIsturnOver(!isTurnOver)
  }

  return (
    <Card
      sx={{
        height: "300px",
        width: "275px",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        "@keyframes turnOn": {
          "0%": {
            opacity:'0',
            transform: "rotateY(0deg)",
          },
          "100%": {
            opacity:'1',
            transform: "rotateY(360deg)",
          },
        },
        "@keyframes turnOff": {
          "0%": {
            opacity:'0',
            transform: "rotateY(360deg)",
          },
          "100%": {
            opacity:'1',
            transform: "rotateY(0deg)",
          },
        },
        animation: isClicked? (isTurnOver ? 'turnOn 1s ease-in-out' : 'turnOff 1s ease-in-out'):'none',
      }}>
      {
        !isTurnOver ?
          <CardContent>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
              {cardData.category}
            </Typography>

            <Typography variant="h5" component="div">
              {cardData.name}
            </Typography>

            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
              {cardData.type}
            </Typography>

            <Typography variant="body2">
              {cardData.meaning}
              <br />
              <br />
              {'"' + cardData.example + '"'}
            </Typography>
          </CardContent>
          :
          <CardContent sx={{ textAlign: 'center' }}>
            {cardData.translate.map(word => (
              <Typography  key={uuidv4()} variant="h5" component="div">
                {word}
              </Typography>
            ))}

          </CardContent>
      }

      <CardActions>
        <Button size="small" onClick={handleLearnMore}>Learn More</Button>
      </CardActions>
    </Card>
  )
}
