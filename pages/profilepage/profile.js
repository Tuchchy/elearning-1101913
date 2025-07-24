import Layout from "../../components/layout";
import styles from "../../styles/Profile.module.css";

export default function Profile() {
  return (
    <Layout>
      <div className={styles.container}>
        {/* Header with background */}
        <div className={styles.headerBackground}></div>

        {/* Profile Box */}
        <div className={styles.profileBox}>
          {/* Top section: Avatar and Tabs */}
          <div className={styles.topSection}>
            <img
              src="/user-icon.svg"
              alt="Avatar"
              className={styles.avatar}
            />
            <div className={styles.userInfo}>
              <div className={styles.username}>Username</div>
              <div className={styles.email}>me@hotmail.com</div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className={styles.navTabs}>
            <span className={styles.activeTab}>ข้อมูลส่วนตัว</span>
            <span>กิจกรรมของฉัน</span>
            <span>หลักสูตรของฉัน</span>
            <span>วุฒิบัตร</span>
            <span>ทักษะ</span>
          </div>

          {/* Detail Box */}
          <div className={styles.detailBox}>
            <p>ชื่อ : ศรันยา</p>
            <p>นามสกุล : แสงใส</p>
            <p>อีเมล : noon25862@gmail.com</p>
            <p>เข้าสู่ระบบครั้งล่าสุด : 2025-07-11 21:15:01</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
