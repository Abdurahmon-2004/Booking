import {Outlet} from "react-router-dom"
import Header from "../components/Header"

function HomeLayout() {
  return (
    <div className="max-w-[1400px] mx-auto">
      <Header />
      <Outlet />
    </div>
  )
}
export default HomeLayout
