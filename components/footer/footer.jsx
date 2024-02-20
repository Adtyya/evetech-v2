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

const menu = [
  {
    name: "Quick Links",
    path: [
      {
        name: "About us",
        path: "/",
      },
      {
        name: "Contact",
        path: "/",
      },
      {
        name: "News & blogs",
        path: "/",
      },
      {
        name: "Careers",
        path: "/",
      },
    ],
  },
  {
    name: "Services",
    path: [
      {
        name: "web app development",
        path: "/",
      },
      {
        name: "mobile app development",
        path: "/",
      },
      {
        name: "web development",
        path: "/",
      },
      {
        name: "Careers",
        path: "/",
      },
    ],
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
      <footer className="w-full h-full relative">
        <div className="bg-gradient-footer absolute z-10 w-full h-full"></div>
        <Image
          src="/images/footer/footer.jfif"
          fill
          className="object-cover"
          alt="footer-bg"
        />
        <Container className="w-full h-full relative z-20 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
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
            <div className="col-auto md:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {menu.map((item, indx) => {
                  return (
                    <div key={indx} className="space-y-1.5">
                      <p className="font-semibold text-eve-p-latest-project">
                        {item.name}
                      </p>
                      {item.path.map((a, b) => {
                        return (
                          <p key={b} className="font-medium text-white">
                            {a.name}
                          </p>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
