import emailjs from "@emailjs/browser";
import { useRef } from "react";
import "./Contact.css";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wuivc58",
        "template_7o43aq2",
        form.current,
        "KtU0F2BoOX1Co1hDn"
      )
      .then(
        (result) => {
          console.log(result);
          if (result.text === "OK") {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your Email Has Been Sent",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="contactPage p-5 bg-fixed bg-no-repeat pb-20">
      <h2 className="text-5xl text-center text-white p-5 md:p-40">
        Contact Me
      </h2>
      <div className="md:flex items-center w-full">
        <div className="md:w-6/12 mx-auto text-white">
          <h3 className="md:text-3xl md:p-10">
            Thank you for your interest! I would love to hear from you. If you
            have a project in mind or would like to discuss potential
            collaborations, please provide some details about your requirements
            and goals. This will help me better understand your needs and how I
            can contribute to your success.
          </h3>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="md:p-20 md:w-5/12 mx-auto text-white shadow-2xl rounded-3xl bg-gray-950"
        >
          <div>
            <label className="text-3xl">Name</label> <br />
            <input
              className="border bg-gray-800 text-xl px-10 my-2 w-full py-3 rounded-xl shadow-xl"
              type="text"
              placeholder="name"
              name="user_name"
              id=""
            />
          </div>
          <div>
            <label className="text-3xl">Email</label> <br />
            <input
              className="border text-xl  bg-gray-800 px-10 mt-2 w-full py-3 rounded-xl shadow-xl"
              type="text"
              placeholder="email"
              name="user_email"
              id=""
            />
          </div>
          <div>
            <label className="text-3xl">Message</label> <br />
            <textarea
              cols="2"
              rows="5"
              className="border text-xl  bg-gray-800 px-10 mt-2 w-full py-3 rounded-xl shadow-xl"
              type="text"
              placeholder="type your message here"
              name="message"
              id=""
            />
          </div>
          <input
            className="btn btn-outline text-white mt-5 shadow-2xl"
            type="submit"
            value="Send"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
