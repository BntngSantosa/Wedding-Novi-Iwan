import React from "react";
import closingImg from "../../../assets/images/closing.png";

// ClosingSection Component to handle the background and structure of the section
const ClosingSection = ({ children }) => (
  <section
    className="w-full h-[370px] bg-cover bg-center flex flex-col items-center"
    style={{ backgroundImage: `url(${closingImg})` }}
  >
    {children}
  </section>
);

// TextBlock Component to handle text content with flexible styling
const TextBlock = ({ children, className }) => (
  <div className={`flex flex-col gap-5 px-12 pt-16 text-center ${className}`}>
    {children}
  </div>
);

// PenutupLayout Component
export default function PenutupLayout() {
  return (
    <ClosingSection>
      <TextBlock>
        <p className="font-EBGaramond font-normal text-[16px] text-secondary">
          Menjadi sebuah kebahagiaan bagi kami jika Bapak/Ibu/Saudara/i berkenan
          hadir dalam hari bahagia kami. Terima kasih atas segala ucapan, doa,
          dan perhatian yang diberikan.
        </p>
        <p className="font-EBGaramond font-semibold text-secondary">
          See you on our big day!
        </p>
        <h1 className="font-EBGaramond font-semibold text-2xl text-secondary">
          Iwan & Novi
        </h1>
      </TextBlock>
    </ClosingSection>
  );
}
