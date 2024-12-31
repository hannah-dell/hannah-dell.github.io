export default function Table(props) {

  return (
    <>
    {props.content && props.content.length > 0 && (
      <div className="body-container">
        <div className="table-container">
          {props.heading && <h2 className="table-title">{props.heading}</h2>}
          <table>
            <tbody>
              {props.content}
            </tbody>
          </table>
        </div>
      </div>
    )};
    </>
  )
};