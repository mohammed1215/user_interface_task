import { Link, Route, Routes } from "react-router"
import "./App.css"
import Account from "./components/Account"

function App() {
  return (
    <>
      <Link href="/account" className="Account-link">
        account page
      </Link>
      <Routes>
        <Route path="/account" element={<Account />} />
      </Routes>
    </>
  )
}

export default App
