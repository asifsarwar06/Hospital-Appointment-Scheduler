import React from 'react'
import { format, addDays } from 'date-fns'

function typeToClass(t) {
  if (t === 'Checkup') return 'color-checkup'
  if (t === 'Consultation') return 'color-consultation'
  if (t === 'Follow-up') return 'color-followup'
  return 'color-procedure'
}

export default function WeekView({ startDate, appointments }) {
  const days = Array.from({ length: 7 }).map((_, i) => addDays(startDate, i))

  return (
    <div className="main-card">
      <div style={{ overflowX: 'auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '80px repeat(7, 1fr)' }}>
          <div style={{ padding: 8, borderRight: '1px solid #eee' }}>Time</div>
          {days.map(d => <div key={d.toISOString()} style={{ padding: 8, borderRight: '1px solid #eee' }}>{format(d, 'EEE dd')}</div>)}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '80px repeat(7, 1fr)' }}>
          <div style={{ padding: 8, borderRight: '1px solid #eee' }}>
            {Array.from({ length: 20 }).map((_, i) => <div key={i} className="time-slot">{8 + Math.floor(i / 2)}:{i % 2 === 0 ? '00' : '30'}</div>)}
          </div>
          {days.map((d, dayIndex) => (
            <div key={d.toISOString()} style={{ minHeight: '720px', position: 'relative', borderRight: '1px solid #f3f4f6' }}>
              {appointments.filter(a => new Date(a.startTime).toDateString() === d.toDateString()).map(apt => {
                const start = new Date(apt.startTime)
                const end = new Date(apt.endTime)
                const minutesFrom8 = (start.getHours() - 8) * 60 + start.getMinutes()
                const top = (minutesFrom8 / 30) * 36
                const height = ((end.getTime() - start.getTime()) / (1000 * 60 * 30)) * 36
                return (
                  <div key={apt.id} className={`appointment ${typeToClass(apt.type)}`} style={{ top: top + 'px', height: height + 'px', left: 8, right: 8, position: 'absolute' }}>
                    <div style={{ fontWeight: 600 }}>{apt.type}</div>
                    <div style={{ fontSize: 12 }}>{format(start, 'HH:mm')} - {format(end, 'HH:mm')}</div>
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
