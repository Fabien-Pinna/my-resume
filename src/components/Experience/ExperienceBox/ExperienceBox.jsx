import ExperienceItem from '../ExperienceItem/ExperienceItem'

import './ExperienceBox.scss'

const ExperienceBox = () => {
    const experienceFreelance = {
        title: 'Développeur Web Freelance (Depuis fin 2021)',
        items: [
            'Développement de plugins et de thèmes Wordpress',
            'Maintenance et création de sites pour des PME, associations et cabinets de médecins spécialisés',
            'Création d\'expériences 3D avec Three.js'
        ]
    }

    const experienceSolware = {
        title: 'Développeur Front End / Web Designer (2020 - 2022)',
        subtitle: 'Solware Auto (Dardilly 69)',
        items: [
            'Production d\'un logiciel DMS dédié au secteur automobile Next Web (30% de part de marché en France)',
            'Logiciel de gestion regroupant tous les personas d\'un garage ou d\'une concession automobile (comptable, secrétaire, magasinier, etc ...)',
            'Un tableau de bord et des workflows différents pour chaque persona',
            'Création et intégration Front End avec ReactJS & Typescript'
        ]
    }

    const experienceInsercall = {
        title: 'Web Designer / Intégrateur (2019 - 2020)',
        subtitle: 'Insercall (Avignon 84)',
        items: [
            'Création de sites Web sous Wordpress et intégration avec le builder Divi',
            'Maintenance et gestion de sites clients'
        ]
    }

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