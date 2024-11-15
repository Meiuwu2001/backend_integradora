-- SELECT
--     r.folioReporte,
--     r.fechaCreacion,
--     r.fechaHoraActualizacion as FechaModificacion,
--     r.estado AS estadoReporte,
--     r.comentarios,
--     e.estatus AS estadoEquipo,
--     e.numeroSerie,
--     e.numeroEquipo,
--     CONCAT(t.Nombre, ' ', t.ApellidoPa) AS TecnicoAsignado,
--     CONCAT(c.Nombre, ' ', c.ApellidoPa) AS Cliente,
--     c.Telefono AS telefonoCliente,
--     c.CorreoElectronico AS correoCliente
-- FROM
--     reportes r
--     INNER JOIN equipos e ON r.idEquipos = e.idEquipos
--     LEFT JOIN tecnicos t ON r.tecnicoAsignado = t.idTecnicos
--     JOIN clientes c ON r.creadorReporte = c.idClientes;

-- SELECT u.user, CONCAT(t.Nombre, ' ', t.ApellidoPa) AS Tecnico, t.estatus
-- FROM users u
--     INNER JOIN tecnicos t ON u.idusers = t.users_idusers

-- SELECT u.user, CONCAT(c.Nombre, ' ', c.ApellidoPa) AS Cliente, c.telefono, c.correoElectronico
-- FROM users u
--     INNER JOIN clientes c ON u.idusers = c.users_idusers

-- SELECT p.modelo, p.categoria, p.marca, e.numeroSerie, e.numeroEquipo, e.estatus, ub.nombre, ub.ciudad, ub.estado, ub.codigoPostal, ub.direccion
-- FROM
--     productos p
--     RIGHT JOIN equipos e ON p.idProductos = e.idProductos
--     LEFT JOIN ubicaciones ub ON e.idUbicaciones = ub.idUbicaciones

-- SELECT
--     tk.Titulo,
--     tk.Descripcion,
--     tk.Observaciones,
--     tk.estatus,
--     r.folioReporte,
--     r.fechaCreacion,
--     r.fechaHoraActualizacion as FechaModificacion
-- FROM tareas tk
--     RIGHT JOIN reportes r ON r.idReporte = tk.idReportes
-- WHERE
--     r.idReporte = ?


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
    INNER JOIN equipos e ON mi.idEquipo = e.idEquipos
    LEFT JOIN productos p ON e.idProductos = p.idProductos
    LEFT JOIN ubicaciones ub ON mi.idUbicacion = ub.idUbicaciones
WHERE
    e.idEquipos = ? 
ORDER BY
    mi.fechaMovimiento DESC;

--ESTA PERFECTO 
SELECT
    r.folioReporte,
    r.fechaCreacion,
    r.fechaHoraActualizacion AS fechaModificacion,
    r.estado,
    r.comentarios,
    CONCAT(c.Nombre, ' ', c.ApellidoPa) AS nombreCliente,
    e.numeroEquipo,
    e.numeroSerie,
    CONCAT(t.Nombre, ' ', t.ApellidoPa) AS tecnicoAsignado
FROM
    reportes r
    INNER JOIN clientes c ON r.creadorReporte = c.idClientes
    LEFT JOIN equipos e ON r.idEquipos = e.idEquipos
    LEFT JOIN tecnicos t ON r.tecnicoAsignado = t.idTecnicos
WHERE
    c.idClientes = ?;

SELECT
    mi.tipoMovimiento,
    mi.cantidad,
    mi.fechaMovimiento,
    e.numeroEquipo,
    e.numeroSerie,
    p.modelo,
    p.categoria,
    p.marca,
    ub.nombre AS ubicacionDestino,
    ub.ciudad,
    ub.estado,
    ub.codigoPostal,
    ub.direccion
FROM
    movimientos_inventario mi
    LEFT JOIN equipos e ON mi.idEquipo = e.idEquipos
    LEFT JOIN productos p ON mi.idProducto = p.idProductos
    LEFT JOIN ubicaciones ub ON mi.idUbicacion = ub.idUbicaciones
WHERE
    p.idProductos = ?;

SELECT
    tk.Titulo,
    tk.Descripcion,
    tk.Observaciones,
    tk.estatus AS estatusTarea,
    r.folioReporte,
    r.fechaCreacion,
    r.fechaHoraActualizacion AS fechaModificacion,
    CONCAT(c.Nombre, ' ', c.ApellidoPa) AS nombreCliente,
    CONCAT(t.Nombre, ' ', t.ApellidoPa) AS tecnicoAsignado
FROM
    tareas tk
    INNER JOIN reportes r ON tk.idReportes = r.idReporte
    LEFT JOIN clientes c ON r.creadorReporte = c.idClientes
    LEFT JOIN tecnicos t ON r.tecnicoAsignado = t.idTecnicos
WHERE
    r.idReporte = ?;

SELECT
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
    LEFT JOIN productos p ON e.idProductos = p.idProductos
    LEFT JOIN ubicaciones ub ON e.idUbicaciones = ub.idUbicaciones
WHERE
    ub.idUbicaciones = ?;

SELECT
    r.folioReporte,
    r.fechaCreacion,
    r.fechaHoraActualizacion AS fechaModificacion,
    r.estado,
    tk.Titulo,
    tk.Descripcion,
    tk.Observaciones,
    tk.estatus AS estatusTarea
FROM
    reportes r
    LEFT JOIN tareas tk ON r.idReporte = tk.idReportes
WHERE
    tk.estatus != 'finalizada'; 

SELECT
    CONCAT(t.Nombre, ' ', t.ApellidoPa) AS nombreTecnico,
    t.Telefono,
    r.folioReporte,
    r.estado,
    r.fechaCreacion,
    e.numeroEquipo,
    e.numeroSerie
FROM
    tecnicos t
    LEFT JOIN reportes r ON t.idTecnicos = r.tecnicoAsignado
    LEFT JOIN equipos e ON r.idEquipos = e.idEquipos
WHERE
    t.Estatus = 'activo'
    AND r.estado = 'pendiente';


UPDATE users SET password = ? WHERE idusers = ? 