import NoteCard from "./NoteCard";

function NoteCardContainer({
  notes, toggleNoteStatusEvent, deleteNoteEvent, filterQuery,
}) {
  const filteredNotes = notes.filter((note) => note.title.toLowerCase().indexOf(filterQuery.toLowerCase()) >= 0);
  const isNotesEmpty = filteredNotes.length <= 0;

  return (
    <section className="content">
      {
        isNotesEmpty
        ? <p className="notes-empty-message">Tidak ada catatan</p>
        : filteredNotes.map((note) => (
          <NoteCard
            key={note.id}
            title={note.title}
            body={note.body}
            isArchieved={note.archieved}
            createdAt={note.createdAt}
            toggleNoteStatusEvent={() => toggleNoteStatusEvent(note.id)}
            deleteNoteEvent={() => deleteNoteEvent(note.id)}
          />
        ))
      }
    </section>
  );
}

export default NoteCardContainer;
