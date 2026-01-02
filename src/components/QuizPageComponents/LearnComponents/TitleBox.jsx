import "./styles.css";
import { ArrowBigDownDash } from "lucide-react";

function TitleBox({title}) {
  return (
    <div className="box-head">
            <p className="title">{title}</p>
            <ArrowBigDownDash />
            <div className="line"></div>
    </div>
  );
};

export default TitleBox;