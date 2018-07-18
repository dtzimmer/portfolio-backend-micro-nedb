import Datastore from 'nedb-promise'

const db = new Datastore({ filename: `${__dirname}/contacts.db`, autoload: true})
export default db