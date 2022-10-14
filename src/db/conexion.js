
import mongodb from 'mongodb';
import 'dotenv/config';

const MongoClient = mongodb.MongoClient;
const MONGOLOCAL = process.env.MONGOLOCAL;

try {
    MongoClient.connect(MONGOLOCAL, {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    });
} catch (error) {
    console.log(`Base de Datos Conectada a ${DATABASE}`);
    console.log(`No estamos conectados`);
}

