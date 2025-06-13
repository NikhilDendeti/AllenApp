import '../stylying/more.css';


const focusData = [
  {
    title: "Technology",
    description:
      "Solving the pain points of teachers & students, through AI-powered technology, making learning seamless.",
    imageSrc: "https://i.ibb.co/8489JNrV/transform.jpg",
  },
  {
    title: "Holistic Care",
    description:
      "Being a support system for students beyond academics, nurturing their emotional and mental well-being.",
    imageSrc: "https://i.ibb.co/Z6KcgPqq/heart.jpg",  
  },
  {
    title: "Accessibility",
    description:
      "Breaking barriers to quality education. Every student, regardless of their location, deserves educational excellence.",
    imageSrc: "https://i.ibb.co/23NdP79f/human.jpg", 
  },
  {
    title: "Community",
    description:
      "Creating a community of learners, nurturing a feeling of belonging that drives each person towards success.",
    imageSrc: "https://i.ibb.co/d4m3spZd/commune.jpg", 
    
  },
];
const blogData = [
  {
    image: "https://res.cloudinary.com/dpzpn3dkw/image/upload/v1722342296/misc/09_w3ihnk.jpg", 
    readTime: "5 Min Read",
    title: "Tips to Boost NEET UG Score",
    description: "Leveraging ratings & feedback to enhance...",
    author: "Team Allen"
  },
  {
    image: "https://res.cloudinary.com/dpzpn3dkw/image/upload/v1722342298/misc/10_kkjzaq.jpg", 
    readTime: "—",
    title: "SOF Olympiad",
    description: "A non-profit organization established by...",
    author: "Team Allen"
  },
  {
    image: "https://res.cloudinary.com/dpzpn3dkw/image/upload/v1722342295/misc/07_om7ei5.jpg",
    readTime: "2 Min Read",
    title: "Study hacks of toppers – Key to success",
    description: "Most of the Toppers admitted that they lik...",
    author: "Team Allen"
  }
];
function More() {
  return (
    <>
    <div className="all-container">
      <div className="text-container">
        <h1 className="heading-title">
          At Allen,<br />
          <span>we solve problems</span>
        </h1>
        <p className = "para">Wherever you are, ALLEN is there for you. Study in Kota, study at a centre near you, or online.</p>
        <div className="info-container">
          <h1 className="info">36+<br></br>Years of teaching</h1>
          <h1 className="info">30L+<br></br>Students mentored</h1>
          <h1 className="info">7.4K<br></br>Top-notch faculty</h1>
        </div>
      </div>
      <div className="img-container">
        <img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1721130651/misc/3_l0v8pg.webp" className="allen-more"></img>
      </div>
    </div>
    <div className = "journey-image-container">
      <img src="https://asset.allen.in/32184116-038a-42a5-b2a9-2715353bf7ba/original.webp" className="journey-image"></img>
    </div>
    <div className = "journey-image-container">
      <img src="https://asset.allen.in/1666f789-97ef-4c7b-9e96-59fb4bfb68b9/original.webp" className="journey-image"></img>
    </div>
    <div className = "journey-image-container">
      <img src="https://i.ibb.co/DH6qT4yd/impact.jpg" className="journey-image"></img>
    </div>
    <div className = "journey-image-container">
      <img src="https://i.ibb.co/8DxfS7YP/morevision.jpg" className="journey-image"></img>
    </div>
    <section className="focus-section">
      <p className="focus-subtitle">OUR FOCUS</p>
      <h2 className="focus-title">We’re transforming how India learns</h2>
      <div className="focus-cards-container">
        {focusData.map((item, index) => (
          <div key={index} className="focus-card">
            <img src={item.imageSrc} alt={item.title} className="focus-icon" />
            <h3 className="focus-heading">{item.title}</h3>
            <p className="focus-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
    <div className = "journey-image-container">
      <img src="https://i.ibb.co/xSqVPzCr/join.jpg" className="journey-image"></img>
    </div>
    <section className="blog-section">
      <h2 className="blog-title">Stories from our team</h2>
      <div className="blog-cards-container">
        {blogData.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <p className="blog-read-time">{blog.readTime}</p>
            <h3 className="blog-heading">{blog.title}</h3>
            <p className="blog-description">{blog.description}</p>
            <div className="blog-footer">
              <div className="blog-author-icon">A</div>
              <span className="blog-author">{blog.author}</span>
              {blog.readTime && <span className="blog-dot">•</span>}
              <span className="blog-footer-time">{blog.readTime}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="explore-button-container">
      <button className="explore-button">Explore Blogs</button>
    </div>
      </section>
    </>
  )
}

export default More