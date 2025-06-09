import React from 'react';
import '../stylying/coursepicker.css';

const courses = [
  {
    title: 'JEE Courses',
    link: '#',
    image: 'https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729079766/jee_vd0eql.webp'
  },
  {
    title: 'NEET Courses',
    link: '#',
    image: 'https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729079856/U_neet_ngbo57.webp'
  },
  {
    title: 'Courses for class 6–10',
    link: '#',
    image: 'https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729079855/grade_6_10_ilhkeb.webp'
  }
];

const CoursePicker = () => {
  return (
    <section className="course-picker-section">
      <h2 className="section-heading">Pick the right course for you</h2>
      <div className="course-cards">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <h3 className="card-title">{course.title}</h3>
            <a href={course.link} className="view-link">
              View Courses →
            </a>
            <img src={course.image} alt={course.title} className="course-image" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursePicker;