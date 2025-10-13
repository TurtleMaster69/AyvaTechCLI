import React from "react";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface BoxCardProps {
  width?: number | string;
  height?: number | string;
  children?: React.ReactNode;
  justifyContent?: string;
  pb?: number | string;
  pt?: number | string;
  endIcon?: boolean;
  type?: "email" | "phone" | "external"; // type of action
  value?: string; // the email, phone number, or URL
  disabled?: boolean;
}

export default function BoxCard({
  width,
  height,
  children,
  pb = 0,
  pt = 0,
  endIcon = true,
  type,
  value,
  disabled = false,
}: BoxCardProps) {
  const handleClick = () => {
    if (!type || !value) return;

    const cleanValue = value.replace(/\s+/g, "");

    if (type === "email") {
      window.location.href = `mailto:${cleanValue}`;
    } else if (type === "phone") {
      window.location.href = `tel:${cleanValue}`;
    } else if (type === "external") {
      window.open(cleanValue, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <Button
      onClick={handleClick}
      disabled={disabled}
      endIcon={
        endIcon ? (
          <ArrowForwardIcon sx={{ position: "absolute", bottom: 30, right: 30 }} />
        ) : undefined
      }
      sx={{
        width,
        height,
        pl: 3,
        pr: 3,
        pt,
        pb,
        background: "linear-gradient(to bottom left, rgba(255,255,255,0.05), rgba(255,255,255,0))",
        borderRadius: 3,
        outline: "2px solid rgba(255,255,255,0.05)",
        outlineOffset: "-2px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        color: "#FFFFFF",
        position: "relative",
        cursor: disabled ? "not-allowed" : "pointer",
        "&:hover": {
          background: "linear-gradient(to bottom left, rgba(255,255,255,0.1), rgba(255,255,255,0.02))",
        },
      }}
    >
      {children}
    </Button>
  );
}
