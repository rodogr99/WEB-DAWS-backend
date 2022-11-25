const modelo = require('./../models/usuarios');

const controllerUsuarios = {
    lista: (req, res) => {
        modelo.find({status: 1}).then(response=>{
            res.send(response);
        }).catch(err =>{
            console.log('algo salio mal',err);
            res.status(400).send();
        });
    },

    listaAdmins: (req, res) => {
        modelo.find({status: 0}).then(response=>{
            res.send(response);
        }).catch(err =>{
            console.log('algo salio mal',err);
            res.status(400).send();
        });
    },

    listaNoAdmins: (req, res) => {
        modelo.find({status: 1}).then(response=>{
            res.send(response);
        }).catch(err =>{
            console.log('algo salio mal',err);
            res.status(400).send();
        });
    },

    consultaPorID: async (req, res) => {
       
        const id = req.params.id;
        try{
            const contacto = await modelo.findOne({_id: id, status:1});
       
            if(contacto){
                res.send(contacto);
            }else{
                res.status(404).send('no se encontro el contacto');
            }
        }catch
            {
                res.status(400).send('el id no es valido');
            }
        
    },

    nuevoUsuario: (req, res) => {
        const datos = req.body;
        modelo.create(datos).then(respuesta =>{
            console.log('se inserto un nuevo usuario');
            res.send(respuesta);
        }).catch(err =>{
            res.status(400).send('no se pudo guardar el contacto');
        })
    },

    consultaAdmin: (req, res) => {
        const id = req.params.id;
        res.send('El usuario ' + id + ' No tiene permisos de administrador');
    },
    // ELIMINAR USUARIO
    eliminarUsuario: (req, res) => {
        const id = req.params.id;
        const status = 2;
        modelo.findOne({_id: id}).then(respuesta=>{
            respuesta.status =2;
            respuesta.save();
            res.send();
        }).catch(err =>{
            res.status(400).send('no se pudo eliminar');
        })
    },
    actualizarUsuarioNombre: (req,res)=>{
        const id = req.params.id;
        const nombre= req.body.nombre;
        modelo.findOne({_id: id}).then(respuesta => {
            respuesta.nombre=nombre;
            respuesta.save();
        }).catch(err=>{
            res.status(400).send('no se pudo actualizar');
        });
    },
    actualizarUsuarioCorreo: (req,res)=>{
        const id = req.params.id;
        const correo= req.body.correo;
        modelo.findOne({_id: id}).then(respuesta => {
            respuesta.correo=correo;
            respuesta.save();
        }).catch(err=>{
            res.status(400).send('no se pudo actualizar');
        });
    },
    actualizarUsuarioUsuario: (req,res)=>{
        const id = req.params.id;
        const usuario= req.body.usuario;
        modelo.findOne({_id: id}).then(respuesta => {
            respuesta.usuario=usuario;
            respuesta.save();
        }).catch(err=>{
            res.status(400).send('no se pudo actualizar');
        });
    }
    
}


module.exports = controllerUsuarios;