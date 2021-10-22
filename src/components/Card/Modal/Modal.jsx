import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import axios from "axios";
import "./ModalStyle.css";
import { Button } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Casting from "../../Carousel/Casting/Casting";
const imageFromAPI = "https://image.tmdb.org/t/p/w500";
const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "90%",
    height: "80%",
    border: "1px solid #000",
    backgroundColor: "#111",
    borderRadius: 10,
    color: "white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 1, 3),
  },
  image: {
    borderRadius: 5,
    width: "20%",
  },
  modalContent: {
    width: "70%",
    fontSize: "20px",
  },
}));
export default function ModalContainer({ children, media_type, id }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();

  const [video, setVideo] = useState([]);
  // const [similars, setSimilars] = useState([]);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setContent(data);
  };

  const fetchVideos = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=fr`
    );
    setVideo(data ? data.results[0]?.key : " ");
  };
  // const getSimilar = async () => {
  //   const { data } = await axios.get(
  //     `    https://api.themoviedb.org/3/${media_type}/${id}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  //   );
  //   setSimilars(data.results);
  // };

  useEffect(() => {
    fetchData();
    fetchVideos();
    // getSimilar();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div
        className="card"
        style={{ cursor: "pointer" }}
        color="inherit"
        onClick={handleOpen}
      >
        {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          {content && (
            <div className={classes.paper}>
              <div className="contentModal">
                <img
                  className="contentModal__poster"
                  src={
                    content.poster_path
                      ? `${imageFromAPI}/${content.poster_path}`
                      : unavailable
                  }
                  alt={content.name || content.title}
                />
                <img
                  className="contentModal__landscape"
                  src={
                    content.backdrop_path
                      ? `${imageFromAPI}/${content.backdrop_path}`
                      : unavailable
                  }
                  alt={content.name || content.title}
                />
                <div className="contentModal__about">
                  <span className="contentModal__title">
                    {content.name || content.title}(
                    {(
                      content.first_air_date ||
                      content.release_date ||
                      "...."
                    ).substring(0, 4)}
                    )
                  </span>
                  {content.tagline && (
                    <i className="tagline">{content.tagline} </i>
                  )}
                  <span className="contentModal__description">
                    {content.overview}
                  </span>
                  <div>
                    <Casting media_type={media_type} id={id} />
                  </div>

                  <Button
                    variant="contained"
                    startIcon={<YouTubeIcon />}
                    color="secondary"
                    target="__blank"
                    href={`https://www.youtube.com/watch?v=${video}`}
                  >
                    Watch the Trailer
                  </Button>
                </div>
                <button
                  type="button"
                  class="btn-close btn-close-white"
                  aria-label="Close"
                  data-dismiss="alert"
                ></button>
              </div>
            </div>
          )}
        </Fade>
      </Modal>
    </>
  );
}
