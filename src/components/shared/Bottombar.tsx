import { bottombarLinks } from "@/constants"
import { Link, useLocation } from "react-router-dom"

const Bottombar = () => {

  const {pathname} = useLocation()
  return (
   <section className='bottom-bar fixed bottom-0 left-0 w-full'>
    {bottombarLinks.map((link)=>{

const isActive = pathname ===link.route
return(
   
    <Link
    to={link.route}
    key={link.label}
    className={`${
      isActive && "rounded-[10px] bg-primary-500 "
    } flex-center flex-col gap-1 p-2 transition`}>    
    <img
     src={link.imgURL}
    alt={link.label}
    width={16}
    height={16}
    className={`group-hover:invert-white ${
        isActive && "invert-white"
      }`}
    />
        <p className="tiny-medium text-light-2">{link.label}</p>

    </Link>
    
)
})}

   </section>
  )
}

export default Bottombar