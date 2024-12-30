import TalksIntro from "./TalksIntro";
import TalksTable from "./TalksTable";

export default function Talks() {

  return (
    <>
      <TalksIntro />
      <TalksTable pinnedOnly={false}/>
    </>
  )
}