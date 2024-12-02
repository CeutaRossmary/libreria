var libroModel = require("../model/libro");

module.exports = {
  index: async function (req, res) {
    try {
      const libros = await libroModel.obtener();
      res.render("libros/index", { libros: libros });
    } catch (error) {
      res.send(error);
    }
  },
  index_api: async function (req, res) {
    const libros = await libroModel.obtener();

    res.json(libros);
  },
  create: function (req, res) {
    res.render("libros/crear");
  },
  guardar: async function (req, res) {
    await libroModel.guardar(req.body, req.file, res);
    var libros = await libroModel.obtener();

    res.render("libros/index", { libros: libros });
  },
  editar: async function (req, res) {
    let id = parseInt(req.params.id);

    libro = await libroModel.obtenerlibro(id, res);

    if (libro) {
      res.render("libros/editar", { libro: libro });
    } else {
      //res.render('libros', {title: "Libreria JS", libro: libro})
    }
  },
  eliminar: async function (req, res) {
    let id = parseInt(req.params.id);

    error = await libroModel.eliminar(id, res);
    var libros = await libroModel.obtener();
    res.render("libros/index", { libros: libros });
  },
  actualizar: async function (req, res) {
    let id = parseInt(req.body.id);

    respuesta = await libroModel.actualizar(req.body, res);

    var libros = await libroModel.obtener();

    res.render("libros/index", { libros: libros });
  },
};
