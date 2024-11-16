import connect from "../config/db.js"; // Import connection

export const getClienteUsuario = async (req, res) => {
  const db = await connect();
  try {
    const [result] = await db.query(
      "SELECT u.idusers, u.user, CONCAT(c.Nombre, ' ', c.ApellidoPa, ' ' , c.apellidoMa) AS Cliente, c.telefono, c.correoElectronico, c.idClientes FROM users u INNER JOIN clientes c ON u.idusers = c.users_idusers"
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
      "SELECT u.idusers, u.user, CONCAT(t.Nombre, ' ', t.ApellidoPa, ' ', t.ApellidoMa) AS Tecnico, t.estatus, t.telefono, t.correoElectronico, t.idTecnicos FROM users u INNER JOIN tecnicos t ON u.idusers = t.users_idusers"
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
      "SELECT e.idEquipos, p.modelo, p.categoria, p.marca, e.numeroSerie, e.numeroEquipo, e.estatus, ub.nombre, ub.ciudad, ub.estado, ub.codigoPostal, ub.direccion FROM  productos p RIGHT JOIN equipos e ON p.idProductos = e.idProductos  LEFT JOIN ubicaciones ub ON e.idUbicaciones = ub.idUbicaciones"
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
  const db = await connect();
  try {
    const [result] = await db.query(
      "SELECT r.folioReporte, r.tituloReporte,  r.fechaCreacion,   r.fechaHoraActualizacion as FechaModificacion,  r.estado AS estadoReporte, r.comentarios,  e.estatus AS estadoEquipo,  e.numeroSerie,  e.numeroEquipo,  CONCAT(t.Nombre, ' ', t.ApellidoPa, ' ', t.apellidoMa) AS TecnicoAsignado, CONCAT(c.Nombre, ' ', c.ApellidoPa,' ', c.apellidoMa) AS Cliente, c.Telefono AS telefonoCliente,  c.CorreoElectronico AS correoCliente, u.CodigoPostal, u.Nombre AS nombreUbicacion, u.Direccion FROM  reportes r INNER JOIN equipos e ON r.idEquipos = e.idEquipos INNER JOIN tecnicos t ON r.tecnicoAsignado = t.idTecnicos  INNER JOIN clientes c ON r.creadorReporte = c.idClientes INNER JOIN ubicaciones u ON e.idUbicaciones = u.idUbicaciones;;"
    );
    res.json(result);
    await db.end();
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
    await db.end();
  }
};

export const getHistorialMovimientos = async (req, res) => {
  const db = await connect();
  try {
    const [result] = await db.query(
      "SELECT e.numeroEquipo,e.numeroSerie,e.estatus AS estatusEquipo, p.modelo AS modeloProducto, p.categoria AS categoriaProducto,  p.marca AS marcaProducto, mi.tipoMovimiento, mi.cantidad,mi.fechaMovimiento,  ub.nombre AS ubicacionDestino, ub.ciudad, ub.estado, ub.codigoPostal, ub.direccion FROM movimientos_inventario mi INNER JOIN equipos e ON mi.idEquipo = e.idEquipos LEFT JOIN productos p ON e.idProductos = p.idProductos LEFT JOIN ubicaciones ub ON mi.idUbicacion = ub.idUbicaciones WHERE  e.idEquipos = ? ORDER BY  mi.fechaMovimiento DESC",
      [req.params.id]
    );
    res.json(result);
    await db.end();
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
    await db.end();
  }
};

export const getTecnicosActivosReportesPendientes = async (req, res) => {
  const db = await connect();
  try {
    const [result] = await db.query(
      "SELECT CONCAT(t.Nombre, ' ', t.ApellidoPa) AS nombreTecnico, t.Telefono, r.folioReporte, r.estado, r.fechaCreacion, e.numeroEquipo, e.numeroSerie FROM tecnicos t LEFT JOIN reportes r ON t.idTecnicos = r.tecnicoAsignado LEFT JOIN equipos e ON r.idEquipos = e.idEquipos WHERE  t.Estatus = 'activo' AND r.estado = 'pendiente';"
    );
    res.json(result);
    await db.end();
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
    await db.end();
  }
};

export const getReporteClientes = async (req, res) => {
  const db = await connect();
  try {
    const [result] = await db.query(
      "SELECT   r.folioReporte, r.fechaCreacion, r.fechaHoraActualizacion AS fechaModificacion,  r.estado, r.comentarios, CONCAT(c.Nombre, ' ', c.ApellidoPa, ' ', c.ApellidoMa) AS nombreCliente, e.numeroEquipo, e.numeroSerie, CONCAT(t.Nombre, ' ', t.ApellidoPa,' ', t.ApellidoMa) AS tecnicoAsignado FROM  reportes r INNER JOIN clientes c ON r.creadorReporte = c.idClientes LEFT JOIN equipos e ON r.idEquipos = e.idEquipos  LEFT JOIN tecnicos t ON r.tecnicoAsignado = t.idTecnicos WHERE c.idClientes = ?;",
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

export const getTareasReporte = async (req, res) => {
  const db = await connect();
  try {
    const [result] = await db.query(
      "SELECT tk.Titulo,    tk.Descripcion,tk.Observaciones,tk.estatus AS estatusTarea, r.folioReporte,r.fechaCreacion, r.fechaHoraActualizacion AS fechaModificacion,CONCAT(c.Nombre, ' ', c.ApellidoPa) AS nombreCliente,CONCAT(t.Nombre, ' ', t.ApellidoPa) AS tecnicoAsignado FROM  tareas tk INNER JOIN reportes r ON tk.idReportes = r.idReporte LEFT JOIN clientes c ON r.creadorReporte = c.idClientes LEFT JOIN tecnicos t ON r.tecnicoAsignado = t.idTecnicos WHERE r.idReporte = ?;",
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

export const getEquiposUbicacionById = async (req, res) => {
  const db = await connect();
  try {
    const [result] = await db.query(
      "SELECT   e.numeroEquipo, e.numeroSerie, e.estatus AS estatusEquipo,p.modelo,p.categoria,p.marca,ub.nombre AS nombreUbicacion,ub.ciudad,ub.estado,ub.codigoPostal,  ub.direccion FROM equipos e LEFT JOIN productos p ON e.idProductos = p.idProductos LEFT JOIN ubicaciones ub ON e.idUbicaciones = ub.idUbicaciones WHERE ub.idUbicaciones = ?;",
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
