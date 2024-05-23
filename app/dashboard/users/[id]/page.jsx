import Image from "next/image";
import styles from "../../../ui/dashboard/users/singleUser/singleUser.module.css";
import { fetchUser } from "../../../lib/data";
import { updateUser } from "../../../lib/actions";
const SingleUserPage = async ({ params }) => {
  const { id } = params;
  const user = await fetchUser(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={user.img ?? "/noavatar.png"} alt={user.username} fill />
        </div>
        {user.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" value={user.id} name="id" />
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder={user.username}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder={user.email}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="*******"
          />
          <label htmlFor="phone">Phone</label>
          <input
            type="phone"
            name="phone"
            id="phone"
            placeholder={user.phone}
          />
          <label htmlFor="address">Address</label>
          <input
            type="address"
            name="address"
            id="address"
            placeholder={user.address}
          />
          <label htmlFor="isAdmin">IsAdmin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} selected={user.isAdmin}>
              Yes
            </option>
            <option value={false} selected={!user.isAdmin}>
              No
            </option>
          </select>
          <label htmlFor="isActive">isActive?</label>
          <select name="isActive" id="isActive">
            <option value={true} selected={user.isActive}>
              Yes
            </option>
            <option value={false} selected={!user.isActive}>
              No
            </option>
          </select>
          <button type="submit">Atualizar</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
