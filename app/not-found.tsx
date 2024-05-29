import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 | Back Office Wallet",
  description: "Cette page n'existe pas.",
};

const Custom404 = (): JSX.Element => (
  <div className="my-6 md:my-12 pt-12 flex flex-col items-center justify-center gap-2 text-center h-96">
    <h1 className="text-xl md:text-3xl font-semibold">
      404 - Page non trouvée
    </h1>
    <p>Cette page n'existe pas.</p>
    <div className="h-2">
      <Link href="/" className="underline underline-offset-4">
        Retour à l'accueil de l'application
      </Link>
    </div>
  </div>
);

export default Custom404;
