import * as React from "react";
import { Button } from "@mui/material";
import { useContext } from "react";
import { useFetch, DeleteUser } from "../../auth/functions";
import { AuthContext } from "../../context/AuthContext";
import EditIcon from "@mui/icons-material/Edit";
import AspectRatio from "@mui/joy/AspectRatio";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import Link from "@mui/joy/Link";
import IconButton from "@mui/joy/IconButton";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import ModeCommentOutlined from "@mui/icons-material/ModeCommentOutlined";
import SendOutlined from "@mui/icons-material/SendOutlined";
import Face from "@mui/icons-material/Face";
import DeleteIcon from "@mui/icons-material/Delete";
import { Col, Container, Row } from "react-bootstrap";

const BlogModals = ({ editUser, products }) => {
  const { setOpen } = useContext(AuthContext);

  return (
    <>
      <Container fluid="lg">
        <Row className="text-center mt-2 p-3">
          <Col>
            <Button
              size="medium"
              variant="contained"
              onClick={() => setOpen(true)}
            >
              Yeni Soru
            </Button>
          </Col>
        </Row>
        <Row className="g-5 mb-4">
          {products?.map((item, index) => {
            const { displayName, title, paragraph, createdAt, id } = item;
            return (
              <Col key={index} xl={3} lg={4} md={6} xs={12}>
                <Box sx={{}}>
                  <Card
                    variant="outlined"
                    sx={{
                      maxWidth: 250,
                      minWidth: 250,
                      "--Card-radius": (theme) => theme.vars.radius.xs,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        pb: 1.5,
                        gap: 1,
                      }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                          "&:before": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            m: "-2px",
                            borderRadius: "50%",
                            background:
                              "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
                          },
                        }}
                      >
                        <Avatar
                          size="sm"
                          src="/static/logo.png"
                          sx={{
                            p: 0.5,
                            border: "2px solid",
                            borderColor: "background.body",
                          }}
                        />
                      </Box>
                      <Typography fontWeight="lg">{username}</Typography>
                    </Box>
                    <CardOverflow>
                      <AspectRatio>
                        <img src={image} alt="" loading="lazy" />
                      </AspectRatio>
                    </CardOverflow>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mx: -1,
                        my: 1,
                      }}
                    >
                      <Box sx={{ width: 0, display: "flex", gap: 0.5 }}>
                        <IconButton variant="plain" color="neutral" size="sm">
                          <FavoriteBorder />
                        </IconButton>
                        <IconButton variant="plain" color="neutral" size="sm">
                          <ModeCommentOutlined />
                        </IconButton>
                        <IconButton variant="plain" color="neutral" size="sm">
                          <SendOutlined />
                        </IconButton>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 0.5,
                          mx: "auto",
                        }}
                      >
                        {[...Array(5)].map((_, index) => (
                          <Box
                            key={index}
                            sx={{
                              borderRadius: "50%",
                              width: `max(${6 - index}px, 3px)`,
                              height: `max(${6 - index}px, 3px)`,
                              bgcolor:
                                index === 0
                                  ? "primary.solidBg"
                                  : "background.level3",
                            }}
                          />
                        ))}
                      </Box>
                      <Box
                        sx={{
                          width: 0,
                          display: "flex",
                          flexDirection: "row-reverse",
                        }}
                      >
                        <IconButton
                          variant="plain"
                          color="neutral"
                          size="sm"
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <EditIcon
                            onClick={() => {
                              setOpen(true);
                              editUser(id, username, title, paragraph, image);
                            }}
                          />
                          <DeleteIcon onClick={() => DeleteUser(id)} />
                        </IconButton>
                      </Box>
                    </Box>
                    <Link
                      component="button"
                      underline="none"
                      fontSize="sm"
                      fontWeight="lg"
                      textColor="text.primary"
                    >
                      {like} Likes
                    </Link>
                    <Typography fontSize="md">{title}</Typography>
                    <Link
                      component="button"
                      underline="none"
                      fontSize="sm"
                      sx={{ color: "text.tertiary" }}
                    >
                      {paragraph}
                    </Link>
                    <Link
                      component="button"
                      underline="none"
                      fontSize="10px"
                      sx={{ color: "text.tertiary", my: 0.5 }}
                    >
                      2 DAYS AGO
                    </Link>
                    <CardOverflow
                      sx={{ p: "var(--Card-padding)", display: "flex" }}
                    >
                      <IconButton
                        size="sm"
                        variant="plain"
                        color="neutral"
                        sx={{ ml: -1 }}
                      >
                        <Face />
                      </IconButton>
                      <Box component="form">
                        <Input
                          variant="plain"
                          size="sm"
                          placeholder="Add a comment…"
                          name="comment"
                          id="comment"
                          sx={{
                            flexGrow: 1,
                            mr: 1,
                            "--Input-focusedThickness": "0px",
                          }}
                        />
                        <Link underline="none" type="submit" role="button">
                          Post
                        </Link>
                      </Box>
                    </CardOverflow>
                  </Card>
                </Box>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default BlogModals;
