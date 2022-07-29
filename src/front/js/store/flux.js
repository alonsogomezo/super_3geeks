const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      user: [],
      userRegister: false,
      itemsCarrito: [],
      productoAnadido: false,
      productos: [],
      unProducto: [],
      carrito: [],
    },
    actions: {
      login: (body) => {
        fetch(process.env.BACKEND_URL + "/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body), //Convertimos la data a JSON
        })
          .then((resp) => resp.json())
          .then((resp) => {
            setStore({ user: resp });
            localStorage.setItem("accessToken", resp?.accessToken);
            localStorage.setItem("isAdmin", resp?.isAdmin);
            getActions().getCarrito();
          })
          .catch((error) => console.log(error));
      },
      signup: (body) => {
        fetch(process.env.BACKEND_URL + "/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body), //Convertimos la data a JSON
        })
          .then((resp) => resp.json())
          .then((resp) => {
            setStore({
              userRegister: resp?.msg == "usuario creado correctamente",
            });
          })
          .catch((error) => console.log(error));
      },
      creaProducto: (body) => {
        fetch(process.env.BACKEND_URL + "/producto", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
          body: JSON.stringify(body), //Convertimos la data a JSON
        })
          .then((resp) => resp.json())
          .then((resp) => {
            setStore({
              productoAnadido: resp?.msg == "producto anadido correctamente",
            });
          })
          .catch((error) => console.log(error));
      },
      muestraProducto: async () => {
        try {
          const resp = await fetch(process.env.BACKEND_URL + "/productos", {
            method: "GET",
          });
          const data = await resp.json();
          setStore({ productos: data });
          return data;
        } catch (error) {
          console.log(error);
        }
      },
      muestraPerfil: async () => {
        try {
          const resp = await fetch(process.env.BACKEND_URL + "/usuario", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("accessToken"),
            },
          });
          const data = await resp.json();
          setStore({ user: data });
          return data;
        } catch (error) {
          console.log(error);
        }
      },
      mostrarUnProducto: async () => {
        try {
          const resp = await fetch(process.env.BACKEND_URL + "/productos", {
            method: "GET",
          });
          const data = await resp.json();
          setStore({ productos: data });
          return data;
        } catch (error) {
          console.log(error);
        }
      },
      addCarrito: (id, cantidad) => {
        fetch(process.env.BACKEND_URL + "/carrito", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
          body: JSON.stringify({ id_producto: id, cantidad: cantidad }), //Convertimos la data a JSON
        })
          .then((resp) => resp.json())
          .then((resp) => {
            console.log(resp);
            getActions().getCarrito();
            return resp;
          })
          .catch((error) => console.log(error));
      },
      borrarItemCarrito: (id) => {
        fetch(process.env.BACKEND_URL + `/carrito/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        })
          .then((resp) => resp.json())
          .then((resp) => {
            getActions().getCarrito();
            return resp;
          })
          .catch((error) => console.log(error));
      },
      comprar: () => {
        /* /pago, metodo post, body=id_tarjeta */
        fetch(process.env.BACKEND_URL + "/pago", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
          body: JSON.stringify({ id_tarjeta: getStore().user.id_tarjeta }), //verificar si getStore trae el ID de la tarjeta,
          // tambien recordar que el admin no tiene tarjeta
        })
          .then((resp) => resp.json())
          .then((resp) => {
            getActions().getCarrito();
            return resp;
          })
          .catch((error) => console.log(error));
      },
      barraBusqueda: async (q, categoria_id) => {
        let params = [];

        if (q) {
          params.push("q" + q);
        }

        if (categoria_id) {
          params.push("categoria_id" + categoria_id);
        }

        params_str = params.join("&");

        if (params_str) {
          params_str = "?" + params_str;
        }

        try {
          const resp = await fetch(
            process.env.BACKEND_URL + "/producto/categorias" + params_str,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("accessToken"),
              },
            }
          );
          const data = await resp.json();
          setStore({ productos: data });
          return data;
        } catch (error) {
          console.log(error);
        }
      },
      getCarrito: async () => {
        try {
          const resp = await fetch(process.env.BACKEND_URL + "/carrito", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("accessToken"),
            },
          });
          const data = await resp.json();
          setStore({ itemsCarrito: data });
          return data;
        } catch (error) {
          console.log(error);
        }
      },
      verUnProducto: (id_producto) => {
        fetch(process.env.BACKEND_URL + "/product", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
          body: JSON.stringify({ id_producto: id_producto }), //Convertimos la data a JSON
        })
          .then((resp) => resp.json())
          .then((resp) => {
            setStore({ unProducto: resp });
            return resp;
          })
          .catch((error) => console.log(error));
      },
      tasaCambio: async (to, from, amount) => {
        var myHeaders = new Headers();
        myHeaders.append("apikey", "NP8FZK9A90SecZs7Z8uvEsbOLtHSqmfP");

        var requestOptions = {
          method: "GET",
          redirect: "follow",
          headers: myHeaders,
        };

        const resp = fetch(
          `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
          requestOptions
        );
        const data = await resp.json();
        return data;
        /* try {
          const resp = await fetch(process.env.BACKEND_URL + "/carrito", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("accessToken"),
            },
          });
          const data = await resp.json();
          setStore({ itemsCarrito: data });
          return data;
        } catch (error) {
          console.log(error);
        } */
      },
      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
