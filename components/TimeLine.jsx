const TimeLine = (props) => {

  const { teachingPeriod, currentWeek, weeks } = props

  const hexToRgb = (hex) => {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b
    })

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    } : null
  }

  const greyOut = (hex, amt) => {
    const rgb = hexToRgb(hex)
    return `rgb(${rgb.r + amt}, ${rgb.g + amt}, ${rgb.b + amt})`
  }

  const getCurrentWeekIndex = () => {
    const index = weeks.findIndex(week => {
      const currentDate = new Date().toISOString().split('T')[0]
      return currentDate <= week.startDate
    })

    return index > 0 ? index - 1 : 0

  }

  const onPinClick = (e, week) => {
    e.stopPropagation()
    e.preventDefault()
    console.log(week)
  }


  return (
    <div className="timeline">
      <div className="title">
        <span className="timeline-title">TimeLine</span>
        <span className="teaching-period">{teachingPeriod} | </span>
        <span className="current-week">{currentWeek}</span>
      </div>
      <div className="content">
        <div className="slider">
          <ul className="pins">
            {weeks.map((week) => (
              <li key={week.name}>
                <div className="pin-group" onClick={(e) => onPinClick(e, week)}>
                  {week.assignments?.map(assignment => {
                    let color = assignment.color
                    if (assignment.currentStatus === 'submitted') {
                      color = color + 45
                    }
                    return (
                      <svg className="pin" key={`${week.name}-${assignment.unitCode}`} width="14" height="20"
                           viewBox="0 0 14 20" fill={color}
                           xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M7 0C3.13 0 0 3.13 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 3.13 10.87 0 7 0ZM7 9.5C5.62 9.5 4.5 8.38 4.5 7C4.5 5.62 5.62 4.5 7 4.5C8.38 4.5 9.5 5.62 9.5 7C9.5 8.38 8.38 9.5 7 9.5Z"
                         />
                        <path
                          d="M9.5 7C9.5 8.38 8.38 9.5 7 9.5C5.62 9.5 4.5 8.38 4.5 7C4.5 5.62 5.62 4.5 7 4.5C8.38 4.5 9.5 5.62 9.5 7Z"
                          fill="white"/>
                      </svg>
                    )
                  })}
                </div>
              </li>
            ))}
          </ul>
          <progress max={weeks.length} value={getCurrentWeekIndex()}/>
          <ul className="labels">
            {weeks?.map(week => (
              <li key={week.name}>{week.name}</li>
            ))}

          </ul>
        </div>
      </div>
    </div>
  )
}

export default TimeLine
