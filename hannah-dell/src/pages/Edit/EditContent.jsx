import { Link, useParams } from 'react-router-dom';

import NotFound from '../../components/NotFound';
import Table from '../../components/Table';

import pagesData from '../../data/pages.json';
import researchData from '../../data/research.json';
import talksData from '../../data/talks.json';
import teachingData from '../../data/teaching.json';
import travelData from '../../data/travel.json';

export default function EditContent(props) {

  const name = useParams().name.toLowerCase();

  let data;
  switch (name) {
    case "pages":
      data = pagesData;
      break;
    case "research":
      data = researchData;
      break;
    case "talks":
      data = talksData;
      break;
    case "teaching":
      data = teachingData;
      break;
    case "travel":
      data = travelData;
      break;
  } 

  console.log(data)

  const sortedData = data.sort((a, b) => {
    if (a.date && b.date) {
      return new Date(b.date) - new Date(a.date);
    }

    // sort by id if dates don't exist
    return a.id - b.id;
  });

  const tableRows = sortedData && sortedData.map(item => {
    return (
      <tr key={item.id}>
        <td>
          {item.id}
        </td>
        <td>
          <Link 
              to={`./${item.id}`}
          >
            {item.name}
          </Link>
        </td>
        <td>
          {item.date}
        </td>
      </tr>
    )
  })



  return (
    data
      ? <Table content={tableRows} heading="Edit Mode" />
      : <NotFound />
  );
  
};

