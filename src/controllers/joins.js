import connect from "../config/db.js"; // Import connection

export const getClienteUsuario = async (req, res) => {
  const db = await connect();
  try {
    const [result] = await db.query(`
      SELECT 
          u.idusers, 
          u.user, 
          CONCAT(c.Nombre, ' ', c.ApellidoPa, ' ', c.ApellidoMa) AS Cliente, 
          c.telefono, 
          c.correoElectronico, 
          c.idClientes 
      FROM 
          users u 
      INNER JOIN 
          clientes c ON u.idusers = c.users_idusers
    `);
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
    const [result] = await db.query(`
      SELECT 
          u.idusers, 
          u.user, 
          CONCAT(t.Nombre, ' ', t.ApellidoPa, ' ', t.ApellidoMa) AS Tecnico, 
          t.estatus, 
          t.telefono, 
          t.correoElectronico, 
          t.idTecnicos 
      FROM 
          users u 
      INNER JOIN 
          tecnicos t ON u.idusers = t.users_idusers
    `);
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
      `
      SELECT 
          tk.Titulo, 
          tk.Descripcion, 
          tk.Observaciones, 
          tk.estatus, 
          r.folioReporte, 
          r.tituloReporte, 
          r.fechaHoraActualizacion AS FechaModificacion 
      FROM 
          tareas tk 
      RIGHT JOIN 
          reportes r ON r.idReporte = tk.idReportes 
      WHERE 
          r.idReporte = ?
      ORDER BY r.fechaCreacion DESC
    `,
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
    const [result] = await db.query(`
      SELECT 
          e.idEquipos, 
          p.idProductos, 
          ub.idUbicaciones, 
          p.modelo, 
          p.categoria, 
          p.marca, 
          e.numeroSerie, 
          e.numeroEquipo, 
          e.estatus, 
          ub.nombre, 
          ub.ciudad, 
          ub.estado, 
          ub.codigoPostal, 
          ub.direccion 
      FROM 
          productos p 
      RIGHT JOIN 
          equipos e ON p.idProductos = e.idProductos  
      LEFT JOIN 
          ubicaciones ub ON e.idUbicaciones = ub.idUbicaciones
    `);
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
    const [result] = await db.query(`
      SELECT 
          r.IdReporte,
          r.folioReporte, 
          r.tituloReporte, 
          r.fechaCreacion, 
          r.fechaHoraActualizacion AS FechaModificacion, 
          r.estado, 
          r.comentarios, 
          r.ComentariosFinales, 
          e.estatus AS estadoEquipo, 
          e.numeroSerie, 
          e.numeroEquipo, 
          CONCAT(t.Nombre, ' ', t.ApellidoPa, ' ', t.ApellidoMa) AS TecnicoAsignado, 
          CONCAT(c.Nombre, ' ', c.ApellidoPa, ' ', c.ApellidoMa) AS Cliente, 
          c.Telefono AS telefonoCliente, 
          c.CorreoElectronico AS correoCliente, 
          u.CodigoPostal, 
          u.Nombre AS nombreUbicacion, 
          u.Direccion,
          u.CodigoPostal
      FROM 
          reportes r 
      INNER JOIN 
          equipos e ON r.idEquipos = e.idEquipos 
      LEFT JOIN 
          tecnicos t ON r.tecnicoAsignado = t.idTecnicos  
      INNER JOIN 
          clientes c ON r.creadorReporte = c.idClientes 
      INNER JOIN 
          ubicaciones u ON e.idUbicaciones = u.idUbicaciones
      ORDER BY r.fechaCreacion DESC;
    `);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  } finally {
    await db.end();
  }
};

export const getHistorialMovimientos = async (req, res) => {
  const db = await connect();
  try {
    const [result] = await db.query(
      `
      SELECT 
          e.numeroEquipo, 
          e.numeroSerie, 
          e.estatus AS estatusEquipo, 
          p.modelo AS modeloProducto, 
          p.categoria AS categoriaProducto, 
          p.marca AS marcaProducto, 
          mi.tipoMovimiento, 
          mi.cantidad, 
          mi.fechaMovimiento, 
          ub.nombre AS ubicacionDestino, 
          ub.ciudad, 
          ub.estado, 
          ub.codigoPostal, 
          ub.direccion 
      FROM 
          movimientos_inventario mi 
      INNER JOIN 
          equipos e ON mi.idEquipo = e.idEquipos 
      LEFT JOIN 
          productos p ON e.idProductos = p.idProductos 
      LEFT JOIN 
          ubicaciones ub ON mi.idUbicacion = ub.idUbicaciones 
      WHERE 
          e.idEquipos = ? 
      ORDER BY 
          mi.fechaMovimiento DESC
    `,
      [req.params.id]
    );
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  } finally {
    await db.end();
  }
};

