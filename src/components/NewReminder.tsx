import React, { FormEvent, useState } from "react";

interface NewReminderListProps {
    onAddReminder: (title: string) => void;
  }


function NewReminder({onAddReminder}:NewReminderListProps): JSX.Element {
  const [title, setTitle] = useState("");

const submitForm = (e: FormEvent) => {
    e.preventDefault();
    if(!title) return;
    onAddReminder(title);
    setTitle('');
}

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="titile"></label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        id="title"
        type="text"
        className="form-control"
      />
      <button type="submit" className="btn">
        Add Reminder
      </button>
    </form>
  );
}

export default NewReminder;
