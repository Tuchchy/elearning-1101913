import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className=''>
      <header className={styles.header}>
        <div className={styles.header_container}>
          <h1>ยินดีต้อนรับสู่ <p className={styles.hightlight}>SUT ACT+</p></h1>
          <p>แพลตฟอร์มเพื่อการพัฒนาศักยภาพของนักศึกษา มหาวิทยาลัยเทคโนโลยีสุรนารี เรียนรู้ เข้าร่วมกิจกรรม รับเกียรติบัตร และสร้าง Transcript ของคุณได้ที่นี่</p>
        </div>  
      </header>
    </div>
  );
}
