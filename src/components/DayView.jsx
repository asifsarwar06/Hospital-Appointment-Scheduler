import React from 'react'
import { format, differenceInMinutes } from 'date-fns'

function typeToClass(t) {
  if (t === 'Checkup') return 'color-checkup'
  if (t === 'Consultation') return 'color-consultation'
  if (t === 'Follow-up') return 'color-followup'
  return 'color-procedure'
}

export default function DayView({ date, appointments }) {
  const slots = []
  for (let h = 8; h < 18; h++) {
    for (const m of [0, 30]) {
      slots.push({ time: `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`, top: ((h - 8) * 2 + (m === 30 ? 1 : 0)) * 36 })
    }
  }

  return (
    <div className="main-card">
      <div className="timeline">
        <div className="times">
          {slots.map(s => (
            <div key={s.time} className="time-slot">{s.time}</div>
          ))}
        </div>
        <div className="slot-grid">
          {appointments.map(apt => {
            const start = new Date(apt.startTime)
            const end = new Date(apt.endTime)
            const minutesFrom8 = (start.getHours() - 8) * 60 + start.getMinutes()
            const top = (minutesFrom8 / 30) * 36
            const height = (differenceInMinutes(end, start) / 30) * 36
            return (
              <div key={apt.id} className={`appointment ${typeToClass(apt.type)}`} style={{ top: top + 'px', height: height + 'px' }}>
                <div style={{ fontWeight: 600 }}>{apt.type}</div>
                <div style={{ fontSize: 12 }}>{format(start, 'HH:mm')} - {format(end, 'HH:mm')}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
