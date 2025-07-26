
// page router, where file name can be any
/*export default function handler(req,res) {
    if (req.method === "GET") {
        res.status(200).json({ message: 'Hello from Next.js API!' });
    } else if (req.method === 'POST') {
        const { name } = req.body;
        res.status(200).json({ message: `Hello, ${name}` });
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
    res.status(200) 
}*/

import {message} from '@/libs/store.mock'
import {writeFile} from 'fs/promises'
import path from 'path'
let genId = message.length + 1
// app router api style
export async function GET() {
    return new Response(JSON.stringify(message), {
        status:200,
        headers: {'Content-Type': 'application/json'}
    })
}

export async function POST(req) {
    // const body = await req.json()
    const formData = await req.formData()
    // const {text} = body
    const file = formData.get('file')
    const text = formData.get('text')
    let imageUrl;

    if (!text) {
        return new Response(JSON.stringify({error: 'Text is required'}), {
            status: 400,
            headers: {'Content-Type': 'application/json'}
        })
    }

    if (file && file.name) {
        const fakeuser = 'usrname01'
        const buffer = Buffer.from(await file.arrayBuffer())
        const fileName = Date.now() + fakeuser +'-' + file.name // + user.name (unique)
        const filePath = path.join(process.cwd(), 'public', 'uploads', fileName)
        await writeFile(filePath, buffer)
        imageUrl = `/uploads/${fileName}`
    }

    const newMsg = {
        id: genId, 
        message: text, 
        image: imageUrl
    }
    genId++
    message.push(newMsg)

    return new Response(JSON.stringify(newMsg), {
        status: 201,
        headers: {'Content-Type': 'application/json'}
    })
}
