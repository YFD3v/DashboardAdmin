import Image from "next/image";
import styles from "../../../ui/dashboard/products/singleProduct/singleProduct.module.css";
import { fetchProduct } from "../../../lib/data";
import { updateProduct } from "../../../lib/actions";
const SingleProductPage = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);
  console.log(product);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input type="hidden" name="id" value={product.id} />
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder={product.title}
          />
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            id="price"
            placeholder={`R$${product.price}`}
          />
          <label htmlFor="stock">Stock</label>
          <input
            type="text"
            name="stock"
            id="stock"
            placeholder={product.stock}
          />
          <label htmlFor="color">Color</label>
          <input
            type="text"
            name="color"
            id="color"
            placeholder={product.color}
          />
          <label htmlFor="size">Size</label>
          <input type="text" name="size" id="size" placeholder={product.size} />
          <label htmlFor="category">Category</label>
          <select name="category" id="category">
            <option
              value="kitchen"
              seletec={product.category === "kitchen"}
            >
              Kitchen
            </option>
            <option value="phone" seletec={product.category === "phone"}>
              Phone
            </option>
            <option
              value="computer"
              selected={product.category === "computer"}
            >
              Computer
            </option>
          </select>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            placeholder={product.description}
          ></textarea>
          <button type="submit">Atualizar</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
