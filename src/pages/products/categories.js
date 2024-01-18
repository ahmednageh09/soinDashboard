import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap'

export default function Categories() {
  return (
    <>
      <div>
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle>Accordion Item #1</Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body> Accordion content</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </>
  )
}
