import Container from "../box/container";
import { ButtonPrimary } from "../button/button";
import Input from "../form/input";
import Heading from "../text/heading";
import { CiCircleCheck } from "react-icons/ci";
import Image from "next/image";

const socialIcon = [
  {
    path: "/images/footer/social/Instagram.svg",
  },
  {
    path: "/images/footer/social/Facebook.svg",
  },
  {
    path: "/images/footer/social/Twitter.svg",
  },
  {
    path: "/images/footer/social/Github.svg",
  },
];

export default function Footer() {
  return (
    <div>
      <div className="w-full h-full bg-btn-white py-8">
        <Container>
          <div className="space-y-5">
            <Heading variant="h3" className="font-bold text-btn-primary">
              Let’s Create Together!
            </Heading>
            <p className="text-eve-gray">
              Ready to elevate your digital presence? Contact us to discuss how
              Evetech <br /> Solution turn your ideas intro visual captivating
              realities that drive results.
            </p>
            <form>
              <div className="w-full flex flex-col md:flex-row space-y-4 md:space-y-0 items-center space-x-4">
                <Input
                  type="email"
                  placeholder="Enter your email to signup for get special offer"
                />

                <ButtonPrimary className="whitespace-nowrap px-5 py-2">
                  Get Special Offer
                </ButtonPrimary>
              </div>
              <p className="text-eve-green flex space-x-1 items-center justify-center md:justify-normal mt-1.5">
                <CiCircleCheck />
                <span>The form was sent successfully</span>
              </p>
            </form>
          </div>
        </Container>
      </div>
      <div className="w-full h-full relative">
        <Image
          src="/images/footer/footer.jfif"
          fill
          className="object-cover brightness-50"
          alt="footer-bg"
        />
        <Container className="w-full h-full relative z-10 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="col-auto md:col-span-4">
              <div className="w-28 h-28 relative">
                <Image
                  alt="eve-footer"
                  src="/images/footer/eve-footer.png"
                  className="object-contain"
                  fill
                />
              </div>
              <div className="mt-4 space-y-1.5">
                <p className="text-white text-lg font-medium">
                  Ready To Collaborate With Evetech?
                </p>
                <p className="text-white font-light">
                  You have ideas, we have software solution, time to join
                  forces.
                </p>
                <div className="flex space-x-4 pt-4">
                  {socialIcon.map((item, idx) => {
                    return (
                      <button
                        key={idx}
                        className="w-10 h-10 rounded-full bg-eve-footer-btn outline outline-1 outline-white flex items-center justify-center"
                      >
                        <object
                          data={item.path}
                          type="image/svg+xml"
                          width={24}
                          height={24}
                        ></object>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-auto md:col-span-8">Right side</div>
          </div>
        </Container>
      </div>
    </div>
  );
}
