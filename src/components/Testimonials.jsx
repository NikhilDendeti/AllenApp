import '../stylying/testimonials.css';

const testimonialsData = [
  {
    name: "SARTH PATIL",
    exam: "NEET-UG 2024",
    score: "710/720",
    image: "https://i.ibb.co/S4vnPS7V/person.jpg",
    content: "I chose ALLEN Online Courses because I wanted to balance my NEET prep with my school schedule. The course structure, from daily homework to post-class handouts, was well-organized.",
  },
  {
    name: "SEKH GALIB RAZA",
    exam: "NEET-UG 2024",
    score: "690/720",
    image: "https://i.ibb.co/S4vnPS7V/person.jpg",
    content: "I took NEET in 2023 but didn’t achieve my desired score, so I reattempted in 2024 with ALLEN Online Courses. The top-quality faculty, study material, & personalised experience on the ALLEN app helped me improve my score.",
  },
  {
    name: "AVIK DAS",
    exam: "JEE Adv. 2024",
    score: "AIR 69",
    image: "https://i.ibb.co/S4vnPS7V/person.jpg",
    content: "I wanted to stay with my family while preparing for JEE, so I chose ALLEN Online Courses. The faculty was great & the live classes, daily homework & test series helped me secure a great score & rank!",
  },
  {
    name: "SHIFA FATIMA",
    exam: "NEET-UG 2024",
    score: "696/720",
    image: "https://i.ibb.co/S4vnPS7V/person.jpg",
    content: "I came to know about ALLEN’s Online Test Series from my senior in school. The tests are really awesome as these are based mainly on NCERT and cover almost all types of NEET questions. They gave me the real feel of the competition.",
  },
];

function Testimonials() {
  return (
    <div className="testimonial-section">
      <h2 className="title">Testimonials from our students</h2>
      <div className="testimonial-container">
        {testimonialsData.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <div className="quote-container">
              <img src="https://allen.in/quotes.svg" className="quote" alt="Quote" />
            </div>
            <p className="content">{item.content}</p>
            <div className="student-info">
              <img src={item.image} alt={item.name} className="student-image" />
              <div>
                <p className="name">{item.name}</p>
                <p className="details">{item.exam}, Score {item.score}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;