import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import SupplierForm from "@/components/SupplierForm";
import WhatWeOffer from "@/components/WhatWeOffer";

export default function SupplierRegister() {
  return (
    <>
      <Navbar />
      <main>
        <ContactHero title="SUPPLIER REGISTER" />
        <SupplierForm />
        <WhatWeOffer />
      </main>
      <Footer />
    </>
  );
}
