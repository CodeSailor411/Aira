import ContactForm from "../../components/Sections/ContactForm";

export default function Contact() {
  return (
    <div
      className="min-h-screen p-8"
      style={{
        background: "linear-gradient(to right, #1e3a8a,rgb(56, 120, 248))", // Updated to use only two colors
      }}
    >
      <ContactForm />
    </div>
  );
} 