import { useState } from 'react'

// A simple notes page: type a note, press Add, and it appears in the list below.
export default function NotesPage() {
  const [text, setText] = useState('')
  const [notes, setNotes] = useState([])

  function addNote() {
    const note = text.trim()
    if (!note) return
    setNotes([...notes, note])
    setText('')
  }

  return (
    <main style={{ maxWidth: 560, margin: '0 auto', padding: 24, fontFamily: 'system-ui, sans-serif' }}>
      <h1>Notes</h1>
      <div style={{ display: 'flex', gap: 8 }}>
        <input
          type="text"
          value={text}
          placeholder="Write a note..."
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') addNote()
          }}
          style={{ flex: 1, padding: 8, fontSize: 16 }}
        />
        <button type="button" onClick={addNote} style={{ padding: '8px 16px', fontSize: 16 }}>
          Add
        </button>
      </div>
      <ul style={{ paddingLeft: 20 }}>
        {notes.map((note, index) => (
          <li key={index} style={{ margin: '8px 0' }}>
            {note}
          </li>
        ))}
      </ul>
    </main>
  )
}
