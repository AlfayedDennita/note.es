import SectionCard from "./SectionCard";
import AddNoteForm from "./AddNoteForm";
import FilterNotesForm from "./FilterNotesForm";
import NoteCardContainer from "./NoteCardContainer";

function Main({
  addNoteEvent, newNoteTitle, newNoteBody, newNoteTitleEvent, newNoteBodyEvent, newNoteTitleMaxLength, filterNotesEvent, filterQuery, unarchivedNotes, archivedNotes, toggleNoteStatusEvent, deleteNoteEvent,
}) {
  return (
    <main className="container">
      <SectionCard id="add-note-card" iconClassName="fas fa-add" title="Buat Catatan Baru">
        <AddNoteForm
          addNoteEvent={addNoteEvent}
          newNoteTitle={newNoteTitle}
          newNoteBody={newNoteBody}
          newNoteTitleEvent={newNoteTitleEvent}
          newNoteBodyEvent={newNoteBodyEvent}
          newNoteTitleMaxLength={newNoteTitleMaxLength}
        />
      </SectionCard>
      <SectionCard id="filter-notes-card" iconClassName="fas fa-filter" title="Filter Catatan">
        <FilterNotesForm
          filterNotesEvent={filterNotesEvent}
          filterQuery={filterQuery}
        />
      </SectionCard>
      <SectionCard id="unarchived-notes-card" iconClassName="fas fa-clipboard-list" title="Daftar Catatan">
        <NoteCardContainer
          notes={unarchivedNotes}
          toggleNoteStatusEvent={toggleNoteStatusEvent}
          deleteNoteEvent={deleteNoteEvent}
          filterQuery={filterQuery}
        />
      </SectionCard>
      <SectionCard id="archived-notes-card" iconClassName="fas fa-file-zipper" title="Catatan Terarsip">
        <NoteCardContainer
          notes={archivedNotes}
          toggleNoteStatusEvent={toggleNoteStatusEvent}
          deleteNoteEvent={deleteNoteEvent}
          filterQuery={filterQuery}
        />
      </SectionCard>
    </main>
  );
}

export default Main;
