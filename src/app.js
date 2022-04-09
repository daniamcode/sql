// json is like the old bodyParser.json 
import express, {json} from 'express'
// morgan is to watch http requests on terminal
import morgan from 'morgan'
// import routes
import projectRoutes from './routes/projects'
import taskRoutes from './routes/tasks'

// initialization
const app = express()

//middlewares
app.use(morgan('dev'))
// so the client can send us a json format that the server can understand
app.use(json())

// routes
app.use('api/projects', projectRoutes)
app.use('api/tasks', taskRoutes)

export default app