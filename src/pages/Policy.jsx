import Hero from '../components/Hero';
import Section from '../components/Section';
import InfoBox from '../components/InfoBox';
import Card from '../components/Card';
import './Policy.css';

function Policy() {
  return (
    <div className="policy">
      {/* Hero Section */}
      <Hero
        title="Policy & Advocacy"
        subtitle="Professional Standards"
        overlayColor="navy"
      />

      {/* Professional Concerns */}
      <Section variant="white">
        <div className="section-header">
          <h2 className="section-title">Professional Concerns</h2>
          <p className="section-subtitle">
            Addressing issues that affect dermatology and aesthetic nursing practice
          </p>
        </div>
        <div className="concerns-grid">
          <InfoBox 
            icon="⚖️" 
            title="Scope of Practice"
            variant="default"
          >
            <p>
              ADANP advocates for clear guidelines defining the scope of practice 
              for dermatology and aesthetic nurses, ensuring patient safety and 
              professional accountability.
            </p>
          </InfoBox>
          <InfoBox 
            icon="📋" 
            title="Standards of Care"
            variant="default"
          >
            <p>
              We develop and promote evidence-based standards of care for 
              dermatology and aesthetic procedures, protecting both patients 
              and practitioners.
            </p>
          </InfoBox>
          <InfoBox 
            icon="🛡️" 
            title="Patient Safety"
            variant="default"
          >
            <p>
              Patient safety is our paramount concern. We advocate for proper 
              training, certification, and oversight in all aesthetic procedures.
            </p>
          </InfoBox>
          <InfoBox 
            icon="📜" 
            title="Ethical Practice"
            variant="default"
          >
            <p>
              ADANP promotes ethical practice standards, including informed 
              consent, honest marketing, and appropriate patient selection 
              for procedures.
            </p>
          </InfoBox>
          <InfoBox 
            icon="🏛️" 
            title="Regulatory Affairs"
            variant="default"
          >
            <p>
              We work with regulatory bodies including the PRC to ensure 
              fair and appropriate regulation of dermatology and aesthetic 
              nursing practice.
            </p>
          </InfoBox>
          <InfoBox 
            icon="📧" 
            title="Contact Us"
            variant="navy"
          >
            <p>
              Have a professional concern? Reach out to our advocacy team:
            </p>
            <a href="mailto:professionalconcerns@adanp.org" className="contact-link">
              professionalconcerns@adanp.org
            </a>
          </InfoBox>
        </div>
      </Section>

      {/* Position Statements */}
      <Section variant="light">
        <div className="section-header">
          <h2 className="section-title">Position Statements</h2>
          <p className="section-subtitle">
            ADANP's official positions on key issues in dermatology and aesthetic nursing
          </p>
        </div>
        <div className="positions-list">
          <Card title="Position on Injectable Procedures" subtitle="2024">
            <p>
              ADANP maintains that injectable aesthetic procedures should only be 
              performed by properly trained and certified healthcare professionals 
              with appropriate supervision and emergency protocols in place.
            </p>
            <a href="#" className="read-more">Read Full Position →</a>
          </Card>
          <Card title="Position on Laser Safety" subtitle="2024">
            <p>
              Laser and energy-based device treatments require comprehensive 
              training, understanding of skin types, and adherence to safety 
              protocols to prevent adverse events.
            </p>
            <a href="#" className="read-more">Read Full Position →</a>
          </Card>
          <Card title="Position on Tele-Dermatology" subtitle="2023">
            <p>
              ADANP supports the responsible use of tele-deratology while 
              emphasizing the importance of appropriate patient assessment 
              and follow-up care standards.
            </p>
            <a href="#" className="read-more">Read Full Position →</a>
          </Card>
        </div>
      </Section>

      {/* Resolutions */}
      <Section variant="white">
        <div className="section-header">
          <h2 className="section-title">Resolutions</h2>
          <p className="section-subtitle">
            Official resolutions passed by the ADANP Board and membership
          </p>
        </div>
        <div className="resolutions-content">
          <div className="resolution-item">
            <div className="resolution-year">2024</div>
            <div className="resolution-text">
              <h4>Resolution on Mandatory Certification</h4>
              <p>
                BE IT RESOLVED that ADANP supports mandatory certification for 
                nurses performing advanced aesthetic procedures to ensure patient 
                safety and professional competency.
              </p>
            </div>
          </div>
          <div className="resolution-item">
            <div className="resolution-year">2023</div>
            <div className="resolution-text">
              <h4>Resolution on Continuing Education</h4>
              <p>
                BE IT RESOLVED that all ADANP members must complete a minimum 
                of 30 CPD units every 3 years to maintain active membership status.
              </p>
            </div>
          </div>
          <div className="resolution-item">
            <div className="resolution-year">2023</div>
            <div className="resolution-text">
              <h4>Resolution on Ethical Marketing</h4>
              <p>
                BE IT RESOLVED that ADANP members shall adhere to ethical 
                marketing practices, avoiding misleading claims and ensuring 
                truthful representation of services.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Advocacy CTA */}
      <Section variant="navy">
        <div className="advocacy-cta text-center">
          <h3>Get Involved in Advocacy</h3>
          <p>
            Join our advocacy efforts to shape the future of dermatology and 
            aesthetic nursing in the Philippines. Your voice matters.
          </p>
          <a href="mailto:professionalconcerns@adanp.org" className="btn btn-primary btn-large">
            Contact Our Advocacy Team
          </a>
        </div>
      </Section>
    </div>
  );
}

export default Policy;