export const getTecnicosActivosReportesPendientes = async (req, res) => {
  const db = await connect();
  try {
    const [result] = await db.query(
      `
      SELECT 
          CONCAT(t.Nombre, ' ', t.ApellidoPa, ' ', t.ApellidoMa) AS nombreTecnico,
          t.Telefono,
          r.tituloReporte,
          r.folioReporte,
          r.fechaCreacion,
          r.fechaHoraActualizacion AS fechaModificacion,
          r.estado,
          r.IdReporte,
          r.comentarios, 
          r.ComentariosFinales,
          e.numeroEquipo,
          e.numeroSerie,
          c.Telefono as telefonoCliente,
          CONCAT(c.Nombre, ' ', c.ApellidoPa, ' ', c.ApellidoMa) AS creadorReporte,
          u.nombre AS ubicacion,
          u.Direccion,
          u.CodigoPostal
      FROM 
          tecnicos t
      LEFT JOIN 
          reportes r ON t.idTecnicos = r.tecnicoAsignado
      LEFT JOIN 
          equipos e ON r.idEquipos = e.idEquipos
      LEFT JOIN 
          clientes c ON r.creadorReporte = c.idClientes
      LEFT JOIN
          ubicaciones u ON u.idUbicaciones = e.idUbicaciones
      WHERE 
          t.idTecnicos = ?
      ORDER BY r.fechaCreacion DESC
    `,
      [req.params.id]
    );

    if (!result.length) {
      return res
        .status(404)
        .json({ error: "No reports found for this technician" });
    }
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  } finally {
    await db.end();
  }
};

export const getReporteClientes = async (req, res) => {
  const db = await connect();
  try {
    const [result] = await db.query(
      `
      SELECT
          r.IdReporte, 
          r.tituloReporte, 
          r.folioReporte, 
          r.fechaCreacion, 
          r.fechaHoraActualizacion AS fechaModificacion, 
          r.estado, 
          r.comentarios, 
          r.ComentariosFinales,    
          c.Telefono AS telefonoCliente,
          CONCAT(c.Nombre, ' ', c.ApellidoPa, ' ', c.ApellidoMa) AS nombreCliente,
          e.numeroEquipo, 
          e.numeroSerie, 
          CONCAT(t.Nombre, ' ', t.ApellidoPa, ' ', t.ApellidoMa) AS tecnicoAsignado, 
          u.nombre AS ubicacion,
          u.Direccion,
          u.CodigoPostal
      FROM 
          reportes r 
      INNER JOIN 
          clientes c ON r.creadorReporte = c.idClientes 
      LEFT JOIN 
          equipos e ON r.idEquipos = e.idEquipos  
      LEFT JOIN 
          tecnicos t ON r.tecnicoAsignado = t.idTecnicos
      LEFT JOIN
          ubicaciones u ON u.idUbicaciones = e.idUbicaciones
      WHERE 
          c.idClientes = ?
      ORDER BY r.fechaCreacion DESC
    `,
      [req.params.id]
    );

    if (!result.length) {
      return res.status(404).json({ error: "Reporte not found" });
    }
    res.json(result);
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
      `
      SELECT 
          tk.Titulo, 
          tk.Descripcion,
          tk.Observaciones,
          tk.estatus AS estatusTarea, 
          r.folioReporte, 
          r.tituloReporte,
          r.fechaCreacion, 
          r.fechaHoraActualizacion AS fechaModificacion,
          CONCAT(c.Nombre, ' ', c.ApellidoPa) AS nombreCliente,
          CONCAT(t.Nombre, ' ', t.ApellidoPa) AS tecnicoAsignado 
      FROM  
          tareas tk 
      INNER JOIN 
          reportes r ON tk.idReportes = r.idReporte 
      LEFT JOIN 
          clientes c ON r.creadorReporte = c.idClientes 
      LEFT JOIN 
          tecnicos t ON r.tecnicoAsignado = t.idTecnicos 
      WHERE 
          r.idReporte = ?
      ORDER BY r.fechaCreacion DESC
    `,
      [req.params.id]
    );

    if (!result.length) {
      return res.status(404).json({ error: "Tareas not found" });
    }
    res.json(result);
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
      `
      SELECT 
          e.idEquipos,  
          e.numeroEquipo, 
          e.numeroSerie, 
          e.estatus AS estatusEquipo,
          p.modelo,
          p.categoria,
          p.marca,
          ub.nombre AS nombreUbicacion,
          ub.ciudad,
          ub.estado,
          ub.codigoPostal,
          ub.direccion 
      FROM 
          equipos e 
      LEFT JOIN 
          productos p ON e.idProductos = p.idProductos 
      LEFT JOIN 
          ubicaciones ub ON e.idUbicaciones = ub.idUbicaciones 
      WHERE 
          ub.idUbicaciones = ?
    `,
      [req.params.id]
    );

    if (!result.length) {
      return res
        .status(404)
        .json({ error: "Equipos not found for this location" });
    }
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  } finally {
    await db.end();
  }
};

