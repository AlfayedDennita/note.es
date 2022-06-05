import React from "react";
import SectionCardHeader from "./SectionCardHeader";
import SectionCardContent from './SectionCardContent';

class SectionCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isContentOpened: true,
    };

    this.toggleContentEvent = this.toggleContentEvent.bind(this);
  }

  toggleContentEvent() {
    this.setState((previousState) => {
      return {
        ...previousState,
        isContentOpened: !previousState.isContentOpened,
      };
    });
  }

  render() {
    const {
      id, iconClassName, title, children,
    } = this.props;

    return (
      <section id={id} className="section-card">
        <SectionCardHeader
          iconClassName={iconClassName}
          title={title}
          isContentOpened={this.state.isContentOpened}
          toggleContentEvent={this.toggleContentEvent}
        />
        {
          this.state.isContentOpened
          &&
          <SectionCardContent>
            {children}
          </SectionCardContent>
        }
      </section>
    );
  }
}

export default SectionCard;
