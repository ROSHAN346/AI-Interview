"use client"
import React from 'react'
import WelcomeContainer from './_components/WelcomeContainer'
import { useUser } from '@/app/provider'
import Provider from '@/app/provider'
import CreateOptions from './_components/CreateOptions'
import LatestInterviews from './_components/LatestInterviews'

function DashboardContent() {
  // const { user } = useUser();

  return (
    <div className='w-full'>
      {/* <WelcomeContainer /> */}
      <h1 className='text-3xl mt-3 font-bold'>Dashboard</h1>
      <CreateOptions/>

      <LatestInterviews></LatestInterviews>
    </div>
  );
}

function Dashboard() {
  return (
    <Provider>
      <DashboardContent />
    </Provider>
  );
}

export default Dashboard;
