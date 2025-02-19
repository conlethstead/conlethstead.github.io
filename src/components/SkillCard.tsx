import { SkillCardProps } from '../components/Components';
import '../styles/SkillCard.css';


export const SkillCard = ({ skill } : { skill: SkillCardProps }) => {
  return (
    <div className="skill-card">
      <img src={skill.image}></img>
      <h3>{skill.name}</h3>
      {/* <p>{skill.description}</p> */}
    </div>
  );
}