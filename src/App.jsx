import Sidebar from './components/Header'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Feedback from './components/Feedback'
import Availability from './components/Availability'
import SubjectsOffered from './components/SubjectsOffered'
import BookClass from './components/BookClass'
import Products from './components/Products'
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
          <Availability />
          <SubjectsOffered />
          <BookClass />
          <Products />
          <Collaborate />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App