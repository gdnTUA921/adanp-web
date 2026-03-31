import { FaCamera, FaPlay } from 'react-icons/fa';
import Hero from '../components/Hero';
import Section from '../components/Section';
import './Gallery.css';

function Gallery() {
  // Placeholder images - using colored divs for demo
  const galleryImages = [
    { id: 1, title: 'Annual Convention 2025', category: 'Events' },
    { id: 2, title: 'Certification Ceremony', category: 'Events' },
    { id: 3, title: 'Board Meeting', category: 'Leadership' },
    { id: 4, title: 'Training Workshop', category: 'Education' },
    { id: 5, title: 'Member Gathering', category: 'Events' },
    { id: 6, title: 'Award Presentation', category: 'Awards' },
    { id: 7, title: 'Laser Training Session', category: 'Education' },
    { id: 8, title: 'Regional Conference', category: 'Events' },
    { id: 9, title: 'New Member Orientation', category: 'Membership' },
  ];

  const videos = [
    { id: 1, title: 'ADANP Introduction', duration: '3:45' },
    { id: 2, title: 'Convention Highlights 2025', duration: '5:20' },
    { id: 3, title: 'Member Testimonials', duration: '4:15' },
  ];

  return (
    <div className="gallery">
      {/* Hero Section */}
      <Hero
        title="Gallery"
        subtitle="Our Moments"
        overlayColor="navy"
      />

      {/* Photo Gallery */}
      <Section variant="white">
        <div className="section-header">
          <h2 className="section-title">Photo Gallery</h2>
          <p className="section-subtitle">
            Capturing moments from our events, trainings, and gatherings
          </p>
        </div>
        <div className="gallery-filters">
          <button className="filter-btn active">All</button>
          <button className="filter-btn">Events</button>
          <button className="filter-btn">Education</button>
          <button className="filter-btn">Awards</button>
          <button className="filter-btn">Leadership</button>
        </div>
        <div className="photo-grid">
          {galleryImages.map((image) => (
            <div key={image.id} className="photo-item">
              <div className="photo-placeholder">
                <span className="photo-icon"><FaCamera /></span>
              </div>
              <div className="photo-info">
                <span className="photo-category">{image.category}</span>
                <h4>{image.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Video Section */}
      <Section variant="light">
        <div className="section-header">
          <h2 className="section-title">Video Gallery</h2>
          <p className="section-subtitle">
            Watch highlights from our events and educational content
          </p>
        </div>
        <div className="video-grid">
          {videos.map((video) => (
            <div key={video.id} className="video-item">
              <div className="video-placeholder">
                <div className="play-button"><FaPlay /></div>
                <span className="video-duration">{video.duration}</span>
              </div>
              <h4>{video.title}</h4>
            </div>
          ))}
        </div>
        <div className="text-center" style={{ marginTop: 'var(--spacing-xl)' }}>
          <a href="#" className="btn btn-outline-navy">View More Videos</a>
        </div>
      </Section>

      {/* Share Your Photos */}
      <Section variant="navy">
        <div className="share-cta text-center">
          <h3>Share Your ADANP Moments</h3>
          <p>
            Were you at an ADANP event? Share your photos with us!
            We'd love to feature your pictures in our gallery.
          </p>
          <a href="mailto:secretariat@adanp.org" className="btn btn-primary btn-large">
            Submit Photos
          </a>
        </div>
      </Section>
    </div>
  );
}

export default Gallery;
