"use client";

import React, { useState } from "react";
import { Box, Typography, Paper, Button, TextField, Grid, Divider } from "@mui/material";
import FullCalendar from "@fullcalendar/react"; // Main calendar library
import dayGridPlugin from "@fullcalendar/daygrid"; // For month view
import interactionPlugin from "@fullcalendar/interaction"; // For interactivity (clickable dates)
import timeGridPlugin from "@fullcalendar/timegrid"; // For week/day view
import { motion } from "framer-motion";

const Calendar = () => {
  const [events, setEvents] = useState([
    { title: "Yoga Session", start: new Date().toISOString().split("T")[0] },
  ]);
  const [newEventTitle, setNewEventTitle] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  // Add new event handler
  const handleAddEvent = () => {
    if (newEventTitle.trim() && selectedDate) {
      setEvents([...events, { title: newEventTitle, start: selectedDate }]);
      setNewEventTitle("");
    }
  };

  // Handle date click from FullCalendar
  const handleDateClick = (arg) => {
    setSelectedDate(arg.dateStr);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Start off-screen
      animate={{ opacity: 1, y: 0 }} // Animate to visible
      exit={{ opacity: 0, y: 50 }} // Exit animation
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth easing
    >
      <Box sx={{ padding: 3 }}>
        {/* Header */}
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", marginBottom: 3, color: "#1e3a8a", textAlign: "center" }}
        >
          Long-Term Guided Programs
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#555", marginBottom: 3, textAlign: "center" }}
        >
          Manage your self-help programs, tasks, and exercises with an interactive calendar.
        </Typography>

        {/* Calendar Section */}
        <Grid container spacing={4}>
          {/* Calendar */}
          <Grid item xs={12} md={8}>
            <Paper
              elevation={3}
              sx={{
                padding: 3,
                borderRadius: "16px",
                boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
              }}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <FullCalendar
                  plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
                  initialView="dayGridMonth"
                  editable={true}
                  selectable={true}
                  dateClick={handleDateClick}
                  events={events}
                  headerToolbar={{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay",
                  }}
                  height="auto"
                  contentHeight="500px"
                  eventBackgroundColor="#1ae5be"
                  eventBorderColor="#0e8e77"
                  eventTextColor="#fff"
                  dayMaxEventRows={3}
                />
              </motion.div>
            </Paper>
          </Grid>

          {/* Add Task/Event Section */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                padding: 3,
                borderRadius: "16px",
                backgroundColor: "#f4f6f9",
                boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1e3a8a" }}>
                Add a Task/Event
              </Typography>
              <Divider sx={{ marginY: 2 }} />
              <Typography variant="body2" sx={{ color: "#555", marginBottom: 2 }}>
                Select a date on the calendar and add a task or event to your schedule.
              </Typography>
              <TextField
                fullWidth
                label="Event Title"
                value={newEventTitle}
                onChange={(e) => setNewEventTitle(e.target.value)}
                sx={{
                  marginBottom: 2,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                    backgroundColor: "#ffffff",
                  },
                }}
              />
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: "#1ae5be",
                    color: "#fff",
                    borderRadius: "12px",
                    padding: "10px 16px",
                    "&:hover": {
                      backgroundColor: "#0e8e77",
                    },
                  }}
                  onClick={handleAddEvent}
                >
                  Add Event
                </Button>
              </motion.div>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  );
};

export default Calendar;
