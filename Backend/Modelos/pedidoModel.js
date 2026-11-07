const conexion = require('../config/db');

async function registrarPedido(cliente, correo, producto, cantidad, comentario) {
    const sql =
        'INSERT INTO pedidos (cliente, correo, producto, cantidad, comentario) VALUES (?,?,?,?,?)';

    const db = await conexion();          // conexion() devuelve una promesa
    try {
        const [result] = await db.execute(sql, [cliente, correo, producto, cantidad, comentario]);
        return result.insertId;
    } finally {
        await db.end();                   // cerramos la conexion
    }
}

module.exports = { registrarPedido };
