
import Articles from '../../components/Articles';
import Intro from '../../components/Intro';
import TalksTable from '../Talks/TalksTable';
import TravelTable from '../Travel/TravelTable';
import TeachingTable from '../Teaching/TeachingTable';

export default function Home() {
  return (
    <>
      <Intro name="Home" />

      <Articles pinnedOnly={true} heading="Selected Research Papers" />

      <TalksTable pinnedOnly={true} heading="Selected Talks" />

      <TravelTable pinnedOnly={true} heading="Selected Travel" />

      <TeachingTable pinnedOnly={true} heading="Recently Taught Courses" />


    </>
  )
}