import { Divider } from 'primereact/divider';
import { Fieldset } from 'primereact/fieldset';
import { Accordion, AccordionTab } from 'primereact/accordion';

import { Image } from 'primereact/image';

import c1 from '../assets/img/gl/c1.jpg';
import c2 from '../assets/img/gl/c2.jpg';
import c3 from '../assets/img/gl/c3.jpg';
import c4 from '../assets/img/gl/c4.jpg';
import c5 from '../assets/img/gl/c5.jpg';
import c6 from '../assets/img/gl/c6.jpg';
import c7 from '../assets/img/gl/c7.jpg';



const About = () => {
  return(
    <div >
      <div style={{marginTop:'50px',marginBottom:'50px',}}>
        <h1 style={{color:'white'}}>It's me BENATTIK <span style={{ color: '#9B5DE5' }}>Amal</span></h1>
        <p id='descA' style={{ color: '#bbb', paddingInline:'90px' }}>
        Born on 24-10-1999, I am an enthusiastic and passionate individual with a strong drive to learn and grow in my chosen field. I am constantly seeking to deepen my knowledge and expand my skill set by taking on new challenges and exploring new areas of interest. I am open-minded and eager to learn about new technologies, and I am committed to developing my abilities and capacities to the fullest extent possible.
                  </p>
      </div>
      <Divider />

      <div id='accordions' style={{marginInline:'50px',marginTop:'50px',marginBottom:'50px',}}>

        <h2 style={{color:'white'}}>Academic Background</h2>
        <Accordion  activeIndex={0} style={{textAlign:'left',}}>
          <AccordionTab header="Engineering Cycle">
              <p className="my-2">
                2022-2023: First Year of the Computer Science and Network Engineering Engineering Cycle, specializing in Management of Computer Applications for Business (MIAGE).
              </p>
          </AccordionTab>
          <AccordionTab header="Bachelor Degree">
              <p className="my-2">
                  2021-2022: Bachelor degree in computer science at UPM 
              </p>
          </AccordionTab>
          <AccordionTab header="Qualifiying Training">
              <p className="my-2">
                  2020-2021: Qualifiying Training in Web an Mobile Application Development in the Specialized Institute of Applied Technology INTIC, Marrakesh
              </p>
          </AccordionTab>
          <AccordionTab header="Specilized Technicien">
              <p className="my-2">
                  2018-2020: Diploma in Specialized Technician in Computer Development Techniques int the Specialized Institute of Management and Computer Science ISGI, Marrakesh
              </p>
          </AccordionTab>
          <AccordionTab header="Baccalaureate Degree">
              <p className="my-2">
                  2016-2017: Baccalaureate Degree in Life and Earth Sciences
              </p>
          </AccordionTab>
        </Accordion>
      </div>

      <div id='exp' style={{marginInline:'50px',marginTop:'100px',marginBottom:'50px',}}>
        <h2 style={{marginBottom:'60px',color:'white',}}>Professional Experinces</h2>
        <div class="grid">
          <div class="col" >
            <Fieldset className='exp' id='exp1' legend="InternShip March 2019" style={{height:'400px'}}>
              <p className="m-0">
                Throughout the internship in <b>Hello World, Digital Communication and Marketing Agency</b>, I had the opportunity to work on a variety of projects, ranging from designing landing pages to developing e-commerce websites. I also gained experience in using various web development tools such as Adobe Photoshop, Sublime Text, and Git. My role as an intern allowed me to work closely with experienced developers, learning from their expertise and expanding my skill set. I thoroughly enjoyed my time at Hello World Agency and am grateful for the knowledge and experience I gained during my internship.
              </p>
          </Fieldset>
          </div>
          
          
          <div class="col" >
          <Fieldset className='exp' id='exp2' legend="InternShip March 2020" style={{height:'400px'}}>
              <p className="m-0">
                During my qualifying training program, I completed an internship as a developer in <b>ENIAC IT</b> where I worked on an Administrative Mail Management Application. The application was developed using PHP with the Laravel framework, JavaScript, HTML/Bootstrap, and MySQL. My role as a developer involved designing and implementing new features, testing and debugging the application, and collaborating with other team members to ensure the successful delivery of the project. Through this internship, I gained practical experience in web development and learned how to apply various programming languages and tools to develop a functional and efficient application.
              </p>
          </Fieldset>
          </div>
          <div class="col" >
          <Fieldset className='exp' id='exp3' legend="InternShip June 2022" style={{height:'400px'}}>
              <p className="m-0">
              During my Bachelor's degree program, I completed an internship as a developer in <b>ENIAC IT</b> where I worked on a Textile Management Application. The application was developed using PHP with the Laravel framework, JavaScript, HTML/Bootstrap, and MySQL. My responsibilities as a developer included designing and implementing new features, testing and debugging the application, and collaborating with other team members to ensure the successful delivery of the project. Through this internship, I gained practical experience in web development and learned how to apply various programming languages and tools to develop a functional and efficient application for textile management.
              </p>
          </Fieldset>
          </div>
        </div>
      </div>


      <div id='skills' style={{marginInline:'50px',}}>
        <div className="mb-3 font-bold text-3xl " >
            <span className="text-900" style={{color:'white'}}>My </span>
            <span className="" style={{ color: '#9B5DE5' }}>Skills</span>
        </div>
        <div className="surface-0 text-center" style={{marginTop:'80px',marginBottom:'50px',}}>
      
          <div className="grid" style={{backgroundColor:'#1f2d40',}}>
            <div className="col-12 md:col-4 mb-4 px-5">
                <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                    <i className="pi pi-desktop text-4xl " style={{ color: '#9B5DE5' }}></i>
                </span>
                <div className="text-900 text-xl mb-3 font-medium">Software</div>
                <span className="text-700 line-height-3">Eclipse, VS Code, Visual Studio, SQLDeveloper, NetBeans, Android Studio</span>
            </div>
            <div className="col-12 md:col-4 mb-4 px-5">
                <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                    <i className="pi pi-microsoft text-4xl " style={{ color: '#9B5DE5' }}></i>
                </span>
                <div className="text-900 text-xl mb-3 font-medium">Operating Systems</div>
                <span className="text-700 line-height-3">Windows, Linux, MacOs</span>
            </div>
            <div className="col-12 md:col-4 mb-4 px-5">
                <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                    <i className="pi pi-instagram text-4xl " style={{ color: '#9B5DE5' }}> </i>
                </span>
                <div className="text-900 text-xl mb-3 font-medium">Transversal</div>
                <span className="text-700 line-height-3">Marketing, Entrepreneurship, Project management, Management</span>
            </div>
            <div className="col-12 md:col-4 mb-4 px-5">
                <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                    <i className="pi pi-globe text-4xl " style={{ color: '#9B5DE5' }}></i>
                </span>
                <div className="text-900 text-xl mb-3 font-medium">Web Technologies</div>
                <span className="text-700 line-height-3">PHP, HTML, CSS, Bootstrap, JavaScript</span>
            </div>
            <div className="col-12 md:col-4 mb-4 px-5">
                <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                    <i className="pi pi-database text-4xl " style={{ color: '#9B5DE5' }}></i>
                </span>
                <div className="text-900 text-xl mb-3 font-medium">Data Base</div>
                <span className="text-700 line-height-3">MySQL, Oracle, SQL</span>
            </div>
            <div className="col-12 md:col-4 md:mb-4 mb-0 px-3">
                <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                    <i className="pi pi-file-edit text-4xl " style={{ color: '#9B5DE5' }}></i>
                </span>
                <div className="text-900 text-xl mb-3 font-medium">Frameworks</div>
                <span className="text-700 line-height-3">Spring Framework, Laravel</span>
            </div>
          </div>
        </div>
      </div>

      <div id='cert' style={{marginInline:'50px',}}>
        <div className="mb-3 font-bold text-3xl " >
            <span className="text-900">My </span>
            <span className="" style={{ color: '#9B5DE5' }}>Certificates</span>
        </div>
        <div className="surface-0 text-center" style={{marginTop:'80px',marginBottom:'50px',}}>
          <div className='grid'>
            <div className='col-12 md:col-4 mb-4'>
              <Image src={c1} className='imgC' alt="Image" width="200" preview  />
            </div>

            <div className='col-12 md:col-4 mb-4 px-5'>
              <Image src={c2} className='imgC' alt="Image" width="200" preview  />
            </div>

            <div className='col-12 md:col-4 mb-4 px-5'>
              <Image src={c3} className='imgC' alt="Image" width="200" preview  />
            </div>

            <div className='col-12 md:col-4 mb-4 px-5'>
              <Image src={c4} className='imgC' alt="Image" width="200" preview  />
            </div>
            <div className='col-12 md:col-4 mb-4 px-5'>
              <Image src={c5} className='imgC' alt="Image" width="200" preview  />
            </div>
            <div className='col-12 md:col-4 mb-4 px-5'>
              <Image src={c6} className='imgC' alt="Image" width="200" preview  />
            </div>
            <div className='col-12 md:col-4 mb-4 px-5'>
              <Image src={c7} className='imgC' alt="Image" width="200" preview  />
            </div>
            
            
          </div>
        </div>
      </div>

      
      
    </div>
      
  )
}

export default About;
