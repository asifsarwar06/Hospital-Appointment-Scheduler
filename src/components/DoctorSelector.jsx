import React from 'react'
import { doctors } from '../data/mockData.js'

export default function DoctorSelector({ selectedId, onChange }) {
  return (
    <div>
      <label>Doctor</label>
      <select className="select" value={selectedId} onChange={e => onChange(e.target.value)}>
        {doctors.map(d => (
          <option key={d.id} value={d.id}>{d.name} — {d.specialty}</option>
        ))}
      </select>
    </div>
  )
}
