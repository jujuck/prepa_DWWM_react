import { _____ } from "react";
import _____ from "axios";

const initialProduct = {
  name: "",
  _______: 0,
  description: "",
  rating: 0,
  category: _______,
};

function Form() {
  const [_______, setProduct] = useState(initialProduct);

  const handleChange = (e) => {
    setProduct((prev) => ({ ..._______, [e.target.name]: e.target. }));
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      axios.post("http://localhost/_____/products", _______);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form __________={handleAddProduct}>
      <h3>Ajout d'un produit</h3>
      <label>
        Nom du produit
        <input
          name="name"
          type=_________
          onChange={handleChange}
          value={category.name}
        />
      </label>
      <label>
        Prix
        <input
          name="price"
          type="number"
          onChange={_____________}
          value={________.price}
        />
      </label>
      <label>
        Description
        <textarea
          name="description"
          onChange={handleChange}
          value={category.description}
        />
      </label>
      <_____________>
        Note
        <input
          name="rating"
          type="number"
          onChange={handleChange}
          value={category.rating}
        />
      </label>
      <label>
        Categorie
        <select value={product.catgory} onChange={___________} name="category">
          <option value="">Aucune</option>
          <option value="woman">Femmes</option>
          <option value="men">Hommes</option>
          <option value="child">Enfant</option>
        </select>
      </label>
      <____________ type=______________>Ajouter le produit</button>
    </form>
  );
}

export default Form;
