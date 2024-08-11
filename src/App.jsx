// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from "react";
import "./App.css";

export default function StateForm() {
  // フォームとして扱う値をStateとして宣言
  const [form, setForm] = useState({
    name: "山田太郎",
    age: 18,
  });

  // フォーム要素の変更をStateに反映
  const handleForm = (e) => {
    setForm({
      ...form,
      // ここはなに？
      [e.target.value]: e.target.value,
    });
  };

  const show = () => {
    console.log(`こんにちは、${form.name}(${form.age}歳)さん！`);
  };

  return (
    <form>
      <div>
        <label htmlFor="name">名前：</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={handleForm}
          value={form.name}
        />
      </div>
      <div>
        <label htmlFor="age">年齢：</label>
        <input
          id="age"
          name="age"
          type="number"
          onChange={handleForm}
          value={form.age}
        />
      </div>
      <div>
        <button type="button" onClick={show}>
          送信
        </button>
      </div>
      <p>
        こんにちは、{form.name}({form.age}歳)さん！
      </p>
    </form>
  );
}
