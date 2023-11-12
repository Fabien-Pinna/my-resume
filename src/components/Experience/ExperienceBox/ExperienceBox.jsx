import ExperienceItem from '../ExperienceItem/ExperienceItem'
import { experienceFreelance, experienceSolware, experienceInsercall } from '../../../data/experienceData'

import './ExperienceBox.scss'

const ExperienceBox = () => {


    return (
        <div className='experience-box'>
            <ExperienceItem
                experienceTitle={experienceFreelance.title}
                listItems={experienceFreelance.items}
            />
            <i className="border-bottom" />
            <ExperienceItem
                experienceTitle={experienceSolware.title}
                experienceSubtitle={experienceSolware.subtitle}
                listItems={experienceSolware.items}
            />
            <i className="border-bottom" />
            <ExperienceItem
                experienceTitle={experienceInsercall.title}
                experienceSubtitle={experienceInsercall.subtitle}
                listItems={experienceInsercall.items}
            />
        </div>
    )
}

export default ExperienceBox