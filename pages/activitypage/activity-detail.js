import Layout from "../../components/layout";
import styles from "../../styles/ActivityDetail.module.css";

export default function ActivityDetail() {
  return (
    <Layout>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.banner}></div>

        {/* Activity Box */}
        <div className={styles.activityBox}>
          <div className={styles.activityHeader}>
            <div className={styles.userInfo}>
              <img src="/user-icon.svg" alt="user" className={styles.userIcon} />
              <span className={styles.username}>Poster</span>
            </div>
            <div className={styles.timeLeft}>
              เหลือเวลาสมัครอีก <b> xx วัน</b>
            </div>
          </div>

          <div className={styles.activityContent}>
            <img src="/activity-poster.jpg" alt="activity" className={styles.poster} />
            <div className={styles.details}>
              <p><b>ชื่อ:</b> COURSES ภาษาอังกฤษ</p>
              <p><b>วัน:</b> 30 ธันวาคม 2568</p>
              <p><b>เวลา:</b> 8:00 นาฬิกา</p>
              <p><b>สถานที่:</b> อาคารเรียนรวม 2 ห้อง xxxx</p>
              <p><b>รายละเอียด:</b> อบรม COURSES ภาษาอังกฤษ</p>
              <p><b>จำนวน:</b> 30 คน</p>
              <p><b>ชั่วโมงกิจกรรม:</b> 4 ชั่วโมง</p>
            </div>
          </div>

          <div className={styles.joinButton}>
            <button>สมัครเข้าร่วม</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
