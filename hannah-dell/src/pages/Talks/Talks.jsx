import Intro from '../../components/Intro';
import TalksTable from './TalksTable';

export default function Talks() {

  return (
    <>
      <Intro name="Talks" />
      <TalksTable pinnedOnly={false}/>
    </>
  )
}