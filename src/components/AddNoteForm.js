function AddNoteForm({
  addNoteEvent, newNoteTitle, newNoteBody, newNoteTitleEvent, newNoteBodyEvent, newNoteTitleMaxLength,
}) {
  const remainingCharactersOnTitle = newNoteTitleMaxLength - newNoteTitle.length;

  return (
    <form onSubmit={addNoteEvent}>
      <label className="input-group" title="Judul Catatan">
        <p className="title-input-label"><span>Judul</span><span>Sisa Karakter: {remainingCharactersOnTitle}</span></p>
        <input type="text" value={newNoteTitle} onChange={newNoteTitleEvent} required />
      </label>
      <label className="input-group" title="Isi Catatan">
        Isi Catatan
        <textarea value={newNoteBody} onChange={newNoteBodyEvent} required></textarea>
      </label>
      <section className="form-buttons">
        <button className="button" type="submit" title="Buat Catatan">Buat Catatan</button>
      </section>
    </form>
  );
}

export default AddNoteForm;
