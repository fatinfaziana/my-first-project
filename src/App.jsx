import Sidebar from './components/Header'
import Hero from './components/Hero'
import Profile from './components/Profile'
import SubjectsPricing from './components/SubjectsPricing'
import Availability from './components/Availability'
import Feedback from './components/Feedback'
import ProductShowcase from './components/ProductShowcase'
import TeacherToolDemo from './components/TeacherToolDemo'
import Collaborate from './components/Collaborate'
import BookingFlow from './components/BookingFlow'
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
          <SubjectsPricing />
          <Availability />
          <Feedback />
          <ProductShowcase />
          <TeacherToolDemo />
          <Collaborate />
          <BookingFlow />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App