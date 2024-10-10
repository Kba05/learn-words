import React from 'react'
import { EditView } from '../../components/EditView'
import { useAppSelector } from '../../app/hooks'
import { selectUser, selectUserInterests, selectUserSkills } from '../../features/AppState/appStateReducer'
import { getArrayOfFields } from '../../helpers/functions'


export const Profile = () => {
  const userInfo = useAppSelector(selectUser)
  const userSkills = useAppSelector(selectUserSkills)
  const profileFields = getArrayOfFields(userInfo)
  const userInterests = useAppSelector(selectUserInterests)
  return (
    <>
      <EditView fields={profileFields} userSkills={userSkills} userInterests={userInterests} />
    </>

  )
}