export const getClienteById = async (req, res) => {
  const db = await connect();
  try {
    const [result] = await db.query(
      `
      SELECT 
          c.idClientes, 
          c.nombre, 
          c.apellidoPa, 
          c.apellidoMa, 
          c.Telefono, 
          c.CorreoElectronico, 
          u.user 
      FROM 
          clientes c 
      INNER JOIN 
          users u ON u.idusers = c.users_idusers 
      WHERE 
          c.users_idusers = ?
    `,
      [req.params.id]
    );

    if (!result.length) {
      return res.status(404).json({ error: "Cliente not found" });
    }
    res.json(result[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  } finally {
    await db.end();
  }
};

export const getTecnicoById = async (req, res) => {
  const db = await connect();
  try {
    const [result] = await db.query(
      `
      SELECT 
          t.idTecnicos, 
          t.nombre, 
          t.ApellidoPa, 
          t.ApellidoMa, 
          t.Telefono, 
          t.CorreoElectronico, 
          u.user 
      FROM 
          tecnicos t 
      INNER JOIN 
          users u ON u.idusers = t.users_idusers 
      WHERE 
          t.users_idusers = ?
    `,
      [req.params.id]
    );

    if (!result.length) {
      return res.status(404).json({ error: "Tecnico not found" });
    }
    res.json(result[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  } finally {
    await db.end();
  }
};

export const ClienteEquipoUbicacion = async (req, res) => {
  const db = await connect();
  try {
    const [result] = await db.query(
      `
       SELECT 
          e.idEquipos,  
          e.numeroEquipo, 
          e.numeroSerie, 
          e.estatus AS estatusEquipo,
          p.modelo,
          p.categoria,
          p.marca,
          ub.nombre AS nombreUbicacion,
          ub.ciudad,
          ub.estado,
          ub.codigoPostal,
          ub.direccion,
          ub.idUbicaciones
      FROM 
          equipos e 
      LEFT JOIN 
          productos p ON e.idProductos = p.idProductos 
      LEFT JOIN 
          ubicaciones ub ON e.idUbicaciones = ub.idUbicaciones 
      INNER JOIN clientes c ON c.idClientes = ub.clientes_idClientes
      WHERE 
          c.idClientes = ?
    `,
      [req.params.id]
    );

    if (!result.length) {
      return res
        .status(404)
        .json({ error: "Equipos not found for this location" });
    }
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  } finally {
    await db.end();
  }
};
export const EquipoById = async (req, res) => {
  const db = await connect();
  try {
    const [result] = await db.query(
      `
       SELECT 
          e.idEquipos,  
          e.numeroEquipo, 
          e.numeroSerie, 
          e.estatus AS estatusEquipo,
          p.modelo,
          p.categoria,
          p.marca,
          ub.nombre AS nombreUbicacion,
          ub.ciudad,
          ub.estado,
          ub.codigoPostal,
          ub.direccion,
          ub.idUbicaciones
      FROM 
          equipos e 
      LEFT JOIN 
          productos p ON e.idProductos = p.idProductos 
      LEFT JOIN 
          ubicaciones ub ON e.idUbicaciones = ub.idUbicaciones 
      INNER JOIN clientes c ON c.idClientes = ub.clientes_idClientes
      INNER JOIN users u on u.idusers = c.users_idUsers
      WHERE 
          u.idusers = ?
    `,
      [req.params.id]
    );

    if (!result.length) {
      return res
        .status(404)
        .json({ error: "Equipos not found for this location" });
    }
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  } finally {
    await db.end();
  }
};
