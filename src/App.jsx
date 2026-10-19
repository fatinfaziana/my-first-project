import Header from './components/Header'
import Hero from './components/Hero'
import Profile from './components/Profile'
import SubjectsPricing from './components/SubjectsPricing'
import Availability from './components/Availability'
import Feedback from './components/Feedback'
import ProductShowcase from './components/ProductShowcase'
import TeacherToolDemo from './components/TeacherToolDemo'
import BookingFlow from './components/BookingFlow'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Profile />
        <SubjectsPricing />
        <Availability />
        <Feedback />
        <ProductShowcase />
        <TeacherToolDemo />
        <BookingFlow />
      </main>
      <Footer />
    </>
  )
}

export default App