import React, { useState } from 'react'
import DoctorSelector from './DoctorSelector'
import DayView from './DayView'
import WeekView from './WeekView'
import { doctors } from '../data/mockData.js'
import { useAppointments } from '../hooks/useAppointments.js'

export default function ScheduleView({ selectedDoctorId, onDoctorChange }) {
  const [view, setView] = useState('day')
  const [date, setDate] = useState(new Date('2025-10-13'))

  const { appointments, loading } = useAppointments(selectedDoctorId, date)

  const doctor = doctors.find(d => d.id === selectedDoctorId) || doctors[0]

  return (
    <div className="schedule">
      <aside className="sidebar">
        <div className="doctor-info">
          <h3>{doctor.name}</h3>
          <div>{doctor.specialty}</div>
          <div style={{ fontSize: 12, color: '#6b7280' }}>{doctor.workingHours.start} - {doctor.workingHours.end}</div>
        </div>
        <div className="controls">
          <DoctorSelector selectedId={selectedDoctorId} onChange={onDoctorChange} />
          <input className="date-input" type="date" value={date.toISOString().slice(0,10)} onChange={e => setDate(new Date(e.target.value))} />
        </div>
        <div style={{ marginTop: 12 }}>
          <button onClick={() => setView('day')}>Day View</button>
          <button onClick={() => setView('week')}>Week View</button>
        </div>
      </aside>
      <section>
        {loading && <div className="main-card">Loading...</div>}
        {!loading && view === 'day' && <DayView date={date} appointments={appointments} />}
        {!loading && view === 'week' && <WeekView startDate={date} appointments={appointments} />}
      </section>
    </div>
  )
}
