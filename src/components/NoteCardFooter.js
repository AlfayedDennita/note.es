function NoteCardFooter({
  noteId, isArchived, toggleNoteStatusEvent, deleteNoteEvent
}) {
  const toggleNoteStatusIcon = isArchived ? 'fas fa-rotate-left fa-fw' : 'fas fa-file-zipper fa-fw';
  const toggleNoteStatusTitle = isArchived ? 'Kembalikan' : 'Arsipkan';

  return (
    <footer>
        <ul className="actions">
          <li>
            <button
              className="button"
              type="button"
              title={toggleNoteStatusTitle}
              onClick={() => toggleNoteStatusEvent(noteId)}>
                <i className={toggleNoteStatusIcon}></i> {toggleNoteStatusTitle}
            </button>
          </li>
          <li>
            <button
              className="button"
              type="button"
              title="Hapus"
              onClick={() => deleteNoteEvent(noteId)}>
                <i className="fas fa-trash fa-fw"></i> Hapus
            </button>
          </li>
        </ul>
      </footer>
  );
}

export default NoteCardFooter;
