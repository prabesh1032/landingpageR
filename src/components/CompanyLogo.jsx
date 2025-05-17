import slack from '../assets/slack.png'
import amazon from '../assets/amazon.png'
import woocommerce from '../assets/woocommerce.png'
import meundies from '../assets/meundies.png'
import sitepoint from '../assets/sitepoint.png'

const CompanyLogo = () => {
  const logos = [slack, amazon, woocommerce, meundies, sitepoint];

  return (
    <div className="container overflow-hidden px-4 md:px-0 mx-auto py-20 flex flex-col sm:flex-row sm:items-center items-start gap-6 sm:gap-0">
      <div className="w-full ml-24 sm:w-[300px] shrink-0 px-6 text-gray-600 border-l-4 border-blue-500 bg-white py-4 z-10 text-base sm:text-xl font-semibold mb-6 sm:mb-0">
        Proud partner at <br /> Hubspot & Segment
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={logo}
              className="mx-6 sm:mx-12 h-8 w-28 sm:w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
            />
          ))}
          {logos.map((logo, index) => (
            <img
              key={`duplicate-${index}`}
              src={logo}
              alt={logo}
              className="mx-6 sm:mx-12 h-8 w-28 sm:w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyLogo;
