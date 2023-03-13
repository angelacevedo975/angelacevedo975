import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  overflow: "auto",
  width: "90%",
  height: "80%",
  maxWidth: "800px",
  maxHeight: "600px",
  bgcolor: "#262626",
  borderRadius: "15px",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({
  title,
  content,
  open,
  setOpen,
}: {
  title: string;
  content: JSX.Element;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{content}</Box>
      </Modal>
    </div>
  );
}
