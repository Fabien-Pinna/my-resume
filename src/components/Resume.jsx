import Formation from './Formation/Formation'
import Contact from './Contact/Contact'
import Experience from './Experience/Experience'
import Skill from './Skill/Skill'
import Quality from './Quality/Quality'
import Language from './Language/Language'
import Name from './Name/Name'
import Picture from './Picture/Picture'

import './Resume.scss'

const Resume = () => {
    return (
        <div className="background">
            <div className="layout-card">
                <div className="layout-content">
                    <Formation />
                    <Contact />
                    <Experience />
                    <Skill />
                    <Quality />
                    <Language />
                    <Name />
                    <Picture />
                </div>
            </div>

        </div>
    )
}

export default Resume