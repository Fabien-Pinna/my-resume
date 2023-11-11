import './ExperienceItem.scss'

const ExperienceItem = ({ experienceTitle, experienceSubtitle, listItems }) => {
    return (
        <div className='experience-item'>
            <div className="experience-title">
                <h4>{experienceTitle}</h4>
                <h4>{experienceSubtitle}</h4>
            </div>
            <div className="experience-list">
                <ul>
                    {listItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ExperienceItem