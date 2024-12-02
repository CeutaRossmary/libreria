const clienteModel = require("../model/cliente")

module.exports = {

    index:async function(req,res) {
        try {
            const clientes = await clienteModel.listado(req, res);
            console.log(clientes);
            res.render('clientes/index', {clientes: clientes});
        } catch (error) {
            res.send(error)
        }  
    },
    create:async function(req,res) {
        res.render('clientes/crear')
    },
    guardar:async function(req, res) {
        await clienteModel.guardar(req.body, res)
        var clientes = await clienteModel.listado(req, res);
        
        res.render('clientes/index', {clientes: clientes});
    },
    eliminar:async function(req,res) {
    

        let id = parseInt(req.params.id)
        
        error = await clienteModel.eliminar(id, res)
        var clientes = await clienteModel.listado(req,res);
        res.render('clientes/index', {clientes: clientes});
    },
    editar:async function(req,res) {

        let id = parseInt(req.params.id)

        cliente = await clienteModel.obtenercliente(id,res);
        console.log("cliente editado 02");
         
        if (cliente) {
            res.render('clientes/editar', {cliente: cliente})
        } else {
            //res.render('libros', {title: "Libreria JS", libro: libro})
        }
              
    },
    actualizar:async function(req,res) {
        
        let id = parseInt(req.body.id)
        
        respuesta = await clienteModel.actualizar(req.body, res)

        var clientes = await clienteModel.listado(req,res);

        res.render('clientes/index', {clientes: clientes});
    }

}