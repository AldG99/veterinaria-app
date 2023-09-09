import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { MdOutlineLocalGroceryStore } from 'react-icons/md';
import '../styles/TiendaEnLinea.css';

function TiendaEnLinea() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    { id: 1, name: 'Croquetas Premium para perros de razas pequeñas', category: 'Alimentos', price: 390.99, image: require('../images/food-1.jpg'), alt: 'Croquetas Premium' },
    { id: 2, name: 'Alimento balanceado especial para razas pequeñas', category: 'Alimentos', price: 560.99, image: require('../images/food-2.jpg'), alt: 'Alimento Especial' },
    { id: 3, name: 'Comida de alta calidad para perros pequeños y exigentes', category: 'Alimentos', price: 630.99, image: require('../images/food-1.jpg'), alt: 'Comida Alta Calidad' },
    { id: 4, name: 'Dieta completa y equilibrada para perros de razas pequeñas', category: 'Alimentos', price: 410.99, image: require('../images/food-2.jpg'), alt: 'Dieta Completa' },
    { id: 5, name: 'Disco volador para perros de alta resistencia', category: 'Accesorios', price: 260.99, image: require('../images/accessory-1.jpg'), alt: 'Disco Volador' },
    { id: 6, name: 'Cuerda trenzada para juegos de tira y afloja', category: 'Accesorios', price: 209.99, image: require('../images/accessory-2.jpg'), alt: 'Cuerda Trenzada' },
    { id: 7, name: 'Alimento dietético para perros con problemas digestivos', category: 'Cuidados', price: 649.99, image: require('../images/care-1.jpg'), alt: 'Alimento Dietético' },
    { id: 8, name: 'Alimento balanceado para perros mayores de 7 años', category: 'Cuidados', price: 789.99, image: require('../images/care-2.jpg'), alt: 'Alimento Balanceado' },
    { id: 9, name: 'Alimento para perros con sensibilidad dental', category: 'Cuidados', price: 1049.99, image: require('../images/care-1.jpg'), alt: 'Alimento para Sensibilidad Dental' },
    { id: 10, name: 'Alimento para perros deportistas de alta energía', category: 'Cuidados', price: 1119.99, image: require('../images/care-2.jpg'), alt: 'Alimento de Alta Energía' },
    // Agrega más productos aquí...
  ];  

  const [carrito, setCarrito] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [maxProductsReached, setMaxProductsReached] = useState(false);

  const handlePurchase = (productId) => {
    console.log('Realizando compra del producto con ID:', productId);
  };

  const handleAddToCarrito = (product) => {
    if (carrito.length >= 10) {
      setMaxProductsReached(true);
      return;
    }

    setCarrito([...carrito, product]);
    setTotalPrice(totalPrice + product.price);
  };

  const handleRemoveLastProduct = () => {
    const lastProduct = carrito[carrito.length - 1];
    const updatedCarrito = carrito.slice(0, carrito.length - 1);
    setCarrito(updatedCarrito);
    setTotalPrice(totalPrice - lastProduct.price);
    setMaxProductsReached(false);
  };

  const handleGoToCompraProducto = () => {
    if (carrito.length >= 2) {
      // Aquí se puede agregar el código adicional que se desea ejecutar cuando se cumpla la condición.
    } else {
      alert('Debes agregar al menos dos productos al carrito para realizar la compra.');
    }
  };

  const categories = ['Alimentos', 'Accesorios', 'Cuidados'];

  return (
    <div className='tienda-container'>
      <Helmet>
        <title>Tienda en Línea - PetCare</title>
      </Helmet>
      <style scoped>
        {`
          html, body {
            background-color: #f0f0e2;
          }
        `}
      </style>
      <div>
        <div className='titulo-tienda'>
          <h1>Nuestra Tienda en Línea</h1>
          <p>Explora nuestra selección de productos para tus mascotas:</p>
        </div>
        {categories.map((category) => (
          <div className='productos-container' key={category}>
            <h2>Últimas novedades en {category}</h2>
            <div className='product-list'>
              {products
                .filter((product) => product.category === category)
                .map((product) => (
                <div key={product.id} className='product-item'>
                  <h3>{product.name}</h3>
                  <img src={product.image} alt={product.alt} />
                  <p>Precio: ${product.price}</p>
                  <button className='buy-button' onClick={() => handlePurchase(product.id)}>
                    Comprar Ahora
                  </button>
                  <button
                    className='add-to-cart-button'
                    onClick={() => handleAddToCarrito(product)}
                    disabled={maxProductsReached}
                  >
                    Agregar al Carrito
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className='carrito'>
        <h2 style={{ display: 'flex', alignItems: 'center' }}>
          Carrito{' '}
          <span style={{ marginLeft: '5px', marginTop: '5px' }}>
            <MdOutlineLocalGroceryStore />
          </span>
        </h2>
        {carrito.length === 0 ? (
          <p>No has añadido ningún producto al carrito.</p>
        ) : (
          <>
            <ul>
              {carrito.map((product) => (
                <li key={product.id}>
                  {product.name} - ${product.price}
                </li>
              ))}
            </ul>
            <button onClick={handleRemoveLastProduct}>
              Eliminar Último Producto
            </button>
          </>
        )}
        {maxProductsReached && (
          <p>Has alcanzado el límite máximo de productos en el carrito.</p>
        )}
        {carrito.length >= 2 ? (
          <button onClick={handleGoToCompraProducto}>
            Ir a Comprar Producto
          </button>
          ) : (
          <button disabled>
            Ir a Comprar Producto
          </button>
        )}
        {totalPrice > 0 && (
          <p>Precio total: ${totalPrice.toFixed(2)}</p>
        )}
      </div>
    </div>
  );
}

export default TiendaEnLinea;
