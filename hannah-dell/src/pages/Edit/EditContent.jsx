import { useParams } from 'react-router-dom';

import pagesData from '../../data/pages.json';
import researchData from '../../data/research.json';
import talksData from '../../data/talks.json';
import teachingData from '../../data/teaching.json';
import travelData from '../../data/travel.json';

import Table from '../../components/Table';

export default function EditContent(props) {
  const name = useParams().name.toLowerCase();
  const id = useParams().id;

  let data;
  switch (name) {
    case "pages":
      data = pagesData.find(item => item.id == id);
      break;
    case "research":
      data = researchData.find(item => item.id == id);
      break;
    case "talks":
      data = talksData.find(item => item.id == id);
      break;
    case "teaching":
      data = teachingData.find(item => item.id == id);
      break;
    case "travel":
      data = travelData.find(item => item.id == id);
      break;
  } 

  const tableRows = data && Object.entries(data).map(([key, value]) => (
    <tr key={key}>
      <td>{key}</td>
      <td>{value}</td>
    </tr>
  ));

  return (
    <Table content={tableRows} />
  )
}