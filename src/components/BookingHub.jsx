import Availability from './Availability'
import BookClass from './BookClass'
import { AVAILABILITY } from '../data/sampleData'

function BookingHub() {
  return (
    <section
      id="booking"
      className="section booking-hub"
      aria-labelledby="booking-hub-heading"
    >
      <p className="eyebrow">Booking</p>
      <h2 id="booking-hub-heading">Bookings</h2>
      <p className="tag tag--action availability__chip">
        {AVAILABILITY.freeTrialChip}
      </p>
      <p className="section__lead">
        Free trial class: pick up to 3 subjects for RM 10 each. See which days
        are free, then book in the same place — no going back and forth.
      </p>

      <div className="booking-hub__grid">
        <Availability />
        <BookClass />
      </div>
    </section>
  )
}

export default BookingHub