import { app } from "../api/RunExpress.mjs";
import { path } from "../api/path.mjs";
import exceptionHandler from "./exceptionHandler.mjs";
import { File } from "../db/RunDB.mjs";
import { middlewareAuthorization } from "../middlewares/authorization.mjs";
import jsonMiddleware from "../middlewares/JsonMiddleware.mjs";

app.get(path.files, middlewareAuthorization, async (req, res)=> {
    try {
        res.json( await File.findAll({ where: { id: req.body.id } }) )
    } catch (err) {
        exceptionHandler(err, res)
    }
})

app.post(path.files, jsonMiddleware, middlewareAuthorization, async (req, res)=>{
    try {
        const file = File.create(req.body)
        res.status(200).json(file)
    } catch (err) {
        exceptionHandler(err, res)
    }
})

app.put(path.files, jsonMiddleware, middlewareAuthorization, async (req, res)=> {
try {
    const modify = await File.findAll( { where: { id: req.body.id } })
    const action = await modify.update( req.body )
    res.status(200).json(action)
} catch (err) {
    exceptionHandler(err, res)
}
})

app.delete(path.files, jsonMiddleware, middlewareAuthorization, async (req, res)=> {
    try {
        const data = await File.destroy( { where: { id: req.body.id } } )
            if ( data === null ) {
                return res.sendStatus(401)
            } else {
                res.sendStatus(200)
            }
    } catch (err) {
        exceptionHandler(err, res)
    }
})