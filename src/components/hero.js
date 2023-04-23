import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import img from "../assets/img/hero.jpg";
import me from "../assets/img/me.jpg";

const Hero = () => {
  

    return (
        <div
          style={{
            height: '100vh',
            backgroundImage:'url(https://img.freepik.com/free-vector/technology-wire-mesh-network-connection-digital-background_1017-28407.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} 
          className='position-relative w-100'
        >
          <div 
            className='position-absolute text-white d-flex flex-column align-items-start justify-content-center center-div'
            style={{
              height: '100vh',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              backgroundColor: 'rgba(0,0,0,.7)',
            }}
          >
            <div className='container'  
                style={{
                marginTop: '10px',
                
                }}>
                <div id='containerH' >
                    <Image src={me} id='profileImg' zoomSrc={me} alt="Image" className='rounded-image' width='200' height='200' preview  />
                </div>
            

              <div className='col-md-6'>
                 <h1 className='mb-4 mt-2 display-4 font-weight-bold'>
                    BENATTIK
                  <span style={{ color: '#9B5DE5' }}> Amal</span>
                </h1>
                <span style={{ color: '#bbb' }} className='text-uppercase'>
                4th year engineering cycle
                </span>
                
                <p id='descH' style={{ color: '#bbb', paddingInline:'90px' }}>
                    I'm BENATTIK Amal, 23 years old, a Software Developer. I'm extremely passionate about my domain, with a strong developing background. I'm positive, open-minded, and determined. I always look for personal and professional self-improvement, looking for greater and bigger challenges, and for great opportunities for sharing and learning with the best
                </p>
                <div className='mt-5'>
                  <a href='/about'>
                  <Button 
                    label='Discover More About Me'
                    className='px-5 py-3 text-white mt-3 mt-sm-0'
                    style={{ borderRadius: '15px', backgroundColor: '#9B5DE5' }}
                  />
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
    
          
        </div>
      );
};

export default Hero;




