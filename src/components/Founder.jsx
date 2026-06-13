import "../Founder.css";
import FounderImages from "./Founder/FounderImages";
import FounderContent from "./Founder/FounderContent";
export default function Founder() {
  return (
    <div className="founder">
      <div className="founder-container">
        <FounderImages></FounderImages>
        <FounderContent></FounderContent>
      </div>
    </div>
  );
}
