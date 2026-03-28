import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';
import './News.css';

function News() {
  const newsItems = [
    {
      id: 1,
      title: 'ADANP Annual Convention 2026',
      category: 'Event',
      date: 'March 15, 2026',
      excerpt: 'Join us for our biggest annual event featuring world-class speakers, workshops, and networking opportunities.',
      image: null
    },
    {
      id: 2,
      title: 'New Certification Cycle Opens',
      category: 'Announcement',
      date: 'February 1, 2026',
      excerpt: 'Applications are now being accepted for the CAN, DNP, and FADANP certification examinations.',
      image: null
    },
    {
      id: 3,
      title: 'CPD Program: Advanced Laser Therapy',
      category: 'Education',
      date: 'January 20, 2026',
      excerpt: 'Register now for our upcoming continuing education program on advanced laser therapy techniques.',
      image: null
    },
    {
      id: 4,
      title: 'ADANP Research Grant Recipients Announced',
      category: 'News',
      date: 'January 10, 2026',
      excerpt: 'Congratulations to our 2026 research grant recipients who will be advancing dermatology nursing science.',
      image: null
    },
    {
      id: 5,
      title: 'Membership Drive 2026',
      category: 'Membership',
      date: 'December 15, 2025',
      excerpt: 'Special membership rates available for new members joining before the end of the year.',
      image: null
    },
    {
      id: 6,
      title: 'Partnership with International Dermatology Association',
      category: 'Partnership',
      date: 'December 1, 2025',
      excerpt: 'ADANP announces new partnership to provide global learning opportunities for members.',
      image: null
    }
  ];

  const calendarEvents = [
    { date: 'Mar 15-17, 2026', event: 'Annual Convention', location: 'Manila' },
    { date: 'Jun 15, 2026', event: 'CAN Examination', location: 'Multiple Centers' },
    { date: 'Sep 20, 2026', event: 'DNP Examination', location: 'Cebu' },
    { date: 'Nov 10, 2026', event: 'FADANP Examination', location: 'Davao' },
  ];

  return (
    <div className="news">
      {/* Hero Section */}
      <Hero
        title="News & Events"
        subtitle="Stay Updated"
        overlayColor="navy"
      />

      {/* Latest News */}
      <Section variant="white">
        <div className="section-header">
          <h2 className="section-title">Latest News</h2>
          <p className="section-subtitle">
            Keep up with the latest announcements, events, and updates from ADANP
          </p>
        </div>
        <div className="news-grid">
          {newsItems.map((item) => (
            <Card 
              key={item.id}
              title={item.title}
              subtitle={`${item.category} • ${item.date}`}
            >
              <p>{item.excerpt}</p>
              <a href="#" className="read-more-link">Read More →</a>
            </Card>
          ))}
        </div>
      </Section>

      {/* Calendar Section */}
      <Section variant="light">
        <div className="section-header">
          <h2 className="section-title">Event Calendar</h2>
          <p className="section-subtitle">
            Upcoming events and important dates
          </p>
        </div>
        <div className="calendar-content">
          <div className="calendar-list">
            <h3>2026 Schedule</h3>
            <ul className="event-list">
              {calendarEvents.map((event, index) => (
                <li key={index} className="event-item">
                  <div className="event-date">{event.date}</div>
                  <div className="event-details">
                    <h4>{event.event}</h4>
                    <span className="event-location">📍 {event.location}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="calendar-cta">
            <h3>Host an Event</h3>
            <p>
              Interested in hosting an ADANP event in your region? 
              Contact us to learn more about bringing our programs to your area.
            </p>
            <a href="/contact" className="btn btn-primary">Contact Us</a>
          </div>
        </div>
      </Section>

      {/* Media Releases */}
      <Section variant="white">
        <div className="section-header">
          <h2 className="section-title">Media Releases</h2>
          <p className="section-subtitle">
            Official statements and press releases from ADANP
          </p>
        </div>
        <div className="media-releases">
          <div className="release-item">
            <span className="release-date">January 2026</span>
            <h4>ADANP Statement on Aesthetic Procedure Safety Standards</h4>
            <p>
              The Association reaffirms its commitment to patient safety and 
              professional standards in aesthetic nursing practice.
            </p>
            <a href="#" className="download-link">📄 Download PDF</a>
          </div>
          <div className="release-item">
            <span className="release-date">December 2025</span>
            <h4>ADANP Welcomes New PRC Guidelines for Dermatology Nursing</h4>
            <p>
              The association expresses support for new regulatory frameworks 
              that enhance professional standards.
            </p>
            <a href="#" className="download-link">📄 Download PDF</a>
          </div>
        </div>
      </Section>

      {/* Awards Section */}
      <Section variant="navy">
        <div className="section-header">
          <h2 className="section-title">Awards & Recognition</h2>
          <p className="section-subtitle">
            Celebrating excellence in dermatology and aesthetic nursing
          </p>
        </div>
        <div className="awards-grid">
          <div className="award-item">
            <span className="award-icon">🏆</span>
            <h4>Nurse of the Year Award</h4>
            <p>
              Recognizing outstanding contributions to dermatology and 
              aesthetic nursing practice.
            </p>
          </div>
          <div className="award-item">
            <span className="award-icon">⭐</span>
            <h4>Excellence in Education Award</h4>
            <p>
              Honoring members who demonstrate exceptional commitment 
              to education and mentorship.
            </p>
          </div>
          <div className="award-item">
            <span className="award-icon">🔬</span>
            <h4>Research Achievement Award</h4>
            <p>
              Celebrating significant contributions to dermatology 
              nursing research.
            </p>
          </div>
        </div>
        <div className="text-center" style={{ marginTop: 'var(--spacing-xl)' }}>
          <a href="#" className="btn btn-outline-light">View Past Recipients</a>
        </div>
      </Section>
    </div>
  );
}

export default News;
