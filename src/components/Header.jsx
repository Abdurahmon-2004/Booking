import {Link} from "react-router-dom"

export default function Header() {
  return (
    <div>
      <header className="">
        <nav className="">
          <ul className="flex justify-between  items-center">
            <li>
              <Link className="Logo" to="/">
                Booking
              </Link>
            </li>
            <ul className="flex gap-10 mr-[600px] items-center">
              <li className="p-[10px]  rounded-[10px] border">
                <Link to="/hotels">Hotels</Link>
              </li>
              <li className="p-[10px] rounded-[10px]  border">
                <Link to="/restaruants">Restaruants</Link>
              </li>
              <li className="p-[10px]  rounded-[10px]  border">
                <Link to="/attractions">Attractions</Link>
              </li>
            </ul>

            <Link
              to={"/login"}
              className="h-[50px] w-[100px] justify-center cursor-pointer items-center flex  text-[20px] border"
            >
              Login
            </Link>
          </ul>
        </nav>
      </header>
    </div>
  )
}

// <ul>

// </ul>
