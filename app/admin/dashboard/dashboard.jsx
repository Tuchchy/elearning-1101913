'use client';

import Link from 'next/link';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PieController,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PieController,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard() {
  // Mock data

  const hoursData = {
    labels: ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'],
    datasets: [
      {
        label: 'ชั่วโมงกิจกรรม',
        data: [5, 8, 3, 6, 7],
        backgroundColor: '#ff6600',
      },
    ],
  };

  const monthlyData = {
    labels: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.'],
    datasets: [
      {
        label: 'จำนวนกิจกรรม',
        data: [12, 15, 10, 18, 14, 20],
        backgroundColor: '#22ff00',
      },
    ],
  };

  const activityTypeData = {
    labels: ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7'],
    datasets: [
      {
        label: 'ประเภทกิจกรรม',
        data: [25, 15, 30, 10, 20, 18, 10],
        backgroundColor: ['#ff6600', '#3399ff', '#33cc33', '#ffcc00', '#cc33ff','#e74c3c','#76d7c4'],
      },
    ],
  };

  const noShowList = [
    { id: 1, name: 'John Doe', activity: 'วิ่งมาราธอน', date: '2025-07-15' },
    { id: 2, name: 'Jane Smith', activity: 'เล่นกีตาร์', date: '2025-07-10' },
    { id: 3, name: 'Mark Lee', activity: 'อบรม IT', date: '2025-07-18' },
  ];

  return (
    <div className="admin-container">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
          SUT <span className="highlight">ACT+</span>
        </div>
        <nav className="nav-menu">
          <Link href="/">Home</Link>
          <Link href="/activities">Activities</Link>
          <Link href="/self-learning">Self Learning</Link>
          <Link href="/admin/regis/dashboard">Dashboard</Link>
          <img
            src="/icons/notification.jpg"
            alt="Notification"
            className="notification-icon"
          />
          <img src="/icons/user.png" alt="User" className="user-icon" />
        </nav>
      </header>

      {/* Banner Image */}
      <img src="/icons/header-bg.png" alt="Banner" className="header-image" />

      {/* Main Content */}
      <main>
        <h2>Dashboard</h2>

        {/* ชั่วโมงกิจกรรมตามรายชื่อ */}
  <section className="graph-box">
  <h3 style={{ color: 'black' }}>ชั่วโมงกิจกรรมตามรายชื่อ</h3>
  <Bar
    data={hoursData}
    options={{
      responsive: true,
      plugins: { legend: { position: 'top' } },
    }}
  />
</section>


        {/* จำนวนกิจกรรมต่อเดือน */}
        <section className="graph-box">
          <h3 style={{ color: 'black' }}>จำนวนกิจกรรมต่อเดือน</h3>
          <Bar
            data={monthlyData}
            options={{
              responsive: true,
              plugins: { legend: { position: 'top' } },
            }}
          />
        </section>

        {/* ประเภทกิจกรรมที่มีคนเข้าร่วม */}
        <section className="graph-box">
          <h3 style={{ color: 'black' }}>ประเภทกิจกรรมที่มีคนเข้าร่วม</h3>
          <Pie
            data={activityTypeData}
            options={{
              responsive: true,
              plugins: { legend: { position: 'right' } },
            }}
          />
        </section>

        {/* รายงานผู้สมัครแต่ไม่เข้าร่วม */}
        <section className="report-box">
          <h3 style={{ color: 'black' }}>รายงานผู้สมัครเข้าร่วมกิจกรรมแต่ไม่เข้าร่วม</h3>
          <table>
            <thead>
              <tr>
                <th>ลำดับ</th>
                <th>ชื่อ</th>
                <th>กิจกรรม</th>
                <th>วันที่ลงทะเบียน</th>
              </tr>
            </thead>
            <tbody>
              {noShowList.map(({ id, name, activity, date }) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{activity}</td>
                  <td>{date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}
