import { Menubar } from 'primereact/menubar';
import Hero from './hero';



const navlist = [
  { label: 'Home', icon: 'pi pi-fw pi-home' , command: () => {
    window.location.href='/';}},
  { label: 'About', icon: 'pi pi-fw pi-file', command: () => {
    window.location.href='/about';} },
  { label: 'Contact', icon: 'pi pi-fw pi-phone', command: () => {
    window.location.href='/contact';}}
];


const Header = () => {
  return(
      <div>
         <header className='center-nav' style={{
                backgroundColor:'#9B5DE5',
              }}>
            <nav>
              <Menubar id='testt' model={navlist} style={{
                backgroundColor:'#9B5DE5',
                border: 'none'
              }}/>
            </nav>
         </header>
      </div>
  )
}

export default Header;
