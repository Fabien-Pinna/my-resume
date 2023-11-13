import Formation from './components/Formation/Formation'
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Skill from './components/Skill/Skill'
import Quality from './components/Quality/Quality'

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
            </div>

        </div>
    )
}

export default Resume