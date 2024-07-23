import React, { useEffect, useState } from 'react'
import { Link , matchPath,useLocation} from 'react-router-dom'
import { NavbarLinks } from '../../data/navbar-links'
import { useSelector } from 'react-redux'
import { BsCart3 ,BsChevronDown} from "react-icons/bs";
import ProfileDropDown from "../core/Auth/ProfileDropDown"
import { apiConnector } from '../../services/apiconnector'
import { categories } from '../../services/apis'
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { ACCOUNT_TYPE } from "../../utils/constant"


// const subLinks = [
//     {
//         title:"Python",
//         link:"/catalog/python",
//     },
//     {
//         title:"web-dev",
//         link:"/catalog/web-dev",
//     },
// ]
const Navbar = () => {

    const {token} = useSelector((state) => state.auth);
    const {user} = useSelector((state)=> state.profile);
    const {totalItems} = useSelector((state) => state.cart);
    const location = useLocation()

    const [subLinks, setSubLinks] = useState([]);
    const [loading, setLoading] = useState(false)

   
    useEffect( ()=>{
        const fetchSubLink = async()=>{
            setLoading(true)
            try{
                const result = await apiConnector("GET",categories.CATEGORIES_API)
                setSubLinks(result.data.data);
            }
            catch(error){
                console.log("Could not fetch the category list",error);
            }
            setLoading(false)
        }   
        fetchSubLink();
    }, [])


    const matchRoute = (route) =>{
        return matchPath({path:route}, location.pathname);
    }


    return (
    <div className={`flex  h-14 items-center justify-center border-b-[1px] border-b-richblack-700 
        ${ location.pathname !== "/" ? "bg-richblack-800" : "" } transition-all duration-200`}>
        <div  className='w-11/12  max-w-maxContent items-center justify-between flex'>
            {/* Logo */}
            <Link to="/">
            <h2 className='text-richblack-25 text-[1.6rem]  bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent  bg-clip-text font-bold '>
              BrainWave
            </h2>
                
            </Link>

            {/* navigation links */}
            <nav className="hidden md:block">
                <ul className='flex gap-x-6 text-richblack-25'>
                   {NavbarLinks.map((link, index) =>{
                      return ( 
                        <li key={index}>
                          {link.title === "Catalog" ? (
                            <div
                              className={`flex gap-2 cursor-pointer items-center group relative
                                            ${
                                              matchRoute("/catalog/:catalogName")
                                                ? "text-yellow-25"
                                                : "text-richblack-25"
                                            }`}>
                                          <p>{link.title}</p>
                                            <IoIosArrowDropdownCircle />

                                            <div className='invisible absolute left-[50%] translate-x-[-50%] translate-y-[40%] top-[50%] 
                                            flex flex-col rounded-md bg-richblack-5 p-4 text-richblack-900 z-[1000]  w-[200px]
                                            opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-[1.65em]
                                            group-hover:opacity-100 lg:w-[300px] '>

                                              <div className='absolute left-[50%] translate-y-[-45%] top-0 -z-10  h-6 w-6 
                                              translate-x-[80%] rotate-45  select-none rounded bg-richblack-5'>
                                              </div>
                                                                                     
                                                { loading ? (
                                                    <p className="text-center">Loading...</p>
                                                ): subLinks.length ? (  
                                                    <>
                                                    {subLinks?.filter(
                                                        (subLink) => subLink?.courses?.length > 0
                                                      )
                                                      ?.map( (subLink, index)=>(
                                                        <Link
                                                          to={`/catalog/${subLink.name
                                                              .split(" ")
                                                              .join("-")
                                                              .toLowerCase()}`}
                                                          className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                                                          key={index}
                                                        >
                                                          <p>{subLink.name}</p>
                                                        </Link>
                                                    ))}
                                                    </>    
                                                    ):(
                                                      <p className='text-center'>No Courses Found</p>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    ):(
                                      <Link to={link?.path}>
                                        <p className={`${matchRoute(link?.path) ? 
                                            "text-yellow-25" : "text-richblack-25"}`}
                                        >
                                          {link.title}
                                        </p>
                                      </Link>
                                    )}
                            </li>
                        )})
                   } 
                </ul>
            </nav>

            {/* Login/SignUp/Dashboard */}
            <div className=' hidden md:flex gap-x-4 items-center'>
              {user && user?.accountType != ACCOUNT_TYPE.INSTRUCTOR && (
                <Link to="/dashboard/cart" className='relative'>
                  <BsCart3 className="text-2xl text-richblack-100"/>
                  {totalItems > 0 && (
                      <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 
                      text-center text-xs font-bold text-yellow-100">
                        {totalItems}
                      </span>
                    )}
                </Link>
                )}

                {token === null && (
                  <Link to="/login">
                    <button className='border border-richblack-700 bg-richblack-800 px-[12px] py-[8px]
                    text-richblack-100 rounded-md'>
                        Log In 
                    </button>
                  </Link>
                )}

                {token === null && (
                  <Link to="/signup">
                    <button className='border border-richblack-700 bg-richblack-800 px-[12px] py-[8px]
                    text-richblack-100 rounded-md'>
                        Sign Up
                    </button>
                  </Link>
                )}
                {token !== null && <ProfileDropDown />}
            </div>
    </div> 
</div>

)}
export default Navbar