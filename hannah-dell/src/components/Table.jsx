export default function Table(props) {
  return (
    <div className="body-container py-4">
      <div className="table-container">
        <table>
          <tbody>
            {props.content}
          </tbody>
        </table>
      </div>
    </div>
  )
}