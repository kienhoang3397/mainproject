import React from 'react';
import FormInput, { FormInputEmail, FormInputPhoneNumber } from '../../common/components/Forms/FormInput/FormInput';
import "./Contact.css"
import ContactHorizontal from '../../common/components/Items/ContactHorizontal';
import { PiPhoneCallFill } from "react-icons/pi";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import Btn from '../../common/components/Buttons/Button';



function ContactPage() {
  return (
    <div className="bg">
      <main className="contactContainer">
        <section className='leftContent'>

          <section className='titleContactInfo'>
            <h1>Contact Information</h1>
            <p>Say something to start a live chat!</p>
          </section>

          <section className='cotactInfo'>
            <div className='textInfo'>
              <PiPhoneCallFill />
              <p>+91 73569 83829</p>
            </div>
            <div className='textInfo'>
              <IoMdMail />
              <p>chat@ex.iphones.com</p>
            </div>
            <div className='textInfo'>
              <FaLocationDot />
              <p>7th Avenue, KL<br />
                ex.iphones. park, Calicut</p>
            </div>
          </section>


          <figure><ContactHorizontal light /></figure>

        </section>

        <section className="rightContent">
          <section className="formContact">
            <FormInput title={'First Name'} placeholder={'Enter your First Name'} />
            <FormInput title={'Second Name'} placeholder={'Enter your Second Name'} />
            <FormInputEmail title="Email" placeholder="Enter your email" />
            <FormInputPhoneNumber title="Phone Number" placeholder="Enter your phone number" />
          </section>
          <section>
          <div className='subject'>
            <span className='titleSubject'>Select Subject?</span>
            <div className="checkBoxContainer">
              <label className="checkBoxField">
                <p className='contentCheckBox'>General Inquiry</p>
                <input type="checkbox"  />
                <span className="checkmark"></span>
              </label>

              <label className="checkBoxField">
                <p className='contentCheckBox'>General Inquiry</p>
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>

              <label className="checkBoxField">
                <p className='contentCheckBox'>General Inquiry</p>
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>

              <label className="checkBoxField">
                <p className='contentCheckBox'>General Inquiry</p>
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>

          </div>
          <FormInput title={'Massage'} placeholder={'Write your message..'} />
          <Btn defaultValue content={'Send Message'} width={'200px'}/>
          </section>
          

        </section>

      </main>
    </div>
  );
}

export default ContactPage;
