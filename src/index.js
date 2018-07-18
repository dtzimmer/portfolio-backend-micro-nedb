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
        console.log(`I'm Called`)

        const person = await json(req)
        const result = await Contacts.insert(person)
        return send (res, 201, result)
    })
))