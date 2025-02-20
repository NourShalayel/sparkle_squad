import Footer from "../../components/footer/footer.component"
import About from "./components/about/about.component"
import BookingInfo from "./components/booking-info/booking-info.component"
import Department from "./components/department/department.component"
import FindUs from "./components/find-us/find-us.component"
import HomePage from "./components/home-page/home-page.component"
import Values from "./components/values/values-page.component"



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
      <Footer/>
    </>
  )
}

export default LandingHomePage
