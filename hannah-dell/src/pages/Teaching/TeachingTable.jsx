import data from '../../data/teaching.json';
import Table from '../../components/Table';

export default function TeachingTable() {

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
    <Table content={tableRows} />
  )
}