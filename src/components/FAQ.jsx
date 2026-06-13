import FAQContent from "./FAQ/FAQContent";
import FAQImages from "./FAQ/FAQImages";
import "../FAQ.css";
export default function FAQ() {
  return (
    <div className="faq">
      <div className="faq-container">
        <FAQContent />
        <FAQImages />
      </div>
    </div>
  );
}
