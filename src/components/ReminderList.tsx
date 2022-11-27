import React from "react";
import Reminder from "../models/Reminder";
import { List, ListItem, ListItemText, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface ReminderListProps {
  items: Reminder[];
  onRemoveReminder: (id: number) => void;
}

function ReminderList({ items, onRemoveReminder }: ReminderListProps) {
  return (
    <>
      <List sx={{ width: "100%", maxWidth: 690, bgcolor: "background.paper" }}>
        {items.map((item) => (
          <ListItem
            key={item.id}
            secondaryAction={
              <Button
                variant="outlined"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={() => {
                  onRemoveReminder(item.id);
                }}
              >
                Delete
              </Button>
            }
          >
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ReminderList;
