import HomeIntro from './HomeIntro';
import TalksTable from '../Talks/TalksTable';
import TravelTable from '../Travel/TravelTable';
import TeachingTable from '../Teaching/TeachingTable';

export default function Home() {
  return (
    <>
      <HomeIntro />

      <h2 className="body-container">Selected Talks</h2>
      <TalksTable pinnedOnly={true} />

      <h2 className="body-container">Selected Conferences</h2>
      <TravelTable pinnedOnly={true}/>

      <h2 className="body-container">Recently Taught Courses</h2>
      <TeachingTable pinnedOnly={true}/>


    </>
  )
}