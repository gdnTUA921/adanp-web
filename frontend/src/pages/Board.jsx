import Hero from '../components/Hero';
import Section from '../components/Section';
import PersonCard from '../components/PersonCard';
import './Board.css';

// Placeholder data for officers - can be updated with real data
const nationalOfficers = [
  { id: 1, name: 'Maria Santos', title: 'National President', image: null },
  { id: 2, name: 'Elena Reyes', title: 'National Vice President', image: null },
  { id: 3, name: 'Carmen Delgado', title: 'National Secretary', image: null },
  { id: 4, name: 'Rosa Fernandez', title: 'National Treasurer', image: null },
  { id: 5, name: 'Luz Mercado', title: 'PRO', image: null },
  { id: 6, name: 'Ana Garcia', title: 'Business Manager', image: null },
];

const boardMembers = [
  { id: 1, name: 'Patricia Cruz', title: 'Board Member - Luzon', image: null },
  { id: 2, name: 'Teresa Lopez', title: 'Board Member - Visayas', image: null },
  { id: 3, name: 'Gloria Ramos', title: 'Board Member - Mindanao', image: null },
  { id: 4, name: 'Sofia Diaz', title: 'Board Member - NCR', image: null },
  { id: 5, name: 'Isabel Torres', title: 'Board Member - Education', image: null },
  { id: 6, name: 'Dolores Silva', title: 'Board Member - Certification', image: null },
];

function Board() {
  return (
    <div className="board">
      {/* Hero Section */}
      <Hero
        title="Board of Officers"
        subtitle="Leadership"
        overlayColor="navy"
      />

      {/* National Officers */}
      <Section variant="white" id="officers">
        <div className="section-header">
          <h2 className="section-title">National Officers</h2>
          <p className="section-subtitle">
            Meet the dedicated leaders guiding ADANP
          </p>
        </div>
        <div className="board-grid">
          {nationalOfficers.map((officer) => (
            <PersonCard
              key={officer.id}
              name={officer.name}
              title={officer.title}
              image={officer.image}
            />
          ))}
        </div>
      </Section>

      {/* Board Members */}
      <Section variant="light" id="members">
        <div className="section-header">
          <h2 className="section-title">Board Members</h2>
          <p className="section-subtitle">
            Regional and committee representatives
          </p>
        </div>
        <div className="board-grid">
          {boardMembers.map((member) => (
            <PersonCard
              key={member.id}
              name={member.name}
              title={member.title}
              image={member.image}
            />
          ))}
        </div>
      </Section>

      {/* Contact CTA */}
      <Section variant="navy">
        <div className="board-cta text-center">
          <h3>Want to Connect with Our Board?</h3>
          <p>
            For official communications with board members, please contact us 
            through our secretariat or use the officer email format:
          </p>
          <code className="email-format">firstname.lastname@adanp.org</code>
          <p className="contact-email">
            Or email us at: <a href="mailto:secretariat@adanp.org">secretariat@adanp.org</a>
          </p>
        </div>
      </Section>
    </div>
  );
}

export default Board;
