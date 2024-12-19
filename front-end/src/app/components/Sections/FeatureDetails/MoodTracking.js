"use client";

import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// Mock data generator
const generateMockPoint = () => ({
  time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
  bp: Math.floor(Math.random() * 20) + 100, // Random BP between 100-120
  heartbeat: Math.floor(Math.random() * 40) + 60, // Random heartbeat between 60-100
});

const generateSleepData = () => {
  const days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - i);
    return {
      day: date.toLocaleDateString([], { weekday: "short" }),
      sleep: Math.random() * 8, // Random sleep hours (0-8)
    };
  });
  return days.reverse();
};

const MoodTracking = () => {
  const [bpData, setBpData] = useState(Array.from({ length: 24 }, generateMockPoint));
  const [sleepData, setSleepData] = useState(generateSleepData());
  const [overallState, setOverallState] = useState("😊");

  // Smooth data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setBpData((prevData) => [
        ...prevData.slice(1),
        generateMockPoint(), // Add new point at the end
      ]);
    }, 700); // Update every 10 seconds

    return () => clearInterval(interval);
  }, []);

  // Calculate overall state
  useEffect(() => {
    const avgHeartbeat = bpData.reduce((acc, cur) => acc + cur.heartbeat, 0) / bpData.length;
    const avgBP = bpData.reduce((acc, cur) => acc + cur.bp, 0) / bpData.length;

    if (avgHeartbeat < 80 && avgBP < 120) {
      setOverallState("😊");
    } else if (avgHeartbeat < 100 && avgBP < 130) {
      setOverallState("😐");
    } else {
      setOverallState("😟");
    }
  }, [bpData]);

  return (
    <Box sx={{ padding: 4 }}>
      {/* Header */}
      <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 2, color: "#1e3a8a" }}>
        Mood Tracking & Analysis
      </Typography>
      <Typography variant="body1" sx={{ color: "#555", marginBottom: 3 }}>
        Understand your emotional patterns with real-time tracking of health metrics like blood pressure, heartbeat, and sleep.
      </Typography>

      {/* Overview Section */}
      <Paper
        elevation={3}
        sx={{
          padding: 3,
          borderRadius: "16px",
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
          marginBottom: 4,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
          Your Overall State: {overallState}
        </Typography>
        <Typography variant="body2" sx={{ color: "#555" }}>
          Early signs of changes in your metrics are monitored for proactive care.
        </Typography>
      </Paper>

      {/* Grid for Charts */}
      <Grid container spacing={4}>
        {/* Blood Pressure Chart */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              padding: 3,
              borderRadius: "16px",
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
              height: "400px",
            }}
          >
            <Typography variant="h6" sx={{ color: "#1e3a8a", marginBottom: 2 }}>
              Blood Pressure (BP)
            </Typography>
            <ResponsiveContainer width="100%" height="85%">
              <LineChart data={bpData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis domain={[90, 140]} />
                <Tooltip />
                <Line type="monotone" dataKey="bp" stroke="#1ae5be" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Heartbeat Chart */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              padding: 3,
              borderRadius: "16px",
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
              height: "400px",
            }}
          >
            <Typography variant="h6" sx={{ color: "#1e3a8a", marginBottom: 2 }}>
              Heartbeat (bpm)
            </Typography>
            <ResponsiveContainer width="100%" height="85%">
              <LineChart data={bpData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis domain={[50, 150]} />
                <Tooltip />
                <Line type="monotone" dataKey="heartbeat" stroke="#e63946" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Sleep Tracking */}
        <Grid item xs={12}>
          <Paper
            sx={{
              padding: 3,
              borderRadius: "16px",
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
              height: "400px",
            }}
          >
            <Typography variant="h6" sx={{ color: "#1e3a8a", marginBottom: 2 }}>
              Sleep Tracking (hours/day)
            </Typography>
            <ResponsiveContainer width="100%" height="85%">
              <LineChart data={sleepData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis domain={[0, 10]} />
                <Tooltip />
                <Line type="monotone" dataKey="sleep" stroke="#ffca3a" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MoodTracking;
