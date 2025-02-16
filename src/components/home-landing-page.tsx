import { useEffect, useState } from "react"
import About from "./about/about.component"
import BookingInfo from "./booking-info/booking-info.component"
import Department from "./department/department.component"
import FindUs from "./find-us/find-us.component"
import Footer from "./footer/footer.component"
import HomePage from "./home-page/home-page.component"
import Values from "./values-page/values-page.component"
import FirstLoading from "./FirstLoading/FirstLoading.components"



const LandingHomePage = () => {
  //  const [loading, setLoading] = useState(true);
  
  //   useEffect(() => {
  //     setTimeout(()=> {
  //       setLoading(false);
  //     },3000)
  //   }, []);
  return (
    <>
     {/* {loading && <FirstLoading />} */}
      <HomePage />
      <BookingInfo />
      <Values />
      <About />
      <Department />
      <FindUs />
      <Footer />
    </>
  )
}

export default LandingHomePage
