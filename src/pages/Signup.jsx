import {useState} from "react"
import {Link, useNavigate} from "react-router-dom"
import FormInput from "../components/FormInput"
import {useDispatch} from "react-redux"
import {setUserData} from "../redux/user/userSlice"
import {toast} from "sonner"

function Signup() {
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [mail, setMail] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const formData = new FormData(e.currentTarget)
    const full_name = formData.get("fullName")
    const email = formData.get("email")
    setMail(email)

    const password = formData.get("password")

    const newUser = {
      email,
      full_name,
      password,
    }
    if ((full_name && email && password).trim()) {
      try {
        const req = await fetch(
          "http://18.185.248.114:8080/v1/users/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
          }
        )

        if (!req.ok) {
          throw new Error("Email or fullName are already taken")
        }

        const res = await req.json()
        setShowPassword(true)
        setLoading(false)
        console.log(res)
      } catch (error) {
        setLoading(false)
      }
    } else {
      setLoading(false)
    }
  }

  const handleSignUp = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const password = formData.get("passwordEmail")
    console.log(password)

    try {
      const req = await fetch(
        `http://18.185.248.114:8080/v1/users/verify?code=${password}&email=${encodeURIComponent(
          mail
        )}`
      )
      const res = await req.json()
      if (res.role === "user") {
        navigate("/")
        dispatch(setUserData(res))
        return res
      }
    } catch (error) {
      toast.error(error.message)
      console.log(error)
    }
  }

  return (
    <div className="relative bg-base-100 flex flex-col justify-center min-h-screen overflow-hidden px-6">
      <div className="bg-base-100 p-6 m-auto rounded-md shadow-md max-w-[600px] w-full">
        <h1 className="text-center text-3xl font-bold">Sign up</h1>
        {showPassword || (
          <form onSubmit={handleSubmit} className="mt-6">
            <>
              <FormInput
                name="fullName"
                disabled={loading}
                label="fullName"
                placeholder="example: John"
                type="text"
              />
              <FormInput
                disabled={loading}
                name="email"
                label="Email"
                placeholder="example@gmail.com"
                type="email"
              />
              <FormInput
                disabled={loading}
                name="password"
                label="Password"
                placeholder="Password"
                type="password"
              />
              <div className="mt-6">
                {loading ? (
                  <button
                    type="submit"
                    disabled
                    className="w-full cursor-not-allowed uppercase btn btn-active btn-neutral"
                  >
                    SEND <span className="loading loading-spinner"></span>
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="w-full uppercase btn btn-active btn-neutral"
                  >
                    SEND
                  </button>
                )}
              </div>
            </>
          </form>
        )}

        {showPassword && (
          <form onSubmit={handleSignUp}>
            <FormInput
              disabled={loading}
              name="passwordEmail"
              label="We send verification password to your email"
              placeholder="Password"
              type="password"
            />
            <div className="mt-6">
              {loading ? (
                <button
                  type="button"
                  disabled
                  className="w-full cursor-not-allowed uppercase btn btn-active btn-neutral"
                >
                  Sign up <span className="loading loading-spinner"></span>
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-full uppercase btn btn-active btn-neutral"
                >
                  Sign up
                </button>
              )}
            </div>
          </form>
        )}

        <p className="mt-8 text-xs font-light tracking-[1px] text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-purple-600 hover:underline"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  )
}
export default Signup
