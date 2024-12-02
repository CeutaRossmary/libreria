module.exports = {
  agregar: function (req, res) {
    if (req.session.usuario) {
      res.send("Continua la compra");
    } else {
      res.render("users/login", {
        error: 1,
        mensaje: "Para continuar con la compra por favor accede con tu cuenta",
      });
    }
  },
};
