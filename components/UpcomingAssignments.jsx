
export default function UpcomingAssignments(props) {

  const isDueSoon = (dueDate) => {
    const today = new Date();
    const dDate = new Date(dueDate);
    const daysUntilDue = Math.ceil((dDate - today) / (1000 * 60 * 60 * 24));
    return daysUntilDue <= 7;
  }

  const {assignments} = props;
  return (
    <section className="upcoming-assignments">
      <h4 className="title">Upcoming Assignments</h4>
      <div className="assignments">
        {assignments.map(assignment => (
          <div className="assignment" style={{backgroundColor: assignment.backgroundColor}} key={`${assignment.assignmentName}-${assignment.unitCode}`}>
            <div className="vertical-line" style={{backgroundColor: assignment.color}}></div>
            <div className="content">
              <div className="assignment-unit">
                <span className="unit-title">{assignment.unitCode}</span>: <span className="unit-name">{assignment.unitName}</span>
              </div>

              <p className="assignment-title"><a href={assignment.url}>Assignment {assignment.assignmentOrder}: {assignment.assignmentName}</a></p>

              <p className="due-date">{assignment.dueDate} {assignment.dueWeek}</p>

              {isDueSoon(assignment.dueDate) && <p className="status" >due soon</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
