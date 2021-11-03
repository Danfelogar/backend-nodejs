import mongoose from 'mongoose';
import { database } from './keys';
//configuracion cuando se da coneccion exitosa
mongoose.connect(database, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(data => console.log('DB is connect'))
    .catch( err => console.log(err));