import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';
import InfoBox from '../components/InfoBox';
import logo from '../assets/adanp-logo.jpg';
import './About.css';

function About() {
  return (
    <div className="about">
      {/* Hero Section */}
      <Hero
        title="About ADANP"
        subtitle="Our Story"
        overlayColor="navy"
      />

      {/* History Section */}
      <Section variant="white">
        <div className="section-header">
          <h2 className="section-title">Our History</h2>
        </div>
        <div className="history-content">
          <div className="history-timeline">
            <div className="timeline-item">
              <div className="timeline-year">2015</div>
              <div className="timeline-content">
                <h4>Foundation as PANSA</h4>
                <p>
                  The organization was founded as the Philippine Aesthetic Nurses Society of 
                  America (PANSA), establishing the foundation for professional dermatology 
                  and aesthetic nursing in the Philippines.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2016</div>
              <div className="timeline-content">
                <h4>Renamed to PNAAP</h4>
                <p>
                  The organization was renamed to Philippine Nurses Association for 
                  Aesthetic Practice (PNAAP), reflecting a broader scope of practice 
                  and national identity.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2018</div>
              <div className="timeline-content">
                <h4>Becomes ADANP</h4>
                <p>
                  The organization evolved into the Association of Dermatology and 
                  Aesthetic Nurses of the Philippines (ADANP), encompassing both 
                  dermatology and aesthetic nursing specialties.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">Present</div>
              <div className="timeline-content">
                <h4>PRC Recognition & Growth</h4>
                <p>
                  ADANP continues to grow with Professional Regulation Commission (PRC) 
                  recognition, conducting annual conventions, certification programs, 
                  and continuing education initiatives for nurses nationwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section variant="light">
        <div className="section-header">
          <h2 className="section-title">Mission & Vision</h2>
        </div>
        <div className="mv-grid">
          <div className="mv-card">
            <div className="mv-icon">🎯</div>
            <h3>Mission</h3>
            <p>
              To lead Filipino nurses in providing advanced quality care through 
              competency-based dermatology and aesthetic nursing education, certification, 
              and professional development programs.
            </p>
          </div>
          <div className="mv-card">
            <div className="mv-icon">👁️</div>
            <h3>Vision</h3>
            <p>
              To empower Filipino nurses to uphold professional standards in patient 
              care and safety within dermatology and aesthetic practice, establishing 
              excellence as the hallmark of Filipino nursing professionals.
            </p>
          </div>
        </div>
      </Section>

      {/* Core Values */}
      <Section variant="white">
        <div className="section-header">
          <h2 className="section-title">Core Values</h2>
        </div>
        <div className="values-list">
          <InfoBox icon="⭐" title="Excellence">
            We strive for the highest standards in dermatology and aesthetic nursing 
            practice, education, and patient care.
          </InfoBox>
          <InfoBox icon="🤝" title="Integrity">
            We uphold honesty, transparency, and ethical conduct in all our professional 
            endeavors and relationships.
          </InfoBox>
          <InfoBox icon="📜" title="Professionalism">
            We demonstrate competence, accountability, and respect in our interactions 
            with patients, colleagues, and the community.
          </InfoBox>
          <InfoBox icon="🎓" title="Competency">
            We commit to continuous learning and skill development to provide 
            evidence-based, quality care.
          </InfoBox>
          <InfoBox icon="❤️" title="Service">
            We dedicate ourselves to serving patients, the nursing profession, and 
            the community with compassion and commitment.
          </InfoBox>
        </div>
      </Section>

      {/* Definitions Section */}
      <Section variant="light">
        <div className="section-header">
          <h2 className="section-title">Understanding Our Field</h2>
          <p className="section-subtitle">
            Key definitions in dermatology and aesthetic nursing
          </p>
        </div>
        <div className="definitions-grid">
          <Card title="Dermatology Aesthetic Nursing" subtitle="Definition">
            <p>
              A specialized field of nursing that combines the science of dermatology 
              with aesthetic procedures. It encompasses the care of patients with 
              skin conditions while also providing cosmetic and aesthetic treatments 
              to enhance appearance and boost confidence.
            </p>
          </Card>
          <Card title="Dermatology Nurse" subtitle="Definition">
            <p>
              A registered nurse who specializes in providing care to patients with 
              various skin conditions, including acne, eczema, psoriasis, skin cancer, 
              and other dermatological disorders. They work alongside dermatologists 
              in clinical settings.
            </p>
          </Card>
          <Card title="Dermatology Aesthetic Nurse" subtitle="Definition">
            <p>
              A specialized nurse trained in both medical dermatology and cosmetic 
              procedures. They perform treatments such as laser therapy, chemical 
              peels, injectables, and other aesthetic procedures while maintaining 
              the highest standards of patient safety and care.
            </p>
          </Card>
        </div>
      </Section>
    </div>
  );
}

export default About;
