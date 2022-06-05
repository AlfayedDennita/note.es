function FilterNotesForm({ filterNotesEvent, filterQuery }) {
  return (
    <form>
      <label className="input-group" title="Judul Catatan">
        Judul Catatan
        <input type="text" placeholder="Masukkan pencarian ..." value={filterQuery} onChange={filterNotesEvent} />
      </label>
    </form>
  );
}

export default FilterNotesForm;
