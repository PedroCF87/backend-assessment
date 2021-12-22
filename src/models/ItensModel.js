const { v4: uuidv4 } = require('uuid')
const { connectDB: repositoryConnect } = require('../repository/db')
const collections = require('../constants/collections')

exports.insertItem = async props => { 
    const _id = uuidv4()
    const response = await repositoryConnect({
        collection: collections.itens, action: 'insert',
        object: { _id, ...props.object }
    })
    if (response.acknowledged && response.insertedId) return { id: response.insertedId }
    return false
}

exports.listItens = async props => {
    let payload = {
        collection: collections.itens, action: 'find',
        fields: props.fields ? props.fields : {}, 
        sort: props.sort ? props.sort : {}, 
        start: props.start ? props.start : 0, 
        limit: props.limit ? props.limit : 0
    }
    if (props.params) payload.params = props.params
    return await repositoryConnect(payload)
}