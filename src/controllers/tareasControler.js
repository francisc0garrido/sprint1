import 'dotenv/config';
import mongodb from 'mongodb';
const MongoClient = mongodb.MongoClient;


export const homeTareas = (req, res) => {
    res.send(`<h1>Bienvenidos a mis App con ES6</h1>`)
}


export const dameTareas = (req, res) => {

    MongoClient.connect(process.env.MONGOLOCAL, (error, db) => {

        const database = db.db(process.env.DATABASE)

        if (error) {
            console.log('Error en la conexión');
        } else{
            //console.log(`Base de Datos Conectada ${database}`);
            database.collection('tareas').find({}).toArray((error, result) =>{
                if(error){
                    console.log('Error en la conexión');
                }else{
                    res.json(result);
                }
            })
        }
    });
} 


export const agregarTareas = (req, res) => {
    
    MongoClient.connect(process.env.MONGOLOCAL, (error, db) => {

        const database = db.db(process.env.DATABASE)

        if (error) {
            console.log('Error en la conexión');
        } else{

            const { titulo, autor, descripcion, nivel } = req.body;
            let dia = new Date();
            let fechaString = dia.toLocaleDateString();
            
            database.collection('tareas').insertOne({titulo, autor, descripcion, nivel, fecha: fechaString}, (error, result) =>{
                if(error){
                    console.log('Error en la conexión');
                }else{
                    console.log('Dato guardado correctamente' + JSON.stringify(req.body));
                    res.json(result);
                }
            })
        }
    });
}


export const eliminarTarea = (req, res) => {

    MongoClient.connect(process.env.MONGOLOCAL, (error, db) => {

        const database = db.db(process.env.DATABASE);

        if (error) {
            console.log('Error en la conexión');
        } else{
            
            const id = req.params.id;
            const ObjectId = mongodb.ObjectId
            database.collection('tareas').deleteOne({_id: ObjectId(id)}, (error, result) =>{
                if(error){
                    console.log('Error en la conexión');
                }else{
                    console.log('Documento eliminado');
                    res.json(result);
                }
            })
        }
    });
}





    
    export const tareasId = (req, res) => {  MongoClient.connect(process.env.MONGOLOCAL, (error, db) => {

        const database = db.db(process.env.DATABASE)

        if (error) {
            console.log('Error en la conexión');
        } else{
            console.log(`Base de Datos Conectada ${database}`);
            database.collection('tareas').findOne({_id: ObjectId(id)}.toArray, (error, result) =>{
                if(error){
                    console.log('Error en la conexión');
                }else{
                    res.render(result);
                }
            })
        }
    });
        
    }
    
    
    







