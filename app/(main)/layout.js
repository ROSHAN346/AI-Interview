import React, { Children } from 'react'
import DashboardProvider from './provider'
import { useUser } from '@/app/provider';

function DashboardLayout({children}) {
  return (
    <div>
      

        <DashboardProvider>

            <div className='p-10  h-full w-full'>

            {children}
            </div>
        </DashboardProvider>
     
    </div>
  )
}

export default DashboardLayout
