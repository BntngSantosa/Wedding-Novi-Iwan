import React, { useEffect, useState } from "react";
import brideImg from "../../../assets/images/bride2.png";
import bride from "../../../assets/images/10.png";
import { Formik, Form, Field } from "formik";
import supabase from "../../../lib/supabaseClient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Aos from "aos";
import "aos/dist/aos.css";

// Define stop words outside the component to avoid re-creation on every render
const stopWords = [
  "anjing",
  "bangsat",
  "babi",
  "bagong",
  "monyet",
  "beruk",
  "setan",
  "tolol",
  "bodo",
  "oon",
  "belegug",
  "sinting",
  "gelo",
  "gehel",
  "ajg",
  "lol",
  "bjir",
  "njir",
  "jir",
  "blok",
  "goblok",
  "blog",
  "goblog",
  "memek",
  "hencet",
  "heuncet",
  "heunceut",
  "itil",
  "mmk",
  "mmkk",
  "kontol",
  "kntl",
  "kanjut",
  "knjt",
  "tai",
  "haram",
  "pungut",
];

export default function UcapanLayout() {
  const [guestMessages, setGuestMessages] = useState([]);

  useEffect(() => {
    Aos.init();
    fetchGuestMessages();
  }, []);

  // Fetch guest messages from the database
  const fetchGuestMessages = async () => {
    const { data, error } = await supabase
      .from("tamu")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching guest messages:", error);
    } else {
      setGuestMessages(data);
    }
  };

  // Check if the text contains any stop words
  const containsStopWord = (text) => {
    return stopWords.some((word) => text.toLowerCase().includes(word));
  };

  // Handle the submission of guest messages
  const handleSubmit = async (values, { resetForm }) => {
    if (containsStopWord(values.ucapan)) {
      toast.error(
        "Ucapan Anda mengandung kata-kata tidak pantas. Mohon perbaiki."
      );
      return;
    }

    const { data, error } = await supabase
      .from("tamu")
      .insert([
        {
          nama_tamu: values.namaTamu,
          ucapan: values.ucapan,
          created_at: new Date(),
        },
      ])
      .select("*");

    if (error) {
      console.error("Error submitting message:", error);
      toast.error("Submission failed. Please try again.");
    } else {
      console.log("Message submitted:", data);
      toast.success("Message submitted successfully!");
      resetForm();
      fetchGuestMessages();
    }
  };

  return (
    <section
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${brideImg})` }}
    >
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="px-10 w-full" data-aos="fade-up" data-aos-duration="1000">
        <div className="p-5 bg-[#1A2B38] rounded-lg">
          <img src={bride} alt="" className="w-full rounded-md" />
          <div className="my-5">
            <h1 className="font-EBGaramond font-normal text-6xl text-secondary text-center mt-5">
              Guest Book
            </h1>
            <p className="font-Fredericka font-normal text-[16px] text-secondary text-center mt-5">
              Kami menghargai kehadiran Anda dan ucapan terbaik Anda untuk kedua
              mempelai. Silakan tinggalkan ucapan Anda di bawah ini.
            </p>
          </div>

          {/* Formik Form */}
          <Formik
            initialValues={{ namaTamu: "", ucapan: "" }}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className="grid grid-cols-1 gap-5">
                <Field
                  type="text"
                  name="namaTamu"
                  placeholder="Masukan Nama"
                  className="px-5 py-3 rounded-full font-Inter font-normal text-[12px] text-secondary outline-none border-2 border-secondary bg-[#1A2B38]"
                  required
                />
                <Field
                  as="textarea"
                  name="ucapan"
                  placeholder="Tulis ucapan Anda"
                  className="px-5 py-3 h-20 rounded-md font-Inter font-normal text-[12px] text-secondary outline-none border-2 border-secondary bg-[#1A2B38]"
                  required
                />
                <button
                  type="submit"
                  className="w-full p-3 font-Inter font-semibold text-[16px] text-white bg-gradient-to-r from-gradOne to-loc rounded-full"
                >
                  SUBMIT
                </button>
              </Form>
            )}
          </Formik>

          {/* Guest Messages Section */}
          <div className="mt-10">
            <h2 className="font-EBGaramond font-normal text-4xl text-secondary text-center mb-5">
              Ucapan Tamu
            </h2>
            <div className="space-y-5">
              {guestMessages.map((message) => (
                <div
                  key={message.id}
                  className="p-5 bg-[#2C3E50] rounded-lg shadow-lg"
                >
                  <h3 className="font-EBGaramond font-bold text-[18px] text-primary">
                    {message.nama_tamu}
                  </h3>
                  <p className="font-Fredericka font-normal text-[16px] text-secondary">
                    {message.ucapan}
                  </p>
                  <p className="font-Inter font-light text-[12px] text-gray-400">
                    {new Date(message.created_at).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
