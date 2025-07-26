import './globals.css';
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.header}>
          <div className={styles.headerTitle}>
            <h1>ยินดีต้อนรับสู่ <div className="text-orange">SUT ACT+</div></h1>
            <h2>แพลตฟอร์มเพื่อการพัฒนาศักยภาพของนักศึกษา มหาวิทยาลัยเทคโนโลยีสุรนารีเรียนรู้ เข้าร่วมกิจกรรม รับเกียรติบัตร และสร้าง Transcript ของคุณได้ที่นี่</h2>
          </div>
        </header>
      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
