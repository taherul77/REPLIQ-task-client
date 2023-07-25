import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Feture = () => {
  return (
    <div>
     
        <div className="container p-6 mx-auto space-y-8 text-center lg:pt-5 lg:space-y-4">
          <Marquee>
            <div className="flex flex-wrap gap-20 justify-center lg:justify-between">
              <Image
                height={72}
                width={72}
                src="https://i.ibb.co/tX3rZJB/png-transparent-logo-mastercard-font-solar-home-text-orange-logo-removebg-preview.png"
                alt=""
              />
              <Image
                height={72}
                width={72}
                src="https://i.ibb.co/Db6dWqZ/bkash-logo-835789094-A-seeklogo-com-removebg-preview.png"
                alt=""
              />
              <Image
                height={72}
                width={72}
                src="https://i.ibb.co/DWYLZw2/dutch-bangla-rocket-logo-B4-D1-CC458-D-seeklogo-com.png"
                alt=""
              />
              <Image
                height={72}
                width={72}
                src="https://i.ibb.co/4tnbDT5/images-removebg-preview.png"
                alt=""
              />
              <Image
                height={72}
                width={72}
                src="https://i.ibb.co/m0NhwWq/unnamed-removebg-preview.png"
                alt=""
              />
              {/* <Image
            height={72}
            width={72}
            src="https://i.ibb.co/CBD8T8q/islami-bank-bd-ltd-logo-AEF49-FEF88-seeklogo-com-removebg-preview.png"
            alt=""
          /> */}
              <Image
                height={72}
                width={72}
                src="https://i.ibb.co/N9hM0z3/loadersplash-removebg-preview.png"
                alt=""
              />
              <Image
                height={72}
                width={72}
                src="https://i.ibb.co/6b4JjLL/png-transparent-visa-logo-credit-card-e-commerce-visa-payment-mastercard-visa-company-text-service-r.png"
                alt=""
              />
              <Image
                height={72}
                width={72}
                src="https://i.ibb.co/R6kdLLy/site-logo-removebg-preview.png"
                alt=""
              />
              <Image
                height={72}
                width={72}
                src="https://i.ibb.co/WPm38Vj/Website-Footer-removebg-preview-1.png"
                alt=""
              />
            </div>
          </Marquee>
        </div>
    
    </div>
  );
};

export default Feture;
