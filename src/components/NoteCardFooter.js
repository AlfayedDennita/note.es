import NoteCardAction from "./NoteCardAction";

function NoteCardFooter({
  isArchived, toggleNoteStatusEvent, deleteNoteEvent,
}) {
  const toggleNoteStatusIcon = isArchived ? 'fas fa-rotate-left' : 'fas fa-file-zipper';
  const toggleNoteStatusTitle = isArchived ? 'Kembalikan' : 'Arsipkan';

  return (
    <footer>
      <NoteCardAction
        iconClassName={toggleNoteStatusIcon}
        title={toggleNoteStatusTitle}
        onClickEvent={toggleNoteStatusEvent}
      />
      <NoteCardAction
        iconClassName="fas fa-trash"
        title="Hapus"
        onClickEvent={deleteNoteEvent}
      />
    </footer>
  );
}

export default NoteCardFooter;
