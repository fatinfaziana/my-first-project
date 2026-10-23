import Sidebar from './components/Header'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Feedback from './components/Feedback'
import ProductsServices from './components/ProductsServices'
import Availability from './components/Availability'
import Collaborate from './components/Collaborate'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="app-main">
        <main>
          <Hero />
          <Profile />
          <Feedback />
          <ProductsServices />
          <Availability />
          <Collaborate />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App