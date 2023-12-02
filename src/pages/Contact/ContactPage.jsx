import React, { useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { PiPhoneCallFill } from "react-icons/pi";
import Btn from '../../common/components/Buttons/Button';
import { FormInputDefault, FormInputEmail, FormInputPhoneNumber } from '../../common/components/Forms/FormInput/FormInput';
import ContactHorizontal from '../../common/components/Items/ContactHorizontal';
import "./Contact.css";

function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    secondName: '',
    email: '',
    phoneNumber: '',
    subjects: [],
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
   

  };

  const handleCheckboxChange = (value) => {
    const updatedSubjects = formData.subjects.includes(value)
      ? formData.subjects.filter((subject) => subject !== value)
      : [...formData.subjects, value];

    setFormData({ ...formData, subjects: updatedSubjects });
  };

  const subjectsList = ['General Inquiry', 'Subject 1', 'Subject 2', 'Subject 3'];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for form submission here
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);

  }


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
          <form className="FormContact" onSubmit={handleSubmit}>
            <div className='formContact'>
              <FormInputDefault
                title={'First Name'}
                placeholder={'Enter your First Name'}
                value={formData.firstName}
                handleChange={(e) => handleInputChange('firstName', e.target.value)}
              />
              <FormInputDefault
                title={'Second Name'}
                placeholder={'Enter your Second Name'}
                value={formData.secondName}
                handleChange={(e) => handleInputChange('secondName', e.target.value)}
              />
              <FormInputEmail
                title="Email"
                placeholder="Enter your email"
                value={formData.email}
                handleChange={(e) => handleInputChange('email', e.target.value)}
              />
              <FormInputPhoneNumber
                title="Phone Number"
                placeholder="Enter your phone number"
                value={formData.phoneNumber}
                handleChange={(e) => handleInputChange('phoneNumber', e.target.value)}
              />
            </div>
            <p className='titleSubject'>Select Subject?</p>
            <div className="subject">


              {subjectsList.map((subject) => (
                <label key={subject} className="checkBoxField">
                  <p className='contentCheckBox'>{subject}</p>
                  <input
                    type="checkbox"
                    value={subject}
                    checked={formData.subjects.includes(subject)}
                    onChange={() => handleCheckboxChange(subject)}
                  />
                  <span className="checkmark"></span>
                </label>
              ))}
            </div>

            <FormInputDefault
              title={'Message'}
              placeholder={'Write your message..'}
              value={formData.message}
              handleChange={(e) => handleInputChange('message', e.target.value)}
            />

            <Btn defaultValue content={'Submit'} type={'submit'}>
              Submit
            </Btn>
          </form>

          {isSubmitted && (
            <div className="alert-container show">
              <p>Form submitted successfully!</p>
              <p>First Name: {formData.firstName}</p>
              <p>Second Name: {formData.secondName}</p>
              <p>Email: {formData.email}</p>
              <p>Phone Number: {formData.phoneNumber}</p>
              <p>Subjects: {formData.subjects.join(', ')}</p>
              <p>Message: {formData.message}</p>
            </div>
          )}

        </section>

      </main>
    </div>
  );
}

export default ContactPage;
