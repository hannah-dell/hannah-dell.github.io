export default function Table(props) {

  return (
    <>
    {props.content && props.content.length > 0 && (
      <div className="body-container py-4">
        <div className="table-container">
          {props.heading && <h2>{props.heading}</h2>}
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