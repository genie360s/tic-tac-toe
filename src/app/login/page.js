// login page
// components
import CustomNavbar from "../components/CustomNavbar"
import Login from "../components/Login"

export default  function Sign() {
    return(
        <>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between  text-sm lg:flex">
        <CustomNavbar />
      </div>
      <div className="z-10 w-full max-w-5xl items-center justify-between  text-sm lg:flex">
      <Login/>
      </div>



    </main>
        </>
    )
}