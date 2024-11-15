import connect from "../config/db.js"; // Import connection

export const getClienteUsuario = async (req, res) => {
  const db = await connect();
  try {
    const [result] = await db.query(
      "SELECT u.idusers, u.user, CONCAT(c.Nombre, ' ', c.ApellidoPa) AS Cliente, c.telefono, c.correoElectronico FROM users u INNER JOIN clientes c ON u.idusers = c.users_idusers"
    );
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  } finally {
    await db.end();
  }
};

export const getTecnicosUsuarios = async (req, res) => {
  const db = await connect();
  try {
    const [result] = await db.query(
      "SELECT u.idusers, u.user, CONCAT(t.Nombre, ' ', t.ApellidoPa) AS Tecnico, t.estatus FROM users u INNER JOIN tecnicos t ON u.idusers = t.users_idusers"
    );
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  } finally {
    await db.end();
  }
};

export const getReporteTareas = async (req, res) => {
  const db = await connect();
  try {
    const [result] = await db.query(
      "SELECT tk.Titulo, tk.Descripcion, tk.Observaciones, tk.estatus, r.folioReporte, r.fechaHoraActualizacion AS FechaModificacion FROM tareas tk RIGHT JOIN reportes r ON r.idReporte = tk.idReportes WHERE r.idReporte = ?",
      [req.params.id]
    );
    if (!result.length) {
      return res.status(404).json({ error: "Reporte not found" });
    }
    res.json(result[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  } finally {
    await db.end();
  }
};

export const getEquipoUbicacion = async (req, res) => {
  const db = await connect();
  try {
    const [result] = await db.query(
      "SELECT p.modelo, p.categoria, p.marca, e.numeroSerie, e.numeroEquipo, e.estatus, ub.nombre, ub.ciudad, ub.estado, ub.codigoPostal, ub.direccion FROM  productos p RIGHT JOIN equipos e ON p.idProductos = e.idProductos  LEFT JOIN ubicaciones ub ON e.idUbicaciones = ub.idUbicaciones"
    );
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  } finally {
    await db.end();
  }
};

export const getReportesAsignados = async (req, res) => {
  const db =await connect();
  try{
    const [result] = await db.query(
      "SELECT r.folioReporte,  r.fechaCreacion,   r.fechaHoraActualizacion as FechaModificacion,  r.estado AS estadoReporte, r.comentarios,  e.estatus AS estadoEquipo,  e.numeroSerie,  e.numeroEquipo,  CONCAT(t.Nombre, ' ', t.ApellidoPa) AS TecnicoAsignado, CONCAT(c.Nombre, ' ', c.ApellidoPa) AS Cliente, c.Telefono AS telefonoCliente,  c.CorreoElectronico AS correoCliente FROM  reportes r INNER JOIN equipos e ON r.idEquipos = e.idEquipos LEFT JOIN tecnicos t ON r.tecnicoAsignado = t.idTecnicos JOIN clientes c ON r.creadorReporte = c.idClientes;");
      res.json(result);
      await db.end();
  }catch(error){
    console.error(error);
    res.status(500).send("Server Error")
    await db.end();
  }
};
