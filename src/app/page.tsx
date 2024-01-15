import styles from "./page.module.scss";
import FirstCover from "./components/firstPage/FirstCover";

export default function Home() {
  return (
    <div className={styles.page_body}>
      <FirstCover />
      <main className={styles.main}>최윤석의 포트폴리오</main>
    </div>
  );
}
