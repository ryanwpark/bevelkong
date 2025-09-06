import ContactForm from "../components/ContactPage/ContactForm";
import ContactTypeWriter from "../components/ContactPage/ContactTypeWriter";

export default function ContactPage() {
  return (
    <div className="min-h-screen w-screen flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 h-1/3 md:visible invisible lg:h-full flex items-end lg:items-center justify-center pb-4 lg:pb-4 md:p-4">
        <ContactTypeWriter />
      </div>
      <div className="w-full lg:w-1/2 md:h-2/3 h-screen sm:h-full lg:h-full flex items-start lg:items-center justify-center md:p-8 pt-0 pb-4 lg:pt-4">
        <ContactForm />
      </div>
    </div>
  );
}
