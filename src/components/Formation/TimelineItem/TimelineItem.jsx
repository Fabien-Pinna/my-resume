import './TimelineItem.scss'

const TimelineItem = ({ className, spanClassName, year, title, level, school }) => {
    return (
        <div className={`year ${className}`}>
            <span className={spanClassName}>
                {year}
            </span>
            <div className="description">
                <h4> {title} </h4>
                <p> {level} </p>
                <p> {school} </p>
            </div>
        </div>
    )
}

export default TimelineItem