import Layout from "../../components/layout";
import Link from "next/link";

import styles from "../../styles/Home.module.css"; // ✅ นี่คือ CSS Module

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.banner}></div>

        <div className={styles.searchBox}>
          <input type="text" placeholder="Search..." />
        </div>

        <div className={styles.grid}>
          {Array.from({ length: 9 }).map((_, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.cardHeader}>
                <p>ชื่อกิจกรรม</p>
                <h3>หลักสูตรออนไลน์</h3>
              </div>
              <div className={styles.cardImage}>
                <img src="/placeholder-image.svg" alt="placeholder" />
              </div>
              <div className={styles.cardFooter}>
                <span className={styles.tagGreen}>เปิดรับสมัคร</span>

                <Link href="/activitypage/activity-detail">
                  <span className={styles.tagYellow}>รายละเอียด</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
