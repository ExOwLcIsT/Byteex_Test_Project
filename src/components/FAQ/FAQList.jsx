import FAQItem from "./FAQItem";

const FAQs = [
  {
    id: 1,
    question: "lorem ipsum dolor sit amet",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
  },
  {
    id: 2,
    question: "lorem ipsum dolor sit amet",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
  },
  {
    id: 3,
    question: "lorem ipsum dolor sit amet",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
  },
  {
    id: 4,
    question: "lorem ipsum dolor sit amet",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
  },
  {
    id: 5,
    question: "lorem ipsum dolor sit amet",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
  },
  {
    id: 6,
    question: "lorem ipsum dolor sit amet",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
  },
];
export default function FAQList() {
  return (
    <div className="faq-list">
      {FAQs.map((faq) => {
        return <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />;
      })}
    </div>
  );
}
