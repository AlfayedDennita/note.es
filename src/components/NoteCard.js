import NoteCardHeader from './NoteCardHeader';
import NoteCardBody from './NoteCardBody';
import NoteCardFooter from './NoteCardFooter';

function NoteCard({
  noteId, title, body, isArchived, createdAt, toggleNoteStatusEvent, deleteNoteEvent
}) {
  return (
    <article className="note-card">
      <NoteCardHeader title={title} createdAt={createdAt} />
      <NoteCardBody body={body} />
      <NoteCardFooter
        noteId={noteId}
        isArchived={isArchived}
        toggleNoteStatusEvent={toggleNoteStatusEvent}
        deleteNoteEvent={deleteNoteEvent}
      />
    </article>
  );
}

export default NoteCard;
