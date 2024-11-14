import connect from "../config/db.js"; // Importamos la conexión

export const getClienteUsuario = async (req, res) =>{
   try{
    const db = await connect();
    const [result] = await db.query ("SELECT u.user, CONCAT(c.Nombre, ' ', c.ApellidoPa) AS Cliente, c.telefono, c.correoElectronico FROM users u INNER JOIN clientes c ON u.idusers = c.users_idusers")
    res.json(result);

   }catch (error){
    console.error(error);
    res.status(500).send("Server Error")
    await db.end();
   }
}

export const getTecnicosUsuarios = async (req, res)=>{
    try{
        const db = await connect(); 
        const [result] = await db.query("SELECT u.user, CONCAT(t.Nombre, ' ', t.ApellidoPa) AS Tecnico, t.estatus FROM users  INNER JOIN tecnicos t ON u.idusers = t.users_idusers")
        res.json(result);
        

    }catch{(error)
        console.error(error);
        res.status(500).send("Server Error")
        await db.end();
    }
}



//a 