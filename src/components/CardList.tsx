import React from 'react'
import { Box } from '@mui/material'
import { v4 as uuidv4 } from 'uuid';
import { CardsProps, Word } from '../types/types';
import { WordCard } from './WordCard';

export const CardList = (props: CardsProps) => {
    const { cardsData } = props
    return (
        <Box display='flex' flexWrap="wrap" justifyContent='flex-start' gap='15px'>
            {
                cardsData.map((card: Word) => <WordCard key={uuidv4()} cardData={card} />)
            }
        </Box>
    )
}
