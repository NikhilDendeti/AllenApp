import '../stylying/testseries.css'

const courses1 = [
  {
    id: 1,
    type: ['RECORDED'],
    title: 'Leader Self–Study Plus',
    description: 'Video Lectures + Test Series',
    features: [
      'Latest recordings covering full syllabus',
      'Digital study material incl. books, RACEs & more',
      '32 (part + full) syllabus tests',
    ],
    price: '₹16,900',
    taxNote: '+ Taxes applicable',
    linkText: 'Know more',
  },
  {
    id: 2,
    type: ['RECORDED'],
    title: 'Leader Self–Study Classic',
    description: 'Video Lectures',
    features: [
      'Latest recordings covering full syllabus',
      'Digital study material incl. books, RACEs & more',
    ],
    price: '₹12,500',
    taxNote: '+ Taxes applicable',
    linkText: 'Know more',
  }
];
const testSeries = [
  {
    id: 1,
    type: ['ONLINE TEST SERIES'],
    title: 'Leader Test Series: Target 2026',
    description: 'All India Test Series – ONLINE mode',
    features: [
      '32 (part + full) syllabus tests',
      'Detailed solutions of all questions',
      "Exclusive ALLEN's Question Bank",
    ],
    price: '₹7,200',
    taxNote: '+ Taxes applicable',
    linkText: 'Know more',
  },
  {
    id: 2,
    type: ['OFFLINE TEST SERIES'],
    title: 'Leader Test Series (Allen DLP)',
    description: 'All India Test Series – CBT + PEN & PAPER mode',
    features: [
      '38 (part + full) syllabus tests',
      'Access largest network of 300+ test centers',
    ],
    price: '₹11,016',
    taxNote: '+ Taxes applicable',
    linkText: 'Know more',
  }
];
const practicePackage = [
  {
    id: 1,
    type: ['PRACTICE'],
    title: 'Leader Practice Package',
    description: 'Allen Question Bank',
    features: [
      '51000+ curated questions covering full syllabus',
      'RACEs, PYQs and more',
    ],
    price: '₹1,600',
    taxNote: '+ Taxes applicable',
    linkText: 'Know more',
  }
];


function Testseries() {
  return (
    <>
    <div className="course-list">
      <div>
      <h1 className='headcourse'>Self Study Courses</h1>
      <hr/>
      <div className='part1content'>
        {courses1.map((course) => (
          <div key={course.id} className="class-card">
            <div className="badge-container">
              {course.type.map((badge, index) => (
                <span
                  key={index}
                  className={`badge ${badge === 'SCHOLARSHIP ELIGIBLE' ? 'scholarship' : 'default-badge'}`}
                >
                  {badge}
                </span>
              ))}
            </div>
            <h2 className="course-title">{course.title}</h2>
            <p className="course-description">{course.description}</p>
            <ul className="course-features">
                {course.features.map((feature, index) => (
                    <li key={index}><span className="tick">✔</span> {feature}</li>
                ))}
            </ul>
            <div className="join">
              <p className="course-price">
                {course.price}
                <span className="course-tax-note">{course.taxNote}</span>
              </p>
              <a href="#" className="course-link">{course.linkText} →</a>
            </div>
          </div>
        ))}
      </div>
      <div>
      </div>
      <h1 className='headcourse'>Test Series - JEE (Main + Advanced)</h1>
      <hr/>
      <div className='part1content'>
        {testSeries.map((course) => (
          <div key={course.id} className="class-card">
            <div className="badge-container">
              {course.type.map((badge, index) => (
                <span
                  key={index}
                  className={`badge ${badge === 'SCHOLARSHIP ELIGIBLE' ? 'scholarship' : 'default-badge'}`}
                >
                  {badge}
                </span>
              ))}
            </div>
            <h2 className="course-title">{course.title}</h2>
            <p className="course-description">{course.description}</p>
            <ul className="course-features">
              {course.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <div className="join">
              <p className="course-price">
                {course.price}
                <span className="course-tax-note">{course.taxNote}</span>
              </p>
              <a href="#" className="course-link">{course.linkText} →</a>
            </div>
          </div>
        ))}
      </div>
      </div>
      <div>
      <h1 className='headcourse'>Practice Package</h1>
      <hr/>
      <div className='part1content'>
        {practicePackage.map((course) => (
          <div key={course.id} className="class-card">
            <div className="badge-container">
              {course.type.map((badge, index) => (
                <span
                  key={index}
                  className={`badge ${badge === 'SCHOLARSHIP ELIGIBLE' ? 'scholarship' : 'default-badge'}`}
                >
                  {badge}
                </span>
              ))}
            </div>
            <h2 className="course-title">{course.title}</h2>
            <p className="course-description">{course.description}</p>
            <ul className="course-features">
              {course.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <div className="join">
              <p className="course-price">
                {course.price}
                <span className="course-tax-note">{course.taxNote}</span>
              </p>
              <a href="#" className="course-link">{course.linkText} →</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
    </>
  )
}

export default Testseries