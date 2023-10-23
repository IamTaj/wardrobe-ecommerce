import React from "react";
import CallIcon from "@mui/icons-material/Call";
import { Box, TextField, Typography } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "next/link";

export default function Contactus() {
  return (
    <>
      <div className="titlebar">
        <div className="link-nav">
          <div>
            <Link href="/" style={{ textDecoration: "none", color: "black" }}>
              Home
            </Link>
          </div>
          &nbsp;
          <p>➤</p>
          &nbsp;
          <div>CONTACT US</div>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59811518.87771588!2d62.4184461520893!3d23.797062037023224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3663f18a24cbe857%3A0xa9416bfcd3a0f459!2sAsia!5e0!3m2!1sen!2sin!4v1675660406087!5m2!1sen!2sin"
        width="100%"
        height="500px"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <div
        className="more"
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "4rem",
        }}
      >
        <div className="contact-details">
          <div className="detail-list" style={{ display: "flex" }}>
            <div>
              <CallIcon />
            </div>
            <div>
              <Typography>1234567890</Typography>
              <Typography>0987654321</Typography>
            </div>
          </div>
          <div className="details-list" style={{ display: "flex" }}>
            <div>
              <PublicIcon />
            </div>
            <div>
              <Typography>demo@example.com</Typography>
              <Typography>www.example.com</Typography>
            </div>
          </div>
          <div className="detail-list" style={{ display: "flex" }}>
            <LocationOnIcon />
            <Typography>Company Address Example</Typography>
          </div>
          <div className="detail-list">
            <Typography variant="h4">Follow Us</Typography>
            <Box sx={{ display: "flex" }}>
              <Link href="www.instagram.com">
                <InstagramIcon />
              </Link>
              <Link href="www.twitter.com">
                <TwitterIcon />
              </Link>
              <Link href="www.facebook.com">
                <FacebookIcon />
              </Link>
              <Link href="www.youtube.com">
                <YouTubeIcon />
              </Link>
            </Box>
          </div>
        </div>

        <div
          className="contact-form"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <h3>GET IN TOUCH</h3>

          <TextField
            id="name"
            fullWidth
            label="Name "
            variant="standard"
            style={{ marginRight: "2rem" }}
          />
          <TextField label="Email" id="email" variant="standard" fullWidth />

          <TextField id="subject" label="Subject" variant="standard" />
          <TextField
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={6}
            placeholder="Text....."
          />
        </div>
      </div>
    </>
  );
}
