import data from "../data/talks.json";

export default function Talks() {

  const tableRows = data.map(item => {
    return (
      <tr key={item.id}>
        <td>
          {item.notes ? (
            <>
              {item.name} <a className="link" href={`/notes/${item.notes}`} target="_blank" rel="noopener noreferrer">(notes)</a>
            </>
          ) : (
            item.name
          )}
        </td>
        <td>
          {new Date(item.date).toLocaleString("en-GB", { year: "numeric", month: "long" })}
        </td>
        <td>
          {item.seminarUrl ? (
            <a className="link" href={item.seminarUrl} target="_blank" rel="noopener noreferrer">{item.seminarName}</a>
          ) : (
            item.seminarName
          )}
        </td>
        <td>
          {item.location}
        </td>
      </tr>
    )
  })

  return (
    <table>
      <tbody>
        {tableRows}
      </tbody>
    </table>
  )
}