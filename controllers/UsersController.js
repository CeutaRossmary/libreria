var usuarioModel = require("../model/usuario");
var libroModel = require("../model/libro");

module.exports = {
  login: function (req, res) {
    res.render("users/login", { error: 0 });
  },
  autenticar: async function (req, res) {
    let respuesta = await usuarioModel.autenticar(req.body, res);

    if (respuesta) {
      if (respuesta.activo) {
        req.session.usuario = {
          id: respuesta.id,
          nombre: respuesta.nombre,
          tipo: respuesta.tipo,
        };

        console.log(req);

        var libros = await libroModel.obtener();

        res.render("index", { libros: libros });
      } else {
        res.render("users/login", {
          error: 1,
          mensaje: "El usuario no esta activo",
        });
      }
    } else {
      res.render("users/login", {
        error: 1,
        mensaje:
          "El usuario / contraseña proporcionada es incorrecta verifique por favor...",
      });
    }
  },
};
