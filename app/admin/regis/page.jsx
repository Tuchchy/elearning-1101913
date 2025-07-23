'use client';

import React from 'react';
import Link from 'next/link';
import './registerPage.css';

export default function RegisterPage() {
  return (
    <div className="admin-container">
      {/* Header: Navbar */}
      <header className="navbar">
        <div className="logo">SUT <span className="highlight">ACT+</span></div>
    <nav className="nav-menu">
        <a href="#">Home</a>
        <a href="#">Activities</a>
        <a href="#">Self Learning</a>
          {/* ✅ ใช้ Link แทน <a> */}
          <Link href="/admin/regis/dashboard.jsx">Dashboard</Link>
        <img src="/icons/notification.jpg" alt="" className="notification-icon" />
        <img src="/icons/user.png" alt="" className="user-icon" />
    </nav>

      </header>

      {/* Banner Image */}
      <img src="/icons/header-bg.png" alt="" className="header-image" />

      {/* Register Form */}
      <section className="register-form">
        <h2>Register Form</h2>
        <form className="form-grid">
          <label>
            รหัส:
            <input type="text" />
          </label>
          <br></br>
          <label>
            ชื่อ:
            <input type="text" />
          </label>
          <br></br>
          <label>
            นามสกุล:
            <input type="text" />
          </label>
          <br></br>
          <label>
            อีเมล:
            <input type="email" />
          </label>

          <div className="form-buttons">
            <button type="submit">เพิ่ม</button>
            <button type="reset">รีเซ็ต</button>
            <button type="button">ลบ</button>
          </div>
        </form>
      </section>

      {/* Search and Filter */}
      <section className="search-section">
        <input type="text" placeholder="ค้นหา" />
        <select>
          <option value="">--กรอง--</option>
          <option value="นักศึกษา">นักศึกษา</option>
          <option value="อาจารย์">อาจารย์</option>
        </select>
      </section>

      {/* Data Table */}
      <section className="table-section">
        <table>
          <thead>
            <tr>
              <th>รหัสประจำตัว</th>
              <th>ชื่อ</th>
              <th>นามสกุล</th>
              <th>สถานะ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
