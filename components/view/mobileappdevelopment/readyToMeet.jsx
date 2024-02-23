import Container from "@/components/box/container";
import Image from "next/image";
import {
  InputInvisibleLabel,
  InputSelect,
  InputWithLabel,
} from "@/components/form/inputv2";
import Heading from "@/components/text/heading";
import { ButtonLightBlue } from "@/components/button/button";

export default function ReadyToMeet() {
  return (
    <div className="bg-eve-white py-12">
      <Container className="grid grid-cols-1 md:grid-cols-2 items-center gap-3">
        <div>
          <Heading
            variant="h2"
            className="font-bold text-btn-primary w-full max-w-sm"
          >
            Siap bertemu dan diskusikan{" "}
            <span className="text-eve-blue">kebutuhanmu?</span>
          </Heading>
          <p className="mt-2.5 text-eve-gray">{`Couldn't find what you were looking for?`}</p>
        </div>
        <div>
          <form className="bg-btn-white rounded-2xl p-3 lg:p-7 space-y-4">
            <InputWithLabel
              name="fullname"
              required={true}
              placeholder="Your fullname"
              label="Fullname"
              type="text"
            ></InputWithLabel>
            <InputWithLabel
              name="email"
              required={true}
              placeholder="Email address"
              label="email address"
              type="email"
            ></InputWithLabel>
            <div className="flex space-x-5">
              <div className="w-1/4">
                <InputSelect label="Nomor telpon" required={false}>
                  <option value="id">+62</option>
                  <option value="id">+62</option>
                  <option value="id">+62</option>
                </InputSelect>
              </div>
              <div className="w-3/4">
                <InputInvisibleLabel placeholder="xxxxxxxx"></InputInvisibleLabel>
              </div>
            </div>
            <InputWithLabel
              name="companyname"
              required={true}
              placeholder="Your company name"
              label="nama perusahaan"
              type="text"
            ></InputWithLabel>
            <InputSelect label="Anggaran Proyek">
              <option value="" defaultValue>
                Select Your Budget
              </option>
              <option value="< $ 3000">{`< $ 3000`}</option>
              <option value="$ 3000 - $ 7000">{`$ 3000 - $ 7000`}</option>
              <option value="$ 7000 - $ 12000">{`$ 7000 - $ 12000`}</option>
              <option value="$ 12000 - $ 20000">{`$ 12000 - $ 20000`}</option>
              <option value="> $ 20000">{`> $ 20000`}</option>
            </InputSelect>
            <div className="flex items-center justify-center w-full pt-3">
              <ButtonLightBlue type="submit">Submit</ButtonLightBlue>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}
