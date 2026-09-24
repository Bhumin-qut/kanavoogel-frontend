import Alert from 'react-bootstrap/Alert'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'
import { useWallet } from '../hooks/useWallet'
import { formatLabel, formatPercent } from '../utils/format'

export function SkillsWallet() {
  const { wallet, loading, error } = useWallet()

  if (loading) {
    return (
      <div className="text-center py-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading skills wallet</span>
        </Spinner>
      </div>
    )
  }

  if (error || !wallet) {
    return <Alert variant="danger">{error ?? 'Skills wallet is unavailable.'}</Alert>
  }

  return (
    <section>
      <h1 className="h3">Digital Skills Wallet</h1>
      <p className="text-secondary">
        Completed assessments are stored as skill evidence. Coin allocation stays pending until stakeholder rules are approved.
      </p>
      {!wallet.skills.length ? (
        <Alert variant="light">No skill evidence yet.</Alert>
      ) : (
        <Row className="g-3">
          {wallet.skills.map((skill) => (
            <Col md={6} key={skill.skillId}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title className="h5">{skill.skillName}</Card.Title>
                  <div>Evidence score: {formatPercent(skill.evidenceScore)}</div>
                  <div>Completed assessments: {skill.completedAssessments}</div>
                  <div className="text-secondary">{formatLabel(skill.coinAllocationStatus)}</div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </section>
  )
}
