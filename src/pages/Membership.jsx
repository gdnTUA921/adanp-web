import { FaGraduationCap, FaScroll, FaHandshake, FaBook, FaTrophy, FaBriefcase } from 'react-icons/fa';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';
import InfoBox from '../components/InfoBox';
import Table from '../components/Table';
import Button from '../components/Button';
import './Membership.css';

function Membership() {
  const membershipCategories = [
    {
      title: 'Basic Membership',
      description: 'For nursing students and recent graduates interested in dermatology and aesthetic nursing.',
      features: ['Access to newsletters', 'Student resources', 'Mentorship program', 'Event discounts']
    },
    {
      title: 'Regular Membership',
      description: 'For licensed registered nurses practicing or interested in dermatology and aesthetic nursing.',
      features: ['Full voting rights', 'CPD opportunities', 'Certification eligibility', 'Network access', 'Journal subscription']
    },
    {
      title: 'Life Membership',
      description: 'Permanent membership with all benefits of regular membership plus lifetime recognition.',
      features: ['All regular benefits', 'Lifetime status', 'Hall of Fame eligibility', 'Legacy recognition']
    },
    {
      title: 'Associate Membership',
      description: 'For healthcare professionals and industry partners supporting dermatology nursing.',
      features: ['Networking opportunities', 'Educational resources', 'Event participation', 'Industry updates']
    },
    {
      title: 'Institutional Membership',
      description: 'For clinics, hospitals, and educational institutions supporting dermatology nursing education.',
      features: ['Multiple member slots', 'Training programs', 'Recruitment support', 'Partnership benefits']
    }
  ];

  const membershipFees = [
    { category: 'Basic', applicationFee: '₱500', annualFee: '₱1,000', lifetime: 'N/A' },
    { category: 'Regular', applicationFee: '₱1,000', annualFee: '₱2,500', lifetime: '₱25,000' },
    { category: 'Life', applicationFee: '₱1,000', annualFee: 'N/A', lifetime: '₱25,000' },
    { category: 'Associate', applicationFee: '₱1,500', annualFee: '₱3,000', lifetime: '₱30,000' },
    { category: 'Institutional', applicationFee: '₱5,000', annualFee: '₱15,000', lifetime: '₱150,000' },
  ];

  return (
    <div className="membership">
      {/* Hero Section */}
      <Hero
        title="Membership"
        subtitle="Join Our Community"
        overlayColor="navy"
      />

      {/* Introduction */}
      <Section variant="white">
        <div className="section-header">
          <h2 className="section-title">Why Join ADANP?</h2>
        </div>
        <div className="membership-intro">
          <p className="lead-text">
            Becoming a member of ADANP connects you with a vibrant community of
            dermatology and aesthetic nursing professionals dedicated to excellence
            in patient care and professional development.
          </p>
        </div>

        <div className="benefits-grid">
          <InfoBox icon={<FaGraduationCap />} title="Professional Development">
            Access exclusive continuing professional development (CPD) programs,
            workshops, and seminars to enhance your skills.
          </InfoBox>
          <InfoBox icon={<FaScroll />} title="Certification Pathways">
            Eligibility for CAN, DNP, and FADANP certification programs that
            advance your career.
          </InfoBox>
          <InfoBox icon={<FaHandshake />} title="Networking">
            Connect with fellow professionals, mentors, and industry leaders
            through events and online communities.
          </InfoBox>
          <InfoBox icon={<FaBook />} title="Resources">
            Receive the ADANP journal, newsletters, and access to a comprehensive
            library of dermatology resources.
          </InfoBox>
          <InfoBox icon={<FaTrophy />} title="Recognition">
            Opportunities for awards, leadership roles, and recognition within
            the dermatology nursing community.
          </InfoBox>
          <InfoBox icon={<FaBriefcase />} title="Career Support">
            Job postings, recruitment assistance, and career development resources
            for members at all stages.
          </InfoBox>
        </div>
      </Section>

      {/* Membership Categories */}
      <Section variant="light">
        <div className="section-header">
          <h2 className="section-title">Membership Categories</h2>
          <p className="section-subtitle">
            Choose the membership that fits your career stage and goals
          </p>
        </div>
        <div className="categories-grid">
          {membershipCategories.map((category, index) => (
            <Card key={index} title={category.title} variant="default">
              <p>{category.description}</p>
              <ul className="category-features">
                {category.features.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* Membership Fees */}
      <Section variant="white">
        <div className="section-header">
          <h2 className="section-title">Membership Fees</h2>
          <p className="section-subtitle">
            Transparent pricing for all membership types
          </p>
        </div>
        <Table 
          columns={[
            { header: 'Category', accessor: 'category' },
            { header: 'Application Fee', accessor: 'applicationFee' },
            { header: 'Annual Fee', accessor: 'annualFee' },
            { header: 'Lifetime Option', accessor: 'lifetime' },
          ]}
          data={membershipFees}
          className="fees-table"
        />
        <p className="fee-note">
          * Fees are subject to change. Please contact the membership department 
          for the most current information.
        </p>
      </Section>

      {/* How to Apply */}
      <Section variant="navy">
        <div className="section-header">
          <h2 className="section-title">How to Apply</h2>
        </div>
        <div className="apply-steps">
          <div className="step">
            <span className="step-number">1</span>
            <h4>Choose Your Category</h4>
            <p>Select the membership category that best fits your qualifications and goals.</p>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <h4>Complete Application</h4>
            <p>Fill out the membership application form and gather required documents.</p>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <h4>Submit & Pay</h4>
            <p>Submit your application with the required fees to the membership department.</p>
          </div>
          <div className="step">
            <span className="step-number">4</span>
            <h4>Receive Welcome</h4>
            <p>Upon approval, receive your membership certificate and welcome package.</p>
          </div>
        </div>
        <div className="apply-cta">
          <Button variant="primary" size="large">Apply Now</Button>
          <Button variant="outline-light" size="large">Contact Membership</Button>
        </div>
      </Section>
    </div>
  );
}

export default Membership;
