# Hospital Scheduler - React Port

A React + Vite implementation of the Hospital Appointment Scheduler frontend challenge.

Quick start:

1. npm install
2. npm run dev

This scaffold includes:
- components: ScheduleView, DayView, WeekView, DoctorSelector (JSX)
- headless hook: useAppointments (JS)
- service: AppointmentService (in-memory mock data, JS)

Notes:
- Uses `date-fns` for date utilities.
- Mock data is in `src/data/mockData.js`.

Entry point: `src/main.jsx`

## API Endpoints

- [`GET /api/appointments`](http://localhost:5173/api/appointments) — Returns all appointments (mocked in-memory)
- [`POST /api/appointments`](http://localhost:5173/api/appointments) — Create a new appointment (mocked)

> These endpoints are simulated in the frontend using mock data. For a real backend, replace with your server API.
