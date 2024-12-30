import data from '../../data/talks.json';
import Table from '../../components/Table';

export default function TalksTable(props) {

  data.sort((a, b) => new Date(b.date) - new Date(a.date));
  const newData = props.pinnedOnly ? data.filter(item => item.pinned) : data;

  const tableRows = newData.map(item => {
    return (
      <tr key={item.id}>
        <td>
          {item.notes ? (
            <>
              {item.name} <a href={`/notes/${item.notes}`} target="_blank" rel="noopener noreferrer">(notes)</a>
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
            <a href={item.seminarUrl} target="_blank" rel="noopener noreferrer">{item.seminarName}</a>
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
    <Table content={tableRows} />
  )
}