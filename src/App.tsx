import React, { useState, useEffect } from "react";
import ReminderList from "./components/ReminderList";
import Reminder from "./models/Reminder";
import ReminderService from "./services/reminder";

// const reminders: Reminder[] = [{ id: 1, title: "Reminder 1" }];

export default function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    const reminders = await ReminderService.getReminders();
    setReminders(reminders);
  };
  return (
    <div className="App">
      <ReminderList items={reminders} />
    </div>
  );
}
