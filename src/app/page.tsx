import styles from "./page.module.scss";
import FirstCover from "./components/firstPage/FirstCover";
import MyInfo from "./components/myInfo/MyInfo";
import Header from "./components/header/Header";

export default function Home() {
  return (
    <div className={styles.page_body}>
      <FirstCover />
      <Header />
      <div className={styles.guide}>아래로 스크롤 하세요</div>
      <MyInfo />
    </div>
  );
}
