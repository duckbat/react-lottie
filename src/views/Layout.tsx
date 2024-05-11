import {Link, Outlet} from 'react-router-dom';
import homeAnimation from '../lottie/home.json';
import arrowAnimation from '../lottie/arrow.json';
import profileAnimation from '../lottie/profile.json';

import Lottie, {LottieRefCurrentProps} from 'lottie-react';
import { useRef } from 'react';

const Layout = () => {

  const homeRef = useRef<LottieRefCurrentProps>(null);
  const arrowRef = useRef<LottieRefCurrentProps>(null);
  const profileRef = useRef<LottieRefCurrentProps>(null);


  // handler for home
  const hoverHandlerHome = () => {
    console.log('hovered');
    if(!homeRef.current){
      return;
    }
    homeRef.current.play();
    // homeRef.current.goToAndStop(0);
  };

  const rewindHome = () => {  
    if(!homeRef.current){
      return;
    }
    homeRef.current.goToAndStop(0);
  }

  // handler for arrow
  const hoverHandlerArrow = () => {
    console.log('hovered');
    if(!arrowRef.current){
      return;
    }
    arrowRef.current.play();
    // homeRef.current.goToAndStop(0);
  };

  const rewindArrow = () => {  
    if(!arrowRef.current){
      return;
    }
    arrowRef.current.goToAndStop(0);
  }

  // handler for profile
  const hoverHandlerProfile = () => {
    console.log('hovered');
    if(!profileRef.current){
      return;
    }
    profileRef.current.play();
    // profileRef.current.goToAndStop(0);
  };

  const rewindProfile = () => {  
    if(!profileRef.current){
      return;
    }
    profileRef.current.goToAndStop(0);
  }





  return (
    <div className="m-auto h-full w-11/12">
      <nav className="absolute right-0 flex flex-col-reverse items-end justify-end lg:relative lg:block lg:flex-row">
        <ul
          className={`
          mr-4
          justify-end
          overflow-hidden
          rounded-lg
          bg-slate-200
          p-0
          shadow-md
          transition-all
          duration-500
          ease-in-out
          lg:flex
          lg:opacity-100
          `}
        >
          <li>
            <Link onMouseEnter={hoverHandlerHome } className="block p-4 text-center  hover:bg-slate-300" to="/">
              <div>
                  <Lottie lottieRef={homeRef} loop={false} className="h-10 w-10" animationData ={homeAnimation} onComplete={rewindHome}/> 
                <span>Home</span>
              </div>
            </Link>
          </li>
          <li>
            <Link onMouseEnter={hoverHandlerArrow } className="block p-4 text-center  hover:bg-slate-300" to="/">
              <div>
                  <Lottie lottieRef={arrowRef} loop={false} className="h-10 w-10" animationData ={arrowAnimation} onComplete={rewindArrow}/> 
                <span>Arrow</span>
              </div>
            </Link>
          </li>
          <li>
            <Link onMouseEnter={hoverHandlerProfile } className="block p-4 text-center  hover:bg-slate-300" to="/">
              <div>
                  <Lottie lottieRef={profileRef} loop={false} className="h-10 w-10" animationData ={profileAnimation} onComplete={rewindProfile}/> 
                <span>Profile</span>
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block p-4 text-center  hover:bg-slate-300"
              to="/example"
            >
              Example
            </Link>
          </li>
          
        </ul>
        <div className="m-4 h-8 w-8 sm:block lg:hidden">
          <button>Menu</button>
        </div>
      </nav>
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
