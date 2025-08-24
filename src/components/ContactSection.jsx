import { useNavigate } from "react-router-dom";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa"; // ✅ Home icon
export default function ContactSection() {
  const navigate = useNavigate();

  //Contact Mediums
  const email = "kjyotish124@gmail.com";
  const phone = "+919855893037"; // your phone number with country code
  const whatsapp = "+919855893037"; // same number for WhatsApp

  return (
    <section className="bg-[#2E2E2E]">
    <div className="h-full">
      <div className="relative bg-[#181515] w-full lg:h-56 h-40 flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-3xl opacity-60"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        />
        <h1 className="relative z-10 lg:text-5xl text-3xl font-extrabold text-white drop-shadow-lg">
          Contact Me
        </h1>
      </div>
      <div className="w-full flex flex-col items-center justify-between lg:gap-10 ">
        
        <h1 className="lg:text-5xl lg:font-bold text-2xl text-center text-gray-300 font-semibold px-8 py-5 lg:mt-10">
          Just one chance is all I ask—I promise you won’t regret it!
        </h1>
        {/* Buttons */}
        <div className="w-full flex flex-col justify-center p-4">
          {/* Gmail */}
          <div className="flex lg:flex-row flex-col lg:h-20 lg:gap-30 gap-4 lg:px-40">
            <button
              onClick={() =>
                window.open(
                  `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Hello&body=Hi, I want to contact you!`,
                  "_blank"
                )
              }
              className="w-full flex items-center justify-center gap-2 bg-red-600 text-white lg:text-lg lg:rounded-[20px] hover:bg-red-700 transition shadow-lg px-6 py-3 lg:py-0"
            >
              <Mail size={22} /> Gmail
            </button>

            {/* WhatsApp */}
            <button
              onClick={() =>
                window.open(
                  `https://wa.me/${whatsapp.replace("+", "")}`,
                  "_blank"
                )
              }
              className="w-full flex items-center justify-center gap-2 bg-green-600 text-white lg:text-lg lg:rounded-[20px] hover:bg-green-700 transition shadow-lg px-6 py-3 lg:py-0"
            >
              <MessageCircle size={22} /> WhatsApp
            </button>

            {/* Call */}
            <button
              onClick={() => (window.location.href = `tel:${phone}`)}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white lg:text-lg lg:rounded-[20px] hover:bg-blue-700 transition shadow-lg px-6 py-3 lg:py-0"
            >
              <Phone size={22} /> Call
            </button>
          </div>
        </div>
        {/* Back Button */}
        <div className="w-full lg:h-[50vh] h-[30vh]">
          <button
            onClick={() => navigate("/")}
            className="mt-10 lg:m-0 flex w-full h-full text-gray-400 hover:bg-gray-110 transition cursor-pointer lg:text-2xl items-start justify-center"
          >
            ← Click To Get Back
          </button>
           {/* Back button */}
                <button
                  onClick={() => navigate("/")}
                  className="fixed bottom-6 right-6 p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:scale-110 transition-transform"
                >
                  <FaHome size={22} />
                </button>
        </div>
      </div>
    </div></section>
  );
}
