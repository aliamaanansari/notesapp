import React, { useState } from 'react'
import { Note } from './models/note.models'
import Header from './components/Header'
import './App.css'
import { Container, Row, Col } from 'react-bootstrap'
import NotesList from './components/NotesList'
import CreateNotes from './components/CreateNotes'

function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date(
        'Thu Nov 24 2022 19:32:10 GMT+0530 (India Standard Time)'
      ).toString(),
      title: 'Meetings',
      text: 'Schedule meeting with ui ux team',
      color: '#dfdfdf',
      date: new Date(
        'Thu Nov 24 2022 19:32:10 GMT+0530 (India Standard Time)'
      ).toString(),
    },
  ])

  return (
    <>
      <Header />
      <Container className='mt-5'>
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNotes notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
