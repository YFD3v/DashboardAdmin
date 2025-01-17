import styles from "../../../ui/dashboard/products/addProduct/addProduct.module.css";
import { addProduct } from "../../../lib/actions";
const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action={addProduct} className={styles.form}>
        <input type="text" placeholder="Title" name="title" required />
        <select name="category" id="category">
          <option value="general">Choose a Category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input type="number" placeholder="Price" name="price" id="price" />
        <input type="number" placeholder="Stock" name="stock" id="stock" />
        <input type="text" placeholder="Color" name="color" />
        <input type="text" placeholder="Size" name="size" />
        <textarea
          name="description"
          id="description"
          rows="16"
          placeholder="Description"
        ></textarea>
        <button type="submit">Criar</button>
      </form>
    </div>
  );
};

export default AddProductPage;
