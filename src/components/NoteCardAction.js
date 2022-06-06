function NoteCardAction({
  iconClassName, title, onClickEvent,
}) {
  iconClassName += ' fa-fw';

  return (
    <button
      className="button"
      type="button"
      title={title}
      onClick={onClickEvent}>
        <i className={iconClassName}></i> {title}
    </button>
  );
}

export default NoteCardAction;
