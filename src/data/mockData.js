function iso(dateStr) { return new Date(dateStr).toISOString() }

export const doctors = [
  { id: 'd1', name: 'Dr. Sarah Chen', specialty: 'Cardiology', workingHours: { start: '08:00', end: '18:00' } },
  { id: 'd2', name: 'Dr. Miguel Alvarez', specialty: 'Orthopedics', workingHours: { start: '08:00', end: '18:00' } },
  { id: 'd3', name: 'Dr. Aisha Khan', specialty: 'Pediatrics', workingHours: { start: '08:00', end: '18:00' } },
]

const patients = Array.from({ length: 50 }).map((_, i) => ({ id: `p${i + 1}`, name: `Patient ${i + 1}` }))

export const appointments = [
  { id: 'a1', doctorId: 'd1', patientId: 'p1', type: 'Checkup', startTime: iso('2025-10-13T09:00:00'), endTime: iso('2025-10-13T09:30:00') },
  { id: 'a2', doctorId: 'd1', patientId: 'p2', type: 'Consultation', startTime: iso('2025-10-13T10:00:00'), endTime: iso('2025-10-13T11:00:00') },
  { id: 'a3', doctorId: 'd1', patientId: 'p3', type: 'Follow-up', startTime: iso('2025-10-14T09:30:00'), endTime: iso('2025-10-14T10:00:00') },
  { id: 'a4', doctorId: 'd2', patientId: 'p4', type: 'Procedure', startTime: iso('2025-10-13T11:00:00'), endTime: iso('2025-10-13T12:00:00') },
  { id: 'a5', doctorId: 'd3', patientId: 'p5', type: 'Consultation', startTime: iso('2025-10-15T14:00:00'), endTime: iso('2025-10-15T14:30:00') },
  { id: 'a6', doctorId: 'd1', patientId: 'p6', type: 'Checkup', startTime: iso('2025-10-13T10:30:00'), endTime: iso('2025-10-13T11:00:00') },
]

export const patientsList = patients
