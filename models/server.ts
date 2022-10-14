import express, { Application } from 'express';
import cors from 'cors'

import { dbConnection } from '../db/config';

import usuarioRoutes from '../routes/UsuarioRoutes';
import apiRoutes from '../routes/ApiRoutes';
import contacctosRoutes from '../routes/ContactosRoutes';


class Server {
    private app: Application
    private port: string
    private usuarioRoute: string
    private api: string
    private contactosRoute: string
    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000'
        //Inicializando rutas

        this.usuarioRoute = '/api/usuarios'
        this.contactosRoute = '/api/contactos'
        this.api = '/'
        //conection to DB
        this.dbConnection()
        //Middlewares
        this.middlewares()
        //routes
        this.routes()

    }

    routes() {
        this.app.use(this.usuarioRoute, usuarioRoutes)
        this.app.use(this.contactosRoute, contacctosRoutes)
        this.app.use(this.api, apiRoutes)
    }

    middlewares() {
        this.app.use(express.json())
        this.app.use(cors())
        this.app.set('trust proxy', true);
    }

    async dbConnection() {
        await dbConnection();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server on port ' + this.port);
        })
    }
}

export default Server