import Title from '../Title/Title'

import './Quality.scss'

const Quality = () => {
    return (
        <div className='quality'>
            <Title title='Qualités' />
            <div className="quality-box">
                <ul>
                    <li> - Adaptabilté </li>
                    <li> - Esprit d'équipe </li>
                    <li> - Relationnel </li>
                    <li> - Autonomie </li>
                </ul>
            </div>
        </div>
    )
}

export default Quality