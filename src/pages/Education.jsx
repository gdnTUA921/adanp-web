import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';
import InfoBox from '../components/InfoBox';
import Button from '../components/Button';
import './Education.css';

function Education() {
  return (
    <div className="education">
      {/* Hero Section */}
      <Hero
        title="Education & Training"
        subtitle="Continuous Learning"
        overlayColor="navy"
      />

      {/* MSN Program */}
      <Section variant="white" id="msn">
        <div className="section-header">
          <h2 className="section-title">Master of Science in Nursing</h2>
          <p className="section-subtitle">
            Dermatology & Aesthetic Nursing Specialization
          </p>
        </div>
        <div className="msn-content">
          <div className="msn-description">
            <p className="lead-text">
              Our Master of Science in Nursing program with specialization in 
              Dermatology & Aesthetic Nursing provides advanced education for 
              nurses seeking to become leaders in this specialized field.
            </p>
            <p>
              This comprehensive program combines theoretical knowledge with 
              hands-on clinical training, preparing graduates for advanced 
              practice roles in dermatology clinics, aesthetic centers, 
              academic institutions, and research facilities.
            </p>
          </div>
          <div className="msn-details">
            <InfoBox icon="📚" title="Program Details" variant="light">
              <ul>
                <li><strong>Duration:</strong> 2 years (full-time)</li>
                <li><strong>Format:</strong> Hybrid (online + clinical)</li>
                <li><strong>Credits:</strong> 45 units</li>
                <li><strong>Clinical Hours:</strong> 500+ hours</li>
              </ul>
            </InfoBox>
          </div>
        </div>

        {/* Learning Outcomes */}
        <div className="learning-outcomes">
          <h3 className="outcome-title">Learning Outcomes</h3>
          <div className="outcomes-grid">
            <div className="outcome-item">
              <span className="outcome-icon">🔬</span>
              <h4>Advanced Clinical Knowledge</h4>
              <p>
                Demonstrate expertise in diagnosing and managing complex 
                dermatological conditions and aesthetic procedures.
              </p>
            </div>
            <div className="outcome-item">
              <span className="outcome-icon">⚕️</span>
              <h4>Evidence-Based Practice</h4>
              <p>
                Apply current research and evidence-based guidelines to 
                optimize patient outcomes in dermatology care.
              </p>
            </div>
            <div className="outcome-item">
              <span className="outcome-icon">👥</span>
              <h4>Leadership Skills</h4>
              <p>
                Lead interdisciplinary teams and advocate for patients 
                in dermatology and aesthetic healthcare settings.
              </p>
            </div>
            <div className="outcome-item">
              <span className="outcome-icon">📊</span>
              <h4>Research Competency</h4>
              <p>
                Design and conduct research studies to advance the 
                science of dermatology nursing practice.
              </p>
            </div>
            <div className="outcome-item">
              <span className="outcome-icon">🎓</span>
              <h4>Education & Mentorship</h4>
              <p>
                Educate patients, families, and healthcare professionals 
                on dermatology and aesthetic nursing topics.
              </p>
            </div>
            <div className="outcome-item">
              <span className="outcome-icon">🌍</span>
              <h4>Professional Ethics</h4>
              <p>
                Uphold ethical standards and cultural sensitivity in 
                all aspects of dermatology nursing practice.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CPD Programs */}
      <Section variant="light">
        <div className="section-header">
          <h2 className="section-title">Continuing Professional Development</h2>
          <p className="section-subtitle">
            Stay current with the latest advances in dermatology and aesthetic nursing
          </p>
        </div>
        <div className="cpd-grid">
          <Card title="Workshops & Seminars" subtitle="Hands-On Learning">
            <p>
              Participate in intensive workshops covering laser therapy, 
              chemical peels, microneedling, injectables, and other 
              advanced aesthetic procedures.
            </p>
            <Button variant="outline-navy" size="small">View Schedule</Button>
          </Card>
          <Card title="Online Courses" subtitle="Flexible Learning">
            <p>
              Access self-paced online modules covering dermatology 
              fundamentals, pharmacology, patient assessment, and 
              safety protocols.
            </p>
            <Button variant="outline-navy" size="small">Browse Courses</Button>
          </Card>
          <Card title="Annual Convention" subtitle="Premier Event">
            <p>
              Join our annual national convention featuring renowned 
              speakers, scientific sessions, and networking opportunities.
            </p>
            <Button variant="outline-navy" size="small">Learn More</Button>
          </Card>
        </div>
      </Section>

      {/* Research & Development */}
      <Section variant="white">
        <div className="section-header">
          <h2 className="section-title">Research & Development</h2>
        </div>
        <div className="research-content">
          <div className="research-info">
            <InfoBox icon="🔬" title="Research Initiatives" variant="default">
              <p>
                ADANP supports and promotes research in dermatology and 
                aesthetic nursing through grants, mentorship, and 
                publication opportunities.
              </p>
              <ul>
                <li>Annual research grants for members</li>
                <li>Research mentorship program</li>
                <li>Collaboration with academic institutions</li>
                <li>Publication in ADANP Journal</li>
              </ul>
            </InfoBox>
          </div>
          <div className="research-journal">
            <h3>ADANP Journal</h3>
            <p>
              The official publication of ADANP features peer-reviewed 
              articles, case studies, and research findings in dermatology 
              and aesthetic nursing.
            </p>
            <ul className="journal-features">
              <li>Quarterly publication</li>
              <li>Peer-reviewed articles</li>
              <li>Case reports and reviews</li>
              <li>Online and print access for members</li>
            </ul>
            <Button variant="primary" size="small">Access Journal</Button>
          </div>
        </div>
      </Section>

      {/* Certification Exams */}
      <Section variant="navy">
        <div className="section-header">
          <h2 className="section-title">Certification Examinations</h2>
          <p className="section-subtitle">
            Validate your expertise with ADANP certifications
          </p>
        </div>
        <div className="cert-exams-grid">
          <div className="exam-card">
            <h4>Certified Aesthetic Nurse</h4>
            <p>CAN Examination</p>
            <Button variant="outline-light" size="small">Learn More</Button>
          </div>
          <div className="exam-card">
            <h4>Dermatology Nurse Practitioner</h4>
            <p>DNP Examination</p>
            <Button variant="outline-light" size="small">Learn More</Button>
          </div>
          <div className="exam-card">
            <h4>Fellow of ADANP</h4>
            <p>FADANP Examination</p>
            <Button variant="outline-light" size="small">Learn More</Button>
          </div>
        </div>
        <div className="text-center" style={{ marginTop: 'var(--spacing-xl)' }}>
          <Button variant="primary" size="large">View Certification Programs</Button>
        </div>
      </Section>

      {/* Resources */}
      <Section variant="light">
        <div className="section-header">
          <h2 className="section-title">Educational Resources</h2>
        </div>
        <div className="resources-grid">
          <InfoBox icon="📖" title="Digital Library" variant="default">
            <p>
              Access our comprehensive digital library with textbooks, 
              journals, guidelines, and clinical resources.
            </p>
          </InfoBox>
          <InfoBox icon="🎥" title="Video Library" variant="default">
            <p>
              Watch procedural videos, lecture recordings, and 
              demonstration videos from expert practitioners.
            </p>
          </InfoBox>
          <InfoBox icon="📱" title="Mobile App" variant="default">
            <p>
              Download the ADANP mobile app for on-the-go access 
              to resources, news, and member community.
            </p>
          </InfoBox>
        </div>
      </Section>
    </div>
  );
}

export default Education;
