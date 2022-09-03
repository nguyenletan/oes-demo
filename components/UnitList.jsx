import Unit from './Unit'

const UnitList = () => {

  const unitsData = [
    {
      color: '#1770AB',
      unitCode: 'EDU10001',
      unitName: 'Understanding Language and Literacy',
      numberOfCompletedModules: 3,
      totalModules: 13,
      url: 'https://unit-detail',
      assignmentsProgress: [
        {
          id: 1,
          name: 'Assignment 1',
          progress: '10%',
          currentStatus: 'submitted',
        },
        {
          id: 2,
          name: 'Assignment 2',
          progress: '10%',
          currentStatus: 'future-due',
        },{
          id: 3,
          name: 'Assignment 3',
          progress: '20%',
          currentStatus: 'future-due',
        },
        {
          id: 4,
          name: 'Assignment 4',
          progress: '30%',
          currentStatus: 'future-due',
        },
        {
          id: 5,
          name: 'Assignment 5',
          progress: '30%',
          currentStatus: 'future-due',
        },
      ]
    },
    {
      color: '#FD5D10',
      unitCode: 'EDU10002',
      unitName: 'The World of Maths',
      numberOfCompletedModules: 8,
      totalModules: 15,
      assignmentsProgress: [
        {
          id: 1,
          name: 'Assignment 1',
          progress: '15%',
          currentStatus: 'submitted',
        },
        {
          id: 2,
          name: 'Assignment 2',
          progress: '15%',
          currentStatus: 'submitted',
        },{
          id: 3,
          name: 'Assignment 3',
          progress: '30%',
          currentStatus: 'future-due',
        },
        {
          id: 4,
          name: 'Assignment 4',
          progress: '40%',
          currentStatus: 'future-due',
        },
      ]
    },
    {
      color: '#06A3B7',
      unitCode: 'EDU10003',
      unitName: 'Theories of Teaching and Learning',
      numberOfCompletedModules: 3,
      totalModules: 12,
      assignmentsProgress: [
        {
          id: 1,
          name: 'Assignment 1',
          progress: '10%',
          currentStatus: 'submitted',
        },
        {
          id: 2,
          name: 'Assignment 2',
          progress: '10%',
          currentStatus: 'future-due',
        },{
          id: 3,
          name: 'Assignment 3',
          progress: '40%',
          currentStatus: 'future-due',
        },
        {
          id: 4,
          name: 'Assignment 4',
          progress: '40%',
          currentStatus: 'future-due',
        },
      ]
    },
    {
      color: '#65499D',
      unitCode: 'EDU10004',
      unitName: 'Introduction to Curriculum Planning and Assessment: Practicum one',
      numberOfCompletedModules: 2,
      totalModules: 16,
      assignmentsProgress: [
        {
          id: 1,
          name: 'Assignment 1',
          progress: '10%',
          currentStatus: 'future-due',
        },
        {
          id: 2,
          name: 'Assignment 2',
          progress: '10%',
          currentStatus: 'future-due',
        },{
          id: 3,
          name: 'Assignment 3',
          progress: '20%',
          currentStatus: 'future-due',
        },
        {
          id: 4,
          name: 'Assignment 4',
          progress: '20%',
          currentStatus: 'future-due',
        },
        {
          id: 5,
          name: 'Assignment 5',
          progress: '10%',
          currentStatus: 'future-due',
        },
        {
          id: 6,
          name: 'Assignment 6',
          progress: '30%',
          currentStatus: 'future-due',
        },
      ]
    }
  ]

  const gridTemplateCols = unitsData.map(() => 'minmax(0, 1fr)').join(' ')

  return (

    <ul className="units" style={{gridTemplateColumns: gridTemplateCols}}>
      {unitsData.map((unit, index) => (
        <Unit key={unit.unitCode} {...unit} />
      ))}
    </ul>
  )
}

export default UnitList
