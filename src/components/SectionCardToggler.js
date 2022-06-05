function SectionCardToggler({ isContentOpened, toggleContentEvent }) {
  const contentTogglerTitle = isContentOpened ? 'Sembunyikan' : 'Tampilkan';
  const contentTogglerIcon = isContentOpened ? 'fas fa-eye fa-fw' : 'fas fa-eye-slash fa-fw';

  return (
    <button type="button" title={contentTogglerTitle} onClick={toggleContentEvent}>
      <i className={contentTogglerIcon}></i>
    </button>
  );
}

export default SectionCardToggler;
