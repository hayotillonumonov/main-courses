// Style
import "./Title.css";

function Titile({title, titleSpan}) {
  return (
    <div>
      <h5 className="block-name">kurslar</h5>
      <h2 className="section_title">
        {title}<span>{titleSpan}</span>
      </h2>
    </div>
  );
}

export default Titile;
