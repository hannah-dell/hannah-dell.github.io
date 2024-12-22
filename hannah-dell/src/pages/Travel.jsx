import data from "../data/travel.json";

export default function Travel() {

  data.sort((a, b) => new Date(b.date) - new Date(a.date));

  const tableRows = data.map(item => {
    return (
      <tr key={item.id}>
        <td>
          {new Date(item.date).toLocaleString("en-GB", { year: "numeric", month: "long" })}
        </td>
        <td>
          {item.url ? (
            <>
              <a className="link" href={item.url} target="_blank" rel="noopener noreferrer">{item.name}</a>
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
    <table>
      <tbody>
        {tableRows}
      </tbody>
    </table>
  )
}