// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useRef, useState } from "react";
import "./App.css";

export default function StateForm() {
  const name = useRef(null);
  const age = useRef(null);

  const show = () => {
    console.log(
      `こんにちは、${name.current.value}(${age.current.value}歳)さん！`
    );
  };

  return (
    <form>
      <div>
        <label htmlFor="name">名前：</label>
        <input
          id="name"
          name="name"
          type="text"
          ref={name}
          defaultValue="佐藤尚之"
        />
      </div>
      <div>
        <label htmlFor="age">年齢：</label>
        <input id="age" name="age" type="number" ref={age} defaultValue="18" />
      </div>
      <div>
        <button type="button" onClick={show}>
          送信
        </button>
      </div>
      <p>{`こんにちは、${name.current.value}さん！`}</p>
    </form>
  );
}
