import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";

export default function HireMe() {
  return (
    <main className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
      <ContactInfo />
      <ContactForm />
    </main>
  );
}
