import HomeIntro from './HomeIntro';
import TeachingTable from '../Teaching/TeachingTable';

export default function Home() {
  return (
    <>
      <HomeIntro />

      <h2 className="body-container">Recently Taught Courses</h2>
      <TeachingTable pinnedOnly={true}/>

      
    </>
  )
}