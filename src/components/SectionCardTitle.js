function SectionCardTitle({ iconClassName, title }) {
  iconClassName += ' fa-fw';

  return (
    <h2>
      <i className={iconClassName}></i> {title}
    </h2>
  );
}

export default SectionCardTitle;
