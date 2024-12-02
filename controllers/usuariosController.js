const usuarioModel = require("../model/usuario");

module.exports = {
  index: async function (req, res) {
    try {
      console.log("Aqui estoy");
      const usuarios = await usuarioModel.listado(req, res);
      console.log(usuarios);

      res.render("usuarios/index", { usuarios: usuarios });
    } catch (error) {
      res.send(error);
    }
  },
  create: async function (req, res) {
    res.render("usuarios/crear");
  },
  guardar: async function (req, res) {
    let guarda = await usuarioModel.guardar(req.body, res);
    var usuarios = await usuarioModel.listado(req, res);

    res.render("usuarios/index", { usuarios: usuarios });
  },
  guardar_api: async function (req, res) {
    let respuesta = [];
    let guarda = await usuarioModel.guardar(req.body, res);

    if (guarda[0].error == "") {
      respuesta.push({
        error: "",
        response: [{ mensaje: guarda[0].respuesta, id: guarda[0].id }],
      });
    } else {
      respuesta.push({ error: guarda[0].error, response: "" });
    }
    res.json(respuesta);
  },
  eliminar: async function (req, res) {
    let id = parseInt(req.params.id);

    error = await usuarioModel.eliminar(id, res);
    var usuarios = await usuarioModel.listado(req, res);
    res.render("usuarios/index", { usuarios: usuarios });
  },
  eliminar_api: async function (req, res) {
    let respuesta = [];
    let id = parseInt(req.params.id);

    eliminar = await usuarioModel.eliminar(id, res);

    if (eliminar[0].error == "") {
      respuesta.push({
        error: "",
        response: [{ mensaje: eliminar[0].respuesta, id: eliminar[0].id }],
      });
    } else {
      respuesta.push({ error: eliminar[0].error, response: "" });
    }
    res.json(respuesta);
  },
  editar: async function (req, res) {
    let id = parseInt(req.params.id);

    usuario = await usuarioModel.obtenerUsuario(id, res);

    if (usuario) {
      res.render("usuarios/editar", { usuario: usuario });
    } else {
      //res.render('libros', {title: "Libreria JS", libro: libro})
    }
  },
  obten_usuario_api: async function (req, res) {
    let id = parseInt(req.params.id);

    usuario = await usuarioModel.obtenerUsuario(id, res);

    res.json(usuario);
  },
  actualizar: async function (req, res) {
    let id = parseInt(req.body.id);

    respuesta = await usuarioModel.actualizar(req.body, res);

    var usuarios = await usuarioModel.listado(req, res);

    res.render("usuarios/index", { usuarios: usuarios });
  },
  actualizar_api: async function (req, res) {
    let respuesta = [];
    let id = parseInt(req.body.id);

    update = await usuarioModel.actualizar(req.body, res);

    if (update[0].error == "") {
      respuesta.push({
        error: "",
        response: [{ mensaje: update[0].respuesta, id: update[0].id }],
      });
    } else {
      respuesta.push({ error: update[0].error, response: "" });
    }
    res.json(respuesta);
  },
};
