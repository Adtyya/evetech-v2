"use client";

import { useState } from "react";
import Container from "@/components/box/container";
import CardDetailVacancies from "./component/card";
import Heading from "@/components/text/heading";
import { ButtonLightBlue, ButtonPrimary } from "@/components/button/button";
import Link from "next/link";
import Image from "next/image";
import ModalBase from "@/components/modal";
import { FiX } from "react-icons/fi";
import { InputRounded } from "@/components/form/inputv2";
import { useDropzone } from "react-dropzone";
import Markdown from "react-markdown";

function SideCardInfo({ title, subtitle }) {
  return (
    <div className="bg-eve-white rounded-2xl p-3">
      <small className="text-btn-primary/60 capitalize">{title}</small>
      <p className="text-btn-primary font-bold capitalize">{subtitle}</p>
    </div>
  );
}

function SocialButton({ path, alt }) {
  return (
    <button className="h-9 w-9 bg-eve-social rounded-full relative flex items-center justify-center">
      <Image src={path} alt={alt} width={24} height={24} />
    </button>
  );
}

function ApplyPosition({ open, close }) {
  const {
    acceptedFiles: resume,
    getRootProps: rootResume,
    getInputProps: resumeProps,
  } = useDropzone({ multiple: false, accept: ".pdf, .doc, .docx" });

  const {
    acceptedFiles: portofolio,
    getRootProps: rootPortofolio,
    getInputProps: portofolioProps,
  } = useDropzone({ multiple: false, accept: ".pdf, .doc, .docx" });

  return (
    <ModalBase isOpen={open} closeModal={close}>
      <div className="flex items-center justify-between">
        <Heading variant="h4" className="font-bold text-btn-primary">
          Upload Resume
        </Heading>
        <button className="text-xl focus:outline-btn-primary" onClick={close}>
          <FiX />
        </button>
      </div>
      <div className="w-full h-0.5 bg-eve-strip my-4"></div>
      <form className="space-y-3">
        <InputRounded
          label="Fullname"
          type="text"
          placeholder="Your Fullname"
          required
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <InputRounded
            label="Phone"
            type="text"
            placeholder="+62xxxxxx"
            required
          />
          <InputRounded
            label="Phone"
            type="email"
            placeholder="johndoe@mail.com"
            required
          />
        </div>
        <div>
          <p className="text-btn-primary capitalize mb-2">
            Resume <span className="text-red-500">*</span>
          </p>
          <div
            {...rootResume({
              className:
                "w-full py-14 rounded-2xl border-2 border-border-gray border-dashed flex item-center justify-center",
            })}
          >
            <input
              className="absolute invisible"
              accept=".pdf,.doc,.docx"
              {...resumeProps()}
            />
            {resume.length > 0 ? (
              <p>Uploaded - {resume[0]?.name}</p>
            ) : (
              <p className="font-semibold text-center text-btn-primary">
                Drag & Drop or{" "}
                <span className="text-btn-blue cursor-pointer">
                  Choose File
                </span>{" "}
                to upload <br /> .pdf
              </p>
            )}
          </div>
        </div>
        <div>
          <p className="text-btn-primary capitalize mb-2">{`Portfolio (optional)`}</p>
          <div
            {...rootPortofolio({
              className:
                "w-full py-14 rounded-2xl border-2 border-border-gray border-dashed flex item-center justify-center",
            })}
          >
            <input
              className="absolute invisible"
              accept=".pdf,.doc,.docx"
              {...portofolioProps()}
            />
            {resume.length > 0 ? (
              <p>Uploaded - {resume[0]?.name}</p>
            ) : (
              <>
                <p className="font-semibold text-center text-btn-primary">
                  Drag & Drop or{" "}
                  <span className="text-btn-blue cursor-pointer">
                    Choose File
                  </span>{" "}
                  to upload
                  <br /> .pdf
                </p>
              </>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center pt-3">
          <ButtonLightBlue>Apply Now</ButtonLightBlue>
        </div>
      </form>
    </ModalBase>
  );
}

export default function DetailVacanciesTop({ content }) {
  const [open, setOpen] = useState(false);

  return (
    <Container className="py-12">
      <CardDetailVacancies
        image={
          content?.attributes?.cover?.data?.attributes?.url ??
          "/images/career/sample.jfif"
        }
        jobTitle={content?.attributes?.title}
        employementType={content?.attributes?.workType}
        placementType={content?.attributes?.workModel}
        placementLocation={content?.attributes?.location}
        experienceNeeded={content?.attributes?.experienceInYears}
        department={content?.attributes?.department}
        createdAt={content?.attributes?.createdAt}
        deadline={content?.attributes?.endDate}
        action={() => setOpen(true)}
      />
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="col-auto md:col-span-8">
          <div className="space-y-3">
            <p className="font-bold text-btn-primary capitalize">
              Job Overview
            </p>
            <Markdown className="prose lg:prose-lg prose-p:text-btn-primary prose-headings:text-btn-primary">
              {content?.attributes?.description}
            </Markdown>
          </div>
        </div>
        <div className="col-auto md:col-span-4">
          <div className="grid grid-cols-2 md:grid-cols-1 gap-5">
            <SideCardInfo
              title="Work level"
              subtitle={content?.attributes?.workLevel}
            />
            <SideCardInfo
              title="Job-Type"
              subtitle={content?.attributes?.workType}
            />
            <SideCardInfo
              title="Work Model"
              subtitle={content?.attributes?.workModel}
            />
            <SideCardInfo
              title="Experience"
              subtitle={`${content?.attributes?.experienceInYears} Years Experience`}
            />
          </div>
          <div className="mt-8 space-y-2.5">
            <h2 className="font-bold text-btn-primary capitalize text-xl lg:text-2xl">
              About Evetech Solution
            </h2>
            <p className="text-btn-primary line-clamp-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus blanditiis consequuntur ipsam tempora, exercitationem
              facere saepe sit quos quam laborum laboriosam explicabo a dolor
              corrupti ad eum provident qui iure!
            </p>
            <div>
              <Link href="/about-us">
                <ButtonPrimary className="px-5">Detail</ButtonPrimary>
              </Link>
            </div>
          </div>
          <div className="my-5">
            <div className="h-0.5 w-full bg-eve-strip"></div>
            <div className="flex mt-2.5 items-center space-x-5">
              <p className="text-btn-primary">Share this job : </p>
              <SocialButton
                path="/images/career/social/Instagram.svg"
                alt="instagram"
              />
              <SocialButton
                path="/images/career/social/Facebook.svg"
                alt="Facebook"
              />
              <SocialButton
                path="/images/career/social/Twitter.svg"
                alt="Twitter"
              />
              <SocialButton
                path="/images/career/social/Github.svg"
                alt="Github"
              />
            </div>
          </div>
        </div>
      </div>
      <ApplyPosition open={open} close={() => setOpen(false)}></ApplyPosition>
    </Container>
  );
}
