import { send, json } from 'micro'
import { router, get, post, put, del } from 'microrouter'

const cors = require('micro-cors')()
import Contacts from './db/contacts'

export default cors(router(
    get('/', async (req, res) => {
        const results = await Contacts.find({})
        await send(res, 200, results)
    }),
    post('/', async ( req, res) => {
        const person = await json(req)
        const result = await Contacts.insert(person)
        return send (res, 201, result)
    }),
    put('/:id', async (req, res) => {
        const person = await json(req)
        const id = req.params.id
        const result = await Contacts.update({_id: id}, person);
        return send(res, 200, {ok: result > 0})
    }),
    del('/:id', async (req, res) => {
        const id = req.params.id
        const result = await Contacts.remove({_id: id});
        return send(res, 200, {ok: result > 0})
    })
))


