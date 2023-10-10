import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid}  = useParams();
  return (
    <div className='bg-orange-500 text-white-500 flex items-center justify-center' >
      User:{userid}
    </div>
  )
}

export default User
