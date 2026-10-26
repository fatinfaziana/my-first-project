import Header from './components/Header'
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
    <div className="app-shell app-shell--dashboard">
      <div className="app-main app-main--dashboard">
        <Header />
        <main>
          <Hero />
          <Profile />
          <Feedback />
          <section id="booking" className="section booking-hub booking-hub--dashboard" aria-labelledby="booking-hub-heading">
            <p className="eyebrow">Booking</p>
            <h2 id="booking-hub-heading">Bookings</h2>
            <div className="booking-hub__grid">
              <Availability />
              <BookClass />
            </div>
          </section>
          <SubjectsOffered />
          <Products />
          <Collaborate />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App