import TodoList from '@/components/TodoList'
import ApiTest from '@/components/ApiTest'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">Next.js Todo App</h1>
      <div className="mb-8">
        <ApiTest />
      </div>
      <TodoList />
    </main>
  )
}
