import { useSelector, useDispatch } from "react-redux";

import { Dialog, DialogTitle } from "@mui/material";

import { SongDetails } from "../songDetails/SongDetails";

import {
  selectSettings,
  setIsOpen,
  setSongId,
} from "../settings/settingsSlice";
import { selectSongList } from "../songList/songListSlice";

export function SongDetailsDialog() {
  const songList = useSelector(selectSongList);
  const settings = useSelector(selectSettings);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setIsOpen(false));
    dispatch(setSongId(null));
  };

  const getSongById = (id) => {
    return songList.find((s) => s.id === id);
  }

  return (
    <Dialog onClose={handleClose} open={settings?.isOpen}>
      <DialogTitle>
        {settings?.songId !== null ? "Edit" : "Add"} Song
      </DialogTitle>
      <SongDetails {...getSongById(settings?.songId)} setIsOpen={setIsOpen} />
    </Dialog>
  );
}
