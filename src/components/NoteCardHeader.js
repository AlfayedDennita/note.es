import { showFormattedDate } from '../utils';

function NoteCardHeader({ title, createdAt }) {
  return (
    <header>
      <h3>{title}</h3>
      <p className="date">{showFormattedDate(createdAt)}</p>
    </header>
  );
}

export default NoteCardHeader;
