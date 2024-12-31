import Intro from '../../components/Intro';
import TeachingTable from './TeachingTable';

export default function Teaching() {

  return (
    <>
      <Intro name="Teaching" />
      <TeachingTable pinnedOnly={false}/>
    </>
  )
}