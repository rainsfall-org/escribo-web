"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Vintage-themed loader component
const VintageLoader = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="relative">
        {/* Outer ring */}
        <div className="w-12 h-12 border-2 border-[#988361] rounded-full animate-spin border-t-transparent"></div>
        {/* Inner decorative elements */}
        <div className="absolute inset-2 border border-[#a16631] rounded-full opacity-50"></div>
        <div className="absolute inset-3 w-6 h-6 bg-[#f4e7d1] rounded-full opacity-30 animate-pulse"></div>
        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#53442d] rounded-full"></div>
      </div>
    </div>
  );
};

// Image constants from public folder
const imgLantern = "/lantern.png";
const imgAboutLeft = "/about-decorative-left.png";
const imgAboutRight = "/about-decorative-right.png";
const imgFooterDivider = "/Footer Divider.svg";
const imgEscriboLogo = "/escribo-logo.svg";
const imgInstagram = "/instagram.svg";
const imgLinkedin = "/linkedin.svg";
const imgFacebook = "/facebook.svg";
const imgTwitter = "/twitter.svg";
const imgGrunge = "/grunge.png";
const imgPaper1 = "/paper-1.png";
const imgFeather = "/feather.png";
const imgFeather2 = "/feather-2.png";
const imgRoughChatbox = "/rough-chatbox.svg";
const imgRefinedChatbox = "/refined-chatbox.svg";
const imgPaper2 = "/paper-2.png";
const imgBook = "/book.png";
const imgDocument = "/document.svg";
const imgSparkImagery = "/spark-imagery.svg";
const imgCard1 = "/card-1.png";
const imgCard2 = "/card-2.png";
const imgCard3 = "/card-3.png";

interface ButtonProps {
  buttonText?: string;
  property1?: "Primary" | "Secondary" | "Teritiary";
  property2?: "Outline" | "Solid";
  state?: "Default" | "Hover";
  property3?: "Default" | "Only Icon";
}

