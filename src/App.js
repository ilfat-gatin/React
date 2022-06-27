import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ProfilePage } from "./pages/profile"
import { ChatPage } from "./pages/chat"
import { Header } from "./components/header/Header"

function App() {

  return (

    
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/profile" element={<ProfilePage />}/>
        <Route path="/chat/*" element={<ChatPage />}/>
        <Route path="/" element={<h1>Home page</h1>}/>
        <Route path="*" element={<h1>404</h1>}/>
      </Routes>
    </BrowserRouter>
  )

}

export default App;
