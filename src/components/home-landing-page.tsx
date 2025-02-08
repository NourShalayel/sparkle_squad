import About from "./about/about.component"
import BookingInfo from "./booking-info/booking-info.component"
import Department from "./department/department.component"
import FindUs from "./find-us/find-us.component"
import HomePage from "./home-page/home-page.component"
import Values from "./values-page/values-page.component"



const LandingHomePage = () => {
  return (
    <>
      <HomePage />
      <BookingInfo />
      <Values />
      <About />
      <Department />
      <FindUs />
    </>
  )
}

export default LandingHomePage
