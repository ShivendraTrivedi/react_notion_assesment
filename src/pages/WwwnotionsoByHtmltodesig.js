import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const images = [
  "/engineeringpng@2x.png",
  "/group--1-of-4--figure--q-a-kombi-hero-screenshotpng@2x.png",
  "/stand-up-today.png",
  "/projects_2x.png"
];

const image = [
  "/tokyo.png",
  "/newyork.png",
  "/sanfranciso.png",
  "/london.png"
];


const WwwnotionsoByHtmltodesig = () => {

  const [activeButton, setActiveButton] = useState('board');

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const renderImage = () => {
    switch (activeButton) {
      case 'board':
        return '/kanbanpng@2x.png'; // Replace with the actual image path
      case 'table':
        return '/product_sprint.png'; // Replace with the actual image path
      case 'timeline':
        return '/product_timeline.png'; // Replace with the actual image path
      case 'calendar':
        return '/Product_calander.png'; // Replace with the actual image path
      case 'gallery':
        return '/product_gallery.png'; // Replace with the actual image path
      case 'list':
        return '/product_list.png'; // Replace with the actual image path
      default:
        return '';
    }
  };

  /* for every team side by side*/

  const [activateButton, setActivateButton] = useState('engineering');

  const handlingButtonClick = (button) => {
    setActivateButton(button);
  };

  const renderingImage = () => {
    switch (activateButton) {
      case 'engineering':
        return '/engineering.png';
      case 'design':
        return '/design.png';
      case 'product':
        return '/product.png';
      case 'marketing':
        return '/marketing.png';
      case 'operations':
        return '/operations.png';
      case 'hr':
        return '/HR.png';
      default:
        return '';
    }
  };


  /*for image slider*/

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the image index, and loop back to 0 if it exceeds the number of images
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 1000 milliseconds (1 second)

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
    }, []);


    const [currentImagingIndex, setCurrentImagingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the image index, and loop back to 0 if it exceeds the number of images
      setCurrentImagingIndex((prevInde) => (prevInde + 1) % image.length);
    }, 2000); // Change image every 1000 milliseconds (1 second)

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
    }, []);
    
  
  return (
    <div className="relative bg-white w-full h-[589.31rem] text-center text-[1rem] text-gray-100 font-inter">
      <div className="absolute h-[calc(100%_-_9415px)] top-[595.56rem] bottom-[-7.12rem] left-[calc(50%_-_180px)] rounded-8xs bg-gray-200 shadow-[0px_36px_89px_rgba(0,_0,_0,_0.04),_0px_23.3px_52.12px_rgba(0,_0,_0,_0.03),_0px_13.9px_28.35px_rgba(0,_0,_0,_0.02),_0px_7.2px_14.46px_rgba(0,_0,_0,_0.02),_0px_2.9px_7.25px_rgba(0,_0,_0,_0.02),_0px_0.7px_3.5px_rgba(0,_0,_0,_0.01)] w-[22.5rem]" />
      <img
        className="absolute top-[calc(50%_-_4298.5px)] left-[calc(50%_-_320px)] w-[40rem] h-[14.63rem] overflow-hidden object-cover"
        alt=""
        src="/main--section--picture--homeheropng@2x.png"
      />
      <b className="absolute top-[8.44rem] left-[calc(50%_-_278.6px)] text-[3.81rem] tracking-[-1.92px] leading-[4.06rem] flex text-gray-300 items-center w-[35.09rem] h-[8.69rem]">
        <span className="[line-break:anywhere] w-full">
          <p className="m-0">Write, plan, share.</p>
          <p className="m-0">With AI at your side.</p>
        </span>
      </b>
      <div className="absolute top-[17.63rem] left-[calc(50%_-_393.5px)] text-[1.5rem] tracking-[-0.42px] leading-[1.88rem] font-medium text-gray-300 flex items-center justify-center w-[49.21rem] h-[1.81rem]">
        Notion is the connected workspace where better, faster work happens.
      </div>
      <div className="absolute top-[calc(50%_-_4382.5px)] left-[39.9rem] rounded-8xs bg-gray-100 shadow-[0px_0.3px_0.73px_rgba(0,_0,_0,_0.12),_0px_1.5px_2.87px_rgba(0,_0,_0,_0.07),_0px_4px_9px_rgba(0,_0,_0,_0.05)] w-[10.2rem] h-[2.25rem] text-white">
        <div className="absolute top-[0.47rem] left-[calc(50%_-_67.6px)] tracking-[0.01px] leading-[1.44rem] font-semibold flex items-center justify-center w-[7.38rem] h-[1.25rem] cursor-pointer">
          Get Notion free
        </div>
        <div className="absolute top-[0.41rem] left-[calc(50%_+_54.3px)] tracking-[0.01px] leading-[1.44rem] font-semibold flex items-center justify-center w-[0.97rem] h-[1.44rem]">
          {" "}
          →
        </div>
      </div>
      <div className="absolute h-[calc(100%_-_9253px)] w-full top-[39.38rem] right-[0rem] bottom-[538.93rem] left-[0rem] overflow-hidden text-left text-[1.5rem] text-gray-300">
        <div className="cursor-pointer hover:bg-white absolute w-[calc(100%_-_1199px)] top-[1.25rem] right-[61.94rem] left-[13rem] rounded-xl bg-whitesmoke-100 shadow-[0px_4px_18px_rgba(0,_0,_0,_0.04),_0px_2px_7.85px_rgba(0,_0,_0,_0.03),_0px_0.8px_2.92px_rgba(0,_0,_0,_0.02),_0px_0.2px_1.04px_rgba(0,_0,_0,_0.01)] box-border h-[8.5rem] border-[1px] border-solid border-gray-500">
          <div className="absolute w-[calc(100%_-_42px)] top-[1.06rem] right-[1.31rem] left-[1.31rem] h-[2rem]">
            <img
              className="absolute top-[calc(50%_-_16px)] left-[0rem] rounded-8xs w-[2rem] h-[2rem]"
              alt=""
              src="/spankombiblock-icon--0xrn.svg"
            />
            <div className="absolute top-[calc(50%_-_15px)] left-[2.5rem] w-[8.16rem] h-[1.88rem]">
              <div className="absolute top-[0rem] left-[0rem] tracking-[-0.44px] leading-[1.88rem] font-semibold flex items-center w-[1.48rem] h-[1.81rem]">
                AI
              </div>
              <div className="absolute top-[calc(50%_-_9px)] left-[calc(50%_-_34.1px)] rounded-81xl bg-lavender w-[6.21rem] h-[1.13rem] text-[0.75rem] text-darkorchid-100">
                <div className="absolute top-[0.06rem] left-[0.5rem] tracking-[0.09px] leading-[0.94rem] font-semibold flex items-center w-[5.29rem] h-[0.94rem]">{`Now with Q&A`}</div>
              </div>
            </div>
          </div>
          <div className="absolute w-[calc(100%_-_42px)] top-[4.31rem] right-[1.31rem] left-[1.31rem] h-[4.38rem] text-[0.84rem]">
            <div className="absolute top-[0.81rem] left-[0rem] tracking-[0.1px] leading-[1.19rem] flex items-center w-[12.04rem] h-[2.19rem]">
              <span className="[line-break:anywhere] w-full">
                <p className="m-0">Ask literally anything. Notion</p>
                <p className="m-0">Will answer.</p>
              </span>
            </div>
          </div>
          
        </div>
        
        <div className="cursor-pointer hover:bg-white absolute w-[calc(100%_-_1199px)] top-[1.25rem] right-[45.63rem] left-[29.31rem] rounded-xl bg-whitesmoke-100 shadow-[0px_4px_18px_rgba(0,_0,_0,_0.04),_0px_2px_7.85px_rgba(0,_0,_0,_0.03),_0px_0.8px_2.92px_rgba(0,_0,_0,_0.02),_0px_0.2px_1.04px_rgba(0,_0,_0,_0.01)] box-border h-[8.5rem] border-[1px] border-solid border-gray-400">
          <div className="absolute w-[calc(100%_-_42px)] top-[1.06rem] right-[1.31rem] left-[1.31rem] h-[2rem]">
            <img
              className="absolute top-[calc(50%_-_16px)] left-[0rem] rounded-8xs w-[2rem] h-[2rem]"
              alt=""
              src="/spankombiblock-icon--0xrn1.svg"
            />
            <div className="absolute top-[0.06rem] left-[2.5rem] tracking-[-0.44px] leading-[1.88rem] font-semibold flex items-center w-[3.88rem] h-[1.88rem]">
              Wikis
            </div>
          </div>
          <div className="absolute w-[calc(100%_-_42px)] top-[4.31rem] right-[1.31rem] left-[1.31rem] h-[4.38rem] text-[0.84rem]">
            <div className="absolute top-[0.81rem] left-[0rem] tracking-[0.1px] leading-[1.19rem] flex items-center w-[12.04rem] h-[2.19rem]">
              <span className="[line-break:anywhere] w-full">
                <p className="m-0">Centralize your knowledge.</p>
                <p className="m-0">No more hunting for answers.</p>
              </span>
            </div>
          </div>
        </div>
        <div className="cursor-pointer hover:bg-white absolute w-[calc(100%_-_1199px)] top-[1.25rem] right-[29.31rem] left-[45.63rem] rounded-xl bg-whitesmoke-100 shadow-[0px_4px_18px_rgba(0,_0,_0,_0.04),_0px_2px_7.85px_rgba(0,_0,_0,_0.03),_0px_0.8px_2.92px_rgba(0,_0,_0,_0.02),_0px_0.2px_1.04px_rgba(0,_0,_0,_0.01)] box-border h-[8.5rem] border-[1px] border-solid border-gray-400">
          <div className="absolute w-[calc(100%_-_42px)] top-[1.06rem] right-[1.31rem] left-[1.31rem] h-[2rem]">
            <img
              className="absolute top-[calc(50%_-_16px)] left-[0rem] rounded-8xs w-[2rem] h-[2rem]"
              alt=""
              src="/spankombiblock-icon--0xrn2.svg"
            />
            <div className="absolute top-[0.06rem] left-[2.5rem] tracking-[-0.44px] leading-[1.88rem] font-semibold flex items-center w-[5.78rem] h-[1.88rem]">
              Projects
            </div>
          </div>
          <div className="absolute w-[calc(100%_-_42px)] top-[4.31rem] right-[1.31rem] left-[1.31rem] h-[4.38rem] text-[0.84rem]">
            <div className="absolute top-[0.81rem] left-[0rem] tracking-[0.1px] leading-[1.19rem] flex items-center w-[10.48rem] h-[2.19rem]">
              <span className="[line-break:anywhere] w-full">
                <p className="m-0">Manage complex projects</p>
                <p className="m-0">without the chaos.</p>
              </span>
            </div>
          </div>
        </div>
        <div className="cursor-pointer hover:bg-white absolute w-[calc(100%_-_1199px)] top-[1.25rem] right-[13rem] left-[61.94rem] rounded-xl bg-whitesmoke-100 shadow-[0px_4px_18px_rgba(0,_0,_0,_0.04),_0px_2px_7.85px_rgba(0,_0,_0,_0.03),_0px_0.8px_2.92px_rgba(0,_0,_0,_0.02),_0px_0.2px_1.04px_rgba(0,_0,_0,_0.01)] box-border h-[8.5rem] border-[1px] border-solid border-gray-400">
          <div className="absolute w-[calc(100%_-_42px)] top-[1.06rem] right-[1.31rem] left-[1.31rem] h-[2rem]">
            <img
              className="absolute top-[calc(50%_-_16px)] left-[0rem] rounded-8xs w-[2rem] h-[2rem]"
              alt=""
              src="/spankombiblock-icon--0xrn3.svg"
            />
            <div className="absolute top-[0.06rem] left-[2.5rem] tracking-[-0.44px] leading-[1.88rem] font-semibold flex items-center w-[3.61rem] h-[1.88rem]">
              Docs
            </div>
          </div>
          <div className="absolute w-[calc(100%_-_42px)] top-[4.31rem] right-[1.31rem] left-[1.31rem] h-[4.38rem] text-[0.84rem]">
            <div className="absolute top-[0.81rem] left-[0rem] tracking-[0.1px] leading-[1.19rem] flex items-center w-[11.11rem] h-[2.19rem]">
              <span className="[line-break:anywhere] w-full">
                <p className="m-0">Simple, powerful, beautiful.</p>
                <p className="m-0">Next-gen notes & docs.</p>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute w-[calc(100%_-_416px)] top-[50.38rem] right-[13rem] left-[13rem] rounded-[5.89px] bg-gray-600 shadow-[0px_4px_18px_rgba(0,_0,_0,_0.04),_0px_2px_7.85px_rgba(0,_0,_0,_0.03),_0px_0.8px_2.92px_rgba(0,_0,_0,_0.02),_0px_0.2px_1.04px_rgba(0,_0,_0,_0.01)] box-border h-[40rem] overflow-hidden border-[1px] border-solid border-gray-500">
      <img
        className="absolute w-[calc(100%_-_2px)] top-[0.06rem] right-[0.06rem] left-[0.06rem] max-w-full overflow-hidden h-[39.92rem] object-cover"
        alt=""
        src={images[currentImageIndex]}
      />
    </div>


      <div className="absolute top-[97.88rem] left-[calc(50%_-_405px)] w-[50.63rem] h-[20.81rem] text-[2.81rem]">
        <div className="absolute top-[calc(50%_-_166.45px)] left-[calc(50%_-_331.3px)] w-[41.41rem] h-[8.44rem]">
          <b className="absolute top-[0rem] left-[calc(50%_-_331.25px)] tracking-[-1.21px] leading-[3.06rem] flex items-center justify-center w-[41.63rem] h-[3.06rem]">
            Millions run on Notion every day
          </b>
          <div className="absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_244.95px)] w-[30.63rem] h-[4.88rem] text-[1rem]">
            <div className="absolute w-full top-[0rem] right-[0rem] left-[0rem] h-[2.88rem]">
              <div className="absolute top-[0.06rem] left-[calc(50%_-_242.7px)] tracking-[0.01px] leading-[1.44rem] flex items-center w-[30.34rem] h-[2.69rem]">
                <span className="[line-break:anywhere] w-full">
                  <p className="m-0">
                    Powering the world’s best teams, from next-generation
                    startups
                  </p>
                  <p className="m-0">to established enterprises.</p>
                </span>
              </div>
            </div>
            <div className="absolute w-full top-[3.38rem] right-[0rem] left-[0rem] rounded-8xs h-[1.5rem]">
              <div className="absolute top-[0.13rem] left-[calc(50%_-_94.3px)] leading-[1.5rem] flex items-center justify-center w-[12rem] h-[1.25rem]">
                <a className="text-cornflowerblue-200 font-medium no-underline hover:underline" href="">Read customer stories</a>
              </div>
              <div className="absolute top-[0.13rem] left-[calc(50%_+_79px)] font-medium leading-[1.5rem] flex items-center justify-center w-[3rem] h-[1.25rem] text-cornflowerblue-200">
                →
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[calc(50%_+_0.55px)] left-[calc(50%_-_405px)] w-[50.63rem] h-[10.37rem]">
          <img
            className="absolute h-[calc(100%_-_137.2px)] w-[calc(100%_-_723px)] top-[0.04rem] right-[44.94rem] bottom-[8.53rem] left-[0.25rem] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/figmalogopng@2x.png"
          />
          <img
            className="absolute h-[calc(100%_-_143.1px)] w-[calc(100%_-_701px)] top-[0.23rem] right-[35.63rem] bottom-[8.72rem] left-[8.19rem] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/pixarpng@2x.png"
          />
          <img
            className="absolute h-[calc(100%_-_147.4px)] w-[calc(100%_-_675px)] top-[0.36rem] right-[24.69rem] bottom-[8.85rem] left-[17.5rem] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/doordashpng@2x.png"
          />
          <img
            className="absolute h-[calc(100%_-_135.9px)] w-[calc(100%_-_727px)] top-[0rem] right-[17rem] bottom-[8.49rem] left-[28.44rem] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/nikepng@2x.png"
          />
          <img
            className="absolute h-[calc(100%_-_137.8px)] w-[calc(100%_-_720px)] top-[0.06rem] right-[8.88rem] bottom-[8.55rem] left-[36.13rem] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/amazonpng@2x.png"
          />
          <img
            className="absolute h-[calc(100%_-_140.6px)] w-[calc(100%_-_712px)] top-[0.14rem] right-[0.25rem] bottom-[8.64rem] left-[44.25rem] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/pinterestpng@2x.png"
          />
          <img
            className="absolute h-[calc(100%_-_115.9px)] w-[calc(100%_-_760px)] top-[3.75rem] right-[44.66rem] bottom-[3.49rem] left-[2.84rem] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/general-electric-logosvg--1-png@2x.png"
          />
          <img
            className="absolute h-[calc(100%_-_136.3px)] w-[calc(100%_-_726px)] top-[4.39rem] right-[36.91rem] bottom-[4.13rem] left-[8.47rem] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/uberpng@2x.png"
          />
          <img
            className="absolute h-[calc(100%_-_135.1px)] w-[calc(100%_-_728px)] top-[4.35rem] right-[29.28rem] bottom-[4.09rem] left-[16.22rem] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/plaidpng@2x.png"
          />
          <img
            className="absolute h-[calc(100%_-_140px)] w-[calc(100%_-_714px)] top-[4.5rem] right-[20.78rem] bottom-[4.25rem] left-[23.84rem] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/screen-shot-20220927-at-1111-3png@2x.png"
          />
          <img
            className="absolute h-[calc(100%_-_141.2px)] w-[calc(100%_-_709px)] top-[4.54rem] right-[11.97rem] bottom-[4.29rem] left-[32.34rem] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/snowflakepng@2x.png"
          />
          <img
            className="absolute h-[calc(100%_-_142.4px)] w-[calc(100%_-_704px)] top-[4.58rem] right-[2.84rem] bottom-[4.33rem] left-[41.16rem] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/headspace--1-png@2x.png"
          />
          <img
            className="absolute h-[calc(100%_-_141.9px)] w-[calc(100%_-_706px)] top-[8.81rem] right-[26.34rem] bottom-[0.06rem] left-[17.78rem] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/angellistpng@2x.png"
          />
          <img
            className="absolute h-[calc(100%_-_140px)] w-[calc(100%_-_713px)] top-[8.75rem] right-[17.78rem] bottom-[0rem] left-[26.78rem] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/robinhood-logopng@2x.png"
          />
        </div>
      </div>
      <b className="absolute top-[125.99rem] left-[calc(50%_-_187.9px)] text-[2.81rem] tracking-[-1.21px] leading-[3.06rem] flex items-center w-[23.68rem] h-[6.5rem]">
        <span className="[line-break:anywhere] w-full">
          <p className="m-0">Consolidate tools.</p>
          <p className="m-0">Cut costs.</p>
        </span>
      </b>
      <img
        className="absolute top-[134.81rem] left-[27.25rem] w-[35.5rem] h-[4.88rem] overflow-hidden object-cover"
        alt=""
        src="/main--toolsbeforenotionv2png@2x.png"
      />
      <img
        className="absolute top-[135.33rem] left-[25.66rem] w-[38.31rem] h-[3.13rem] overflow-hidden object-cover"
        alt=""
        src="/main--toolsstrikethroughv2png@2x.png"
      />
      <img
        className="absolute top-[124.34rem] left-[56.75rem] w-[13.56rem] h-[11.44rem] overflow-hidden object-cover"
        alt=""
        src="/main--giantpencilillustrationpng@2x.png"
      />
      <div className="absolute top-[143.56rem] left-[calc(50%_-_350px)] w-[43.75rem] h-[7.38rem] text-[1.85rem] font-nanummyeongjo">
        <div className="absolute w-full top-[0rem] right-[0rem] left-[0rem] h-[4.25rem]">
          <div className="absolute top-[-0.06rem] left-[calc(50%_-_320.6px)] tracking-[-0.62px] leading-[2.13rem] flex items-center justify-center w-[41.03rem] h-[2.25rem]">
            We got rid of nearly a dozen different tools because of
          </div>
          <div className="absolute top-[2.06rem] left-[calc(50%_-_157px)] text-[1.81rem] tracking-[-0.62px] leading-[2.13rem] flex items-center justify-center w-[18.72rem] h-[2.25rem]">
            what Notion does for us.
          </div>
        </div>
        <div className="absolute w-full top-[5rem] right-[0rem] left-[0rem] h-[2.38rem] text-left text-[0.84rem] font-inter">
          <img
            className="absolute top-[calc(50%_-_17.5px)] left-[calc(50%_-_190.7px)] w-[7.94rem] h-[2.19rem] overflow-hidden object-cover"
            alt=""
            src="/metalabpng@2x.png"
          />
          <div className="absolute top-[calc(50%_-_19px)] left-[calc(50%_-_54.7px)] w-[15.34rem] h-[2.38rem]">
            <div className="absolute top-[0.06rem] left-[0rem] leading-[1.19rem] flex items-center w-[15.36rem] h-[2.19rem]">
              <span className="[line-break:anywhere] w-full">
                <p className="m-0">
                  <b className="tracking-[0.06px]">Justin Watt</b>
                </p>
                <p className="m-0 tracking-[0.1px]">{`Director of Ops & Marketing, MetaLab`}</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <b className="absolute top-[160.37rem] left-[calc(50%_-_255.8px)] text-[2.81rem] tracking-[-1.21px] leading-[3.06rem] flex items-center justify-center w-[32.21rem] h-[3.06rem]">
        Powerful building blocks
      </b>
      <div className="absolute top-[156.74rem] left-[calc(50%_-_492px)] w-[13.81rem] h-[9.38rem] overflow-hidden">
        <div className="absolute w-full top-[0rem] right-[0rem] left-[0rem] h-[9.38rem] overflow-hidden">
          <div className="absolute top-[0rem] left-[0rem] w-[13.81rem] h-[9.38rem] overflow-hidden">
            <div className="absolute top-[calc(50%_-_75px)] left-[calc(50%_-_110.5px)] w-[13.81rem] h-[9.38rem] overflow-hidden" />
          </div>
        </div>
        <img
          className="absolute top-[0rem] left-[0rem] w-[13.81rem] h-[9.38rem] overflow-hidden object-cover"
          alt=""
          src="/toppeekipng@2x.png"
        />
      </div>
      <div className="absolute h-[calc(100%_-_8572.4px)] w-[calc(100%_-_416px)] top-[165.31rem] right-[13rem] bottom-[370.47rem] left-[13rem] rounded-xl bg-whitesmoke-100 box-border text-left text-[1.13rem] text-gray-300 border-[2px] border-solid border-whitesmoke-100">
        <div className="absolute h-[calc(100%_-_4px)] w-[calc(100%_-_4px)] top-[0.13rem] right-[0.13rem] bottom-[0.13rem] left-[0.13rem] rounded-xl overflow-hidden">
          <div className="absolute w-[calc(100%_-_64px)] top-[1.5rem] right-[2rem] left-[2rem] h-[7.56rem]">
            <div className="absolute w-[calc(100%_-_444px)] top-[0rem] right-[27.75rem] left-[0rem] h-[7.24rem]">
              <img
                className="absolute h-[calc(100%_-_89.9px)] w-[calc(100%_-_486px)] top-[0rem] right-[30.38rem] bottom-[5.62rem] left-[0rem] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/svg.svg"
              />
              <b className="absolute top-[2.56rem] left-[0rem] tracking-[-0.13px] leading-[1.5rem] flex items-center w-[23rem] h-[1.5rem]">{`Visualize, filter & sort any way you want`}</b>
              <div className="absolute top-[4.43rem] left-[0rem] text-[1rem] tracking-[0.01px] leading-[1.44rem] text-gray-100 flex items-center w-[31.79rem] h-[2.69rem]">
                <span className="[line-break:anywhere] w-full">
                  <p className="m-0">
                    Show only tasks assigned to you, or items marked as urgent.
                    Break
                  </p>
                  <p className="m-0">
                    down any project in the way that’s most helpful to you.
                  </p>
                </span>
              </div>
            </div>
          </div>
          
      {/* ... Other code ... */}
      <div className="absolute w-[calc(100%_-_64px)] top-[10.93rem] right-[2rem] left-[2rem] h-[40.85rem] text-[0.84rem] text-gray-100">
        <div className="absolute top-[0rem] left-[calc(50%_-_478px)] rounded-xl bg-white shadow-[0px_3px_9px_rgba(0,_0,_0,_0.03),_0px_0.7px_1.46px_rgba(0,_0,_0,_0.02)] box-border w-[59.75rem] h-[37.39rem] overflow-hidden border-[1px] border-solid border-gray-1000">
          <img
            className="absolute w-[calc(100%_-_2px)] top-[0.06rem] right-[0.06rem] left-[0.06rem] max-w-full overflow-hidden h-[37.27rem] object-cover"
            alt=""
            src={renderImage()}
          />
        </div>
        <div className="absolute h-[calc(100%_-_598.2px)] w-full top-[37.39rem] right-[0rem] bottom-[-0.01rem] left-[0rem]">
          <div className="absolute w-full top-[1.5rem] right-[0rem] left-[0rem] h-[1.96rem] overflow-hidden">
            {/* Board Button */}
            <button
              onClick={() => handleButtonClick('board')}
              className={`absolute top-[calc(50%_-_13.7px)] bg-whitesmoke-100 cursor-pointer left-[calc(50%_-_212px)] rounded-lg box-border w-[3.72rem] h-[1.71rem] border-[1px] border-solid border-gray-1000 ${
                activeButton === 'board' ? 'bg-gray-500' : 'bg-gray-1000'
              }`}
            >
              <div className="absolute top-[0.06rem] left-[0.06rem] rounded-8xs w-[3.59rem] h-[1.59rem]">
                <div className="absolute top-[0.2rem] left-[0.6rem] tracking-[0.1px] leading-[1.19rem] flex items-center w-[2.42rem] h-[1.19rem]">
                  Board
                </div>
              </div>
            </button>
            {/* Table Button */}
            <button
              onClick={() => handleButtonClick('table')}
              className={`absolute top-[calc(50%_-_13.7px)] bg-whitesmoke-100 cursor-pointer left-[calc(50%_-_144.5px)] rounded-lg box-border w-[3.54rem] h-[1.71rem] border-[1px] border-solid border-gray-1000 ${
                activeButton === 'table' ? 'bg-gray-500' : 'bg-gray-1000'
              }`}
            >
              <div className="absolute top-[0.26rem] left-[0.66rem] tracking-[0.1px] leading-[1.19rem] flex items-center w-[2.24rem] h-[1.19rem]">
                Table
              </div>
            </button>
            {/* Timeline Button */}
            <button
              onClick={() => handleButtonClick('timeline')}
              className={`absolute top-[calc(50%_-_13.7px)] bg-whitesmoke-100 cursor-pointer left-[calc(50%_-_79.8px)] rounded-lg box-border w-[4.76rem] h-[1.71rem] border-[1px] border-solid border-gray-1000 ${
                activeButton === 'timeline' ? 'bg-gray-500' : 'bg-gray-1000'
              }`}
            >
              <div className="absolute top-[0.26rem] left-[0.66rem] tracking-[0.1px] leading-[1.19rem] flex items-center w-[3.46rem] h-[1.19rem]">
                Timeline
              </div>
            </button>
            {/* Calendar Button */}
            <button
              onClick={() => handleButtonClick('calendar')}
              className={`absolute top-[calc(50%_-_13.7px)] bg-whitesmoke-100 cursor-pointer left-[calc(50%_+_4.5px)] rounded-lg box-border w-[4.99rem] h-[1.71rem] border-[1px] border-solid border-gray-1000 ${
                activeButton === 'calendar' ? 'bg-gray-500' : 'bg-gray-1000'
              }`}
            >
              <div className="absolute top-[0.26rem] left-[0.66rem] tracking-[0.1px] leading-[1.19rem] flex items-center w-[3.69rem] h-[1.19rem]">
                Calendar
              </div>
            </button>
            {/* Gallery Button */}
            <button
              onClick={() => handleButtonClick('gallery')}
              className={`absolute top-[calc(50%_-_13.7px)] bg-whitesmoke-100 cursor-pointer left-[calc(50%_+_92.4px)] rounded-lg box-border w-[4.19rem] h-[1.71rem] border-[1px] border-solid border-gray-1000 ${
                activeButton === 'gallery' ? 'bg-gray-500' : 'bg-gray-1000'
              }`}
            >
              <div className="absolute top-[0.26rem] left-[0.66rem] tracking-[0.1px] leading-[1.19rem] flex items-center w-[2.89rem] h-[1.19rem]">
                Gallery
              </div>
            </button>
            {/* List Button */}
            <button
              onClick={() => handleButtonClick('list')}
              className={`absolute top-[calc(50%_-_13.7px)] bg-whitesmoke-100 cursor-pointer left-[calc(50%_+_167.4px)] rounded-lg box-border w-[2.79rem] h-[1.71rem] border-[1px] border-solid border-gray-1000 ${
                activeButton === 'list' ? 'bg-gray-500' : 'bg-gray-1000'
              }`}
            >
              <div className="absolute top-[0.26rem] left-[0.66rem] tracking-[0.1px] leading-[1.19rem] flex items-center w-[1.49rem] h-[1.19rem]">
                List
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* ... Other code ... */}
    
        </div>
      </div>
      <div className="absolute h-[calc(100%_-_8889.7px)] w-[calc(100%_-_940px)] top-[220.34rem] right-[45.75rem] bottom-[335.26rem] left-[13rem] rounded-xl bg-whitesmoke-100 box-border text-left text-[1.13rem] text-gray-300 border-[2px] border-solid border-whitesmoke-100">
        <div className="absolute h-[calc(100%_-_4px)] w-[calc(100%_-_4px)] top-[0.13rem] right-[0.13rem] bottom-[0.13rem] left-[0.13rem] rounded-xl overflow-hidden">
          <div className="absolute w-[calc(100%_-_64px)] top-[1.5rem] right-[2rem] left-[2rem] h-[7.56rem]">
            <div className="absolute w-full top-[0rem] right-[0rem] left-[0rem] h-[7.24rem]">
              <img
                className="absolute h-[calc(100%_-_89.9px)] w-[calc(100%_-_406px)] top-[0rem] right-[25.38rem] bottom-[5.62rem] left-[0rem] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/svg1.svg"
              />
              <b className="absolute top-[2.56rem] left-[0rem] tracking-[-0.13px] leading-[1.5rem] flex items-center w-[15.57rem] h-[1.5rem]">
                Customize the info you track
              </b>
              <div className="absolute top-[4.43rem] left-[0rem] text-[1rem] tracking-[0.01px] leading-[1.44rem] text-gray-100 flex items-center w-[25.76rem] h-[2.69rem]">
                <span className="[line-break:anywhere] w-full">
                  <p className="m-0">
                    Create your own labels, tags, owners, and more, so
                  </p>
                  <p className="m-0">
                    everyone has context and everything stays organized.
                  </p>
                </span>
              </div>
            </div>
          </div>
          <div className="absolute w-[calc(100%_-_64px)] right-[2rem] bottom-[0rem] left-[2rem] rounded-xl h-[22.53rem]">
            <img
              className="absolute right-[-2rem] bottom-[0rem] rounded-tl-xl rounded-tr-none rounded-b-none w-[29rem] h-[22.53rem] overflow-hidden object-cover"
              alt=""
              src="/picture--customizeinfopng@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="absolute h-[calc(100%_-_8889.7px)] w-[calc(100%_-_940px)] top-[220.34rem] right-[13rem] bottom-[335.26rem] left-[45.75rem] rounded-xl bg-whitesmoke-100 box-border text-left text-[1.13rem] text-gray-300 border-[2px] border-solid border-whitesmoke-100">
        <div className="absolute h-[calc(100%_-_4px)] w-[calc(100%_-_4px)] top-[0.13rem] right-[0.13rem] bottom-[0.13rem] left-[0.13rem] rounded-xl overflow-hidden">
          <div className="absolute w-[calc(100%_-_64px)] top-[1.5rem] right-[2rem] left-[2rem] h-[7.56rem]">
            <div className="absolute w-full top-[0rem] right-[0rem] left-[0rem] h-[7.24rem]">
              <img
                className="absolute h-[calc(100%_-_89.9px)] w-[calc(100%_-_406px)] top-[0rem] right-[25.38rem] bottom-[5.62rem] left-[0rem] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/svg2.svg"
              />
              <b className="absolute top-[2.56rem] left-[0rem] tracking-[-0.13px] leading-[1.5rem] flex items-center w-[20.7rem] h-[1.5rem]">
                Build any page, communicate any idea
              </b>
              <div className="absolute top-[4.43rem] left-[0rem] text-[1rem] tracking-[0.01px] leading-[1.44rem] text-gray-100 flex items-center w-[22.93rem] h-[2.69rem]">
                <span className="[line-break:anywhere] w-full">
                  <p className="m-0">
                    Everything is drag and drop in Notion — images,
                  </p>
                  <p className="m-0">
                    toggles, to-do’s, even embedded databases.
                  </p>
                </span>
              </div>
            </div>
          </div>
          <div className="absolute w-[calc(100%_-_64px)] right-[2rem] bottom-[0rem] left-[2rem] rounded-xl h-[22.53rem]">
            <img
              className="absolute right-[-2rem] bottom-[0rem] rounded-tl-xl rounded-tr-none rounded-b-none w-[29rem] h-[22.53rem] overflow-hidden object-cover"
              alt=""
              src="/picture--buildanypagecommunicateanyideapng@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[256.05rem] left-[calc(50%_-_350px)] w-[43.75rem] h-[7.38rem] text-[1.83rem] font-nanummyeongjo">
        <div className="absolute w-full top-[0rem] right-[0rem] left-[0rem] h-[4.25rem]">
          <div className="absolute top-[-0.06rem] left-[calc(50%_-_292.7px)] tracking-[-0.62px] leading-[2.13rem] flex items-center justify-center w-[37.49rem] h-[2.25rem]">
            Notion adapts to your needs. It’s as minimal or as
          </div>
          <div className="absolute top-[2.06rem] left-[calc(50%_-_185.9px)] text-[1.84rem] tracking-[-0.62px] leading-[2.13rem] flex items-center justify-center w-[22.34rem] h-[2.25rem]">
            powerful as you need it to be.
          </div>
        </div>
        <div className="absolute w-full top-[5rem] right-[0rem] left-[0rem] h-[2.38rem] text-left text-[0.84rem] font-inter">
          <img
            className="absolute top-[calc(50%_-_18px)] left-[calc(50%_-_126.4px)] w-[2.06rem] h-[2.25rem] overflow-hidden object-cover"
            alt=""
            src="/matchgrouppng@2x.png"
          />
          <div className="absolute top-[calc(50%_-_19px)] left-[calc(50%_-_84.4px)] w-[13.17rem] h-[2.38rem]">
            <div className="absolute top-[0.06rem] left-[0rem] leading-[1.19rem] flex items-center w-[13.18rem] h-[2.19rem]">
              <span className="[line-break:anywhere] w-full">
                <p className="m-0">
                  <b className="tracking-[0.06px]">Rahim Makani</b>
                </p>
                <p className="m-0 tracking-[0.1px]">
                  Director of Product, Matchgroup
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <b className="absolute top-[270.93rem] left-[calc(50%_-_260.7px)] text-[2.81rem] tracking-[-1.21px] leading-[3.06rem] flex items-center justify-center w-[32.77rem] h-[3.06rem]">
        Every team, side-by-side
      </b>

      
      <div className="absolute w-[calc(100%_-_416px)] top-[285.18rem] right-[13rem] left-[13rem] bg-white h-[40rem]">
        <div className="absolute top-[0rem] left-[calc(50%_-_512px)] rounded-xl bg-white shadow-[0px_36px_89px_rgba(0,_0,_0,_0.04),_0px_23.3px_52.12px_rgba(0,_0,_0,_0.03),_0px_13.9px_28.35px_rgba(0,_0,_0,_0.02),_0px_7.2px_14.46px_rgba(0,_0,_0,_0.02),_0px_2.9px_7.25px_rgba(0,_0,_0,_0.02),_0px_0.7px_3.5px_rgba(0,_0,_0,_0.01)] box-border w-[64rem] h-[40rem] overflow-hidden border-[1px] border-solid border-gray-1000">
          <img
            className="absolute w-[calc(100%_-_2px)] top-[0.06rem] right-[0.06rem] left-[0.06rem] max-w-full overflow-hidden h-[39.92rem] object-cover"
            alt=""
            src={renderingImage()}
          />
        </div>
      </div>
      
      <button className={`${activateButton === 'engineering' ? 'active' : ''
      }`}
      onClick={() => handlingButtonClick('engineering')}
      >
      <div className="max-w-xs transition duration-300 ease-in-out hover:scale-110 cursor-pointer absolute h-[calc(100%_-_9304px)] top-[275.86rem] bottom-[305.64rem] left-[calc(50%_-_512px)] rounded-2xl bg-whitesmoke-100 box-border w-[10.25rem] border-[2px] border-solid border-whitesmoke-100">
        <div className="absolute top-[0.75rem] left-[calc(50%_-_35px)] w-[4.38rem] h-[4.38rem] overflow-hidden">
          <div className="absolute w-full top-[0rem] right-[0rem] left-[0rem] h-[4.38rem] overflow-hidden">
            <div className="absolute top-[0rem] left-[0rem] w-[4.38rem] h-[4.38rem] overflow-hidden">
              <div className="absolute top-[calc(50%_-_35px)] left-[calc(50%_-_35px)] w-[4.38rem] h-[4.38rem] overflow-hidden" />
            </div>
          </div>
          <img
            className="absolute top-[0rem] left-[0rem] w-[4.38rem] h-[4.38rem] overflow-hidden object-cover"
            alt=""
            src="/engineeringv2png@2x.png"
          />
        </div>
        <div className="absolute top-[5.5rem] left-[calc(50%_-_45.6px)] tracking-[-0.02px] leading-[1.44rem] font-medium flex items-center justify-center w-[5.73rem] h-[1.44rem]">
          Engineering
        </div>
      </div>
      </button>


      <button className={`${activateButton === 'design' ? 'active' : ''
      }`}
      onClick={() => handlingButtonClick('design')}
      >
      <div className="max-w-xs transition duration-300 ease-in-out hover:scale-110 cursor-pointer absolute h-[calc(100%_-_9304px)] top-[275.86rem] bottom-[305.64rem] left-[calc(50%_-_340px)] rounded-2xl bg-whitesmoke-100 box-border w-[10.25rem] border-[2px] border-solid border-whitesmoke-100">
        <div className="absolute top-[0.75rem] left-[calc(50%_-_35px)] w-[4.38rem] h-[4.38rem] overflow-hidden">
          <div className="absolute w-full top-[0rem] right-[0rem] left-[0rem] h-[4.38rem] overflow-hidden">
            <div className="absolute top-[0rem] left-[0rem] w-[4.38rem] h-[4.38rem] overflow-hidden">
              <div className="absolute top-[calc(50%_-_35px)] left-[calc(50%_-_35px)] w-[4.38rem] h-[4.38rem] overflow-hidden" />
            </div>
          </div>
          <img
            className="absolute top-[0rem] left-[0rem] w-[4.38rem] h-[4.38rem] overflow-hidden object-cover"
            alt=""
            src="/designv2png@2x.png"
          />
        </div>
        <div className="absolute top-[5.5rem] left-[calc(50%_-_26.5px)] tracking-[-0.02px] leading-[1.44rem] font-medium flex items-center justify-center w-[3.34rem] h-[1.44rem]">
          Design
        </div>
      </div>
      </button>
      
      
      <button className={`${activateButton === 'product' ? 'active' : ''
      }`}
      onClick={() => handlingButtonClick('product')}
      >
      <div className="max-w-xs transition duration-300 ease-in-out hover:scale-110 cursor-pointer absolute h-[calc(100%_-_9304px)] top-[275.86rem] bottom-[305.64rem] left-[calc(50%_-_168px)] rounded-2xl bg-whitesmoke-100 box-border w-[10.25rem] border-[2px] border-solid border-whitesmoke-100">
        <div className="absolute top-[0.75rem] left-[calc(50%_-_35px)] w-[4.38rem] h-[4.38rem] overflow-hidden">
          <div className="absolute w-full top-[0rem] right-[0rem] left-[0rem] h-[4.38rem] overflow-hidden">
            <div className="absolute top-[0rem] left-[0rem] w-[4.38rem] h-[4.38rem] overflow-hidden">
              <div className="absolute top-[calc(50%_-_35px)] left-[calc(50%_-_35px)] w-[4.38rem] h-[4.38rem] overflow-hidden" />
            </div>
          </div>
          
          <img
            className="absolute top-[0rem] left-[0rem] w-[4.38rem] h-[4.38rem] overflow-hidden object-cover"
            alt=""
            src="/productpng@2x.png"
          />
        </div>
        <div className="absolute top-[5.5rem] left-[calc(50%_-_30.2px)] tracking-[-0.02px] leading-[1.44rem] font-medium flex items-center justify-center w-[3.8rem] h-[1.44rem]">
          Product
        </div>
      </div>
      </button>

      <button className={`${activateButton === 'marketing' ? 'active' : ''
      }`}
      onClick={() => handlingButtonClick('marketing')}
      >
      <div className="max-w-xs transition duration-300 ease-in-out hover:scale-110 cursor-pointer absolute h-[calc(100%_-_9304px)] top-[275.86rem] bottom-[305.64rem] left-[calc(50%_+_4px)] rounded-2xl bg-whitesmoke-100 box-border w-[10.25rem] border-[2px] border-solid border-whitesmoke-100">
        <div className="absolute top-[0.75rem] left-[calc(50%_-_35px)] w-[4.38rem] h-[4.38rem] overflow-hidden">
          <div className="absolute w-full top-[0rem] right-[0rem] left-[0rem] h-[4.38rem] overflow-hidden">
            <div className="absolute top-[0rem] left-[0rem] w-[4.38rem] h-[4.38rem] overflow-hidden">
              <div className="absolute top-[calc(50%_-_35px)] left-[calc(50%_-_35px)] w-[4.38rem] h-[4.38rem] overflow-hidden" />
            </div>
          </div>
          <img
            className="absolute top-[0rem] left-[0rem] w-[4.38rem] h-[4.38rem] overflow-hidden object-cover"
            alt=""
            src="/marketingpng@2x.png"
          />
        </div>
        <div className="absolute top-[5.5rem] left-[calc(50%_-_38.6px)] tracking-[-0.02px] leading-[1.44rem] font-medium flex items-center justify-center w-[4.84rem] h-[1.44rem]">
          Marketing
        </div>
      </div>
      </button>

      <button className={`${activateButton === 'operations' ? 'active' : ''
      }`}
      onClick={() => handlingButtonClick('operations')}
      >
      <div className="max-w-xs transition duration-300 ease-in-out hover:scale-110 cursor-pointer absolute h-[calc(100%_-_9304px)] top-[275.86rem] bottom-[305.64rem] left-[calc(50%_+_176px)] rounded-2xl bg-whitesmoke-100 box-border w-[10.25rem] border-[2px] border-solid border-whitesmoke-100">
        <div className="absolute top-[0.75rem] left-[calc(50%_-_35px)] w-[4.38rem] h-[4.38rem] overflow-hidden">
          <div className="absolute w-full top-[0rem] right-[0rem] left-[0rem] h-[4.38rem] overflow-hidden">
            <div className="absolute top-[0rem] left-[0rem] w-[4.38rem] h-[4.38rem] overflow-hidden">
              <div className="absolute top-[calc(50%_-_35px)] left-[calc(50%_-_35px)] w-[4.38rem] h-[4.38rem] overflow-hidden" />
            </div>
          </div>
          <img
            className="absolute top-[0rem] left-[0rem] w-[4.38rem] h-[4.38rem] overflow-hidden object-cover"
            alt=""
            src="/operationspng@2x.png"
          />
        </div>
        <div className="absolute top-[5.5rem] left-[calc(50%_-_42.3px)] tracking-[-0.02px] leading-[1.44rem] font-medium flex items-center justify-center w-[5.31rem] h-[1.44rem]">
          Operations
        </div>
      </div>
      </button>

      <button className={`${activateButton === 'hr' ? 'active' : ''
      }`}
      onClick={() => handlingButtonClick('hr')}
      >
      <div className="max-w-xs transition duration-300 ease-in-out hover:scale-110 cursor-pointer absolute h-[calc(100%_-_9304px)] top-[275.86rem] bottom-[305.64rem] left-[calc(50%_+_348px)] rounded-2xl bg-whitesmoke-100 box-border w-[10.25rem] border-[2px] border-solid border-whitesmoke-100">
        <div className="absolute top-[0.75rem] left-[calc(50%_-_35px)] w-[4.38rem] h-[4.38rem] overflow-hidden">
          <div className="absolute w-full top-[0rem] right-[0rem] left-[0rem] h-[4.38rem] overflow-hidden">
            <div className="absolute top-[0rem] left-[0rem] w-[4.38rem] h-[4.38rem] overflow-hidden">
              <div className="absolute top-[calc(50%_-_35px)] left-[calc(50%_-_35px)] w-[4.38rem] h-[4.38rem] overflow-hidden" />
            </div>
          </div>
          <img
            className="absolute top-[0rem] left-[0rem] w-[4.38rem] h-[4.38rem] overflow-hidden object-cover"
            alt=""
            src="/hrv2png@2x.png"
          />
        </div>
        <div className="absolute top-[5.5rem] left-[calc(50%_-_11.1px)] tracking-[-0.02px] leading-[1.44rem] font-medium flex items-center justify-center w-[1.41rem] h-[1.44rem]">
          HR
        </div>
      </div>
      </button>
      

      <div className="absolute bottom-[242.01rem] left-[calc(50%_-_330px)] w-[41.25rem] h-[14.63rem]">
        <b className="absolute top-[-0.19rem] left-[calc(50%_-_251.8px)] text-[2.81rem] tracking-[-1.21px] leading-[3.06rem] flex items-center w-[31.68rem] h-[6.5rem]">
          <span className="[line-break:anywhere] w-full">
            <p className="m-0">Join a global movement.</p>
            <p className="m-0">Unleash your creativity.</p>
          </span>
        </b>
        <div className="absolute top-[7.19rem] left-[calc(50%_-_322px)] tracking-[0.01px] leading-[1.44rem] flex items-center w-[40.26rem] h-[2.69rem]">
          <span className="[line-break:anywhere] w-full">
            <p className="m-0">
              Our vibrant community produces content, teaches courses, and leads
              events all over
            </p>
            <p className="m-0">the world.</p>
          </span>
        </div>
        <div className="absolute top-[11.38rem] left-[calc(50%_-_52.2px)] leading-[1.5rem]  flex items-center justify-center w-[6rem] h-[1.25rem]">
          <a className="text-cornflowerblue-200 no-underline font-medium hover:underline" href="">Learn more</a>
        </div>
        <div className="absolute top-[11.38rem] left-[calc(50%_+_40.9px)] leading-[1.5rem] text-cornflowerblue-200 flex font-medium items-center justify-center w-[1.2rem] h-[1.25rem]">
          →
        </div>
      </div>
      <img
        className="absolute top-[347.3rem] left-[13rem] w-[64.06rem] h-[10rem] overflow-hidden object-cover"
        alt=""
        src="/main--section--avatarspng@2x.png"
      />
      <div className="absolute h-[calc(100%_-_9300px)] w-[calc(100%_-_1114.7px)] top-[357.68rem] right-[56.67rem] bottom-[223.58rem] left-[13rem] rounded-xl bg-whitesmoke-100 box-border text-left text-[3.31rem] text-cornflowerblue-200 border-[2px] border-solid border-whitesmoke-100">
        <b className="absolute top-[1.63rem] left-[2.13rem] tracking-[-1.63px] leading-[3.63rem] flex items-center w-[6.71rem] h-[3.63rem]">
          1M+
        </b>
        <div className="absolute top-[5.25rem] left-[2.13rem] text-[0.84rem] tracking-[0.05px] leading-[1.19rem] font-medium text-gray-100 flex items-center w-[8.64rem] h-[1.19rem]">
          community members
        </div>
      </div>
      <div className="absolute h-[calc(100%_-_9300px)] w-[calc(100%_-_1114.7px)] top-[357.68rem] right-[34.84rem] bottom-[223.58rem] left-[34.83rem] rounded-xl bg-whitesmoke-100 box-border text-left text-[3.31rem] text-cornflowerblue-200 border-[2px] border-solid border-whitesmoke-100">
        <b className="absolute top-[1.63rem] left-[2.13rem] tracking-[-1.63px] leading-[3.63rem] flex items-center w-[7.99rem] h-[3.63rem]">
          150+
        </b>
        <div className="absolute top-[5.25rem] left-[2.13rem] text-[0.84rem] tracking-[0.05px] leading-[1.19rem] font-medium text-gray-100 flex items-center w-[7.66rem] h-[1.19rem]">
          community groups
        </div>
      </div>
      <div className="absolute h-[calc(100%_-_9300px)] w-[calc(100%_-_1114.7px)] top-[357.68rem] right-[13rem] bottom-[223.58rem] left-[56.67rem] rounded-xl bg-whitesmoke-100 box-border text-left text-[3.31rem] text-cornflowerblue-200 border-[2px] border-solid border-whitesmoke-100">
        <b className="absolute top-[1.63rem] left-[2.13rem] tracking-[-1.63px] leading-[3.63rem] flex items-center w-[6.47rem] h-[3.63rem]">
          50+
        </b>
        <div className="absolute top-[5.25rem] left-[2.13rem] text-[0.84rem] tracking-[0.05px] leading-[1.19rem] font-medium text-gray-100 flex items-center w-[9.08rem] h-[1.19rem]">
          countries represented
        </div>
      </div>
      <div className="absolute h-[calc(100%_-_8975.3px)] w-[calc(100%_-_940px)] top-[367.24rem] right-[45.75rem] bottom-[193.72rem] left-[13rem] rounded-xl bg-whitesmoke-100 box-border text-left text-[1.13rem] text-gray-300 border-[2px] border-solid border-whitesmoke-100">
        <div className="absolute h-[calc(100%_-_4px)] w-[calc(100%_-_4px)] top-[0.13rem] right-[0.13rem] bottom-[0.13rem] left-[0.13rem] rounded-xl overflow-hidden">
          <div className="absolute w-[calc(100%_-_64px)] top-[1.5rem] right-[2rem] left-[2rem] h-[5.93rem]">
            <div className="absolute w-full top-[0.93rem] right-[0rem] left-[0rem] h-[4.69rem]">
              <b className="absolute top-[0rem] left-[0rem] tracking-[-0.13px] leading-[1.5rem] flex items-center w-[17rem] h-[1.5rem]">
                An always-on support network
              </b>
              <div className="absolute top-[1.88rem] left-[0rem] text-[1rem] tracking-[0.01px] leading-[1.44rem] text-gray-100 flex items-center w-[21.76rem] h-[2.69rem]">
                <span className="[line-break:anywhere] w-full">
                  <p className="m-0">
                    Swap setups and share tips in over 149 online
                  </p>
                  <p className="m-0">communities.</p>
                </span>
              </div>
            </div>
          </div>
          <div className="absolute top-[calc(50%_-_75.95px)] left-[calc(50%_-_216px)] rounded-xl w-[27rem] h-[17.3rem]">
            <img
              className="absolute top-[calc(50%_-_138.4px)] right-[9rem] w-[18rem] h-[17.3rem] overflow-hidden object-cover"
              alt=""
              src="/picture--communityiconsv2png@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="absolute h-[calc(100%_-_8975.3px)] w-[calc(100%_-_940px)] top-[367.24rem] right-[13rem] bottom-[193.72rem] left-[45.75rem] rounded-xl bg-whitesmoke-100 box-border text-left text-[1.13rem] text-gray-300 border-[2px] border-solid border-whitesmoke-100">
        <div className="absolute h-[calc(100%_-_4px)] w-[calc(100%_-_4px)] top-[0.13rem] right-[0.13rem] bottom-[0.13rem] left-[0.13rem] rounded-xl overflow-hidden">
          <div className="absolute w-[calc(100%_-_64px)] top-[1.5rem] right-[2rem] left-[2rem] h-[7.37rem]">
            <div className="absolute w-full top-[0.93rem] right-[0rem] left-[0rem] h-[6.13rem]">
              <b className="absolute top-[0rem] left-[0rem] tracking-[-0.13px] leading-[1.5rem] flex items-center w-[13rem] h-[1.5rem]">
                Choose your language
              </b>
              <div className="absolute top-[1.88rem] left-[0rem] text-[1rem] tracking-[0.01px] leading-[1.44rem] text-gray-100 flex items-center w-[26.7rem] h-[4.13rem]">
                <span className="[line-break:anywhere] w-full">
                  <p className="m-0">
                    Notion currently supports English, Korean, Japanese,
                  </p>
                  <p className="m-0">
                    French, German, Spanish, and Portuguese. With more to
                  </p>
                  <p className="m-0">come!</p>
                </span>
              </div>
            </div>
          </div>
          <div className="absolute w-[calc(100%_-_64px)] right-[2rem] bottom-[0rem] left-[2rem] rounded-xl h-[14.66rem]">
            <img
              className="absolute right-[-2rem] bottom-[0rem] rounded-tl-xl rounded-tr-none rounded-b-none w-[29rem] h-[14.66rem] overflow-hidden object-cover"
              alt=""
              src="/picture--welcometonotionpng@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="absolute h-[calc(100%_-_8703.3px)] w-[calc(100%_-_765.3px)] top-[397.09rem] right-[34.83rem] bottom-[146.86rem] left-[13rem] rounded-xl bg-whitesmoke-100 box-border border-[2px] border-solid border-whitesmoke-100">
        <div className="absolute h-[calc(100%_-_4px)] w-[calc(100%_-_4px)] top-[0.13rem] right-[0.13rem] bottom-[0.13rem] left-[0.13rem] rounded-xl overflow-hidden">
          <div className="absolute w-[calc(100%_-_64px)] top-[1.5rem] right-[2rem] left-[2rem] h-[40.11rem]">
            <img
              className="absolute h-[calc(100%_-_35px)] w-full top-[0rem] right-[0rem] bottom-[2.19rem] left-[0rem] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src={image[currentImagingIndex]}
            />
          </div>
          <div className="absolute w-[calc(100%_-_64px)] top-[41.61rem] right-[2rem] left-[2rem] h-[2rem]">
            <div className="absolute h-[calc(100%_-_24px)] top-[0.75rem] bottom-[0.75rem] left-[calc(50%_-_28.05px)] rounded-lg bg-gray-300 w-[0.5rem]" />
            <div className="absolute h-[calc(100%_-_24px)] top-[0.75rem] bottom-[0.75rem] left-[calc(50%_-_12.05px)] rounded-lg bg-gray-900 w-[0.5rem]" />
            <div className="absolute h-[calc(100%_-_24px)] top-[0.75rem] bottom-[0.75rem] left-[calc(50%_+_3.95px)] rounded-lg bg-gray-900 w-[0.5rem]" />
            <div className="absolute h-[calc(100%_-_24px)] top-[0.75rem] bottom-[0.75rem] left-[calc(50%_+_19.95px)] rounded-lg bg-gray-900 w-[0.5rem]" />
          </div>
        </div>
      </div>




      <div className="absolute h-[calc(100%_-_9188.4px)] w-[calc(100%_-_1114.7px)] top-[397.09rem] right-[13rem] bottom-[177.18rem] left-[56.67rem] rounded-xl bg-whitesmoke-100 box-border text-left text-[0.94rem] text-gray-300 border-[2px] border-solid border-whitesmoke-100">
        <div className="absolute top-[1.25rem] left-[4.56rem] leading-[1.38rem] flex items-center w-[8rem] h-[2.56rem]">
          <span className="[line-break:anywhere] w-full">
            <p className="m-0">
              <b className="tracking-[0.02px]">Deborah Mecca</b>
            </p>
            <p className="m-0 tracking-[0.01px] text-gray-800">@DebMecca</p>
          </span>
        </div>
        <div className="absolute top-[calc(50%_-_103.3px)] left-[1.06rem] rounded-3xl w-[3rem] h-[3rem] overflow-hidden">
          <img
            className="absolute top-[0rem] left-[0rem] w-[3rem] h-[3rem] overflow-hidden object-cover"
            alt=""
            src="/twitteravatardeborahpng@2x.png"
          />
        </div>
        <div className="absolute w-[calc(100%_-_34px)] top-[4.56rem] right-[1.06rem] left-[1.06rem] h-[8.28rem] overflow-hidden text-gray-100">
          <div className="absolute top-[0.77rem] left-[0rem] tracking-[0.01px] leading-[1.38rem] flex items-center w-[18.01rem] h-[6.69rem]">
            <span className="[line-break:anywhere] w-full">
              <p className="m-0">I used to HATE documenting things. And</p>
              <p className="m-0">
                <span className="text-gray-100">{`then I started using `}</span>
                <span className="text-cornflowerblue-100">@NotionHQ</span>
                <span> and I</span>
              </p>
              <p className="m-0">document a lot. A LOT A LOT. Now I just</p>
              <p className="m-0">realize that it wasn't that I hated</p>
              <p className="m-0">documenting, I just hated Google Docs.</p>
            </span>
          </div>
        </div>
      </div>
      <div className="absolute h-[calc(100%_-_9210.4px)] w-[calc(100%_-_1114.7px)] top-[413.63rem] right-[13rem] bottom-[162.03rem] left-[56.67rem] rounded-xl bg-whitesmoke-100 box-border text-left text-[0.94rem] text-gray-300 border-[2px] border-solid border-whitesmoke-100">
        <div className="absolute top-[1.25rem] left-[4.56rem] leading-[1.38rem] flex items-center w-[8rem] h-[2.56rem]">
          <span className="[line-break:anywhere] w-full">
            <p className="m-0">
              <b className="tracking-[0.02px]">André Blackman</b>
            </p>
            <p className="m-0 tracking-[0.01px] text-gray-800">@mindofandre</p>
          </span>
        </div>
        <div className="absolute top-[calc(50%_-_92.3px)] left-[1.06rem] rounded-3xl w-[3rem] h-[3rem] overflow-hidden">
          <img
            className="absolute top-[0rem] left-[0rem] w-[3rem] h-[3rem] overflow-hidden object-cover"
            alt=""
            src="/twitteravatarandrepng@2x.png"
          />
        </div>
        <div className="absolute w-[calc(100%_-_34px)] top-[4.56rem] right-[1.06rem] left-[1.06rem] h-[6.91rem] overflow-hidden text-gray-100">
          <div className="absolute top-[0.77rem] left-[0rem] tracking-[0.01px] leading-[1.38rem] flex items-center w-[17.71rem] h-[5.31rem]">
            <span className="[line-break:anywhere] w-full">
              <p className="m-0">One of the most incredible things about</p>
              <p className="m-0">
                <span className="text-cornflowerblue-100">@NotionHQ</span>
                <span> is the dynamic community</span>
              </p>
              <p className="m-0">being built - creating and sharing at its</p>
              <p className="m-0">best.</p>
            </span>
          </div>
        </div>
      </div>
      <div className="absolute h-[calc(100%_-_9210.4px)] w-[calc(100%_-_1114.7px)] top-[428.79rem] right-[13rem] bottom-[146.86rem] left-[56.67rem] rounded-xl bg-whitesmoke-100 box-border text-left text-[0.94rem] text-gray-300 border-[2px] border-solid border-whitesmoke-100">
        <div className="absolute top-[1.25rem] left-[4.56rem] leading-[1.38rem] flex items-center w-[6rem] h-[2.56rem]">
          <span className="[line-break:anywhere] w-full">
            <p className="m-0">
              <b className="tracking-[0.02px]">Oliver Peyre</b>
            </p>
            <p className="m-0 tracking-[0.01px] text-gray-800">@opeyre</p>
          </span>
        </div>
        <div className="absolute top-[calc(50%_-_92.3px)] left-[1.06rem] rounded-3xl w-[3rem] h-[3rem] overflow-hidden">
          <img
            className="absolute top-[0rem] left-[0rem] w-[3rem] h-[3rem] overflow-hidden object-cover"
            alt=""
            src="/twitteravataroliverpng@2x.png"
          />
        </div>
        <div className="absolute w-[calc(100%_-_34px)] top-[4.56rem] right-[1.06rem] left-[1.06rem] h-[6.91rem] overflow-hidden text-gray-100">
          <div className="absolute top-[0.77rem] left-[0rem] tracking-[0.01px] leading-[1.38rem] flex items-center w-[15.79rem] h-[5.31rem]">
            <span className="[line-break:anywhere] w-full">
              <p className="m-0">
                <span className="text-cornflowerblue-100">@NotionHQ</span>
                <span> Truly impressed by the</span>
              </p>
              <p className="m-0">velocity and quality of your work.</p>
              <p className="m-0">Making using Notion even more fun</p>
              <p className="m-0">week after week!</p>
            </span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[131.24rem] left-[calc(50%_-_285px)] w-[35.63rem] h-[7.69rem] text-cornflowerblue-200">
        <b className="absolute top-[0rem] left-[calc(50%_-_228.7px)] text-[2.81rem] tracking-[-1.21px] leading-[3.06rem] flex text-gray-100 items-center justify-center w-[28.75rem] h-[3.06rem]">
          Endless ways to use it
        </b>
        <div className="absolute top-[4.44rem] left-[calc(50%_-_87.8px)] leading-[1.5rem] flex items-center justify-center w-[9.84rem] h-[1.25rem]">
          <Link className="text-cornflowerblue-200 no-underline hover:underline">Browse all templates</Link>
          
        </div>
        <div className="absolute top-[4.44rem] left-[calc(50%_+_72.5px)] leading-[1.5rem] flex items-center justify-center w-[0.98rem] h-[1.25rem]">
          →
        </div>
      </div>
      <div className="absolute top-[449.63rem] left-[calc(50%_+_285px)] w-[12.94rem] h-[12.63rem] overflow-hidden">
        <div className="absolute w-full top-[0rem] right-[0rem] left-[0rem] h-[12.63rem] overflow-hidden">
          <div className="absolute top-[0rem] left-[0rem] w-[12.94rem] h-[12.63rem] overflow-hidden">
            <div className="absolute top-[calc(50%_-_101px)] left-[calc(50%_-_103.5px)] w-[12.94rem] h-[12.63rem] overflow-hidden" />
          </div>
        </div>
        <img
          className="absolute top-[0rem] left-[0rem] w-[12.94rem] h-[12.63rem] overflow-hidden object-cover"
          alt=""
          src="/toppeekjpng@2x.png"
        />
      </div>
      <div className="absolute h-[calc(100%_-_8781.2px)] w-[calc(100%_-_980px)] top-[458.07rem] right-[45.75rem] bottom-[90.76rem] left-[13rem] rounded-xl bg-whitesmoke-100 box-border text-left text-cornflowerblue-200 border-[2px] border-solid border-whitesmoke-100">
        <div className="absolute h-[calc(100%_-_4px)] w-[calc(100%_-_4px)] top-[0.13rem] right-[0.13rem] bottom-[0.13rem] left-[0.13rem] rounded-xl overflow-hidden">
          <div className="absolute w-[calc(100%_-_64px)] top-[1.5rem] right-[2rem] left-[2rem] h-[7.37rem]">
            <img
              className="absolute h-[calc(100%_-_91.9px)] w-[calc(100%_-_406px)] top-[0rem] right-[25.38rem] bottom-[5.74rem] left-[0rem] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/svg3.svg"
            />
            <b className="absolute top-[2.56rem] left-[0rem] text-[1.13rem] tracking-[-0.13px] leading-[1.5rem] flex text-gray-300 items-center w-[8rem] h-[1.5rem]">
              Company wiki
            </b>
            <div className="absolute top-[5.99rem] left-[0rem] leading-[1.5rem] flex items-center w-[6.18rem] h-[1.25rem]">
              <Link className="text-cornflowerblue-200 no-underline hover:underline">Get template</Link>
            </div>
            <div className="absolute top-[5.99rem] left-[6.35rem] leading-[1.5rem] flex items-center w-[0.98rem] h-[1.25rem]">
              →
            </div>
          </div>
          <div className="absolute w-[calc(100%_-_64px)] right-[2rem] bottom-[0rem] left-[2rem] rounded-xl h-[23.2rem]">
            <img
              className="absolute right-[-2rem] bottom-[0rem] rounded-tl-xl rounded-tr-none rounded-b-none w-[29rem] h-[23.2rem] overflow-hidden object-cover"
              alt=""
              src="/picture--companywikitemplatepng@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="absolute h-[calc(100%_-_9229.1px)] w-[calc(100%_-_1202px)] top-[458.07rem] right-[29.38rem] bottom-[118.75rem] left-[45rem] rounded-xl bg-whitesmoke-100 box-border text-left text-cornflowerblue-200 border-[2px] border-solid border-whitesmoke-100">
        <div className="absolute h-[calc(100%_-_4px)] w-[calc(100%_-_4px)] top-[0.13rem] right-[0.13rem] bottom-[0.13rem] left-[0.13rem] rounded-xl overflow-hidden">
          <div className="absolute w-[calc(100%_-_64px)] top-[1.5rem] right-[2rem] left-[2rem] h-[7.37rem]">
            <img
              className="absolute h-[calc(100%_-_91.9px)] w-[calc(100%_-_144px)] top-[0rem] right-[9rem] bottom-[5.74rem] left-[0rem] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/svg4.svg"
            />
            <b className="absolute top-[2.56rem] left-[0rem] text-[1.13rem] tracking-[-0.13px] leading-[1.5rem] flex text-gray-300 items-center w-[10rem] h-[1.5rem]">
              Product roadmap
            </b>
            <div className="absolute top-[5.99rem] left-[0rem] leading-[1.5rem] flex items-center w-[6.18rem] h-[1.25rem]">
              <Link className="text-cornflowerblue-200 no-underline hover:underline">Get template</Link>
            </div>
            <div className="absolute top-[5.99rem] left-[6.35rem] leading-[1.5rem] flex items-center w-[0.98rem] h-[1.25rem]">
              →
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[calc(100%_-_9229.1px)] w-[calc(100%_-_1202px)] top-[458.07rem] right-[13rem] bottom-[118.75rem] left-[62.13rem] rounded-xl bg-whitesmoke-100 box-border text-left text-cornflowerblue-200 border-[2px] border-solid border-whitesmoke-100">
        <div className="absolute h-[calc(100%_-_4px)] w-[calc(100%_-_4px)] top-[0.13rem] right-[0.13rem] bottom-[0.13rem] left-[0.13rem] rounded-xl overflow-hidden">
          <div className="absolute w-[calc(100%_-_64px)] top-[1.5rem] right-[2rem] left-[2rem] h-[7.37rem]">
            <img
              className="absolute h-[calc(100%_-_91.9px)] w-[calc(100%_-_144px)] top-[0rem] right-[9rem] bottom-[5.74rem] left-[0rem] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/svg5.svg"
            />
            <b className="absolute top-[2.56rem] left-[0rem] text-[1.13rem] tracking-[-0.13px] leading-[1.5rem] flex text-gray-300 items-center w-[3.01rem] h-[1.5rem]">
              OKRs
            </b>
            <div className="absolute top-[5.99rem] left-[0rem] leading-[1.5rem] flex items-center w-[6.18rem] h-[1.25rem]">
              <Link className="text-cornflowerblue-200 no-underline hover:underline">Get template</Link>
            </div>
            <div className="absolute top-[5.99rem] left-[6.35rem] leading-[1.5rem] flex items-center w-[0.98rem] h-[1.25rem]">
              →
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[calc(100%_-_9229.1px)] w-[calc(100%_-_1202px)] top-[472.07rem] right-[29.38rem] bottom-[104.75rem] left-[45rem] rounded-xl bg-whitesmoke-100 box-border text-left text-cornflowerblue-200 border-[2px] border-solid border-whitesmoke-100">
        <div className="absolute h-[calc(100%_-_4px)] w-[calc(100%_-_4px)] top-[0.13rem] right-[0.13rem] bottom-[0.13rem] left-[0.13rem] rounded-xl overflow-hidden">
          <div className="absolute w-[calc(100%_-_64px)] top-[1.5rem] right-[2rem] left-[2rem] h-[7.37rem]">
            <img
              className="absolute h-[calc(100%_-_91.9px)] w-[calc(100%_-_144px)] top-[0rem] right-[9rem] bottom-[5.74rem] left-[0rem] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/svg6.svg"
            />
            <b className="absolute top-[2.56rem] left-[0rem] text-[1.13rem] tracking-[-0.13px] leading-[1.5rem] flex text-gray-300 items-center w-[8.5rem] h-[1.5rem]">
              Meeting notes
            </b>
            <div className="absolute top-[5.99rem] left-[0rem] leading-[1.5rem] flex items-center w-[6.18rem] h-[1.25rem]">
              <Link className="text-cornflowerblue-200 no-underline hover:underline">Get template</Link>
            </div>
            <div className="absolute top-[5.99rem] left-[6.35rem] leading-[1.5rem] flex items-center w-[0.98rem] h-[1.25rem]">
              →
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[calc(100%_-_9229.1px)] w-[calc(100%_-_1202px)] top-[472.07rem] right-[13rem] bottom-[104.75rem] left-[62.13rem] rounded-xl bg-whitesmoke-100 box-border text-left text-cornflowerblue-200 border-[2px] border-solid border-whitesmoke-100">
        <div className="absolute h-[calc(100%_-_4px)] w-[calc(100%_-_4px)] top-[0.13rem] right-[0.13rem] bottom-[0.13rem] left-[0.13rem] rounded-xl overflow-hidden">
          <div className="absolute w-[calc(100%_-_64px)] top-[1.5rem] right-[2rem] left-[2rem] h-[7.37rem]">
            <img
              className="absolute h-[calc(100%_-_91.9px)] w-[calc(100%_-_144px)] top-[0rem] right-[9rem] bottom-[5.74rem] left-[0rem] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/svg7.svg"
            />
            <b className="absolute top-[2.56rem] left-[0rem] text-[1.13rem] tracking-[-0.13px] leading-[1.5rem] flex text-gray-300 items-center w-[10rem] h-[1.5rem]">
              Vacation planner
            </b>
            <div className="absolute top-[5.99rem] left-[0rem] leading-[1.5rem] flex items-center w-[6.18rem] h-[1.25rem]">
              <Link className="text-cornflowerblue-200 no-underline hover:underline">Get template</Link>
            </div>
            <div className="absolute top-[5.99rem] left-[6.35rem] leading-[1.5rem] flex items-center w-[0.98rem] h-[1.25rem]">
              →
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[calc(100%_-_9229.1px)] w-[calc(100%_-_1202px)] top-[486.06rem] right-[29.38rem] bottom-[90.76rem] left-[45rem] rounded-xl bg-whitesmoke-100 box-border text-left text-cornflowerblue-200 border-[2px] border-solid border-whitesmoke-100">
        <div className="absolute h-[calc(100%_-_4px)] w-[calc(100%_-_4px)] top-[0.13rem] right-[0.13rem] bottom-[0.13rem] left-[0.13rem] rounded-xl overflow-hidden">
          <div className="absolute w-[calc(100%_-_64px)] top-[1.5rem] right-[2rem] left-[2rem] h-[7.37rem]">
            <img
              className="absolute h-[calc(100%_-_91.9px)] w-[calc(100%_-_144px)] top-[0rem] right-[9rem] bottom-[5.74rem] left-[0rem] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/svg8.svg"
            />
            <b className="absolute top-[2.56rem] left-[0rem] text-[1.13rem] tracking-[-0.13px] leading-[1.5rem] flex text-gray-300 items-center w-[10rem] h-[1.5rem]">
              Editorial calendar
            </b>
            <div className="absolute top-[5.99rem] left-[0rem] leading-[1.5rem] flex items-center w-[6.18rem] h-[1.25rem]">
              <Link className="text-cornflowerblue-200 no-underline hover:underline">Get template</Link>
            </div>
            <div className="absolute top-[5.99rem] left-[6.35rem] leading-[1.5rem] flex items-center w-[0.98rem] h-[1.25rem]">
              →
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[calc(100%_-_9229.1px)] w-[calc(100%_-_1202px)] top-[486.06rem] right-[13rem] bottom-[90.76rem] left-[62.13rem] rounded-xl bg-whitesmoke-100 box-border text-left text-cornflowerblue-200 border-[2px] border-solid border-whitesmoke-100">
        <div className="absolute h-[calc(100%_-_4px)] w-[calc(100%_-_4px)] top-[0.13rem] right-[0.13rem] bottom-[0.13rem] left-[0.13rem] rounded-xl overflow-hidden">
          <div className="absolute w-[calc(100%_-_64px)] top-[1.5rem] right-[2rem] left-[2rem] h-[7.37rem]">
            <img
              className="absolute h-[calc(100%_-_91.9px)] w-[calc(100%_-_144px)] top-[0rem] right-[9rem] bottom-[5.74rem] left-[0rem] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/svg9.svg"
            />
            <b className="absolute top-[2.56rem] left-[0rem] text-[1.13rem] tracking-[-0.13px] leading-[1.5rem] flex text-gray-300 items-center w-[7.5rem] h-[1.5rem]">
              Habit tracker
            </b>
            <div className="absolute top-[5.99rem] left-[0rem] leading-[1.5rem] flex items-center w-[6.18rem] h-[1.25rem]">
              <Link className="text-cornflowerblue-200 no-underline hover:underline">Get template</Link>
            </div>
            <div className="absolute top-[5.99rem] left-[6.35rem] leading-[1.5rem] flex items-center w-[0.98rem] h-[1.25rem]">
              →
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[71.38rem] left-[calc(50%_-_375px)] w-[46.88rem] h-[11.88rem]">
        <b className="absolute top-[0rem] left-[calc(50%_-_266.1px)] text-[3.81rem] tracking-[-1.92px] leading-[4.06rem] flex items-center justify-center w-[33.48rem] h-[4.06rem]">
          Get started for free
        </b>
        <div className="absolute top-[5.06rem] left-[calc(50%_-_200.6px)] tracking-[0.01px] leading-[1.44rem] flex items-center justify-center w-[25.09rem] h-[1.44rem]">
          Play around with it first. Pay and add your team later.
        </div>
        <div className="absolute top-[calc(50%_+_29px)] left-[calc(50%_-_150.6px)] rounded-8xs bg-gray-100 shadow-[0px_0.3px_0.73px_rgba(0,_0,_0,_0.12),_0px_1.5px_2.87px_rgba(0,_0,_0,_0.07),_0px_4px_9px_rgba(0,_0,_0,_0.05)] w-[8.98rem] h-[2.25rem] text-white">
          <div className="cursor-pointer absolute top-[0.47rem] left-[calc(50%_-_57.85px)] tracking-[0.01px] leading-[1.44rem] font-semibold flex items-center justify-center w-[8rem] h-[1.25rem]">
            Try Notion free
          </div>
        </div>
        <div className="absolute top-[8.25rem] left-[calc(50%_+_9.1px)] leading-[1.5rem]  flex items-center justify-center w-[7.71rem] h-[1.25rem]">
          <button className="text-cornflowerblue-200 no-underline hover:underline bg-white font-bold cursor-pointer ">Request a demo</button>
        </div>
        <div className="absolute top-[8.25rem] left-[calc(50%_+_135.3px)] leading-[1.5rem] text-cornflowerblue-200 flex items-center justify-center w-[0.98rem] h-[1.25rem]">
          →
        </div>
      </div>
      <img
        className="absolute top-[calc(50%_+_3572.4px)] left-[calc(50%_-_335px)] w-[41.88rem] h-[20.6rem] overflow-hidden object-cover"
        alt=""
        src="/main--picture--notionparadepng@2x.png"
      />
      <div className="absolute w-[calc(100%_-_32px)] top-[538.54rem] right-[1rem] left-[1rem] box-border h-[0.06rem] border-t-[1px] border-solid border-gray-1000" />
      <div className="absolute top-[538.6rem] left-[calc(50%_-_637px)] w-[79.63rem] h-[50.71rem]">
        <div className="absolute h-[calc(100%_-_160px)] w-[calc(100%_-_1042px)] top-[5rem] right-[57.31rem] bottom-[5rem] left-[7.81rem]">
          <img
            className="absolute top-[0rem] left-[0rem] w-[5.44rem] h-[1.88rem] overflow-hidden"
            alt=""
            src="/link--notion--home--svg.svg"
          />
          <div className="absolute top-[4.13rem] left-[0rem] w-[9.38rem] h-[4.88rem]">
            <img
              className="absolute w-[calc(100%_+_12px)] top-[-0.37rem] right-[-0.37rem] left-[-0.37rem] max-w-full overflow-hidden h-[1.88rem]"
              alt=""
              src="/list--social-media.svg"
            />
            <div className="absolute w-full top-[2.63rem] right-[0rem] left-[0rem] h-[2.25rem]">
              <div className="absolute top-[0rem] left-[0rem] rounded-8xs bg-white box-border w-[7.64rem] h-[2.25rem] border-[1px] border-solid border-gray-700">
                <img
                  className="absolute top-[0.63rem] left-[0.94rem] w-[1rem] h-[1rem] overflow-hidden"
                  alt=""
                  src="/svg10.svg"
                />
                <div className="absolute top-[0.41rem] left-[calc(50%_-_24.15px)] tracking-[0.01px] leading-[1.44rem] font-semibold flex items-center justify-center w-[3.53rem] h-[1.44rem]">
                  English
                </div>
                <img
                  className="absolute h-[calc(100%_-_30px)] top-[0.94rem] bottom-[0.94rem] left-[6.21rem] max-h-full w-[0.5rem] overflow-hidden"
                  alt=""
                  src="/svg11.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[calc(100%_-_160px)] w-[calc(100%_-_506px)] top-[5rem] right-[7.81rem] bottom-[5rem] left-[23.81rem] text-left text-[0.94rem] text-gray-800">
          <div className="absolute top-[0rem] left-[0rem] tracking-[0.04px] leading-[1.38rem] font-semibold text-gray-100 flex items-center w-[3.63rem] h-[1.38rem]">
            Product
          </div>
          <div className="absolute top-[1.84rem] left-[0rem] tracking-[0.01px] leading-[0.94rem] flex items-center w-[2.4rem] h-[1.19rem]">
            <Link className="hover:text-cornflowerblue-200 text-zinc-500 no-underline hover:underline">Wikis</Link>
          </div>
          <div className="absolute top-[3.59rem] left-[0rem] tracking-[0.01px] leading-[0.94rem] flex items-center w-[3.67rem] h-[1.19rem]">
            <Link className="hover:text-cornflowerblue-200 text-zinc-500 no-underline hover:underline">Projects</Link>
          </div>
          <div className="absolute top-[5.34rem] left-[0rem] tracking-[0.01px] leading-[0.94rem] flex items-center w-[2.29rem] h-[1.19rem]">
           <Link className="hover:text-cornflowerblue-200 text-zinc-500 no-underline hover:underline">Docs</Link> 
          </div>
          <div className="absolute top-[7.08rem] left-[0rem] tracking-[0.01px] leading-[0.94rem] flex items-center w-[4.13rem] h-[1.19rem]">
            <Link className="hover:text-cornflowerblue-200 text-zinc-500 no-underline hover:underline">Notion AI</Link>
          </div>
          <div className="absolute top-[8.83rem] left-[0rem] tracking-[0.01px] leading-[0.94rem] flex items-center w-[5.5rem] h-[1.19rem]">
            <Link className="hover:text-cornflowerblue-200 text-zinc-500 no-underline hover:underline">What's new</Link>
          </div>
          <div className="absolute top-[12.37rem] left-[0rem] tracking-[0.04px] leading-[1.38rem] font-semibold text-gray-100 flex items-center w-[4.3rem] h-[1.38rem]">
            Solutions
          </div>
          <div className="absolute top-[14.21rem] left-[0rem] tracking-[0.01px] leading-[0.94rem] flex items-center w-[4.59rem] h-[1.19rem]">
            <Link className="hover:text-cornflowerblue-200 text-zinc-500 no-underline hover:underline">Enterprise</Link>
          </div>
          <div className="absolute top-[15.96rem] left-[0rem] tracking-[0.01px] leading-[0.94rem] flex items-center w-[6.66rem] h-[1.19rem]">
            <Link className="hover:text-cornflowerblue-200 text-zinc-500 no-underline hover:underline">Small business</Link>
          </div>
          <div className="absolute top-[17.71rem] left-[0rem] tracking-[0.01px] leading-[0.94rem] flex items-center w-[5.76rem] h-[1.19rem]">
            <Link className="hover:text-cornflowerblue-200 text-zinc-500 no-underline hover:underline">Personal use</Link>
          </div>
          <div className="absolute top-[19.46rem] left-[0rem] tracking-[0.01px] leading-[0.94rem] flex items-center w-[5.89rem] h-[1.19rem]">
            <Link className="hover:text-cornflowerblue-200 text-zinc-500 no-underline hover:underline">Remote work</Link>
          </div>
          <div className="absolute top-[21.21rem] left-[0rem] tracking-[0.01px] leading-[0.94rem] flex items-center w-[3.86rem] h-[1.19rem]">
            <Link className="hover:text-cornflowerblue-200 text-zinc-500 no-underline hover:underline">Startups</Link>
          </div>
          <div className="absolute top-[22.95rem] left-[0rem] tracking-[0.01px] leading-[0.94rem] flex items-center w-[4.47rem] h-[1.19rem]">
            <Link className="hover:text-cornflowerblue-200 text-zinc-500 no-underline hover:underline">Education</Link>
          </div>
          <div className="absolute top-[24.7rem] left-[0rem] tracking-[0.01px] leading-[0.94rem] flex items-center w-[4.72rem] h-[1.19rem]">
            <Link className="hover:text-cornflowerblue-200 text-zinc-500 no-underline hover:underline">Nonprofits</Link>
          </div>
          <div className="absolute top-[26.45rem] left-[0rem] tracking-[0.01px] leading-[0.94rem] flex items-center w-[5.32rem] h-[1.19rem]">
            <Link className="hover:text-cornflowerblue-200 text-zinc-500 no-underline hover:underline">Engineering</Link>
          </div>
          <div className="absolute top-[28.2rem] left-[0rem] tracking-[0.01px] leading-[0.94rem] flex items-center w-[3.54rem] h-[1.19rem]">
            <Link className="hover:text-cornflowerblue-200 text-zinc-500 no-underline hover:underline">Product</Link>
          </div>
          <div className="absolute top-[29.95rem] left-[0rem] tracking-[0.01px] leading-[0.94rem] flex items-center w-[3.11rem] h-[1.19rem]">
            <Link className="hover:text-cornflowerblue-200 text-zinc-500 no-underline hover:underline">Design</Link>
          </div>
          <div className="absolute top-[31.7rem] left-[0rem] tracking-[0.01px] leading-[0.94rem] flex items-center w-[4.46rem] h-[1.19rem]">
            <Link className="hover:text-cornflowerblue-200 text-zinc-500 no-underline hover:underline">Managers</Link>
          </div>
          <div className="absolute top-[0rem] left-[16.5rem] tracking-[0.04px] leading-[1.38rem] font-semibold text-gray-100 flex items-center w-[4.58rem] h-[1.38rem]">
            Download
          </div>
          <div className="absolute top-[1.84rem] left-[16.5rem] tracking-[0.01px] leading-[0.94rem] flex items-center w-[6.19rem] h-[1.19rem]">
            <Link className="hover:text-cornflowerblue-200 text-zinc-500 no-underline hover:underline">iOS & Android</Link>
          </div>
          <div className="absolute top-[3.59rem] left-[16.5rem] tracking-[0.01px] leading-[0.94rem] flex items-center w-[7.13rem] h-[1.19rem]">
            <Link className="hover:text-cornflowerblue-200 text-zinc-500 no-underline hover:underline">Mac & Windows</Link>
          </div>
          <div className="absolute top-[5.34rem] left-[16.5rem] tracking-[0.01px] leading-[0.94rem] flex items-center w-[5.47rem] h-[1.19rem]">
            <Link className="hover:text-cornflowerblue-200 text-zinc-500 no-underline hover:underline">Web Clipper</Link>
          </div>
          <div className="absolute top-[8.88rem] left-[16.5rem] tracking-[0.04px] leading-[1.38rem] font-semibold text-gray-100 flex items-center w-[2.31rem] h-[1.38rem]">
            Build
          </div>
          <div className="absolute top-[10.71rem] left-[16.5rem] tracking-[0.01px] leading-[0.94rem] flex items-center w-[5.38rem] h-[1.19rem]">
            <Link className="hover:text-cornflowerblue-200 text-zinc-500 no-underline hover:underline">Integrations</Link>
          </div>
          <div className="absolute top-[12.46rem] left-[16.5rem] tracking-[0.01px] leading-[0.94rem] flex items-center w-[4.65rem] h-[1.19rem]">
            <Link className="hover:text-cornflowerblue-200 text-zinc-500 no-underline hover:underline">Templates</Link>
          </div>
          <div className="absolute top-[14.21rem] left-[16.5rem] tracking-[0.01px] leading-[0.94rem] flex items-center w-[3.95rem] h-[1.19rem]">
            <Link className="hover:text-cornflowerblue-200 text-zinc-500 no-underline hover:underline">API docs</Link>
          </div>
          <div className="absolute top-[15.96rem] left-[16.5rem] tracking-[0.01px] leading-[0.94rem] flex items-center w-[7.91rem] h-[1.19rem]">
            <Link className="hover:text-cornflowerblue-200 text-zinc-500 no-underline hover:underline">Guides & tutorials</Link>
          </div>
          <div className="absolute top-[17.71rem] left-[16.5rem] tracking-[0.01px] leading-[0.94rem] flex items-center w-[7.59rem] h-[1.19rem]">
          <Link className="hover:text-cornflowerblue-200 text-zinc-500 no-underline hover:underline">Hire a consultant</Link>
            
          </div>
          <div className="absolute top-[19.46rem] left-[16.5rem] tracking-[0.01px] leading-[0.94rem] flex items-center w-[8.57rem] h-[1.19rem]">
            <Link className="hover:text-cornflowerblue-200 text-zinc-500 no-underline hover:underline">Become an affiliate</Link>
            
          </div>
          <div className="absolute top-[22.99rem] left-[16.5rem] tracking-[0.04px] leading-[1.38rem] font-semibold text-gray-100 flex items-center w-[2.61rem] h-[1.38rem]">
            Learn
          </div>
          <div className="absolute top-[24.83rem] left-[16.5rem] tracking-[0.01px] leading-[0.94rem] flex items-center w-[7.68rem] h-[1.19rem]">
            <Link className="hover:text-cornflowerblue-200 text-zinc-500 no-underline hover:underline">Customer stories</Link>
          </div>
          <div className="absolute top-[26.58rem] left-[16.5rem] tracking-[0.01px] leading-[0.94rem] flex items-center w-[5.21rem] h-[1.19rem]">
            <Link className="hover:text-cornflowerblue-200 text-zinc-500 no-underline hover:underline">Help center</Link>
          </div>
          <div className="absolute top-[28.33rem] left-[16.5rem] tracking-[0.01px] leading-[0.94rem] flex items-center w-[4.18rem] h-[1.19rem]">
            <Link className="hover:text-cornflowerblue-200 text-zinc-500 no-underline hover:underline">Webinars</Link>
          </div>
          <div className="absolute top-[30.08rem] left-[16.5rem] tracking-[0.01px] leading-[0.94rem] flex items-center w-[2.01rem] h-[1.19rem]">
            <Link className="hover:text-cornflowerblue-200 text-zinc-500 no-underline hover:underline">Blog</Link>
          </div>
          <div className="absolute top-[31.83rem] left-[16.5rem] tracking-[0.01px] leading-[0.94rem] flex items-center w-[5.13rem] h-[1.19rem]">
            <Link className="hover:text-cornflowerblue-200 text-zinc-500 no-underline hover:underline">Community</Link>
          </div>
          <div className="absolute top-[0rem] left-[33rem] tracking-[0.04px] leading-[1.38rem] font-semibold text-gray-100 flex items-center w-[5.21rem] h-[1.38rem]">
            Get started
          </div>
          <div className="absolute top-[1.84rem] left-[33rem] tracking-[0.01px] leading-[0.94rem] flex items-center w-[10.74rem] h-[1.19rem]">
            <Link className="hover:text-cornflowerblue-200 text-zinc-500 no-underline hover:underline">Switch from Confluence</Link>
          </div>
          <div className="absolute top-[3.59rem] left-[33rem] tracking-[0.01px] leading-[0.94rem] flex items-center w-[8.39rem] h-[1.19rem]">
            <Link className="hover:text-cornflowerblue-200 text-zinc-500 no-underline hover:underline">Switch from Asana</Link>
          </div>
          <div className="absolute top-[5.34rem] left-[33rem] tracking-[0.01px] leading-[0.94rem] flex items-center w-[9.62rem] h-[1.19rem]">
            <Link className="hover:text-cornflowerblue-200 text-zinc-500 no-underline hover:underline">Switch from Evernote</Link>
          </div>
          <div className="absolute top-[7.08rem] left-[33rem] tracking-[0.01px] leading-[0.94rem] flex items-center w-[9.21rem] h-[1.19rem]">
            <Link className="hover:text-cornflowerblue-200 text-zinc-500 no-underline hover:underline">Compare vs Monday</Link>
          </div>
          <div className="absolute top-[8.83rem] left-[33rem] tracking-[0.01px] leading-[0.94rem] flex items-center w-[8.95rem] h-[1.19rem]">
            <Link className="hover:text-cornflowerblue-200 text-zinc-500 no-underline hover:underline">Compare vs Clickup</Link>
          </div>
          <div className="absolute top-[10.58rem] left-[33rem] tracking-[0.01px] leading-[0.94rem] flex items-center w-[7.26rem] h-[1.19rem]">
            <Link className="hover:text-cornflowerblue-200 text-zinc-500 no-underline hover:underline">Compare vs Jira</Link>
          </div>
          <div className="absolute top-[14.12rem] left-[33rem] tracking-[0.04px] leading-[1.38rem] font-semibold text-gray-100 flex items-center w-[4.83rem] h-[1.38rem]">
            Resources
          </div>
          <div className="absolute top-[15.96rem] left-[33rem] tracking-[0.01px] leading-[0.94rem] flex items-center w-[3.09rem] h-[1.19rem]">
            <Link className="hover:text-cornflowerblue-200 text-zinc-500 no-underline hover:underline">Pricing</Link>
          </div>
          <div className="absolute top-[17.71rem] left-[33rem] tracking-[0.01px] leading-[0.94rem] flex items-center w-[4.03rem] h-[1.19rem]">
            <Link className="hover:text-cornflowerblue-200 text-zinc-500 no-underline hover:underline">About us</Link>
          </div>
          <div className="absolute top-[19.46rem] left-[33rem] tracking-[0.01px] leading-[0.94rem] flex items-center w-[3.53rem] h-[1.19rem]">
            <Link className="hover:text-cornflowerblue-200 text-zinc-500 no-underline hover:underline">Careers</Link>
          </div>
          <div className="absolute top-[21.21rem] left-[33rem] tracking-[0.01px] leading-[0.94rem] flex items-center w-[4.1rem] h-[1.19rem]">
            <Link className="hover:text-cornflowerblue-200 text-zinc-500 no-underline hover:underline">Media kit</Link>
          </div>
          <div className="absolute top-[22.95rem] left-[33rem] tracking-[0.01px] leading-[0.94rem] flex items-center w-[3.71rem] h-[1.19rem]">
            <Link className="hover:text-cornflowerblue-200 text-zinc-500 no-underline hover:underline">Email us</Link>
          </div>
          <div className="absolute top-[24.7rem] left-[33rem] tracking-[0.01px] leading-[0.94rem] flex items-center w-[3.72rem] h-[1.19rem]">
            <Link className="hover:text-cornflowerblue-200 text-zinc-500 no-underline hover:underline">Security</Link>
          </div>
          <div className="absolute top-[26.45rem] left-[33rem] tracking-[0.01px] leading-[0.94rem] flex items-center w-[6.99rem] h-[1.19rem]">
            <Link className="hover:text-cornflowerblue-200 text-zinc-500 no-underline hover:underline">Cookie settings</Link>
          </div>
          <div className="absolute top-[28.2rem] left-[33rem] tracking-[0.01px] leading-[0.94rem] flex items-center w-[7.16rem] h-[1.19rem]">
            <Link className="hover:text-cornflowerblue-200 text-zinc-500 no-underline hover:underline">Terms & privacy</Link>
          </div>
          <div className="absolute top-[29.95rem] left-[33rem] tracking-[0.01px] leading-[0.94rem] flex items-center w-[11rem] h-[1.19rem]">
            <Link className="hover:text-cornflowerblue-200 text-zinc-500 no-underline hover:underline">California Privacy Notice</Link>
          </div>
          <div className="absolute top-[31.7rem] left-[33rem] tracking-[0.01px] leading-[0.94rem] flex items-center w-[2.9rem] h-[1.19rem]">
            <Link className="hover:text-cornflowerblue-200 text-zinc-500 no-underline hover:underline">Status</Link>
          </div>
          <div className="absolute top-[37.78rem] left-[calc(50%_-_384px)] text-[0.84rem] tracking-[0.1px] leading-[1.19rem] text-gray-100 text-center flex items-center justify-center w-[11.48rem] h-[1.19rem]">
            Do Not Sell or Share My Info
          </div>
          <div className="absolute top-[39.53rem] left-[0rem] text-[0.84rem] tracking-[0.1px] leading-[1.19rem] text-gray-900 flex items-center w-[10.23rem] h-[1.19rem]">
            © 2023 Notion Labs, Inc.
          </div>
        </div>
      </div>
      <div className="absolute w-full top-[0rem] right-[0rem] left-[0rem] bg-white h-[6.88rem] text-[0.75rem] text-white">
        
        <div className="absolute top-[3rem] left-[calc(50%_-_720px)] w-[90rem] h-[3.88rem] text-left text-[0.94rem] text-gray-300">
          <img
            className="absolute top-[calc(50%_-_16px)] left-[1rem] w-[5.8rem] h-[2rem]"
            alt=""
            src="/link--notion--home.svg"
          />
          <div className="absolute w-[calc(100%_-_136.8px)] top-[calc(50%_-_15px)] right-[1rem] left-[7.55rem] h-[1.88rem]">
            <div className="absolute top-[calc(50%_-_15px)] left-[0rem] w-[29.49rem] h-[1.88rem]">
              <div className="absolute top-[calc(50%_-_15px)] left-[0rem] w-[5.62rem] h-[1.88rem]">
                <div className=" hover:bg-stone-200 rounded absolute top-[0.38rem] left-[0.63rem] leading-[1.94rem] font-medium flex items-center w-[3.54rem] h-[1.19rem] cursor-pointer">
                  Product
                </div>
                <img
                  className="absolute h-1/5 top-[43.33%] right-[0.63rem] bottom-[36.67%] max-h-full w-[0.5rem]"
                  alt=""
                  src="/after.svg"
                />
              </div>
              <div className="absolute top-[calc(50%_-_15px)] left-[5.62rem] w-[6.56rem] h-[1.88rem]">
                <div className="hover:bg-stone-200 rounded absolute top-[0.38rem] left-[0.63rem] leading-[1.94rem] font-medium flex items-center w-[4.48rem] h-[1.19rem] cursor-pointer">
                  Download
                </div>
                <img
                  className="absolute h-1/5 top-[43.33%] right-[0.63rem] bottom-[36.67%] max-h-full w-[0.5rem]"
                  alt=""
                  src="/after1.svg"
                />
              </div>
              <div className="absolute top-[calc(50%_-_15px)] left-[12.18rem] w-[6.24rem] h-[1.88rem]">
                <div className="hover:bg-stone-200 rounded absolute top-[0.38rem] left-[0.63rem] leading-[1.94rem] font-medium flex items-center w-[4.18rem] h-[1.19rem] cursor-pointer">
                  Solutions
                </div>
                <img
                  className="absolute h-1/5 top-[43.33%] right-[0.63rem] bottom-[36.67%] max-h-full w-[0.5rem]"
                  alt=""
                  src="/after2.svg"
                />
              </div>
              <div className="absolute top-[calc(50%_-_15px)] left-[18.42rem] w-[6.78rem] h-[1.88rem]">
                <div className="hover:bg-stone-200 rounded absolute top-[0.38rem] left-[0.63rem] leading-[1.94rem] font-medium flex items-center w-[4.71rem] h-[1.19rem] cursor-pointer">
                  Resources
                </div>
                <img
                  className="absolute h-1/5 top-[43.33%] right-[0.63rem] bottom-[36.67%] max-h-full w-[0.5rem]"
                  alt=""
                  src="/after3.svg"
                />
              </div>
              <div className="absolute w-[calc(100%_-_403.1px)] top-[0rem] right-[0rem] left-[25.19rem] h-[1.88rem]">
                <div className="hover:bg-stone-200 rounded absolute top-[0.38rem] left-[0.63rem] leading-[1.94rem] font-medium flex items-center w-[3.1rem] h-[1.19rem] cursor-pointer">
                  Pricing
                </div>
              </div>
            </div>
            <div className="absolute top-[calc(50%_-_15px)] left-[59.48rem] w-[21.98rem] h-[1.88rem]">
              <div className="absolute w-[calc(100%_-_216.3px)] top-[0rem] right-[13.52rem] left-[0rem] h-[1.88rem]">
                <div >
                  <button className="flex items-center justify-center bg-white hover:bg-stone-200 rounded font-medium text-base cursor-pointer mt-2">Request a demo</button>
                </div>
              </div>
              <div className="absolute top-[calc(50%_-_10px)] left-[9.08rem] bg-gray-1000 w-[0.06rem] h-[1.25rem]" />
              <div className="absolute top-[calc(50%_-_15px)] left-[9.77rem] w-[12.21rem] h-[1.88rem] text-[0.84rem] text-white">
                <div className="absolute top-[calc(50%_-_15px)] left-[3.95rem] w-[8.26rem] h-[1.88rem]">
                  <div className="absolute top-[0rem] left-[0.63rem] rounded-8xs bg-gray-100 shadow-[0px_0.3px_0.73px_rgba(0,_0,_0,_0.12),_0px_1.5px_2.87px_rgba(0,_0,_0,_0.07),_0px_4px_9px_rgba(0,_0,_0,_0.05)] w-[7.63rem] h-[1.88rem]">
                    <div className="cursor-pointer absolute top-[0.41rem] left-[0.69rem] tracking-[0.05px] leading-[1.19rem] font-semibold flex items-center w-[6.27rem] h-[1rem]">
                      Get Notion free
                    </div>
                  </div>
                </div>
                <div >
                  
                    <button className="rounded flex items-center justify-center mt-2 font-medium text-base cursor-pointer bg-white hover:bg-stone-200">Log in</button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WwwnotionsoByHtmltodesig;
