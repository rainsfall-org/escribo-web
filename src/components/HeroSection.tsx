import Image from 'next/image';
import Button from './Button';

// Image constants from localhost server
const imgGhyggjm2 = "http://localhost:3845/assets/9b80ea7300034ae51983ba1a7ea3871cb02f38be.png";
const imgGrunge = "http://localhost:3845/assets/a795debf9fcb5799cc929f422d081d25ebc0499e.png";
const imgEscriboLogoBlack1 = "http://localhost:3845/assets/1ea04c01e84520fdb935e4a6568b2c01930f6009.svg";
const img = "http://localhost:3845/assets/11631f6e38054d4815c736718fa3d3f2be2903f0.svg";

export default function HeroSection() {
  return (
    <div className="bg-[#1c150b] relative h-[1200px] overflow-hidden" data-name="Section 1 - Hero">
      {/* Decorative lamp images */}
      <div className="absolute flex items-center justify-center left-[-17px] size-[197px] top-[220px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div
            className="bg-center bg-cover bg-no-repeat size-[197px]"
            style={{ backgroundImage: `url('${imgGhyggjm2}')` }}
          />
        </div>
      </div>
      <div
        className="absolute bg-center bg-cover bg-no-repeat right-[-17px] size-[197px] top-[220px]"
        style={{ backgroundImage: `url('${imgGhyggjm2}')` }}
      />

      {/* Grunge background texture - covers entire section */}
      <div
        className="absolute bg-repeat bg-size-[342px_342px] bg-top-left h-full left-1/2 opacity-50 top-0 translate-x-[-50%] w-full min-w-[1662px]"
        style={{ backgroundImage: `url('${imgGrunge}')` }}
      />

      {/* Header */}
      <div className="absolute left-1/2 top-0 translate-x-[-50%] w-[1512px] max-w-full">
        <div className="box-border content-stretch flex items-center justify-between overflow-clip px-4 md:px-[120px] py-[32px] relative w-full">
          <div className="h-[24px] relative shrink-0 w-[112px]">
            <Image
              alt="Escribo Logo"
              src={imgEscriboLogoBlack1}
              width={112}
              height={24}
              className="block max-w-none size-full"
            />
          </div>
          <div className="content-stretch flex gap-[12px] items-center justify-start relative shrink-0">
            <div className="bg-[#F4E7D1] box-border content-stretch flex gap-[10px] items-center justify-center px-[48px] py-[18px] relative rounded-[41px] shrink-0 w-[60px]">
              <div className="overflow-clip relative shrink-0 size-[24px]">
                <div className="absolute inset-[5.22%_9.38%_4.88%_9.38%]">
                  <Image
                    alt="Package icon"
                    src={img}
                    width={24}
                    height={24}
                    className="block max-w-none size-full"
                  />
                </div>
              </div>
            </div>
            <div className="bg-[#988361] box-border content-stretch flex gap-[10px] items-center justify-center px-[48px] py-[18px] relative rounded-[41px] shrink-0 w-[180px]">
              <Button buttonText="Get Started" property1="Secondary" />
            </div>
          </div>
        </div>
        <div className="absolute border-[0px_0px_1px] border-[rgba(152,131,97,0.3)] border-solid inset-0 pointer-events-none" />
      </div>

      {/* Main hero content */}
      <div className="absolute content-stretch flex flex-col gap-[32px] items-center justify-start top-[279px] left-1/2 translate-x-[-50%] w-[909px] max-w-[90vw] px-4">
        <div className="content-stretch flex flex-col gap-[20px] items-start justify-start leading-[0] relative shrink-0 text-center w-full">
          <div className="font-montserrat font-normal h-[23px] relative shrink-0 text-[#F4E7D1] text-[20px] w-full">
            <p className="leading-[normal]">ESCRIBO AI</p>
          </div>
          <div className="flex flex-col font-avigea h-[166px] justify-center not-italic relative shrink-0 text-[#1c150b] text-[0px] w-full">
            <p className="leading-[1.15] text-4xl md:text-[80px]">
              <span className="font-avigea text-[#F4E7D1]">Helping every </span>
              <span className="font-avigea italic text-[#988361]">Writer</span>
              <span className="font-avigea text-[#F4E7D1]"> bring ideas to life.</span>
            </p>
          </div>
        </div>
        <div className="bg-[#A16631] box-border content-stretch flex gap-[10px] items-center justify-center px-[48px] py-[18px] relative rounded-[41px] shrink-0 w-[180px]">
          <Button buttonText="Get Started" />
        </div>
      </div>

      {/* Handwritten banner text */}
      <div className="absolute contents leading-[0] not-italic text-center top-[188px] tracking-[-0.54px] left-1/2 translate-x-[-50%]">
        <div className="absolute font-cormorant text-[0px] text-[rgba(152,131,97,0.3)] top-[200px] left-1/2 translate-x-[-50%] w-[361px]">
          <p className="font-homemade leading-[1.3] not-italic text-[18px]">
            <span>Patients</span>
            <span> capturing personal stories during recovery</span>
          </p>
        </div>
        <div className="absolute font-homemade text-[18px] text-[rgba(152,131,97,0.7)] top-[188px] left-1/2 translate-x-[-50%] w-[318px]" style={{ left: "calc(50% - 374px)" }}>
          <p className="leading-[1.3]">CEOs writing their journey</p>
        </div>
        <div className="absolute font-homemade text-[18px] text-[rgba(152,131,97,0.3)] top-[430px] left-1/2 translate-x-[-50%] w-[318px]" style={{ left: "calc(50% - 576px)" }}>
          <p className="leading-[1.3]">
            Memoir writers & life storytellers
            <br />
            <br />
          </p>
        </div>
        <div className="absolute font-homemade text-[18px] text-[rgba(152,131,97,0.7)] top-[625px] left-1/2 translate-x-[-50%] w-[318px]" style={{ left: "calc(50% - 547px)" }}>
          <p className="leading-[1.3]">Relationship & tribute writers</p>
        </div>
        <div className="absolute font-homemade text-[18px] text-[rgba(152,131,97,0.4)] top-[730px] left-1/2 translate-x-[-50%] w-[318px]" style={{ left: "calc(50% - 250px)" }}>
          <p className="leading-[1.3]">Aspiring authors starting their first book</p>
        </div>
        <div className="absolute font-homemade text-[18px] text-[rgba(152,131,97,0.7)] top-[633px] left-1/2 translate-x-[-50%] w-[318px]" style={{ left: "calc(50% + 301px)" }}>
          <p className="leading-[1.3]">Older adults documenting life stories</p>
        </div>
        <div className="absolute font-homemade text-[18px] text-[rgba(152,131,97,0.5)] top-[440px] left-1/2 translate-x-[-50%] w-[318px]" style={{ left: "calc(50% + 651px)" }}>
          <p className="leading-[1.3]">Parents creating childhood timelines</p>
        </div>
      </div>

      {/* Large "Escribo AI" text at bottom */}
      <div className="absolute bottom-[120px] left-1/2 transform -translate-x-1/2 font-avigea leading-[0] not-italic text-[#F4E7D1] text-[200px] md:text-[320px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Escribo AI</p>
      </div>
    </div>
  );
}