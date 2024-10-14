import React from 'react'
import { EditView } from '../../components/EditView'
import { useAppSelector } from '../../app/hooks'
import { selectUser, selectUserInterests, selectUserSkills } from '../../features/AppState/appStateReducer'
import { RequireSignIn } from '../../components/RequireSignIn'


export const Profile = () => {
  const userInfo = useAppSelector(selectUser)
  const userSkills = useAppSelector(selectUserSkills)
  const userInterests = useAppSelector(selectUserInterests)
  return (
    <RequireSignIn>
      <EditView userInfo={userInfo} userSkills={userSkills} userInterests={userInterests} />
    </RequireSignIn>
  )
}
