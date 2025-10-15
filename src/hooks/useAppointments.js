import { useEffect, useMemo, useState } from 'react'
import { AppointmentService } from '../services/appointmentService'
import { startOfDay, addDays } from 'date-fns'

export function useAppointments(doctorId, date) {
  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true
    setLoading(true)
    setError(null)
    AppointmentService.getAppointmentsByDoctorAndDate(doctorId, date)
      .then(res => { if (mounted) setAppointments(res) })
      .catch(err => mounted && setError(String(err)))
      .finally(() => mounted && setLoading(false))
    return () => { mounted = false }
  }, [doctorId, date])

  const weekRange = useMemo(() => {
    const s = startOfDay(date)
    const e = addDays(s, 7)
    return { start: s, end: e }
  }, [date])

  return { appointments, loading, error, weekRange }
}
