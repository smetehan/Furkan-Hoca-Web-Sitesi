import * as React from "react";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useContext } from "react";
import {
  useProductsListener,
  deleteProduct,
  addBlog,
  updateBlog,
} from "../auth/firebase";
import BlogForm from "../components/BlogForm";
import { AuthContext } from "../context/AuthContextProvider";
import DeleteIcon from "@mui/icons-material/Delete";
import { Grid, InputAdornment } from "@mui/material";
import { Box } from "@mui/system";
const initialBlog = {
  title: "",
  paragraph: "",
  displayName: "",
  createdAt: "",
  uid: "",
  cevap: "",
};
const Blog = () => {
  const { currentUser } = useContext(AuthContext);
  //   const control = currentUser.uid;
  //   console.log("control:", currentUser);
  const [veri, setVeri] = useState(initialBlog);
  const products = useProductsListener();
  const { setOpen } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (veri.id) {
      updateBlog(veri);
    } else {
      addBlog(veri);
    }
    setVeri("");
    setOpen(false);
  };
  const editBlog = (id, title, paragraph, cevap) => {
    setVeri({ id, title, paragraph, cevap });
  };
  return (
    <>
      <div>
        {products.length > 0 &&
          products?.map((product, index) => {
            const { title, createdAt, paragraph, displayName, id, uid, cevap } =
              product;
            return (
              <>
                <Grid
                  container
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    mt: 2,
                    justifyContent: "center",
                  }}
                >
                  <Card
                    sx={{
                      maxWidth: 1200,
                      minHeight: 250,
                      maxHeight: 350,
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      textAlign: "start",
                    }}
                  >
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        kullanıcı:{displayName}
                      </Typography>
                      <Typography gutterBottom variant="h6" component="div">
                        başlık:{title}
                      </Typography>

                      <Box
                        sx={{
                          maxWidth: 1200,
                          maxHeight: 300,
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                        }}
                      >
                        <Typography
                          variant="h6"
                          // color="text.secondary"
                          inputprops={{ maxLength: 80 }}
                        >
                          soru:{paragraph}
                        </Typography>
                        <Typography
                          variant="h6"
                          // color="text.secondary"
                          inputprops={{ maxLength: 100 }}
                        >
                          cevap:{cevap}
                        </Typography>
                        <Box sx={{ textAlign: "end" }}>
                          <Typography variant="h7">
                            tarih:{createdAt}
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ mt: 3 }}>
                        <InputAdornment position="start">
                          {uid === currentUser.uid && (
                            <div>
                              {" "}
                              <div>
                                <DeleteIcon onClick={() => deleteProduct(id)} />
                                <Button
                                  onClick={() => {
                                    setOpen(true);
                                    editBlog(
                                      id,
                                      title,
                                      paragraph,
                                      cevap,
                                      createdAt,
                                      displayName,
                                      uid
                                    );
                                  }}
                                >
                                  güncelle
                                </Button>
                              </div>
                            </div>
                          )}
                          {currentUser.uid ===
                            "O6J9Ab7PBrSKZKUjOVw54rNvYaq2" && (
                            <div>
                              <DeleteIcon onClick={() => deleteProduct(id)} />
                              <Button
                                onClick={() => {
                                  setOpen(true);
                                  editBlog(
                                    id,
                                    title,
                                    paragraph,
                                    cevap,
                                    createdAt,
                                    displayName,
                                    uid
                                  );
                                }}
                              >
                                CEVAP VER
                              </Button>
                            </div>
                          )}
                        </InputAdornment>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </>
            );
          })}
        {products.length === 0 &&
          "TARİH HAKKINDA ÖĞRENMEK İSTEDİKLERİNİZİ FURKAN HOCAYA SORABİLİRSİNİZ.."}
      </div>

      <Button onClick={() => setOpen(true)}>Soru Sor</Button>
      <div>
        <BlogForm veri={veri} setVeri={setVeri} handleSubmit={handleSubmit} />
      </div>
    </>
  );
};

export default Blog;
