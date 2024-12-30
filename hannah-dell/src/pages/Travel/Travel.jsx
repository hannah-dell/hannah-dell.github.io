import TravelIntro from './TravelIntro';
import TravelTable from './TravelTable';

export default function Travel() {

  return (
    <>
      <TravelIntro />
      <TravelTable pinnedOnly={false}/>
    </>
  )
}