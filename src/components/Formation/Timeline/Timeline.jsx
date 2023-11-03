import TimelineItem from "../TimelineItem/TimelineItem"

import './Timeline.scss'

const Timeline = () => {
    return (
        <div className="timeline">
            <TimelineItem
                className="bellow"
                spanClassName="square"
                year="2017"
                title="HTML & CSS"
                level="Notions de base"
                school="Udemy, Youtube"
            />
            <TimelineItem
                className="bellow"
                spanClassName="round"
                year="2018"
                title="HTML & CSS"
                level="Techniques avancées"
                school="OpenClassrooms"
            />
            <TimelineItem
                className="above"
                spanClassName="round"
                year="2019"
                title="Javascript"
                level="Notions de base"
                school="OpenClassrooms"
            />
            <TimelineItem
                className="bellow"
                spanClassName="round"
                year="2020"
                title="Javascript Fullstack"
                level="Spécialisation ReactJS"
                school="École O'clock (6 mois)"
            />
            <TimelineItem
                className="above"
                spanClassName="round"
                year="2021"
                title="Diplôme Développeur"
                level="Web & Web mobile"
                school="(Niveau V)"
            />
            <TimelineItem
                className="bellow"
                spanClassName="round"
                year="2022"
                title="Three.js (webgl)"
                level="The Thrree.js Journey"
                school="Bruno Simon"
            />
            <TimelineItem
                className="above"
                spanClassName="round"
                year="2023"
                title="Wordpress Gutenberg"
                level="Développement de plugins & thèmes"
                school="Udemy, Youtube, Docs"
            />
            <TimelineItem
                className="bellow"
                spanClassName="arrow"
                year="Today"
                title="ChatGPT, Dall E, LLM"
                level="Prompt Engineering"
                school="Udemy, Youtube, Docs"
            />

        </div>
    )
}

export default Timeline