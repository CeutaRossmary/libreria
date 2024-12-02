const conn = require("../config/database");

module.exports = {
  listado: async function (req, res) {
    try {
      let usuarios = await conn.query("Select * from usuarios");
      conn.end;
      return usuarios.rows;
    } catch (error) {
      console.log(error);
    }
  },
  obtenerUsuario: async function (id, res) {
    try {
      usuario = await conn.query("SELECT * FROM usuarios WHERE id = " + id);
      return usuario.rows;
    } catch (error) {
      return error;
    }
  },
  guardar: async function (data, res) {
    let response = [];
    try {
      if (data.cliente == 0) {
        guarda = await conn.query(
          "INSERT INTO usuarios (nombre, usuario, password, tipo, activo) VALUES('" +
            data.nombre +
            "', '" +
            data.usuario +
            "', '" +
            data.password +
            "', " +
            data.tipo +
            ", " +
            data.activo +
            ") RETURNING id"
        );
      } else {
        guarda = await conn.query(
          "INSERT INTO usuarios (nombre, usuario, password, tipo, activo, cliente_id) VALUES('" +
            data.nombre +
            "', '" +
            data.usuario +
            "', '" +
            data.password +
            "', " +
            data.tipo +
            ", " +
            data.activo +
            ", " +
            data.cliente +
            ") RETURNING id"
        );
      }
      conn.end;

      response.push({
        error: "",
        respuesta: "Guardado Exitosamente",
        id: guarda.rows[0].id,
      });
    } catch (error) {
      response.push({ error: error.detail, respuesta: error });
    }
console.log(response);
    return response;
  },
  eliminar: async function (id, res) {
    let response = [];
    try {
      eliminar = await conn.query("DELETE FROM usuarios where id = " + id);
      conn.end;

      response.push({ error: "", respuesta: "Eliminado Exitosamente", id: id });
    } catch (error) {
      response.push({ error: error.detail, respuesta: error });
    }
    return response;
  },
  actualizar: async function (data, res) {
    let response = [];
    try {
      console.log(data);

      if (data.cliente == 0) {
        update = await conn.query(
          "UPDATE usuarios SET nombre = '" +
            data.nombre +
            "', usuario = '" +
            data.usuario +
            "', password = '" +
            data.password +
            "', tipo = " +
            data.tipo +
            ", activo = " +
            data.activo +
            " WHERE id = " +
            data.id
        );
      } else {
        update = await conn.query(
          "UPDATE usuarios SET nombre = '" +
            data.nombre +
            "', usuario = '" +
            data.usuario +
            "', password = '" +
            data.password +
            "', tipo = " +
            data.tipo +
            ", activo = " +
            data.activo +
            ", cliente_id = " +
            data.cliente +
            " WHERE id = " +
            data.id
        );
      }
      conn.end;

      response.push({
        error: "",
        respuesta: "Actualizado Exitosamente",
        id: data.id,
      });
    } catch (error) {
      response.push({ error: error.detail, respuesta: error });
    }
    return response;
  },
  autenticar: async function (data, res) {
    let usuario = await conn.query(
      "Select * from usuarios where usuarios.usuario = '" + data.username + "'"
    );

    if (usuario.rows) {
      if (usuario.rows[0].password === data.password) {
        return usuario.rows[0];
      } else {
        return null;
      }
    }
  },
};
