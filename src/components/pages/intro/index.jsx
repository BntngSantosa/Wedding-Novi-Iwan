import React, { useRef, useState } from "react";
import IntroLayout from "../../layouts/intro layout/IntroLayout";
import OpeningLayout from "../../layouts/opening layout/OpeningLayout";
import BrideLayout from "../../layouts/bride layout/BrideLayout";
import AkadLayout from "../../layouts/akad layout/AkadLayout";
import AcaraLayout from "../../layouts/acara layout/AcaraLayout";
import RsvpLayout from "../../layouts/rsvp layout/RsvpLayout";
import GaleryLayout from "../../layouts/galery layout/GaleryLayout";
import LoveStoryLayout from "../../layouts/love story/LoveStoryLayout";
import WeddingGiftLayout from "../../layouts/wedding gift/WeddingGiftLayout";
import UcapanLayout from "../../layouts/ucapan/UcapanLayout";
import PenutupLayout from "../../layouts/penutup layout/PenutupLayout";
import ButtonMusic from "../../elements/ButtonMusic";
import ButtonUp from "../../elements/ButtonUp";
import CoverLayout from "../../layouts/cover layout/CoverLayout";

export default function Index() {
  const [showMain, setShowMain] = useState(false);
  const [showMusic, setShowMusic] = useState(false);
  const openingRef = useRef(null);

  // Handles the transition to show main content and play music
  const handleShowMain = () => {
    setShowMusic(true);
    setShowMain(true);
    setTimeout(() => {
      openingRef.current.scrollIntoView({ behavior: "smooth" });
    }, 500);
  };

  return (
    <>
      <div className="md:grid md:grid-cols-2">
        <div>
          <CoverLayout />
        </div>
        <IntroLayout onShowMain={handleShowMain} />

        {showMain && (
          <main className="relative md:max-w-md md:absolute md:right-0 md:top-[644px]">
            <ButtonUp />
            <ButtonMusic autoPlay />
            <OpeningLayout openingRef={openingRef} />
            <WeddingContent />
          </main>
        )}
      </div>
    </>
  );
}

// Modularizing the wedding layout content to keep the main component clean
const WeddingContent = () => (
  <>
    <BrideLayout />
    <AkadLayout />
    <AcaraLayout />
    <RsvpLayout />
    <GaleryLayout />
    <LoveStoryLayout />
    <WeddingGiftLayout />
    <UcapanLayout />
    <PenutupLayout />
  </>
);
