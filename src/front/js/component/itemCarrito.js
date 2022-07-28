import React from "react";

const ItemCarrito = ({
  src = "https://static-sevilla.abc.es/media/gurmesevilla/2012/01/comida-rapida-casera.jpg",
  nombreProducto = "Producto",
  id = 0,
}) => {
  return (
    <div className="border border-dark d-flex justify-content-between">
      {/* imagen */}
      <div>
        <img src={src} width={40} height={40} />
      </div>
      {/* nombreProducto */}
      <div>
        <p className="pt-2">{nombreProducto}</p>
      </div>
      {/* botonRemove */}
      <div>
        <button type="button" className="btn" onClick={() => {}}>
          ❌
        </button>
      </div>
    </div>
  );
};

export default ItemCarrito;
