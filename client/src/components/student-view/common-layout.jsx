import React from 'react'
import { Outlet } from 'react-router-dom'

const StudentViewCommonLayout = () => {
  return (
        <div>
            Common Content
            <Outlet/>
        </div>
  )
}

export default StudentViewCommonLayout