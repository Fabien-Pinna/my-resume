import Formation from './components/Formation/Formation'
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Skill from './components/Skill/Skill'
import Quality from './components/Quality/Quality'
import Language from './components/Language/Language'

import './Resume.scss'

const Resume = () => {
    return (
        <div className="background">
            <div className="layout-card">
                <Formation />
                <Contact />
                <Experience />
                <Skill />
                <Quality />
                <Language />
            </div>

        </div>
    )
}

export default Resume