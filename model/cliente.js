const conn = require('../config/database')

module.exports = {
    listado: async function(req,res) {
        try {
            let clientes = await conn.query("Select * from clientes")
            conn.end            
            return clientes.rows
        } catch (error) {
            console.log(error);
        }
    },
    obtenercliente: async function(id, res) {
        try {
            cliente = await conn.query("SELECT * FROM clientes WHERE id = " + id)
            return cliente.rows
        } catch (error) {
            return error
        }
    },
    guardar: async function(data, res) {
        try {

            let nombre_usuario = ""

            let data_usr = []
            
            guarda = await conn.query("INSERT INTO clientes (rut, nombre, paterno, materno, direccion, correo, telefono) VALUES('" + data.rut
                + "', '"+ data.nombre +"', '"+ data.paterno +"', '" + data.materno + "', '" + data.direccion + "', '" + data.correo + "', '" + data.telefono + "') RETURNING id");
            
            let cliente_id = guarda.rows[0].id

            nombre_usuario = data.nombre + " " + data.paterno
            guarda_usr = await conn.query("INSERT INTO usuarios (nombre, usuario, password, tipo, activo, cliente_id) VALUES('" + nombre_usuario
                    + "', '"+ data.correo +"', '"+ data.correo +"', 2, 1, " + cliente_id + ") RETURNING id");    

            conn.end
        } catch (error) {
            console.log(error);
             
        }
    },
    eliminar: async function(id, res) {
        try {
            eliminar = await conn.query("DELETE FROM clientes where id = " + id) 
            conn.end
        } catch (error) {
            return error
        }
    },
    actualizar: async function(data, res) {
        try {
            console.log("actualizando data 03");
            
            update = await conn.query("UPDATE clientes SET rut = '" + data.rut + "', nombre = '" + data.nombre + "', paterno = '" 
                + data.paterno + "', materno = '" + data.materno + "', direccion = '" + data.direccion + "', correo = '" 
                + data.correo + "', telefono = '" + data.telefono + "' WHERE id = " + data.id);
            conn.end
        } catch (error) {
            console.log(error);
        }
    }
}