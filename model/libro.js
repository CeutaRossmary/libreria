const conn = require("../config/database");

module.exports = {
  obtener: async function () {
    let libros = await conn.query("SELECT * from libros ORDER BY id");
    conn.end;
    return libros.rows;
  },
  obtenerlibro: async function (id, res) {
    try {
      libro = await conn.query("SELECT * FROM libros WHERE id = " + id);
      return libro.rows;
    } catch (error) {
      return error;
    }
  },
  guardar: async function (data, imagen, res) {
    try {
      libro_guardar = await conn.query(
        "INSERT INTO libros (titulo, resena, autor, anio, imagen) VALUES('" +
          data.titulo +
          "', '" +
          data.resena +
          "', '" +
          data.autor +
          "', '" +
          data.anio +
          "', '" +
          imagen.filename +
          "')"
      );

      conn.end;
    } catch (error) {
      return error;
    }
  },
  eliminar: async function (id, res) {
    try {
      libros_eliminar = await conn.query("DELETE FROM libros where id = " + id);
      conn.end;
    } catch (error) {
      return error;
    }
  },
  actualizar: async function (data, res) {
    try {
      libros_upd = await conn.query(
        "UPDATE libros SET titulo = '" +
          data.titulo +
          "', resena = '" +
          data.resena +
          "', autor = '" +
          data.autor +
          "', anio = '" +
          data.anio +
          "' WHERE id = " +
          data.id
      );
      conn.end;
    } catch (error) {
      return error;
    }
  },
};
