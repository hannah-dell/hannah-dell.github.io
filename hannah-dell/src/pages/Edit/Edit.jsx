import { Link } from 'react-router-dom';

import Table from '../../components/Table';

export default function Edit(props) {

  const tableRows = props.editOptions.map(option => {
    return (
      <tr key={option}>
        <td>
          <Link 
              to={`./${option.toLowerCase()}`}
          >
            {option}
          </Link>
        </td>
      </tr>
    )
  })

  return (
    <Table content={tableRows} heading="Edit Mode" />
  );
}