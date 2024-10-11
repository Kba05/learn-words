import React from 'react'
import { EditView } from '../../components/EditView'
import { useAppSelector } from '../../app/hooks'
import { selectUser, selectUserInterests, selectUserSkills } from '../../features/AppState/appStateReducer'


export const Profile = () => {
  const userInfo = useAppSelector(selectUser)
  const userSkills = useAppSelector(selectUserSkills)
  const userInterests = useAppSelector(selectUserInterests)
  return (
    <>
      <EditView userInfo={userInfo} userSkills={userSkills} userInterests={userInterests} />
    </>

  )
}
