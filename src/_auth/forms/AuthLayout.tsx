import {Outlet, Navigate} from 'react-router-dom'
import kudosimg from '/assets/images/kudoscollage.png'


const AuthLayout = () => {

  const isAuthenticated = false;
  return (
    <>
    {isAuthenticated ? (
      <Navigate to='/'/> /*if user is authenticated it will go to home page*/
    ): (
      <>
      <section className='flex flex-1 justify-center items-center flex-col py-10'>
        <Outlet/>  {/* if not then sign-up or sign-in will appear, whichever is suitable */}
        
      </section>
      <img src={kudosimg}
       alt="logo" 
      className=' hidden xl:block h-screen w-1/2 object-contain bg-no-repeat'
      />
      </>
    )}
    </>
  )
}

export default AuthLayout