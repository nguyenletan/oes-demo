import TimeLine from './TimeLine'
import UnitList from './UnitList'
import UpcomingAssignments from './UpcomingAssignments'
import DiscussionBoard from './DiscussionBoard'

const ProgressDashboard = (props) => {

  const timeLineData = {
    teachingPeriod: 'TP1 2022',
    currentWeek: 'week 3',
    weeks: [
      {
        name: 'week 0',
        startDate: '2022-08-01',
        assignments: [],
      },
      {
        name: 'week 1',
        startDate: '2022-08-08',
        assignments: [],
      },
      {
        name: 'week 2',
        startDate: '2022-08-15',
        assignments: [],
      },
      {
        name: 'week 3',
        startDate: '2022-08-22',
        assignments: [
          {
            currentStatus: 'submitted', //submitted, overdue, future-due
            color: '#FD5D10',
            unitCode: 'EDU10001',
            unitName: 'Introduction to Computer Science',
          },
          {
            currentStatus: 'submitted', //submitted, overdue, future-due
            color: '#1770AB',
            unitCode: 'EDU10002',
            unitName: 'Introduction to Computer Science',
          },
        ],
      },
      {
        name: 'week 4',
        startDate: '2022-08-29',
        assignments: [
          {
            currentStatus: 'future-due', //submitted, overdue, future-due
            color: '#FD5D10',
            unitCode: 'EDU10001',
            unitName: 'Introduction to Computer Science',
            url: 'https://course.com',
          },
          {
            currentStatus: 'future-due', //submitted, overdue, future-due
            color: '#1770AB',
            unitCode: 'EDU10002',
            unitName: 'Introduction to Computer Science',
          },
        ],
      },
      {
        name: 'week 5',
        startDate: '2022-09-05',
        assignments: [
          {
            currentStatus: 'future-due', //submitted, overdue, future-due
            color: '#06A3B7',
            unitCode: 'EDU10003',
            unitName: 'Introduction to Computer Science',
          },
        ],
      },
      {
        name: 'week 6',
        startDate: '2022-09-12',
        assignments: [],
      },
      {
        name: 'consolidation',
        startDate: '2022-09-19',
      },
      {
        name: 'week 7', startDate: '2022-09-26', assignments: [],
      },
      {
        name: 'week 8', startDate: '2022-10-03', assignments: [
          {
            currentStatus: 'future-due', //submitted, overdue, future-due
            color: '#FD5D10',
            unitCode: 'EDU10001',
            unitName: 'Introduction to Computer Science',
          },
          {
            currentStatus: 'future-due', //submitted, overdue, future-due
            color: '#1770AB',
            unitCode: 'EDU10002',
            unitName: 'Introduction to Computer Science',
          },
          {
            currentStatus: 'future-due', //submitted, overdue, future-due
            color: '#06A3B7',
            unitCode: 'EDU10003',
            unitName: 'Introduction to Computer Science',
          },
        ],
      },
      {
        name: 'week 9', startDate: '2022-10-10', assignments: [],
      },
      {
        name: 'week 10', startDate: '2022-10-17', assignments: [],
      },
      {
        name: 'week 11', startDate: '2022-10-24', assignments: [],
      },
      {
        name: 'week 12', startDate: '2022-10-31', assignments: [
          {
            currentStatus: 'future-due', //submitted, overdue, future-due
            color: '#FD5D10',
            unitCode: 'EDU10001',
            unitName: 'Introduction to Computer Science',
          },
          {
            currentStatus: 'future-due', //submitted, overdue, future-due
            color: '#1770AB',
            unitCode: 'EDU10002',
            unitName: 'Introduction to Computer Science',
          },
          {
            currentStatus: 'future-due', //submitted, overdue, future-due
            color: '#06A3B7',
            unitCode: 'EDU10003',
            unitName: 'Introduction to Computer Science',
          },
          {
            currentStatus: 'future-due', //submitted, overdue, future-due
            color: '#65499D',
            unitCode: 'EDU10004',
            unitName: 'Introduction to Computer Science',
          },
        ],
      },
    ],
  }

  const upcomingAssignmentsComponent = [
    {
      color: '#FD5D10', // hex value
      backgroundColor: '#FFEFE7', // if don't have, we will use lighter function to find lighter color
      dueDate: '2022-09-08', // YYYY-MM-DD
      dueWeek: 'week 4',
      url: 'https://assignment-detail', // assignment detail link
      assignmentOrder: 'Assignment 2',
      assignmentName: 'Personal Reflection',
      unitCode: 'EDU10003',
      unitName: 'Personal Reflection',
      unitUrl: 'https://unit-detail', //unit detail link
    },
    {
      color: '#06A3B7', // hex value
      backgroundColor: '#E6F6F8', // if don't have, we will use lighter function to find lighter color
      dueDate: '2022-09-09', // YYYY-MM-DD
      dueWeek: 'week 4',
      url: 'https://assignment-detail', // assignment detail link
      assignmentOrder: 'Assignment 1',
      assignmentName: 'Presentation - Story of learning',
      unitCode: 'EDU10004',
      unitName: 'Theories of Teaching and Learning',
      unitUrl: 'https://unit-detail', //unit detail link
    },
    {
      color: '#1770AB', // hex value
      backgroundColor: '#DFF2FA', // if don't have, we will use lighter function to find lighter color
      dueDate: '2022-09-15', // YYYY-MM-DD
      dueWeek: 'week 4',
      url: 'https://assignment-detail', // assignment detail link
      assignmentOrder: 'Assignment 2',
      assignmentName: 'Essay',
      unitCode: 'EDU10002',
      unitName: 'Understanding Language and Literacy',
      unitUrl: 'https://unit-detail', //unit detail link
    },
  ]


  const discussionBoardData = [
    {
      color: '#FD5D10', // hex value
      backgroundColor: '#FFEFE7',
      newMessageBackgroundColor: '#FD5D10B2',
      url: 'https://discussion-detail',
      discussionOrder: '1.2',//String or Decimal should ask OES
      discussionTitle: '1.6 Discussion: Learning styles',
      numberOfNewMessages: 2,
      numberOfMessages: 15,
    },
    {
      color: '#06A3B7', // hex value
      backgroundColor: '#E6F6F8',
      url: 'https://discussion-detail',
      discussionOrder: '1.2',//String or Decimal should ask OES
      discussionTitle: '1.2 Discussion 1: Introduce yourself',
      numberOfNewMessages: 3,
      numberOfMessages: 12,
    },
    {
      color: '#FD5D10', // hex value
      backgroundColor: '#FFEFE7',
      url: 'https://discussion-detail',
      discussionOrder: '1.2',//String or Decimal should ask OES
      discussionTitle: '2.5 Discussion: Maths versus numeracy',
      numberOfNewMessages: 0,
      numberOfMessages: 15,
    },
    {
      color: '#65499D', // hex value
      backgroundColor: '#F0EDF5',
      url: 'https://discussion-detail',
      discussionOrder: '1.2',//String or Decimal should ask OES
      discussionTitle: '1.4 Discussion 1: Introduce yourself',
      numberOfNewMessages: 0,
      numberOfMessages: 10,
    },
    {
      color: '#1770AB', // hex value
      backgroundColor: '#DFF2FA',
      url: 'https://discussion-detail',
      discussionOrder: '1.2',//String or Decimal should ask OES
      discussionTitle: '1.5 Discussion 2: Helping children reach language milestones',
      numberOfNewMessages: 0,
      numberOfMessages: 8,
    }
  ]

  return (
    <div className="progress-dashboard">
      <TimeLine teachingPeriod={timeLineData.teachingPeriod} currentWeek={timeLineData.currentWeek}
                weeks={timeLineData.weeks}/>

      <UnitList/>

      <div className="upcoming-discussion">
        <UpcomingAssignments assignments={upcomingAssignmentsComponent}/>
        <DiscussionBoard discussions={discussionBoardData}/>
      </div>
    </div>
  )
}

export default ProgressDashboard