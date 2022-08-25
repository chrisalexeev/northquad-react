import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  IconButton,
  List,
  Divider,
  ListItem,
  ListItemText,
  Typography
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  removeSong,
  selectSongList,
} from "./songListSlice";

import { setIsOpen, setSongId } from "../settings/settingsSlice"

export function SongList() {

  const songList = useSelector(selectSongList);
  const dispatch = useDispatch();

  const handleEdit = (id) => {
    dispatch(setSongId(id));
    dispatch(setIsOpen(true));
  }
  
  const handleDelete = (id) => {
    dispatch(removeSong(id));
  };

  return (
    <List
      sx={{
        margin: "auto",
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
      }}
    >
      {songList.map((s, index) => {
        return (
          <div key={s.id}>
            {index > 0 && <Divider component="li" />}
            <ListItem
              secondaryAction={
                <>
                  <IconButton
                    edge="end"
                    aria-label="edit"
                    onClick={() => handleEdit(s.id)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="edit"
                    sx={{
                      marginLeft: 1,
                    }}
                    onClick={() => handleDelete(s.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </>
              }
              alignItems="flex-start"
            >
              <ListItemText
                primary={s.title}
                secondary={
                  <>
                    <Typography
                      sx={{
                        display: "inline",
                      }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {s.artist}
                    </Typography>
                    {s.album && ` - ${s.album}`}
                  </>
                }
                key={s.id}
              />
            </ListItem>
          </div>
        );
      })}
    </List>
  );
}
