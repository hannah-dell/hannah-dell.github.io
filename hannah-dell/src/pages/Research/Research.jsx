import Intro from '../../components/Intro';
import ResearchInfo from './ResearchInfo';

export default function Research(props) {

  return (
    <>
      <Intro name={props.name} />
      <ResearchInfo />
    </>
  )
}