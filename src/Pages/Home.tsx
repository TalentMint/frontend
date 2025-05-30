import Navbar from "../LandingPage/Navbar"
import HomePage from "../LandingPage/HeroPage"
import ExplorePage from "../LandingPage/Explore"
import Footer from "../LandingPage/Footer"
import HowItWorks from "../LandingPage/HowItWorks"
import SignupPage from "../SigningIn/SignUp"
import Sidebar from "../UserAccount/Sidebar"


function Home() {


  return (
   <div>
     <div style={{ backgroundImage: "url('/herobg.png')" }} className="bg-no-repeat bg-cover text-white">
        <Navbar />
        <main className="pt-[2rem]">
          <HomePage />
          <HowItWorks />
        </main>
      </div>
      <ExplorePage />
      <SignupPage />
      <Sidebar />
      <Footer />
   </div>
  )
}

export default Home
 