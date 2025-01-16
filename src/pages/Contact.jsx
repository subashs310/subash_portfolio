import React, { useState } from "react";
import { Input, Button, notification } from "antd";
import emailjs from "emailjs-com";
import { UserOutlined, HomeOutlined, MailOutlined } from "@ant-design/icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message, subject } = formData;

    if (!name || !email || !message || !subject) {
      notification.error({
        message: "Missing Fields",
        description: "Please fill in all the fields.",
      });
      return;
    }

    setStatus("Sending...");

    emailjs
      .send(
        "service_wxjoxfo",  // Replace with your EmailJS service ID
        "template_epfpbxv",  // Replace with your EmailJS template ID
        formData,
        "0kikXaZV5vUyoYwej"       // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          if (response.status === 200) {
            setIsSuccess(true);
            setStatus("Message sent successfully!");
            notification.success({
              message: "Success",
              description: "Your message has been sent successfully.",
            });
            setFormData({ name: "", email: "", message: "", subject: "" });
          } else {
            setIsSuccess(false);
            setStatus("Error sending message.");
            notification.error({
              message: "Error",
              description: "There was an error sending your message.",
            });
          }
        },
        (error) => {
          setIsSuccess(false);
          setStatus("Error sending message.");
          notification.error({
            message: "Error",
            description: "There was an error sending your message.",
          });
        }
      );
  };

  return (
<section className="contact-section py-20 ">
  <div className="container mx-auto text-center">
    {/* <h2 className="text-4xl font-bold text-white mb-10">Get in Touch</h2>
    <p className="text-lg text-white mb-6">For further inquiries, visit my profile at Subash_S. You can find detailed information about my work, skills, and contact details there. Looking forward to connecting with you!</p> */}

    <div className="flex flex-wrap justify-between">
      {/* Left Side - Contact Details */}
      <div className="w-full sm:w-1/2 p-6 text-white">
        <h3 className="text-2xl font-semibold mb-6">Contact Details</h3>
        <p className="flex items-center mb-4"><UserOutlined className="mr-2" /> Name: Subash</p>
        <p className="flex items-center mb-4"><HomeOutlined className="mr-2" /> Address: Thirunagar 7th street, Gandhi Nagar, Vadapalani, Chennai-600026</p>
        <p className="flex items-center mb-4"><MailOutlined className="mr-2" /> Email: Subashshankar0304@gmail.com</p>
      </div>

      {/* Right Side - Form */}
      <div className="w-full sm:w-1/2 p-6 bg-white rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-gray-800 mb-">Message Me</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="custom-input"
            prefix={<UserOutlined />}
          />
          <Input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            type="email"
            className="custom-input"
            prefix={<MailOutlined />}
          />
          <Input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="custom-input"
          />
          <Input.TextArea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={4}
            className="custom-input"
          />
          <Button
            type="primary"
            htmlType="submit"
            className={`w-full py-3 submit-btn ${isSuccess ? "bg-green-500 hover:bg-green-600" : "bg-gray-500 hover:bg-blue-600"}`}
          >
            Send Message
          </Button>
        </form>
        {status && <p className="status-message mt-4 text-gray-700">{status}</p>}
      </div>
    </div>
  </div>
</section>

    //   <style jsx>{`
    //     /* Global Styles */
    //     .contact-section {
    //       background-color: #f0f4f8;
    //     }

    //     .custom-input {
    //       width: 100%;
    //       padding: 12px;
    //       border-radius: 8px;
    //       border: 1px solid #ccc;
    //       transition: all 0.3s ease;
    //     }

    //     .custom-input:focus {
    //       border-color: #40a9ff;
    //       box-shadow: 0 0 5px rgba(64, 169, 255, 0.5);
    //     }

    //     .submit-btn {
    //       background-color: #3b82f6;
    //       border-color: #3b82f6;
    //       color: white;
    //       border-radius: 8px;
    //       font-weight: bold;
    //       transition: all 0.3s ease;
    //     }

    //     .submit-btn:hover {
    //       background-color: #2563eb;
    //       border-color: #2563eb;
    //     }

    //     .submit-btn.success {
    //       background-color: #10b981; /* Green for success */
    //       border-color: #10b981;
    //     }

    //     .status-message {
    //       font-size: 18px;
    //       margin-top: 20px;
    //       font-weight: bold;
    //       color: #3b82f6;
    //       opacity: 0;
    //       transition: opacity 1s ease-in-out;
    //     }

    //     @keyframes fadeInMessage {
    //       0% {
    //         opacity: 0;
    //       }
    //       100% {
    //         opacity: 1;
    //       }
    //     }

    //     .status-message {
    //       animation: fadeInMessage 1s ease-in-out forwards;
    //     }
    //   `}</style>
    // </section>
  );
};

export default Contact;
