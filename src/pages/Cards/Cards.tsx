import React, { useEffect } from 'react'
import { CardList } from '../../components/CardList'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getWordsWithCategoriesFetch, selectWords } from '../../features/AppState/appStateReducer'
import { RequireSignIn } from '../../components/RequireSignIn'

export const Cards = () => {
  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(getWordsWithCategoriesFetch())
  },[])

  const words = useAppSelector(selectWords)
  return (
    <RequireSignIn>
          <CardList cardsData={words}/>
    </RequireSignIn>

  )
}
