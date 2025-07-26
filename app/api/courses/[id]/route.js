import { headers } from 'next/headers'
import {message} from '@/libs/store.mock'

export async function PATCH(req, {param}) {
    const {id} = param
    const {text} = req.body
    const ind = message.findIndex(v=> v.id == id)
    if (!ind) {
        return Response(JSON.stringify({message: `${ind} not exist`}), {
            status: 404
        })
    }

    message[ind].message = text

    return Response(JSON.stringify({message: message[ind]}), {
        status: 200,
        headers: {'Content-Type': 'application/json'}
    })
}

export async function DELETE(req, {param}) {
    const {id} = param
    const ind = message.findIndex(v => v.id == id)
    if (!ind) {
        return Response(JSON.stringify({message: `${ind} not exist`}), {
            status: 404,
            headers: {'Content-type': 'application/json'}
        })
    }

    const x = message.splice(ind, 1)

    return Response(JSON.stringify({status: `delete ${x} success`, message}), {
        status: 200,
        headers: {'Content-Type': 'application/json'}
    })
}