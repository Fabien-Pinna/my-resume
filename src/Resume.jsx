import Formation from './components/Formation/Formation'
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'

import './Resume.scss'

const Resume = () => {
    return (
        <div className="background">
            <div className="layout-card">
                <Formation />
                <Contact />
                <Experience />
            </div>

        </div>
    )
}

export default Resume