"use client";

import React, { useState } from "react";
import styles from "./FirstCover.module.scss";
import { useStore } from "zustand";
import welcomeStore from "@/stores/welcomeStore";

const FirstCover = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [innerAni, setInnerAni] = useState(false);
  const [outerAni, setOuterAni] = useState(false);
  const [walls, setWalls] = useState(false);
  const [done, setDone] = useState(false);

  const store = welcomeStore();
  const { userName } = welcomeStore();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFadeOut(true);
    const inputName = e.currentTarget.elements.namedItem(
      "inputName"
    ) as HTMLInputElement;

    store.setUserName(inputName.value);

    setTimeout(() => {
      setIsFormSubmitted(true);
    }, 1000);

    setTimeout(() => {
      setInnerAni(true);
    }, 1000);
    setTimeout(() => {
      setOuterAni(true);
    }, 1500);
    setTimeout(() => {
      setWalls(true);
    }, 3500);
    setTimeout(() => {
      setDone(true);
    }, 5500);
  };

  return (
    <div className={`${done ? styles.done : null} ${styles.FirstCover}`}>
      <div
        className={`${isFormSubmitted ? styles.submitted : null} ${
          fadeOut ? styles.animation : null
        } ${styles.inputWindow}`}
      >
        <div className={styles.text}>입장 조건</div>
        <form onSubmit={handleSubmit}>
          <input
            required
            type="text"
            name="inputName"
            className={styles.input}
            placeholder="이름 입력"
          ></input>
        </form>
      </div>
      <div className={styles.wall}>
        <div
          className={`${outerAni ? styles.outerAni : null} ${
            styles.outer_circle_outline
          }`}
        ></div>
        <div
          className={`${walls ? styles.lCirclesAni : null} ${
            styles.outer_circle_l
          }`}
        ></div>
        <div
          className={`${walls ? styles.rCirclesAni : null} ${
            styles.outer_circle_r
          }`}
        ></div>
        <div
          className={`${innerAni ? styles.innerAni : null}  ${
            styles.inner_circle_outline
          }`}
        ></div>
        <div
          className={`${walls ? styles.lCirclesAni : null} ${
            styles.inner_circle_l
          }`}
        ></div>
        <div
          className={`${walls ? styles.rCirclesAni : null} ${
            styles.inner_circle_r
          }`}
        ></div>
        <div
          className={`${walls ? styles.lWallAni : null} ${styles.left_wall}`}
        ></div>
        <div
          className={`${walls ? styles.rWallAni : null} ${styles.right_wall}`}
        ></div>
      </div>
      <div className={styles.welcome}>{userName}님 환영합니다.</div>
    </div>
  );
};

export default FirstCover;
