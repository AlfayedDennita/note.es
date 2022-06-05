import React from 'react';
import { getInitialData } from '../utils';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      newNoteTitle: '',
      newNoteBody: '',
      newNoteTitleMaxLength: 50,
      filterQuery: '',
    };

    this.addNoteEvent = this.addNoteEvent.bind(this);
    this.newNoteTitleEvent = this.newNoteTitleEvent.bind(this);
    this.newNoteBodyEvent = this.newNoteBodyEvent.bind(this);
    this.filterNotesEvent = this.filterNotesEvent.bind(this);
    this.toggleNoteStatusEvent = this.toggleNoteStatusEvent.bind(this);
    this.deleteNoteEvent = this.deleteNoteEvent.bind(this);
  }

  getNoteById(noteId) {
    return this.state.notes.filter((note) => note.id === noteId)[0];
  }

  addNoteEvent(event) {
    event.preventDefault();

    const newNote = {
      id: +new Date(),
      title: this.state.newNoteTitle,
      body: this.state.newNoteBody,
      archived: false,
      createdAt: new Date(),
    };

    this.setState((previousState) => {
      return {
        ...previousState,
        newNoteTitle: '',
        newNoteBody: '',
        notes: [...previousState.notes, newNote],
      };
    });
  }

  newNoteTitleEvent(event) {
    const title = event.target.value;
    const titleMaxLength = this.state.newNoteTitleMaxLength;

    this.setState((previousState) => {
      return {
        ...previousState,
        newNoteTitle: title.length <= titleMaxLength ? title : previousState.newNoteTitle,
      };
    });
  }

  newNoteBodyEvent(event) {
    this.setState((previousState) => {
      return {
        ...previousState,
        newNoteBody: event.target.value,
      };
    });
  }

  filterNotesEvent(event) {
    this.setState((previousState) => {
      return {
        ...previousState,
        filterQuery: event.target.value,
      }
    });
  }

  toggleNoteStatusEvent(noteId) {
    this.setState((previousState) => {
      return {
        ...previousState,
        notes: previousState.notes.map((note) => note.id === noteId ? {...note, archived: !note.archived} : note),
      };
    });
  }

  deleteNoteEvent(noteId) {
    const isUserConfirmed = window.confirm(`Apa kamu yakin ingin menghapus catatan "${this.getNoteById(noteId).title}"?`);

    if (isUserConfirmed) {
      this.setState((previousState) => {
        return {
          ...previousState,
          notes: previousState.notes.filter((note) => note.id !== noteId),
        };
      });
    }
  }

  render() {
    return (
      <>
        <Header />
        <Main
          addNoteEvent={this.addNoteEvent}
          newNoteTitle={this.state.newNoteTitle}
          newNoteBody={this.state.newNoteBody}
          newNoteTitleEvent={this.newNoteTitleEvent}
          newNoteBodyEvent={this.newNoteBodyEvent}
          newNoteTitleMaxLength={this.state.newNoteTitleMaxLength}
          filterNotesEvent={this.filterNotesEvent}
          filterQuery={this.state.filterQuery}
          unarchivedNotes={this.state.notes.filter((note) => note.archived === false)}
          archivedNotes={this.state.notes.filter((note) => note.archived === true)}
          toggleNoteStatusEvent={this.toggleNoteStatusEvent}
          deleteNoteEvent={this.deleteNoteEvent}
        />
        <Footer />
      </>
    );
  };
}

export default App;
