var libroModel = require("../model/libro");

module.exports = {
    index:async function (req, res) {
        var libros = await libroModel.obtener()
        
        res.render('index', {title: 'Librerias JS', libros: libros})
    }
}