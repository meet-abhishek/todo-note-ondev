function addNote(event: Event) {
  event.preventDefault();
  console.log(event);

  console.log("Note Added");
}

function handleNoteForm(event: SubmitEvent) {
  event.preventDefault();

  console.log(event);
  console.log("Note Handled");
}

function handleNoteChange(e: Event) {
  console.log(e);
  console.log("Note handle is changing");
}

function openNote(e: Event) {
  console.log(e);
  console.log("Note Opened");
}

function tempMsg(event: MouseEvent) {
  event.preventDefault();
  event.stopPropagation();

  // const temporaryMsgDiv = document.createElement("p");
  // temporaryMsgDiv.id = "temporaryMsgDiv";
  // temporaryMsgDiv.textContent =
  //   "Thank You,<br> This is a Vanilla Typescript Project.<br> Features are not stable...";

  alert("Thank You,\nThis is a Vanilla Typescript Project.\nFeatures are not stable...")
  console.log(event);
  console.log("Note Handled");
}

export { addNote, handleNoteForm, handleNoteChange, openNote, tempMsg };
