import "./styles.css";
import { ArrowBigDownDash } from "lucide-react";

function TitleBox({title}) {
  return (
    <div className="box-head">
            <h4 className="title">{title}</h4>
            <ArrowBigDownDash />
            <div className="line"></div>
    </div>
  );
};

export default TitleBox;