import data from '../../data/teaching.json';
import Table from '../../components/Table';

export default function TeachingTable(props) {

  data.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  const newData = props.pinnedOnly ? data.filter(item => item.pinned) : data;

  const tableRows = newData.map(item => {
    return (
      <tr key={item.id}>
        <td>
          {item.courseUrl ? (
            <>
              <a href={item.courseUrl} target="_blank" rel="noopener noreferrer">{item.name}</a>
            </>
          ) : (
            item.name
          )}
        </td>
        <td>
          {item.dateText}
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