import React from 'react';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from 'emailjs-com';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

export default function Contact() {

  const [loading, setLoading] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    onSubmit: (values, { resetForm }) => {
      setLoading(true);

      emailjs.send(
        'service_qhpqpw6',
        'template_tcjyjxe',
        {
          name: values.name,
          email: values.email,
          message: values.message
        },
        'zhGV3M0afJ72vpqWA'
      )
        .then(() => {
          toast.success("Message Sent!");
          resetForm();
        })
        .catch(() => {
          toast.error("Failed to send message. Please try again.");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  });

  const contactInfo = [
    {
      icon: <FiMail />,
      text: "moataz.ibrahim.gaber@gmail.com",
      href: "mailto:moataz.ibrahim.gaber@gmail.com"
    },
    {
      icon: <FiPhone />,
      text: "+20 1104712048",
      href: "tel:+201104712048"
    },
    {
      icon: <FiMapPin />,
      text: "Nasr City, Cairo, Egypt",
      href: ""
    },
  ];

  return (
    <section id="contact" className="py-24 bg-[linear-gradient(135deg,_#0f172a,_#334155,_#0f172a)]">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="container mx-auto px-6">

        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-800 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-slate-700 dark:text-white">Contact Information</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-8">
              Feel free to reach out via email, phone, or find me on social media. I'm always open to discussing new projects or opportunities.
            </p>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a key={index} href={info.href} className="flex items-center gap-4 text-slate-600 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors">
                  <span className="text-teal-500 dark:text-teal-400">{info.icon}</span>
                  <span>{info.text}</span>
                </a>
              ))}
            </div>
            <div className="flex mt-8 space-x-4">
              <a href="www.linkedin.com/in/moataz-ibrahim-ali" target="_blank" className="text-2xl text-slate-500 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-transform hover:scale-110"><FaLinkedin /></a>
              <a href="https://github.com/MOATAZn" target="_blank" className="text-2xl text-slate-500 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-transform hover:scale-110"><FaGithub /></a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={formik.handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formik.values.name}
              onChange={formik.handleChange}
              className="w-full p-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder:text-slate-400 dark:placeholder:text-slate-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formik.values.email}
              onChange={formik.handleChange}
              className="w-full p-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder:text-slate-400 dark:placeholder:text-slate-300"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              value={formik.values.message}
              onChange={formik.handleChange}
              className="w-full p-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder:text-slate-400 dark:placeholder:text-slate-300"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                </svg>
              ) : (
                "Send Message"
              )}
            </button>

          </motion.form>

        </div>
      </div>
    </section>
  );
}
