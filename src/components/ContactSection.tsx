import React, { FC, useState } from "react";
import { Send, Mail, Linkedin, Github, Twitter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Form submission logic would go here

    openModal();
  };

  interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
  }

  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setFormData((prev: FormData) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  
  interface SocialLink {
    name: string;
    icon: JSX.Element;
    link: string;
    color: string;
  }
  const socialLinks: SocialLink[] = [
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      link: "mailto:timi.nihel@gmail.com",
      color: "hover:text-blue-500",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      link: "https://linkedin.com/in/timiadenuga",
      color: "hover:text-blue-600",
    },
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      link: "https://github.com/Thi-mee",
      color: "hover:text-slate-400",
    },
    {
      name: "X",
      icon: <Twitter className="w-5 h-5" />,
      link: "https://x.com/timi_nihel",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-100 mb-4">
            Get in Touch
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Whether you&apos;re looking for a tech consultant, interested in a
            collaboration, or just want to connect, I&apos;m always open to
            discussing new opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg 
                               focus:outline-none focus:border-blue-500 text-slate-100"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg 
                               focus:outline-none focus:border-blue-500 text-slate-100"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg 
                             focus:outline-none focus:border-blue-500 text-slate-100"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg 
                             focus:outline-none focus:border-blue-500 text-slate-100 resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg 
                           flex items-center justify-center gap-2 transition-colors">
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-100 mb-4">
                  Connect With Me
                </h3>
                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.link}
                      className={`flex items-center gap-3 text-slate-300 ${link.color} transition-colors`}>
                      {link.icon}
                      <span>{link.name}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-100 mb-4">
                  Available For
                </h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• Full-stack Development Projects</li>
                  <li>• Cloud Architecture Consulting</li>
                  <li>• Technical Education & Workshops</li>
                  <li>• DevOps Implementation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      {isModalOpen && <SuccessModal closeModal={closeModal} />}
    </section>
  );
};


interface SuccessModalProps {
  closeModal: () => void;
}
const SuccessModal: FC<SuccessModalProps> = ({closeModal}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-96 p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Message Sent!
        </h2>
        <p className="text-gray-600">
          Thank you for reaching out! I&apos;ll get back to you as soon as
          possible.
        </p>
        <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
}

export default ContactSection;