function Button({
  buttonText = "Button",
  property1 = "Primary",
  property2 = "Solid",
  state = "Default",
  property3 = "Default"
}: ButtonProps) {
  if (property1 === "Secondary" && property2 === "Solid" && state === "Default" && property3 === "Default") {
    return (
      <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[48px] py-[18px] relative rounded-[41px] size-full cursor-pointer group">
        <div className="font-avigea leading-[0] not-italic relative shrink-0 text-[20px] text-nowrap text-white group-hover:tracking-wide transition-all duration-200">
          <p className="leading-[normal] whitespace-pre">{buttonText}</p>
        </div>
      </div>
    );
  }
  if (property1 === "Teritiary" && property2 === "Solid" && state === "Default" && property3 === "Default") {
    return (
      <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[48px] py-[18px] relative rounded-[41px] size-full cursor-pointer group">
        <div className="font-avigea leading-[0] not-italic relative shrink-0 text-[#53442d] text-[20px] text-nowrap group-hover:tracking-wide transition-all duration-200">
          <p className="leading-[normal] whitespace-pre">{buttonText}</p>
        </div>
      </div>
    );
  }
  if (property1 === "Secondary" && property2 === "Outline" && state === "Default" && property3 === "Default") {
    return (
      <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[48px] py-[18px] relative rounded-[41px] size-full overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105">
        <div className="absolute border-2 border-[#988361] border-solid inset-0 pointer-events-none rounded-[41px]" />
        <div className="absolute inset-0 bg-[#988361] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out rounded-[41px]" />
        <div className="font-avigea leading-[0] not-italic relative shrink-0 text-[#988361] group-hover:text-white text-[20px] text-nowrap z-10 transition-colors duration-300">
          <p className="leading-[normal] whitespace-pre">{buttonText}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[48px] py-[18px] relative rounded-[41px] size-full cursor-pointer group">
      <div className="font-avigea leading-[0] not-italic relative shrink-0 text-[20px] text-nowrap text-white group-hover:tracking-wide transition-all duration-200">
        <p className="leading-[normal] whitespace-pre">{buttonText}</p>
      </div>
    </div>
  );
}

const words = ["Writer", "Author", "Student", "Scholar", "Creator"];

export default function LandingPageVintage() {
  // Typewriter animation state
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // FAQ state
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0); // First FAQ expanded by default

  // Feature slide state
  const [currentSlide, setCurrentSlide] = useState(0);

  // Revolutionary cards animation state
  const [currentCard, setCurrentCard] = useState(0);

  // Image loading states
  const [loadingStates, setLoadingStates] = useState({
    card1: true,
    card2: true,
    card3: true,
    roughChatbox: true,
    refinedChatbox: true,
    document: true,
    sparkImagery: true
  });

  // Handle image load completion
  const handleImageLoad = (imageName: keyof typeof loadingStates) => {
    setLoadingStates(prev => ({ ...prev, [imageName]: false }));
  };

  // FAQ toggle function
  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  // Typewriter animation effect
  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (currentText.length < currentWord.length) {
            setCurrentText(currentWord.slice(0, currentText.length + 1));
          } else {
            // Finished typing, wait then start deleting
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          // Deleting
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1));
          } else {
            // Finished deleting, move to next word
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 50 : 100,
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 400);

    return () => clearInterval(cursorInterval);
  }, []);

  // Feature slide auto-transition
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3); // Cycle between 0, 1, and 2
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval);
  }, []);

  // Revolutionary cards auto-transition
  useEffect(() => {
    const cardInterval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % 3); // Cycle between 0, 1, and 2
    }, 3000); // Change card every 3 seconds

    return () => clearInterval(cardInterval);
  }, []);

  // Preload all card images on component mount for better performance
  useEffect(() => {
    const preloadImages = [imgCard1, imgCard2, imgCard3];
    preloadImages.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }, []);

  return (
    <div className="bg-[#f4e7d1] relative overflow-x-hidden">
      {/* Hero Section */}
      <div className="bg-[#1c150b] h-[900px] lg:h-[1104px] relative overflow-hidden">
        {/* Decorative lamp images */}
        <div className="absolute flex items-center justify-center left-0 size-[197px] top-[220px]">
          <div className="flex-none rotate-[180deg] scale-y-[-100%]">
            <Image
              src={imgLantern}
              alt="Decorative lantern"
              width={197}
              height={197}
              className="object-contain"
            />
          </div>
        </div>
        <div className="absolute right-0 size-[197px] top-[220px]">
          <Image
            src={imgLantern}
            alt="Decorative lantern"
            width={197}
            height={197}
            className="object-contain"
          />
        </div>

        {/* Grunge background texture */}
        <div
          className="absolute h-full left-0 opacity-50 top-0 w-full"
          style={{
            backgroundImage: `url('${imgGrunge}')`,
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto'
          }}
        />

        {/* Header */}
        <div className="absolute left-0 top-0 w-full">
          <div className="box-border content-stretch flex items-center justify-between overflow-clip px-4 md:px-[120px] py-[32px] relative w-full">
            <div className="h-[24px] relative shrink-0 w-[112px] flex items-center">
              <Image
                src={imgEscriboLogo}
                alt="Escribo AI Logo"
                width={112}
                height={24}
                className="object-contain"
              />
            </div>
            <div className="content-stretch flex gap-[12px] items-center justify-start relative shrink-0">
              <div className="bg-[#988361] box-border content-stretch flex gap-[10px] items-center justify-center px-[48px] py-[18px] relative rounded-[41px] shrink-0 w-[180px] h-[60px]">
                <Button buttonText="Get Started" property1="Secondary" />
              </div>
            </div>
          </div>
          <div className="absolute border-[0px_0px_1px] border-[rgba(152,131,97,0.3)] border-solid inset-0 pointer-events-none" />
        </div>

        {/* Main hero content */}
        <div className="absolute content-stretch flex flex-col gap-[20px] md:gap-[32px] items-center justify-start top-[150px] md:top-[279px] left-1/2 translate-x-[-50%] w-full max-w-[90vw] lg:max-w-[900px] xl:max-w-[850px] px-4">
          <div className="content-stretch flex flex-col gap-[12px] md:gap-[20px] items-start justify-start leading-[0] relative shrink-0 text-center w-full">
            <div className="font-montserrat font-normal relative shrink-0 text-[#f4e7d1] text-[16px] md:text-[20px] w-full">
              <p className="leading-[normal]">ESCRIBO AI</p>
            </div>
            <div className="flex flex-col font-avigea justify-center not-italic relative shrink-0 text-[#1c150b] text-[0px] w-full">
              <div className="leading-[1.15] text-[28px] md:text-[60px] text-center" style={{ lineHeight: '115%', letterSpacing: '0%' }}>
                <span className="font-avigea text-[#f4e7d1]" style={{ fontWeight: 400, fontStyle: 'normal' }}>Helping every </span>
                <span className="font-avigea italic text-[#988361]" style={{ fontWeight: 400, fontStyle: 'italic' }}>
                  {currentText}
                  <span> </span>
                  <span
                    className={`inline-block transition-opacity duration-75 ${showCursor ? "opacity-100" : "opacity-0"}`}
                    style={{
                      width: "0.3em",
                      height: "0.8em",
                      backgroundColor: "#988361",
                      marginLeft: "2px",
                      verticalAlign: "baseline",
                      position: "relative",
                      top: "0.1em",
                    }}
                  ></span>
                </span>
                <br />
                <span className="font-avigea text-[#f4e7d1]" style={{ fontWeight: 400, fontStyle: 'normal' }}>bring ideas to life.</span>
              </div>
            </div>
          </div>
          <div className="bg-[#a16631] box-border content-stretch flex gap-[10px] items-center justify-center px-[32px] md:px-[48px] py-[14px] md:py-[18px] relative rounded-[41px] shrink-0 w-[140px] md:w-[180px] h-[48px] md:h-[60px]">
            <Button buttonText="Get Started" />
          </div>
        </div>

        {/* Handwritten banner image */}
        <div className="absolute top-[200px] bottom-[100px] left-0 right-0 w-full block pointer-events-none overflow-hidden">
          <Image
            src="/handwritten-banner.png"
            alt="Handwritten banner text"
            fill
            className="object-contain object-center"
            priority
          />
        </div>

        {/* Large "Escribo AI" text at bottom */}
        <div className="absolute bottom-[20px] md:bottom-[-4px] lg:bottom-[-25px] left-1/2 transform -translate-x-1/2 font-avigea not-italic text-[#F4E7D1] text-[80px] sm:text-[120px] md:text-[200px] lg:text-[320px] text-nowrap z-10" style={{ lineHeight: '100%', letterSpacing: '0%', fontWeight: 400, fontStyle: 'normal' }}>
          <p className="whitespace-pre">Escribo AI</p>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-[#f4e7d1] min-h-[600px] relative overflow-hidden -mt-[60px] w-full">
        {/* Decorative images - responsive positioning */}
        <div className="absolute left-0 opacity-20 w-[20vw] h-[20vw] top-[40%]">
          <Image
            src={imgAboutLeft}
            alt="Decorative element"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute right-0 opacity-5 w-[25vw] h-[25vw] top-[10%]">
          <Image
            src={imgAboutRight}
            alt="Decorative element"
            fill
            className="object-contain"
          />
        </div>

        {/* Content container */}
        <div className="flex items-start justify-center min-h-[500px] md:min-h-[650px] px-4 pt-[40px] md:pt-[80px] lg:pt-[120px] pb-[30px] md:pb-[50px]">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-[124px] items-center justify-center max-w-7xl w-full">
            <div className="font-avigea text-[60px] md:text-[120px] lg:text-[200px] text-[rgba(161,102,49,0.1)] text-center tracking-[-3px] md:tracking-[-6px] shrink-0">
              <p className="leading-[normal] whitespace-pre">About</p>
            </div>
            <div className="leading-[normal] text-[16px] md:text-[20px] lg:text-[24px] tracking-[-0.5px] md:tracking-[-0.72px] max-w-[554px] text-center lg:text-left">
              <p className="font-montserrat font-medium mb-0 text-[rgba(161,102,49,0.5)]">
                Writing a book can feel like chaos—messy notes, half-finished drafts, and moments of staring at a blank page.
              </p>
              <p className="mb-0">
                <br />
                <span className="font-montserrat font-semibold text-[#a16631]">Escribo AI</span>
                <span className="font-montserrat font-medium text-[rgba(161,102,49,0.7)]">
                  {` turns that chaos into clarity, giving you the tools to organize your story, stay motivated, and keep moving forward.`}
                </span>
              </p>
              <p className="font-montserrat font-medium text-[rgba(161,102,49,0.7)]">
                <br />
                Our mission is simple: make the journey of writing not just easier, but inspiring.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Revolutionary Stuff Section */}
      <div
        className="relative w-full h-[1600px] md:h-[1480px] lg:h-[1280px] z-20 -mt-[200px] -mb-[200px]"
        style={{
          backgroundImage: `url('${imgPaper1}')`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      >
        {/* Feather decoration - Left */}
        <div className="absolute -left-40 -top-20  w-[800px] h-[800px] flex-shrink-0" style={{  aspectRatio: '552.64/552.64' }}>
          <Image
            src={imgFeather}
            alt="Decorative feather"
            fill
            className="object-contain"
          />
        </div>

        {/* Feather decoration - Right */}
        <div className="absolute -right-36 top-[600px] min-[1400px]:top-[440px] w-[900px] h-[900px] flex-shrink-0" style={{ aspectRatio: '552.64/552.64' }}>
          <Image
            src={imgFeather2}
            alt="Decorative feather"
            fill
            className="object-contain"
          />
        </div>
        {/* Content */}
        <div className="absolute inset-0 flex flex-col xl:flex-row items-center justify-center xl:justify-between px-4 md:px-8 lg:px-[120px] pt-[20px] md:pt-[40px] lg:pt-[60px] pb-[40px] md:pb-[60px] lg:pb-[100px] gap-6 xl:gap-0">
          {/* Left side - Text content */}
          <div className="content-stretch flex flex-col gap-[30px] xl:gap-[80px] items-center xl:items-start justify-start relative max-w-[505px] text-center xl:text-left">
            <div className="content-stretch flex flex-col gap-[16px] xl:gap-[24px] items-center xl:items-start justify-center leading-[0] relative shrink-0 text-[#53442d]">
              <div className="font-avigea not-italic relative shrink-0 text-[40px] md:text-[60px] xl:text-[80px] w-full">
                <p className="leading-[1.15]">Revolutionary Stuff</p>
              </div>
              <div className="font-montserrat font-normal relative shrink-0 text-[16px] md:text-[20px]">
                <p className="leading-[normal]">& so much more!</p>
              </div>
            </div>
            <div className="shrink-0 w-[160px] xl:w-[180px] h-[50px] xl:h-[60px]">
              <Button buttonText="Try Now" property1="Secondary" property2="Outline" />
            </div>

            {/* Mobile/Tablet Card stack animation - below button */}
            <div className="flex min-[1400px]:hidden relative w-[320px] md:w-[400px] h-[400px] md:h-[480px] mt-6 mx-auto">
              {/* Card 1 - Base card */}
              <div className="absolute top-0 left-0 w-[300px] md:w-[360px] h-[360px] md:h-[432px] transition-all duration-700 ease-in-out z-10">
                {loadingStates.card1 && (
                  <div className="absolute top-0 left-0 w-[300px] md:w-[360px] h-[360px] md:h-[432px] bg-[#f4e7d1] bg-opacity-20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <VintageLoader />
                  </div>
                )}
                <Image
                  src={imgCard1}
                  alt="Revolutionary feature card 1"
                  fill
                  className="object-contain"
                  priority
                  onLoad={() => handleImageLoad('card1')}
                />
              </div>

              {/* Card 2 - Sweeps in from angle */}
              <div
                className={`absolute w-[300px] md:w-[360px] h-[384px] md:h-[461px] transition-all duration-700 ease-in-out ${
                  currentCard >= 1
                    ? 'top-[-8px] left-[18px] md:left-[24px] rotate-[-2deg] z-20'
                    : 'top-[90px] left-[90px] rotate-[25deg] opacity-0 z-20'
                }`}
              >
                {loadingStates.card2 && (
                  <div className="absolute top-0 left-0 w-[300px] md:w-[360px] h-[384px] md:h-[461px] bg-[#f4e7d1] bg-opacity-20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <VintageLoader />
                  </div>
                )}
                <Image
                  src={imgCard2}
                  alt="Revolutionary feature card 2"
                  fill
                  className="object-contain"
                  priority
                  onLoad={() => handleImageLoad('card2')}
                />
              </div>

              {/* Card 3 - Sweeps in on top */}
              <div
                className={`absolute w-[300px] md:w-[360px] h-[384px] md:h-[461px] transition-all duration-700 ease-in-out ${
                  currentCard >= 2
                    ? 'top-[6px] left-[30px] md:left-[36px] rotate-[-3deg] z-30'
                    : 'top-[120px] left-[120px] rotate-[20deg] opacity-0 z-30'
                }`}
              >
                {loadingStates.card3 && (
                  <div className="absolute top-0 left-0 w-[300px] md:w-[360px] h-[384px] md:h-[461px] bg-[#f4e7d1] bg-opacity-20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <VintageLoader />
                  </div>
                )}
                <Image
                  src={imgCard3}
                  alt="Revolutionary feature card 3"
                  fill
                  className="object-contain"
                  priority
                  onLoad={() => handleImageLoad('card3')}
                />
              </div>
            </div>
          </div>

          {/* Desktop - Card stack animation */}
          <div className="hidden min-[1400px]:block relative w-[600px] h-[700px] -ml-32">
            {/* Card 1 - Base card */}
            <div className="absolute top-0 -left-30 w-[500px] h-[600px] transition-all duration-700 ease-in-out z-10">
              {loadingStates.card1 && (
                <div className="absolute top-0 left-0 w-[500px] h-[600px] bg-[#f4e7d1] bg-opacity-20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <VintageLoader />
                </div>
              )}
              <Image
                src={imgCard1}
                alt="Revolutionary feature card 1"
                fill
                className="object-contain"
                priority
                onLoad={() => handleImageLoad('card1')}
              />
            </div>

            {/* Card 2 - Sweeps in from angle */}
            <div
              className={`absolute w-[500px] h-[640px] transition-all duration-700 ease-in-out ${
                currentCard >= 1
                  ? '-top-8 -left-26 rotate-[-2deg] z-20'
                  : 'top-48 left-48 rotate-[25deg] opacity-0 z-20'
              }`}
            >
              {loadingStates.card2 && (
                <div className="absolute top-0 left-0 w-[500px] h-[640px] bg-[#f4e7d1] bg-opacity-20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <VintageLoader />
                </div>
              )}
              <Image
                src={imgCard2}
                alt="Revolutionary feature card 2"
                fill
                className="object-contain"
                priority
                onLoad={() => handleImageLoad('card2')}
              />
            </div>

            {/* Card 3 - Sweeps in on top */}
            <div
              className={`absolute w-[500px] h-[640px] transition-all duration-700 ease-in-out ${
                currentCard >= 2
                  ? 'top-4 -left-20 rotate-[-3deg] z-30'
                  : 'top-60 left-60 rotate-[20deg] opacity-0 z-30'
              }`}
            >
              {loadingStates.card3 && (
                <div className="absolute top-0 left-0 w-[500px] h-[640px] bg-[#f4e7d1] bg-opacity-20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <VintageLoader />
                </div>
              )}
              <Image
                src={imgCard3}
                alt="Revolutionary feature card 3"
                fill
                className="object-contain"
                priority
                onLoad={() => handleImageLoad('card3')}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Burnt Orange Section */}
      <div className="relative w-full h-[1400px] md:h-[1300px] min-[1400px]:h-[1200px] bg-[#A16631]">
        {/* Dust texture overlay */}
        <div
          className="absolute inset-0 w-full h-full opacity-30"
          style={{
            backgroundImage: `url('/dust.png')`,
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto'
          }}
        />

        {/* Features label - centered at top */}
        <div className="absolute top-20 md:top-25 left-1/2 transform -translate-x-1/2 font-avigea text-[60px] md:text-[120px] lg:text-[200px] leading-[1.15] text-[rgba(244,231,209,0.1)] text-center">
          Features
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center px-4 md:px-8 lg:px-[120px] pt-[60px] md:pt-[80px] pb-[40px] md:pb-[60px]">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-[124px] items-center lg:items-start justify-center max-w-7xl w-full">
            {/* Left side - Text content with slides */}
            <div className="flex-1 max-w-[600px] relative">
              {/* Slide 1: Binder & Outliner */}
              <div className={`transition-opacity duration-1000 ease-in-out ${currentSlide === 0 ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}>
                {/* Main heading */}
                <div className="mb-4 md:mb-6 mt-8 md:mt-20 text-center lg:text-left">
                  <h2 className="font-avigea text-[32px] md:text-[60px] lg:text-[80px] leading-[1.15] text-[#f4e7d1] mb-2 md:mb-4">
                    Binder & Outliner
                  </h2>
                </div>

                {/* Description */}
                <div className="mb-6 md:mb-8 text-center lg:text-left">
                  <p className="font-montserrat font-normal text-[14px] md:text-[18px] lg:text-[20px] leading-[1.6] text-[#f4e7d1] opacity-90">
                    Dump your messy notes or draft freely—then let Escribo AI instantly organize your thoughts into chapters, scenes, and logical flow. Writing a book feels less overwhelming when structure comes alive at a click.
                  </p>
                </div>

                {/* Button */}
                <div className="w-[140px] md:w-[180px] h-[48px] md:h-[60px] mx-auto lg:mx-0">
                  <div className="bg-[#f4e7d1] box-border content-stretch flex gap-[10px] items-center justify-center px-[48px] py-[18px] relative rounded-[41px] w-full h-full">
                    <Button buttonText="Organize" property1="Teritiary" property2="Solid" />
                  </div>
                </div>
              </div>

              {/* Slide 2: Book Preview */}
              <div className={`transition-opacity duration-1000 ease-in-out ${currentSlide === 1 ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}>
                {/* Main heading */}
                <div className="mb-4 md:mb-6 mt-8 md:mt-20 text-center lg:text-left">
                  <h2 className="font-avigea text-[32px] md:text-[60px] lg:text-[80px] leading-[1.15] text-[#f4e7d1] mb-2 md:mb-4">
                    Book Preview
                  </h2>
                </div>

                {/* Description */}
                <div className="mb-6 md:mb-8 text-center lg:text-left">
                  <p className="font-montserrat font-normal text-[14px] md:text-[18px] lg:text-[20px] leading-[1.6] text-[#f4e7d1] opacity-90">
                    See your draft as a real book, complete with AI-generated cover concepts and formatted pages. This instant glimpse of the finished product transforms your project from &ldquo;someday&rdquo; into &ldquo;right now.&rdquo;
                  </p>
                </div>

                {/* Button */}
                <div className="w-[140px] md:w-[180px] h-[48px] md:h-[60px] mx-auto lg:mx-0">
                  <div className="bg-[#f4e7d1] box-border content-stretch flex gap-[10px] items-center justify-center px-[48px] py-[18px] relative rounded-[41px] w-full h-full">
                    <Button buttonText="Preview" property1="Teritiary" property2="Solid" />
                  </div>
                </div>
              </div>

              {/* Slide 3: Creative Spark */}
              <div className={`transition-opacity duration-1000 ease-in-out ${currentSlide === 2 ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}>
                {/* Main heading */}
                <div className="mb-4 md:mb-6 mt-8 md:mt-20 text-center lg:text-left">
                  <h2 className="font-avigea text-[32px] md:text-[60px] lg:text-[80px] leading-[1.15] text-[#f4e7d1] mb-2 md:mb-4">
                    Creative Spark
                  </h2>
                </div>

                {/* Description */}
                <div className="mb-6 md:mb-8 text-center lg:text-left">
                  <p className="font-montserrat font-normal text-[14px] md:text-[18px] lg:text-[20px] leading-[1.6] text-[#f4e7d1] opacity-90">
                    Stuck on a scene? With one click, Escribo AI suggests fresh directions, prompts, or sensory details to reignite your creativity. It&rsquo;s like brainstorming with a partner who always has new ideas.
                  </p>
                </div>

                {/* Button */}
                <div className="w-[140px] md:w-[180px] h-[48px] md:h-[60px] mx-auto lg:mx-0">
                  <div className="bg-[#f4e7d1] box-border content-stretch flex gap-[10px] items-center justify-center px-[48px] py-[18px] relative rounded-[41px] w-full h-full">
                    <Button buttonText="Inspire" property1="Teritiary" property2="Solid" />
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile - Images below button */}
            <div className="block min-[1400px]:hidden w-full max-w-[400px] mx-auto mt-6">
              {/* Slide 1: Chatbox images */}
              <div className={`transition-opacity duration-1000 ease-in-out ${currentSlide === 0 ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}>
                {/* Rough chatbox - top */}
                <div className="relative w-full h-[200px] mb-4" style={{ aspectRatio: '149/86' }}>
                  {loadingStates.roughChatbox && (
                    <VintageLoader className="absolute inset-0 bg-[#a16631] bg-opacity-20 backdrop-blur-sm rounded-lg" />
                  )}
                  <Image
                    src={imgRoughChatbox}
                    alt="Paste your Rough Draft or Story Idea"
                    fill
                    className="object-contain"
                    onLoad={() => handleImageLoad('roughChatbox')}
                  />
                </div>

                {/* Refined chatbox - bottom */}
                <div className="relative w-full h-[240px]">
                  {loadingStates.refinedChatbox && (
                    <VintageLoader className="absolute inset-0 bg-[#a16631] bg-opacity-20 backdrop-blur-sm rounded-lg" />
                  )}
                  <Image
                    src={imgRefinedChatbox}
                    alt="AI will automatically create organized chapters"
                    fill
                    className="object-contain"
                    onLoad={() => handleImageLoad('refinedChatbox')}
                  />
                </div>
              </div>

              {/* Slide 2: Document preview */}
              <div className={`transition-opacity duration-1000 ease-in-out ${currentSlide === 1 ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}>
                <div className="flex items-center justify-center h-[400px]">
                  <div className="relative w-[280px] h-[336px]">
                    {loadingStates.document && (
                      <VintageLoader className="absolute inset-0 bg-[#a16631] bg-opacity-20 backdrop-blur-sm rounded-lg" />
                    )}
                    <Image
                      src={imgDocument}
                      alt="Book preview with formatted pages"
                      fill
                      className="object-contain"
                      onLoad={() => handleImageLoad('document')}
                    />
                  </div>
                </div>
              </div>

              {/* Slide 3: Creative Spark imagery */}
              <div className={`transition-opacity duration-1000 ease-in-out ${currentSlide === 2 ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}>
                <div className="flex items-center justify-center h-[400px]">
                  <div className="relative w-[320px] h-[320px]">
                    {loadingStates.sparkImagery && (
                      <VintageLoader className="absolute inset-0 bg-[#a16631] bg-opacity-20 backdrop-blur-sm rounded-lg" />
                    )}
                    <Image
                      src={imgSparkImagery}
                      alt="Creative spark illustration with structure banner and spiral designs"
                      fill
                      className="object-contain"
                      onLoad={() => handleImageLoad('sparkImagery')}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop - Images with slides */}
            <div className="flex-1 max-w-[700px] hidden min-[1400px]:block relative h-[750px]">
              {/* Slide 1: Chatbox images */}
              <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentSlide === 0 ? 'opacity-100' : 'opacity-0'}`}>
                {/* Rough chatbox - top */}
                <div className="absolute top-0 left-0 w-[596px] h-[344px] flex-shrink-0" style={{ aspectRatio: '149/86' }}>
                  {loadingStates.roughChatbox && (
                    <VintageLoader className="absolute inset-0 bg-[#a16631] bg-opacity-20 backdrop-blur-sm rounded-lg" />
                  )}
                  <Image
                    src={imgRoughChatbox}
                    alt="Paste your Rough Draft or Story Idea"
                    fill
                    className="object-contain"
                    onLoad={() => handleImageLoad('roughChatbox')}
                  />
                </div>

                {/* Refined chatbox - bottom */}
                <div className="absolute top-[380px] right-0 w-[595px] h-[415px] flex-shrink-0">
                  {loadingStates.refinedChatbox && (
                    <VintageLoader className="absolute inset-0 bg-[#a16631] bg-opacity-20 backdrop-blur-sm rounded-lg" />
                  )}
                  <Image
                    src={imgRefinedChatbox}
                    alt="AI will automatically create organized chapters"
                    fill
                    className="object-contain"
                    onLoad={() => handleImageLoad('refinedChatbox')}
                  />
                </div>
              </div>

              {/* Slide 2: Document preview */}
              <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentSlide === 1 ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex items-center justify-center h-full">
                  <div className="w-[500px] h-[600px] flex-shrink-0">
                    {loadingStates.document && (
                      <VintageLoader className="absolute inset-0 bg-[#a16631] bg-opacity-20 backdrop-blur-sm rounded-lg" />
                    )}
                    <Image
                      src={imgDocument}
                      alt="Book preview with formatted pages"
                      fill
                      className="object-contain"
                      onLoad={() => handleImageLoad('document')}
                    />
                  </div>
                </div>
              </div>

              {/* Slide 3: Creative Spark imagery */}
              <div className={`absolute inset-0 -pt-40 transition-opacity duration-1000 ease-in-out ${currentSlide === 2 ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex items-start justify-center h-full ">
                  <div className="w-[600px] h-[600px] flex-shrink-0">
                    {loadingStates.sparkImagery && (
                      <VintageLoader className="absolute inset-0 bg-[#a16631] bg-opacity-20 backdrop-blur-sm rounded-lg" />
                    )}
                    <Image
                      src={imgSparkImagery}
                      alt="Creative spark illustration with structure banner and spiral designs"
                      fill
                      className="object-contain"
                      onLoad={() => handleImageLoad('sparkImagery')}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Paper Section */}
      <div
        className="relative w-full h-[1200px] z-20 -mt-[200px] -mb-[50px]"
        style={{
          backgroundImage: `url('${imgPaper2}')`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      >
        {/* FAQ heading - centered at top */}
        <div className="absolute top-10 md:top-15 left-1/2 transform -translate-x-1/2 font-avigea text-[60px] md:text-[120px] lg:text-[200px] leading-[1.15] text-center" style={{ color: 'rgba(161, 99, 49, 0.1)' }}>
          FAQs
        </div>

        {/* FAQ Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-start pt-[200px] md:pt-[320px] pb-[60px] md:pb-[100px] px-4 md:px-8">
          {/* Got Questions heading */}
          <div className="relative mb-8 md:mb-12">
            <div className="font-avigea text-[32px] md:text-[60px] lg:text-[80px] text-[#988361] leading-[1.15]">
              <div className="relative text-center">
                <p className="whitespace-nowrap">Got Questions?</p>
                <p className="whitespace-nowrap text-center md:text-left" style={{ marginLeft: '0px', marginTop: '10px' }}>We&rsquo;ve got Answers.</p>
              </div>
            </div>
          </div>

          {/* FAQ Section with decorative books */}
          <div className="relative max-w-4xl w-full">
            {/* Decorative book - top left */}
            <div className="absolute -left-25 -top-20" style={{ width: '197.117px', height: '192.038px', flexShrink: 0 }}>
              <Image
                src={imgBook}
                alt="Decorative book"
                fill
                className="object-contain"
              />
            </div>

            {/* Decorative book - bottom right */}
            <div
              className="absolute -right-16 lg:-right-55 -bottom-42 z-0 w-[200px] h-[193px] lg:w-[349px] lg:h-[337px]"
              style={{ transform: 'rotate(60deg)', flexShrink: 0 }}
            >
              <Image
                src={imgBook}
                alt="Decorative book"
                fill
                className="object-contain"
              />
            </div>

            {/* FAQ Items */}
            <div className="flex flex-col gap-0 w-full max-w-[712px] mx-auto relative z-10">
              {/* FAQ Item 1 */}
              <div className="bg-transparent border-b border-dashed border-[#988361] p-6">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-5 flex-1">
                    <button
                      onClick={() => toggleFAQ(0)}
                      className="text-left font-montserrat font-medium text-[16px] md:text-[20px] text-[#53442d] leading-[1.15] hover:text-[#988361] transition-colors duration-200"
                    >
                      What is Escribo AI and how does it help writers?
                    </button>
                    {expandedFAQ === 0 && (
                      <div className="font-montserrat font-normal text-[14px] md:text-[16px] text-[#53442d] leading-[1.15] transition-all duration-300 ease-in-out">
                        <p>Escribo AI is an intelligent writing assistant that helps authors organize their thoughts, create structured outlines, and transform messy notes into coherent chapters. Whether you&rsquo;re a beginner or experienced writer, our AI streamlines the writing process.</p>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => toggleFAQ(0)}
                    className="w-6 h-6 flex items-center justify-center ml-6 text-[#988361] text-xl font-bold hover:text-[#53442d] transition-colors duration-200"
                  >
                    {expandedFAQ === 0 ? '−' : '+'}
                  </button>
                </div>
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-transparent border-b border-dashed border-[#988361] p-6">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-5 flex-1">
                    <button
                      onClick={() => toggleFAQ(1)}
                      className="text-left font-montserrat font-medium text-[16px] md:text-[20px] text-[#53442d] leading-[1.15] hover:text-[#988361] transition-colors duration-200"
                    >
                      How does the Binder & Outliner feature work?
                    </button>
                    {expandedFAQ === 1 && (
                      <div className="font-montserrat font-normal text-[16px] text-[#53442d] leading-[1.15] transition-all duration-300 ease-in-out">
                        <p>Simply paste your messy notes or draft freely in the input area. Our AI analyzes your content and automatically organizes it into logical chapters, scenes, and sections. You can then refine the structure with our intuitive drag-and-drop interface.</p>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => toggleFAQ(1)}
                    className="w-6 h-6 flex items-center justify-center ml-6 text-[#988361] text-xl font-bold hover:text-[#53442d] transition-colors duration-200"
                  >
                    {expandedFAQ === 1 ? '−' : '+'}
                  </button>
                </div>
              </div>

              {/* FAQ Item 3 */}
              <div className="bg-transparent border-b border-dashed border-[#988361] p-6">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-5 flex-1">
                    <button
                      onClick={() => toggleFAQ(2)}
                      className="text-left font-montserrat font-medium text-[16px] md:text-[20px] text-[#53442d] leading-[1.15] hover:text-[#988361] transition-colors duration-200"
                    >
                      Can I use Escribo AI for different types of writing projects?
                    </button>
                    {expandedFAQ === 2 && (
                      <div className="font-montserrat font-normal text-[16px] text-[#53442d] leading-[1.15] transition-all duration-300 ease-in-out">
                        <p>Absolutely! Escribo AI works for novels, short stories, academic papers, screenplays, blog posts, and more. Our AI adapts to different writing styles and formats, making it versatile for any creative or professional writing project.</p>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => toggleFAQ(2)}
                    className="w-6 h-6 flex items-center justify-center ml-6 text-[#988361] text-xl font-bold hover:text-[#53442d] transition-colors duration-200"
                  >
                    {expandedFAQ === 2 ? '−' : '+'}
                  </button>
                </div>
              </div>

              {/* FAQ Item 4 */}
              <div className="bg-transparent border-b border-dashed border-[#988361] p-6">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-5 flex-1">
                    <button
                      onClick={() => toggleFAQ(3)}
                      className="text-left font-montserrat font-medium text-[16px] md:text-[20px] text-[#53442d] leading-[1.15] hover:text-[#988361] transition-colors duration-200"
                    >
                      Is my writing data secure and private?
                    </button>
                    {expandedFAQ === 3 && (
                      <div className="font-montserrat font-normal text-[16px] text-[#53442d] leading-[1.15] transition-all duration-300 ease-in-out">
                        <p>Yes, your privacy is our top priority. All your writing data is encrypted and stored securely. We never share your content with third parties, and you maintain full ownership of your work. You can delete your data at any time.</p>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => toggleFAQ(3)}
                    className="w-6 h-6 flex items-center justify-center ml-6 text-[#988361] text-xl font-bold hover:text-[#53442d] transition-colors duration-200"
                  >
                    {expandedFAQ === 3 ? '−' : '+'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="relative w-full h-[1000px] -mt-[200px]">
        {/* Background paper texture */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url('/paper-texture.png')`,
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto'
          }}
        />

        {/* Decorative lamps */}
        {/* Left lamp */}
        <div className="absolute flex items-center justify-center left-0 size-[197px] top-[270px] z-10">
          <div className="flex-none rotate-[180deg] scale-y-[-100%]">
            <Image
              src={imgLantern}
              alt="Decorative lantern"
              width={197}
              height={197}
              className="object-contain"
            />
          </div>
        </div>

        {/* Right lamp */}
        <div className="absolute right-[0px] size-[197px] top-[200px]">
          <Image
            src={imgLantern}
            alt="Decorative lantern"
            width={197}
            height={197}
            className="object-contain"
          />
        </div>

        {/* Footer Content */}
        <div className="absolute bottom-0 content-stretch flex flex-col gap-[40px] md:gap-[60px] items-center justify-start py-[40px] md:py-[60px] px-4 w-full z-20">
          {/* Banner Text */}
          <div className="content-stretch flex flex-col gap-[20px] md:gap-[32px] items-center justify-start relative shrink-0 w-full max-w-[1028px]">
            <div className="font-avigea leading-[1.15] not-italic relative shrink-0 text-[#f4e7d1] text-[28px] md:text-[50px] lg:text-[70px] text-center w-full">
              <p>Ready to write without limits?<br />Start Today!</p>
            </div>
            <div className="bg-[#a16631] box-border content-stretch flex gap-[10px] items-center justify-center px-[32px] md:px-[48px] py-[14px] md:py-[18px] relative rounded-[41px] shrink-0 w-[140px] md:w-[180px] h-[48px] md:h-[60px]">
              <Button buttonText="Register" />
            </div>
          </div>

          {/* Footer Divider */}
          <div className="h-[56px] relative shrink-0 w-full max-w-[1150px]">
            <Image
              alt="Footer divider"
              src={imgFooterDivider}
              fill
              className="object-contain"
            />
          </div>

          {/* Footer Bottom */}
          <div className="content-stretch flex flex-col gap-[40px] md:gap-[64px] items-center justify-start relative shrink-0 w-full max-w-[1028px]">
            <div className="content-stretch flex flex-col gap-[20px] md:gap-[32px] items-center justify-center relative shrink-0 w-full">
              {/* Logo */}
              <div className="h-[32px] md:h-[53px] relative shrink-0 w-[150px] md:w-[254px]">
                <Image
                  alt="Escribo Logo"
                  src={imgEscriboLogo}
                  width={254}
                  height={53}
                  className="block max-w-none size-full"
                />
              </div>

              {/* Social Icons */}
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-[200px] md:w-[254px]">
                <div className="box-border content-stretch flex gap-[10px] items-center justify-start p-[10px] relative rounded-[10px] shrink-0 border border-[rgba(244,231,209,0.25)]">
                  <div className="overflow-clip relative shrink-0 size-[24px]">
                    <Image
                      alt="Instagram"
                      src={imgInstagram}
                      width={24}
                      height={24}
                      className="block max-w-none size-full"
                    />
                  </div>
                </div>
                <div className="box-border content-stretch flex gap-[10px] items-center justify-start p-[10px] relative rounded-[10px] shrink-0 border border-[rgba(244,231,209,0.25)]">
                  <div className="overflow-clip relative shrink-0 size-[24px]">
                    <Image
                      alt="LinkedIn"
                      src={imgLinkedin}
                      width={24}
                      height={24}
                      className="block max-w-none size-full"
                    />
                  </div>
                </div>
                <div className="box-border content-stretch flex gap-[10px] items-center justify-start p-[10px] relative rounded-[10px] shrink-0 border border-[rgba(244,231,209,0.25)]">
                  <div className="overflow-clip relative shrink-0 size-[24px]">
                    <Image
                      alt="Facebook"
                      src={imgFacebook}
                      width={24}
                      height={24}
                      className="block max-w-none size-full"
                    />
                  </div>
                </div>
                <div className="box-border content-stretch flex gap-[10px] items-center justify-start p-[10px] relative rounded-[10px] shrink-0 border border-[rgba(244,231,209,0.25)]">
                  <div className="overflow-clip relative shrink-0 size-[24px]">
                    <Image
                      alt="Twitter"
                      src={imgTwitter}
                      width={24}
                      height={24}
                      className="block max-w-none size-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="font-montserrat font-normal leading-[0] relative shrink-0 text-[#f4e7d1] text-[12px] md:text-[16px] text-center w-full">
              <p className="leading-[normal]">Copyrights @EscriboAI 2025. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
