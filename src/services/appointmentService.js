import { appointments as mockAppointments } from '../data/mockData'

export const AppointmentService = {
  getAppointmentsByDoctorAndDate: async (doctorId, date) => {
    const start = new Date(date)
    start.setHours(0, 0, 0, 0)
    const end = new Date(start)
    end.setDate(end.getDate() + 1)
    return new Promise(resolve => {
      const res = mockAppointments.filter(a => a.doctorId === doctorId && new Date(a.startTime) >= start && new Date(a.startTime) < end)
      setTimeout(() => resolve(res), 200)
    })
  },
  getAppointmentsByDoctorAndRange: async (doctorId, startDate, endDate) => {
    return new Promise(resolve => {
      const res = mockAppointments.filter(a => a.doctorId === doctorId && new Date(a.startTime) >= startDate && new Date(a.startTime) < endDate)
      setTimeout(() => resolve(res), 200)
    })
  }
}
