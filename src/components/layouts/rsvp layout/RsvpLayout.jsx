import React, { useEffect } from "react";
import brideImg from "../../../assets/images/bride2.png";
import bride from "../../../assets/images/10.png";
import { Formik, Form, Field } from "formik";
import supabase from "../../../lib/supabaseClient"; // Adjust path as needed
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Aos from "aos";
import "aos/dist/aos.css";

// InputField Component for handling text inputs
const InputField = ({ name, placeholder, required }) => (
  <Field
    type="text"
    name={name}
    placeholder={placeholder}
    className="px-5 py-3 rounded-full font-Inter font-normal text-[12px] text-secondary outline-none border-2 border-secondary bg-[#1A2B38]"
    required={required}
  />
);

// RadioButton Component for handling radio buttons
const RadioButton = ({ id, name, value, label, setFieldValue }) => (
  <div className="flex gap-5">
    <Field
      type="radio"
      id={id}
      name={name}
      value={value}
      className="w-5"
      onChange={() => setFieldValue(name, value)}
    />
    <label
      htmlFor={id}
      className="font-Fredericka font-normal text-[16px] text-secondary"
    >
      {label}
    </label>
  </div>
);

// SubmitButton Component for form submission
const SubmitButton = () => (
  <button
    type="submit"
    className="w-full p-3 font-Inter font-semibold text-[16px] text-white bg-gradient-to-r from-gradOne to-loc rounded-full"
  >
    SUBMIT
  </button>
);

export default function RsvpLayout() {
  useEffect(() => {
    Aos.init();
  }, []);

  const handleSubmit = async (values, { resetForm }) => {
    const { data, error } = await supabase
      .from("rsvp") // Replace with your table name
      .insert([
        {
          nama_tamu: values.namaTamu,
          kehadiran: values.kehadiran,
          created_at: new Date(), // Add timestamp
        },
      ])
      .select("*");

    if (error) {
      console.error("Error submitting RSVP:", error);
      toast.error("Submission failed. Please try again.");
    } else {
      console.log("RSVP submitted:", data);
      toast.success("RSVP submitted successfully!");
      resetForm(); // Clear form fields
    }
  };

  return (
    <section
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${brideImg})` }}
    >
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="p-10 w-full" data-aos="fade-up" data-aos-duration="1000">
        <div className="p-5 bg-[#1A2B38] rounded-lg">
          <img src={bride} alt="Bride" className="w-full rounded-md" />
          <div className="my-5">
            <h1 className="font-EBGaramond font-normal text-6xl text-secondary text-center mt-5">
              RSVP
            </h1>
            <p className="font-Fredericka font-normal text-[16px] text-secondary text-center mt-5">
              Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga
              apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa
              restu kepada kedua mempelai. Atas kehadiran serta doa restu, kami
              ucapkan terima kasih.
            </p>
          </div>
          <Formik
            initialValues={{ namaTamu: "", kehadiran: "" }}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue }) => (
              <Form className="grid grid-cols-1 gap-5">
                <InputField
                  name="namaTamu"
                  placeholder="Masukan Nama"
                  required
                />
                <RadioButton
                  id="hadir"
                  name="kehadiran"
                  value="Hadir"
                  label="Hadir"
                  setFieldValue={setFieldValue}
                />
                <RadioButton
                  id="tidakHadir"
                  name="kehadiran"
                  value="Tidak Hadir"
                  label="Tidak Hadir"
                  setFieldValue={setFieldValue}
                />
                <SubmitButton />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
}
