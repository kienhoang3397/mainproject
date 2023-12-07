import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { PiPhoneCallFill } from "react-icons/pi";
import Btn from "../../common/components/Buttons/Button";
import {
  FormInputDefault,
  FormInputEmail,
  FormInputPhoneNumber,
} from "../../common/components/Forms/FormInput/FormInput";
import ContactHorizontal from "../../common/components/Items/ContactHorizontal";
import "./Contact.css";
import { ConfigProvider, Input } from "antd";
import { formFooter } from "../../common/config/configANT";

function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    email: "",
    phoneNumber: "",
    subjects: [],
    message: "",
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

  const subjectsList = ["General Inquiry", "Special Inquiry"];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for form submission here
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="bg">
      <main className="contactContainer">
        <section className="leftContent">
          <section className="titleContactInfo">
            <h1>Contact Information</h1>
            <p>Say something to start a live chat!</p>
          </section>

          <section className="cotactInfo">
            <div className="textInfo">
              <PiPhoneCallFill />
              <p>+91 73569 83829</p>
            </div>
            <div className="textInfo">
              <IoMdMail />
              <p>chat@ex.iphones.com</p>
            </div>
            <div className="textInfo">
              <FaLocationDot />
              <p>
                7th Avenue, KL
                <br />
                ex.iphones. park, Calicut
              </p>
            </div>
          </section>

          <figure>
            <ContactHorizontal light />
          </figure>
        </section>
        <form onSubmit={handleSubmit} className="rightContent">
         
            <div className="formContact">
              <section className={"fieldInput"}>
                <label htmlFor="name" className={"label"}>
                  First Name
                </label>
                <div>
                  <ConfigProvider theme={formFooter}>
                    <Input
                      value={formData.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      placeholder="Kien"
                      id="name"
                      className="inputArea"
                    />
                  </ConfigProvider>
                </div>
              </section>
              <section className={"fieldInput"}>
                <label htmlFor="secondname" className={"label"}>
                  Second Name
                </label>
                <div>
                  <ConfigProvider theme={formFooter}>
                    <Input
                      placeholder={"Hoang"}
                      value={formData.secondName}
                      onChange={(e) =>
                        handleInputChange("secondName", e.target.value)
                      }
                      id="secondname"
                      className="inputArea"
                    />
                  </ConfigProvider>
                </div>
              </section>

              <section className={"fieldInput"}>
                <label htmlFor="email" className={"label"}>
                  Email
                </label>
                <div>
                  <ConfigProvider theme={formFooter}>
                    <Input
                      placeholder={"example@gmail.com"}
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      id="email"
                      className="inputArea"
                    />
                  </ConfigProvider>
                </div>
              </section>
              <section className={"fieldInput"}>
                <label htmlFor="phoneNumber" className={"label"}>
                  Phone Number
                </label>
                <div>
                  <ConfigProvider theme={formFooter}>
                    <Input
                      value={formData.phoneNumber}
                      onChange={(e) =>
                        handleInputChange("phoneNumber", e.target.value)
                      }
                      placeholder="+91 73569 88456"
                      id="phoneNumber"
                      className="inputArea"
                    />
                  </ConfigProvider>
                </div>
              </section>
            </div>

            <section className="containerSelectSubject">
              <p className="titleSubject">Select Subject?</p>
              <div className="subject">
                {subjectsList.map((subject) => (
                  <label key={subject} className="checkBoxField">
                    <p className="contentCheckBox">{subject}</p>
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
            </section>

            <section className={"fieldInput"}>
              <label htmlFor="message" className={"label"}>
                Message
              </label>
              <div>
                <ConfigProvider theme={formFooter}>
                  <Input
                    value={formData.phoneNumber}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    placeholder="Write your message.."
                    id="message"
                    className="inputArea"
                  />
                </ConfigProvider>
              </div>
            </section>

            <Btn defaultValue content={"Submit"} type={"submit"}>
              Submit
            </Btn>
       
          {isSubmitted && (
            <div className="alert-container show">
              <p>Form submitted successfully!</p>
              <p>First Name: {formData.firstName}</p>
              <p>Second Name: {formData.secondName}</p>
              <p>Email: {formData.email}</p>
              <p>Phone Number: {formData.phoneNumber}</p>
              <p>Subjects: {formData.subjects.join(", ")}</p>
              <p>Message: {formData.message}</p>
            </div>
          )}
        </form>
      </main>
    </div>
  );
}

export default ContactPage;
