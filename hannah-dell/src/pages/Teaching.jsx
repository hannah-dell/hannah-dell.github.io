import data from "../data/teaching.json";

export default function Teaching() {

  data.sort((a, b) => new Date(b.date) - new Date(a.date));

  const tableRows = data.map(item => {
    return (
      <tr key={item.id}>
        <td>
          {item.dateText}
        </td>
        <td>
          {item.courseUrl ? (
            <>
              <a className="link" href={item.courseUrl} target="_blank" rel="noopener noreferrer">{item.name}</a>
            </>
          ) : (
            item.name
          )}
        </td>
        <td>
          {item.location}
        </td>
      </tr>
    )
  })

  return (
    <div className="body-container py-4">
      <div className="table-container">
        <table>
          <tbody>
            {tableRows}
          </tbody>
        </table>
      </div>
    </div>
  )
}