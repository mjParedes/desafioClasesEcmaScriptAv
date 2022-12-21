// * Creando clase con ES avanzado


class ProductManager {
  constructor() {
    this.products = [];
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    if(!title || !description || !price || !thumbnail || !code || !stock) {
      return console.log(`Es obligatorio completar todos los campos`);
    }

    const product = {
      id: this.#generateId(),
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    }

    const productExists = this.products.find((p) => p.code === product.code);
        if (productExists) {
          return console.log("¡¡ERROR codigo repetido!!");
        } else {
          this.products.push(product);
        }
  }

  #generateId() {
    const id =
      this.products.length === 0
        ? 1
        : this.products[this.products.length - 1].id + 1;
    return id;
  }

  getProducts() {
    const allProducts = [...this.products];
    return allProducts;
  }

  getProductsById(id) {
    const productID = this.products.find((p) => p.id === id);

    if (productID) {
      return productID;
    } else {
      return "Not found";
    }
  }
}

// creacion de instancia de clase 
const productManager = new ProductManager();

console.log(productManager.getProducts());

productManager.addProduct(
  "Producto de prueba",
  "Este es un producto de prueba",
  200,
  "Sin imagen",
  "abc123",
  25
);

console.log(productManager.getProducts());

productManager.addProduct(
  "Producto de prueba",
  "Este es un producto de prueba",
  200,
  "Sin imagen",
  "abc123",
  25
);

console.log(productManager.getProductsById(1));
console.log(productManager.getProductsById(2));






// ! PROCESO TESTING ENTREGABLE

// Se creará una instancia de la clase “ProductManager”
// Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
// Se llamará al método “addProduct” con los campos:
// title: “producto prueba”
// description:”Este es un producto prueba”
// price:200,
// thumbnail:”Sin imagen”
// code:”abc123”,
// stock:25
// El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE
// Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado
// Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.
// Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo
