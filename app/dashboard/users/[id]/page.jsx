import React from 'react'

export default function UserDetails({params}) {
    const {id} = params;
  return (
    <div>
        <h2 className='text-green-300'>details page for user {id}</h2>
    </div>
  )
}
