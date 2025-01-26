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
    <>
      {/* Hero Section */}
      <div className="bg-blue-500 py-12 text-white text-center">
        <Container>
          <Typography variant="h3" className="mb-4 font-bold">
            CryptoBazaar
          </Typography>
          <Typography variant="body1" className="mb-8 p-8">
            Where Decentralized WorldWide Commerce Thrives
          </Typography>
          {/* Feature Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Typography variant="h5" className="mb-4 font-bold text-blue-500">
                Secure Transactions
              </Typography>
              <Typography variant="body2 text-black">
                Our platform ensures secure transactions using the latest
                blockchain technology.
              </Typography>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Typography variant="h5" className="mb-4 font-bold text-blue-500">
                Global Providers
              </Typography>
              <Typography variant="body2 text-black">
                Access a diverse range of services from across the world
                worldwide.
              </Typography>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Typography variant="h5" className="mb-4 font-bold text-blue-500">
                Easy Booking
              </Typography>
              <Typography variant="body2 text-black">
                Book services with just a few clicks, hassle-free.
              </Typography>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Content */}
      <Container className="min-h-screen flex flex-col items-center justify-center">
        <Typography variant="h4" mt={8} mb={4} className="text-center">
          Services Available
        </Typography>
        <ProviderContent />
        <div className="flex justify-center mt-8">
          {" "}
          {/* Centering the button */}
          <Button
            variant="contained"
            className="bg-green-500 hover:bg-green-600 text-black py-2 px-8 rounded"
            onClick={handleOpen}
          >
            Add Service
          </Button>
        </div>
      </Container>

      {/* Modal */}
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

      {/* Footer */}
      <footer className="bg-gray-200 py-4">
        <Container className="text-center">
          <Typography variant="body1" color="textSecondary">
            © {new Date().getFullYear()} Blockchain Marketplace. All rights
            reserved.
          </Typography>
        </Container>
      </footer>
    </>
  );
}

export default App;
