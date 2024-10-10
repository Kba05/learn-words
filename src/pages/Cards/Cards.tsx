import React from 'react'
import { CardList } from '../../components/CardList'
import { useAppSelector } from '../../app/hooks'
import { selectWords } from '../../features/AppState/appStateReducer'

export const Cards = () => {
  const words = useAppSelector(selectWords)
  return (
    <CardList cardsData={words}/>
  )
}
