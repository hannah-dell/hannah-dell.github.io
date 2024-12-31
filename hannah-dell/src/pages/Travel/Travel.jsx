import Intro from '../../components/Intro';
import TravelTable from './TravelTable';

export default function Travel() {

  return (
    <>
      <Intro name="Travel" />
      <TravelTable pinnedOnly={false}/>
    </>
  )
}