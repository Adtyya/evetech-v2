import Container from "@/components/box/container";
import { ButtonPrimary } from "@/components/button/button";
import Heading from "@/components/text/heading";

export default function FindMore() {
  return (
    <Container className="py-7">
      <div className="space-y-4">
        <Heading variant="h3" className="font-bold text-btn-primary">
          Temukan Lebih Banyak{" "}
          <span className="text-btn-blue">Tentang Evetech</span>
        </Heading>
        <p className="text-eve-gray">
          Telusuri dunia Evetech secara mendalam dengan mudah dengan mengunduh
          dan membaca Evetech Compro. Telusuri panduan komprehensif kami untuk
          mempelajari lebih lanjut tentang produk, layanan, dan apa yang
          membedakan kami. Bersiaplah untuk mengungkap semua yang perlu Anda
          ketahui untuk meningkatkan pengalaman Anda dengan Evetech.
        </p>
        <ButtonPrimary className="px-5">Unduh Evetech Compro</ButtonPrimary>
      </div>
    </Container>
  );
}
