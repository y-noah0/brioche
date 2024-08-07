import { Analytics } from "@vercel/analytics/react"
import AppRouter from "./components/BrowserRoutes";
function App() {
  return (
    <>
    <Analytics/>
    <AppRouter />
    </>
  )
}

export default App
