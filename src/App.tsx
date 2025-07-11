import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import { GlobalComponent, UserView } from '@/components'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserView />

      <GlobalComponent />
    </QueryClientProvider>
  )
}

export default App
