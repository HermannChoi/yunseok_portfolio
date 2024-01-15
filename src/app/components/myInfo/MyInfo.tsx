import React from "react";
import styles from "./MyInfo.module.scss";
import Image from "next/image";

function MyInfo() {
  return (
    <div className={styles.info_space}>
      <h2>안녕하세요. 광합성 많은 새싹 개발자, 최윤석입니다.</h2>
      <div className={styles.profile_space}>
        <Image
          src="/images/profileImg.JPG"
          alt="프로필 이미지"
          width={150}
          height={150}
          className={styles.profileImg}
        />
        <div className={styles.profile_text}>
          <div>이름 : XXX</div>
          <div>생년월일 : 2001.XX.XX</div>
          <div>최종학력 : Brown International School</div>
        </div>
      </div>
    </div>
  );
}

export default MyInfo;
