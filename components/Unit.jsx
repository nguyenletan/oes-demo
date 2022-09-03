const Unit = (props) => {
  const { color, unitCode, unitName, assignmentsProgress, numberOfCompletedModules, totalModules } = props

  return (
    <div className="unit" style={{ borderTop: `8px solid ${color}` }}>
      <div className="title">
        <p className="unit-code">{unitCode}</p>
        <p className="unit-name">{unitName}</p>
      </div>
      <div className="modules-wrapper">
        <p className="modules-title">Modules</p>
        <div className="progress-wrapper">
          <progress max={totalModules} value={numberOfCompletedModules}/>
          <span className="progress-value">{numberOfCompletedModules}/{totalModules}</span>
        </div>
      </div>

      <div className="assignments-wrapper">
        <p className="assignment-title">Assignments</p>
        <div className="assignment-progress">
          {assignmentsProgress.map(assignment => (
            <span className={assignment.currentStatus} key={assignment.name} style={{width: assignment.progress}}>{assignment.progress}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Unit

