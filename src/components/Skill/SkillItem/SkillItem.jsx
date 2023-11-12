import { skillData } from '../../../data/skillData'

import './SkillItem.scss'

const SkillItem = () => {
    return (
        <>
            {skillData.map((data, index) => (
                <div key={index} className={`skill-item ${data.className}`}>
                    <span className="gauge">
                        <span className="gauge-fill" style={{ height: data.gaugeHeight }}></span>
                        <i className="gauge-first-border" style={{ height: data.firstBorderHeight }}></i>
                        <i className="gauge-second-border" style={{ height: data.secondBorderHeight, top: data.borderTop }}></i>
                    </span>
                    <h4 className="text">{data.textContent}</h4>
                </div>
            ))}
        </>
    )
}

export default SkillItem