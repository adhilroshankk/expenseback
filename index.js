const json_server=require('json-server')

const expense_server=json_server.create()

const cors=require('cors')

expense_server.use(cors())

const middleware=json_server.defaults()

expense_server.use(middleware)

const router=json_server.router('db.json')

expense_server.use(router)

const PORT=8006

expense_server.listen(PORT,()=>{
    console.log("server started");
})