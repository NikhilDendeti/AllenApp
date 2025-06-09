import { SocialIcon } from 'react-social-icons';
import '../stylying/footer.css';

const footerLinks = [
  {
    heading: 'About',
    links: [
      'About us', 'Blog', 'News', 'MyExam EduBlogs', 'Privacy policy', 'Public notice', 'Careers', 'Dhoni Inspires NEET Aspirants', 'Dhoni Inspires JEE Aspirants'
    ]
  },
  {
    heading: 'Help & Support',
    links: [
      'Refund policy', 'Transfer policy', 'Terms & Conditions', 'Contact us'
    ]
  },
  {
    heading: 'Popular goals',
    links: [
      'NEET Coaching', 'JEE Coaching', '6th to 10th'
    ]
  },
  {
    heading: 'Courses',
    links: [
      'Online Courses', 'Distance Learning', 'Online Test Series', 'International Olympiads Online Course', 'NEET Test Series', 'JEE Test Series', 'JEE Main Test Series'
    ]
  },
  {
    heading: 'Centers',
    links: [
      'Kota', 'Bangalore', 'Indore', 'Delhi', 'More centres'
    ]
  }
];

const Footer = () => {
  return (
    <footer className="footer-container">
        <div className="footer-container-inner">
        <div className="footer-image">
        <img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/f_avif/v1731483494/light_sx6iyk.webp" alt="Footer Banner" />
      </div>
      <div className="footer-links-row">
        {footerLinks.map((section, idx) => (
          <div className="footer-link-section" key={idx}>
            <h4>{section.heading}</h4>
            <ul style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
              {section.links.map((link, i) => (
                <li key={i}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom-row">
        <div className="footer-icons">
          <SocialIcon url="https://www.youtube.com/" target="_blank" bgColor="#fff" fgColor="#FF0000" style={{ height: 40, width: 40 }} />
          <SocialIcon url="https://www.facebook.com/" target="_blank" bgColor="#fff" fgColor="#1877F3" style={{ height: 40, width: 40 }} />
          <SocialIcon url="https://www.linkedin.com/" target="_blank" bgColor="#fff" fgColor="#0A66C2" style={{ height: 40, width: 40 }} />
        </div>
        <div className="footer-copyright">
          <span>ALLEN Career Institute Pvt. Ltd. © All Rights Reserved.</span>
        </div>
        <div className="footer-iso">
          <img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_120,f_avif,q_auto/v1738753226/riir9wdiqn81z2vaadny.webp" alt="ISRO Logo" height="40" style={{ marginLeft: '16px' }} />
        </div>
      </div>
        </div>
    </footer>
  );
}

export default Footer;