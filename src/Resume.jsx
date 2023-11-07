import Formation from './components/Formation/Formation'
import Contact from './components/Contact/Contact'

import './Resume.scss'

const Resume = () => {
    return (
        <div className="background">
            <div className="layout-card">
                <Formation />
                <Contact />
            </div>

        </div>
    )
}

export default Resume