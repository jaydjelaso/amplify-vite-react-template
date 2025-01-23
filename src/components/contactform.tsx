import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

// Type for form data
type FormData = {
  name: string;
  email: string;
  message: string;
};

// Type for payload
type Payload = {
  body: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Create payload
      const payload: Payload = {
        body: JSON.stringify(formData), // Wrap formData in a "body" string
      };

      // Send payload in POST request
      const response = await fetch(
        "https://qih4b0anj3.execute-api.us-east-2.amazonaws.com/prod/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload), // Send the payload
        }
      );
alert ( response.ok)
      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Clear the form
      } else {
        alert("Failed to send message. Please try again.");
        console.error("Server error:", await response.text());
      }
    } catch (error: any) {
      alert("An error occurred while sending the message.");
      console.error("Error sending message:", error.message);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: "400px",
        margin: "auto",
        mt: 4,
      }}
    >
      <TextField
        label="Name"
        name="name"
        variant="outlined"
        required
        value={formData.name}
        onChange={handleChange}
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        variant="outlined"
        required
        value={formData.email}
        onChange={handleChange}
      />
      <TextField
        label="Message"
        name="message"
        multiline
        rows={4}
        variant="outlined"
        required
        value={formData.message}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained" color="primary">
        Send
      </Button>
    </Box>
  );
}
