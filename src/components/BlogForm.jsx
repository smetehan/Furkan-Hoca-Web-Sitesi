import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Modal, Typography } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";

const BlogForm = ({ veri, setVeri, handleSubmit }) => {
  const { open, setOpen, currentUser } = useContext(AuthContext);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(veri);
    setVeri({ ...veri, [name]: value });
  };

  return (
    <>
      {!(currentUser.uid === "QozhYOXSvFVhNCGJkPvae14nspk1") && (
        <Modal
          open={open}
          onClose={() => {
            setOpen(false);
            setVeri({});
          }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              "& .MuiTextField-root": { mt: 2.5, width: "25ch" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
            }}
            noValidate
            autoComplete="off"
          >
            <Box
              sx={{
                maxWidth: 300,
                minWidth: 300,
                minHeight: 480,
                mt: 2.5,
                border: "1px solid black",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 7,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",

                  alignItems: "center",
                  border: "1px solid black",
                  minWidth: 200,
                  minHeight: 50,
                }}
              >
                <Typography>YENİ SORU</Typography>
              </Box>

              <TextField
                required
                id="outlined-required"
                label="Soru başlığı"
                name="title"
                value={veri.title}
                onChange={handleChange}
              />
              <TextField
                required
                id="outlined-disabled"
                label="Soru ayrıntısı"
                type="text"
                name="paragraph"
                value={veri.paragraph}
                onChange={handleChange}
              />

              <Box sx={{ mt: 2 }}>
                <Button variant="contained" size="large" type="submit">
                  Soru Sor
                </Button>
              </Box>
            </Box>
          </Box>
        </Modal>
      )}

      {currentUser.uid === "QozhYOXSvFVhNCGJkPvae14nspk1" && (
        <Modal
          open={open}
          onClose={() => {
            setOpen(false);
            setVeri({});
          }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              "& .MuiTextField-root": { mt: 2.5, width: "25ch" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
            }}
            noValidate
            autoComplete="off"
          >
            <Box
              sx={{
                maxWidth: 300,
                minWidth: 300,
                minHeight: 480,
                mt: 2.5,
                border: "1px solid black",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 7,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",

                  alignItems: "center",
                  border: "1px solid black",
                  minWidth: 200,
                  minHeight: 50,
                }}
              >
                <Typography>CEVAP VER</Typography>
              </Box>
              {/* <TextField
                required
                id="outlined-required"
                label="Soru başlığı"
                name="title"
                value={veri.title}
                onChange={handleChange}
              />
              <TextField
                required
                id="outlined-disabled"
                label="Soru ayrıntısı"
                type="text"
                name="paragraph"
                value={veri.paragraph}
                onChange={handleChange}
              /> */}
              <TextField
                id="outlined-disabled"
                label="Cevap"
                type="text"
                name="cevap"
                value={veri.cevap}
                onChange={handleChange}
              />

              <Box sx={{ mt: 2 }}>
                <Button variant="contained" size="large" type="submit">
                  Cevap Ver
                </Button>
              </Box>
            </Box>
          </Box>
        </Modal>
      )}
    </>
  );
};

export default BlogForm;
