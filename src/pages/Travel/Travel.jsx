import Intro from '../../components/Intro';
import TravelTable from './TravelTable';

export default function Travel(props) {

  return (
    <>
      <Intro name={props.name} />
      <TravelTable pinnedOnly={false}/>
    </>
  )
}