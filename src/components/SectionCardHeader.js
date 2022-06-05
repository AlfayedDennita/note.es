import SectionCardTitle from "./SectionCardTitle";
import SectionCardToggler from "./SectionCardToggler";

function SectionCardHeader({
  iconClassName, title, isContentOpened, toggleContentEvent
}) {
  return (
    <header>
      <SectionCardTitle
        iconClassName={iconClassName}
        title={title}
      />
      <SectionCardToggler
        isContentOpened={isContentOpened}
        toggleContentEvent={toggleContentEvent}
      />
    </header>
  );
}

export default SectionCardHeader;
