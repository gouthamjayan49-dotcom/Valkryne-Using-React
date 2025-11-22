import React, { useState } from "react";
import { Box, TextField, IconButton, Paper } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const MessageInput = ({ onSendMessage }) => {
    const [message, setMessage] = useState("");

    const handleSend = () => {
        if (message.trim()) {
            onSendMessage(message);
            setMessage("");
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <Paper
            elevation={0}
            sx={{
                p: 2,
                borderRadius: 0,
                borderTop: "1px solid",
                borderColor: "divider",
                backgroundColor: "rgba(15, 23, 42, 0.8)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                boxShadow: "0 -4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    gap: 1.5,
                    alignItems: "flex-end",
                    maxWidth: "100%",
                }}
            >
                <TextField
                    fullWidth
                    multiline
                    maxRows={4}
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    variant="outlined"
                    size="medium"
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            borderRadius: 3,
                            backgroundColor: "background.default",
                            "&:hover": {
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "primary.main",
                                },
                            },
                            "&.Mui-focused": {
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "primary.main",
                                    borderWidth: 2,
                                },
                            },
                        },
                    }}
                />
                <IconButton
                    color="primary"
                    onClick={handleSend}
                    disabled={!message.trim()}
                    sx={{
                        mb: 0.5,
                        backgroundColor: message.trim() ? "primary.main" : "action.disabledBackground",
                        color: message.trim() ? "white" : "action.disabled",
                        "&:hover": {
                            backgroundColor: message.trim() ? "primary.dark" : "action.disabledBackground",
                        },
                        transition: "all 0.2s ease-in-out",
                        width: 48,
                        height: 48,
                    }}
                >
                    <SendIcon />
                </IconButton>
            </Box>
        </Paper>
    );
};

export default MessageInput;

