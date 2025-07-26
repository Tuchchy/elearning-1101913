'use client'

import Course from "@/components/Course"
import { useEffect, useState } from "react"
// fetch shit from api/courses

export default function SelfLearningPage() {
    const [messages, setMessages] = useState([])
    const [text, setText] = useState('');
    const [file, setFile] = useState(null);

    useEffect(() => {
        fetch('/api/courses')
            .then(res => res.json())
            .then(data => setMessages(data))
    }, [])

    const uploadsMsg = async () => {
        if (!text.trim()) {
            return aleart('please enter text')
        }

        const formData = new FormData()
        formData.append('text', text)
        if (file) {
            formData.append('file', file)
        }

        const res = await fetch('/api/courses', {
            method: 'POST',
            body: formData,
        })
        const newMsg = await res.json()
        setMessages(prev => [...prev, newMsg])
        setText('')
        setFile(null)
    }

    return (
        <div style={{ padding: 20, fontFamily: 'Arial' }}>
            <h1>Messages with Image Upload</h1>

            <div style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    placeholder="Enter message"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    style={{ marginRight: '10px' }}
                />
                <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    style={{ marginRight: '10px' }}
                />
                <button onClick={uploadsMsg}>Send</button>
            </div>

            <ul>
                {messages.map(msg => (
                    // <li key={msg.id} style={{ marginBottom: '10px' }}>
                    //     <p>{msg.text}</p>
                    //     {msg.imageUrl && <img src={msg.imageUrl} alt="uploaded" width={150} />}
                    // </li>
                    <Course key={msg.id} msg={msg.message} src={msg.image}/>
                ))}
            </ul>
        </div>
    )
}