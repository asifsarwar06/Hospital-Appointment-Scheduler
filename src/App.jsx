import React, { useState } from 'react'
import ScheduleView from './components/ScheduleView'
import { doctors } from './data/mockData'

export default function App() {
  const [selectedDoctorId, setSelectedDoctorId] = useState(doctors[0].id)

  return (
    <div className="app-container">
      <header>
        <h1>Hospital Appointment Scheduler</h1>
      </header>
      <main>
        <ScheduleView
          selectedDoctorId={selectedDoctorId}
          onDoctorChange={setSelectedDoctorId}
        />
      </main>
    </div>
  )
}
