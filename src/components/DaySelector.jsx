function DaySelector ({days, selectedDay, onselect}) {


function formatDay(dateString){
    const date = new Date(dateString)
    const dayNumber = date.getDate()
    const dayName = date.toLocaleDateString('fr-FR', {weekday: 'short'})

    return {dayNumber, dayName}
}
return (
    <div className="day-selector">
{days.map(day => {
    const {dayNumber, dayName} = formatDay(day)
    const isSelected = day === selectedDay

    return (
        <button key={day} 
        onClick={() => onselect(day)}
        className={`day-btn ${isSelected ? 'day-btn--active' : ''}`}>


            <span className="day-btn__name">{dayName}</span>
            <span className="day-btn__number">{dayNumber}</span>
        </button>
    )
})}

    </div>
)
}


export default DaySelector