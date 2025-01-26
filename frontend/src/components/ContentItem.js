import React, { useState } from "react";
import { Button, Modal } from "@mui/material";

const ContentItem = ({ service, by, pay }) => {
  const [open, setOpen] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirmBooking = () => {
    setBookingConfirmed(true);
    setOpen(false);
  };

  const buttonStyle = {
    backgroundColor: bookingConfirmed ? "#2C7A59" : "#4CAF50",
    "&:hover": {
      backgroundColor: "#388E3C",
    },
    color: "black",
    padding: "8px 16px",
    borderRadius: "4px",
  };

  return (
    <>
      <div className="flex items-center justify-between w-full mt-4">
        <span className="w-1/3">{service}</span>
        <span className="w-1/3">{by}</span>
        <span className="w-1/9">{pay}</span>

        <div className="w-1/4 flex justify-center items-center">
          <Button variant="contained" style={buttonStyle} onClick={handleOpen}>
            {bookingConfirmed ? "See Details" : "Book service"}
          </Button>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="bg-white rounded p-4 w-1/2 flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-4">Booking Details</h2>
          <p>
            <strong>Service:</strong> {service}
          </p>
          <p>
            <strong>Provider:</strong> {by}
          </p>
          <p>
            <strong>Payment:</strong> {pay}
          </p>
          {bookingConfirmed ? (
            <p className="text-green-600 font-semibold my-4">
              Booking confirmed!
            </p>
          ) : (
            <Button
              variant="contained"
              className="bg-green-500 hover:bg-green-600 text-black py-2 px-4 rounded w-full"
              onClick={handleConfirmBooking}
            >
              Confirm Booking
            </Button>
          )}
        </div>
      </Modal>
    </>
  );
};

export default ContentItem;
