import InfoCard from "./Info/InfoCard";
import "../Info.css";
export default function Info() {
  return (
    <div className="info">
      <div className="content-title">Our total green impact</div>
      <div className="info-content">
        <InfoCard
          icon="/icons/cloud.png"
          title="3,927 kg"
          text="of CO2 saved"
        />
        <InfoCard
          icon="/icons/drop.png"
          title="2,546,167 days"
          text="of drinking water saved"
        />
        <InfoCard
          icon="/icons/lightning.png"
          title="7,321 kWh"
          text="of energy saved"
        />
      </div>
    </div>
  );
}
