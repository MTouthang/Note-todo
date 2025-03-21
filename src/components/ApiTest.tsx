'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function ApiTest() {
    const [response, setResponse] = useState<string>('')
    const [loading, setLoading] = useState(false)

    const testGet = async () => {
        setLoading(true)
        try {
            const res = await fetch('/api/hello')
            const data = await res.json()
            setResponse(JSON.stringify(data, null, 2))
        } catch (error) {
            console.log(error)
            setResponse('Error fetching data')
        }
        setLoading(false)
    }

    const testPost = async () => {
        setLoading(true)
        try {
            const res = await fetch('/api/hello', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ test: 'Hello from client!' }),
            })
            const data = await res.json()
            setResponse(JSON.stringify(data, null, 2))
        } catch (error) {
            console.log(error)
            setResponse('Error posting data')
        }
        setLoading(false)
    }

    return (
        <div className="space-y-4">
            <div className="flex gap-4">
                <Button onClick={testGet} disabled={loading}>
                    Test GET
                </Button>
                <Button onClick={testPost} disabled={loading}>
                    Test POST
                </Button>
            </div>
            {response && (
                <pre className="p-4 bg-gray-100 rounded-md overflow-auto">
                    {response}
                </pre>
            )}
        </div>
    )
}