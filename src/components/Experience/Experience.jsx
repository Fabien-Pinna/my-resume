import Title from '../Title/Title'
import ExperienceBox from './ExperienceBox/ExperienceBox'

import './Experience.scss'

const Experience = () => {
    return (
        <div className='experience'>
            <Title title='Experiences' />
            <ExperienceBox />
        </div>
    )
}

export default Experience