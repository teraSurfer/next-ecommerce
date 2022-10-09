import Head from 'next/head'
import Image from 'next/image'
import { Card, Container } from 'react-bootstrap'

export default function Home() {
  return (
    <Container>
      <Card className="mt-2">
        <Card.Body>Hello!</Card.Body>
      </Card>
    </Container>
  )
}
