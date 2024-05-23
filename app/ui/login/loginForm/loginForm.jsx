"use client";

import { authenticate } from "../../../lib/actions";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const [err, formAction] = useFormState(authenticate, undefined);

  return (
    <div className={styles.container}>
      <form action={formAction} className={styles.form}>
        <h1>Login</h1>
        <input type="text" placeholder="Username" name="username" />
        <input type="password" placeholder="Password" name="password" />
        <button type="submit">Enviar</button>
        {err && err}
      </form>
    </div>
  );
};

export default LoginForm;
