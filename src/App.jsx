/* eslint-disable react/prop-types */
import SmoothScroll from './components/adds/SmoothScroll.jsx'
import Transition from './components/adds/Transition.jsx'
import { BackgroundProvider } from './components/adds/Background.jsx'
import Navbar from './components/adds/AnimatedNavbar.jsx'
import Border from './components/adds/Border.jsx'
import Profile from './components/profile.jsx'
import Experiences from './components/experiences.jsx'
import Projects from './components/projects.jsx'
import Footer from './components/footer.jsx'

export default function App() {
  return (
    <BackgroundProvider>
      <Navbar />
      <Transition>
        <SmoothScroll>
          <div id='grainy-background'></div>
          <div className='bg-neutral-950 max-h-full pt-20 lg:pt-36 pb-3'>
            <div className='p-4'></div>
            <div className='flex justify-center'>
              <Profile />
            </div>
            <Border />
            <div className='flex justify-center'>
              <Projects />
            </div>
            <Border />
            <div className='flex justify-center'>
              <Experiences />
            </div>
            <div className='flex justify-center mb-8 my-4 lg:my-10 lg:mb-16'>
              {/* <hr className='w-8/12 lg:w-10/12 lg:hidden border-stone-800 border-b-4 rounded' /> */}
            </div>
            <Footer />
          </div>
        </SmoothScroll>
      </Transition>
    </BackgroundProvider>
  );
}
