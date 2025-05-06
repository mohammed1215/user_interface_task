import { Route, Routes } from "react-router"
import "./App.css"
import Account from "./components/Account"

function App() {
  return (
    <>
      <Routes>
        <Route path="/account" element={<Account />} />
      </Routes>
    </>
  )
}

export default App
