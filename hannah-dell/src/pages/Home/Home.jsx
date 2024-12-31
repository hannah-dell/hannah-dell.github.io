
import Articles from '../../components/Articles';
import HomeIntro from './HomeIntro';
import TalksTable from '../Talks/TalksTable';
import TravelTable from '../Travel/TravelTable';
import TeachingTable from '../Teaching/TeachingTable';

export default function Home() {
  return (
    <>
      <HomeIntro />

      <Articles pinnedOnly={true} heading="Selected Research Papers" />

      <TalksTable pinnedOnly={true} heading="Selected Talks" />

      <TravelTable pinnedOnly={true} heading="Selected Travel" />

      <TeachingTable pinnedOnly={true} heading="Recently Taught Courses" />


    </>
  )
}