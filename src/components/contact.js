import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';


const Contact = () => {
    return(
        <div id='contact' style={{
            height: '100vh',
            backgroundImage:'url(https://img.freepik.com/free-vector/technology-wire-mesh-network-connection-digital-background_1017-28407.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            paddingTop:'100px',
          }} >
            <div className="mb-3 font-bold text-3xl "  style={{marginBottom:'50px',}}>
                <span className="text-900">Contact</span>
                <span className="" style={{ color: '#9B5DE5' }}> Me</span>
            </div>

            <div className="flex align-items-center justify-content-center" style={{marginBottom:'50px',}}>
                <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
                

                    <div>
                        
                        <label htmlFor="fullName" className="block text-900 font-medium mb-2" style={{textAlign:'left'}}>Full Name</label>
                        <InputText id="fullName" type="text" placeholder="Your Full Name" className="w-full mb-3" />

                        <label htmlFor="email" className="block text-900 font-medium mb-2" style={{textAlign:'left'}}>Email</label>
                        <InputText id="email" type="text" placeholder="Email address" className="w-full mb-3" />

                        <label htmlFor="object" className="block text-900 font-medium mb-2" style={{textAlign:'left'}}>Object</label>
                        <InputText id="object" type="text" placeholder="Your Email Object" className="w-full mb-3" />

                        <label htmlFor="message" className="block text-900 font-medium mb-2" style={{textAlign:'left'}}>Message</label>
                        <InputTextarea id="message" type="text" placeholder="Your Message" className="w-full mb-3" />

                        

                        

                        <Button label="Send" style={{ backgroundColor: '#9B5DE5' }} icon='pi pi-send' />
                    </div>
                </div>
            </div>





        </div>




    )
}

export default Contact;