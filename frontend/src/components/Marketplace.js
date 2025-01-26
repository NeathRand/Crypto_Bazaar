import React, { useState } from "react";
import { Container, Typography, Button, TextField, Modal } from "@mui/material";
import ProviderContent from "./components/ProviderContent";

function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container className="min-h-screen flex flex-col items-center justify-center">
      <Typography variant="h3" mt={8} className="mb-4 text-center">
        Blockchain Marketplace
      </Typography>
      <ProviderContent />
      <div className="flex flex-col items-center justify-center mt-auto mb-5">
        <Button
          variant="contained"
          className="bg-green-500 hover:bg-green-600 text-black py-2 px-4 rounded"
          onClick={handleOpen}
        >
          Add service
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="bg-white rounded p-4 w-1/2">
              <div className="flex justify-end">
                <Button onClick={handleClose} className="mb-2">
                  X
                </Button>
              </div>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                className="mb-4 text-center"
              >
                Add New Service
              </Typography>
              <TextField
                label="Service Name"
                variant="outlined"
                fullWidth
                className="mb-4"
              />
              <TextField
                label="Provider"
                variant="outlined"
                fullWidth
                className="mb-4"
              />
              <TextField
                label="Payment"
                variant="outlined"
                fullWidth
                className="mb-4"
              />
              <div className="flex justify-end">
                <Button
                  variant="contained"
                  className="bg-green-500 hover:bg-green-600 text-black py-2 px-4 rounded"
                  onClick={handleClose}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </Container>
  );
}

export default App;
