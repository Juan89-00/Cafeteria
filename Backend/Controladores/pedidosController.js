const pedidoModel = require('../Modelos/pedidoModel');

async function registrarPedido(req, res) {
    try {
        // nombres EXACTOS de los name="" del formulario
        const cliente  = req.body.nombre;
        const correo   = req.body.correo || '';
        const producto = req.body.producto;
        const cantidad = Number(req.body.cantidad);
        const tamano   = req.body.tamano;
        const llevar   = req.body.llevar === 'si' ? 'si' : 'no'; // checkbox sin marcar no se envia

        if (typeof cliente !== 'string' || !cliente.trim() ||
            typeof producto !== 'string' || !producto.trim() ||
            !Number.isInteger(cantidad) || cantidad < 1 ||
            typeof tamano !== 'string' || !tamano.trim()) {
            return res.status(400).json({ error: 'Datos inválidos para el pedido' });
        }

        // la tabla solo tiene la columna "comentario": ahí guardamos tamaño y para llevar
        const comentario = `tamaño: ${tamano}; para llevar: ${llevar}`;

        const id = await pedidoModel.registrarPedido(
            cliente.trim(),
            correo.trim(),
            producto.trim(),
            cantidad,
            comentario
        );

        const parametros = new URLSearchParams({
            id,
            cliente: cliente.trim(),
            correo: correo.trim(),
            producto: producto.trim(),
            cantidad,
            tamano,
            llevar
        });
        res.redirect('/resumen.html?' + parametros.toString());
    } catch (error) {
        console.error('Error al registrar el pedido:', error);
        res.status(500).json({ error: 'Error al guardar el pedido' });
    }
}

module.exports = { registrarPedido };
