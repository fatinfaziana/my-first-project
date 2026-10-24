import Availability from './Availability'
import BookClass from './BookClass'

function BookingHub() {
  return (
    <section
      id="booking"
      className="section booking-hub"
      aria-labelledby="booking-hub-heading"
    >
      <p className="eyebrow">Booking</p>
      <h2 id="booking-hub-heading">Booking calendar &amp; book a class</h2>
      <p className="section__lead">
        See which days are free, then book your class in the same place — no
        going back and forth.
      </p>

      <div className="booking-hub__grid">
        <Availability />
        <BookClass />
      </div>
    </section>
  )
}

export default BookingHub