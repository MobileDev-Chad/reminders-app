import React from "react";
import Reminder from "../models/Reminder";
import { List, ListItem, ListItemText, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

interface ReminderListProps {
  items: Reminder[];
}

function ReminderList({ items }: ReminderListProps) {
  return (
    <>
      <List>
        {items.map((item) => (
          <ListItem key={item.id}>
            <ListItemText primary={item.title} />
            <Button
              variant="outlined"
              color="error"
              startIcon={<DeleteIcon />}
              onClick={() => {
                alert("clicked");
              }}
            >
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ReminderList;
