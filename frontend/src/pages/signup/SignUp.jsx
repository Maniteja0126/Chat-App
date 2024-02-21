import { Link } from "react-router-dom"
import GenderCheckbox from "./GenderCheckbox"
import { useState } from "react"
import useSignUp from "../../hooks/useSignUp"


export const SignUp = () => {

  const [inputs, setInputs] = useState({
    fullName: '',
    userName: '',
    password: '',
    confirmPassword: '',
    gender: ''
  })

  const {loading, signup} = useSignUp()

  const handleCheckboxChange = (gender) =>{
    setInputs({...inputs ,gender})
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()
    await signup(inputs)
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">

      <div className="w-full p-6 rounded-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up<span className="text-blue-500"> <span className="font-bold	">E</span>asy<span className="font-bold	">C</span>onnect</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input type="text" placeholder="Mani Teja" className="w-full input input-bordered h-10"
              value={inputs.fullName}
              onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">User Name</span>
            </label>
            <input type="text" placeholder="maniteja" className="w-full input input-bordered h-10"
              value={inputs.userName}
              onChange={(e) => setInputs({ ...inputs, userName: e.target.value })}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input type="Password" placeholder="Enter Password" className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input type="Password" placeholder="Confirm Password" className="w-full input input-bordered h-10" 
              value={inputs.confirm_password}
              onChange={(e)=> setInputs({...inputs , confirmPassword : e.target.value})}
            />
          </div>

          <GenderCheckbox onCheckboxChange ={handleCheckboxChange } selectedGender={inputs.gender} />

          <Link className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block" to='/login' >
            Already have an account?
          </Link>
          <div>
            <button className="btn btn-block btn-sm border-slate-700"
              disabled={loading}
            >
              {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
            </button>
          </div>
        </form>
      </div>

    </div>
  )
}


