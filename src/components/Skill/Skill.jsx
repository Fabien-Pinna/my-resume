import Title from '../Title/Title'
import SkillBox from './SkillBox/SkillBox'

import './Skill.scss'

const Skill = () => {
    return (
        <div className='skill'>
            <Title title='Compétences' />
            <SkillBox />
        </div>
    )
}

export default Skill