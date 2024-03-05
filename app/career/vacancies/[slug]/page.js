import DetailVacanciesTop from "@/components/view/vacanciesdetail/detail";
import OtherVacancies from "@/components/view/vacanciesdetail/othervacancies";

export default function DetailVacancies() {
  return (
    <>
      <div className="h-32"></div>
      <DetailVacanciesTop></DetailVacanciesTop>
      <OtherVacancies></OtherVacancies>
    </>
  );
}
