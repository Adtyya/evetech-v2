import { redirect } from "next/navigation";
import { useLocale } from "next-intl";

export const dynamic = "force-dynamic";

export default function RootPage() {
  const locale = useLocale();
  redirect(`${locale}`);
}
