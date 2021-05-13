import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import axios from "axios";
import { ModalTitle } from "./ModalTitle";
const imageFromAPI = "https://image.tmdb.org/t/p/w300";
const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "80%",
    height: "80%",
    display: "flex",

    justifyContent: "space-around",
    backgroundColor: "#111",
    border: "1px solid #282C34",
    // borderRadius: 30,
    color: "white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 1, 3),
  },
  image: {
    borderRadius: 5,
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
  const [cast, setCast] = useState([]);
  const [videos, setVideos] = useState([]);
  const [similars, setSimilars] = useState([]);
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

  const getCast = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=fr`
    );
    setCast(data.cast);
    // console.log(data.cast);
  };
  const getVideos = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=fr`
    );
    setVideos(data ? data.results[0]?.key : " ");
  };
  const getSimilar = async () => {
    const { data } = await axios.get(
      `    https://api.themoviedb.org/3/${media_type}/${id}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    );
    setSimilars(data.results)
    // console.log(data.results)
  };

  useEffect(() => {
    fetchData();
    getCast();
    getVideos();
    getSimilar()
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
              {" "}
              <div>
                {content.poster_path && (
                  <img
                    className={classes.image}
                    src={
                      content.poster_path
                        ? `${imageFromAPI}/${content.poster_path}`
                        : unavailable
                    }
                    alt={content.title}
                  />
                )}
              </div>
              <div className={classes.modalContent}>
                <ModalTitle>
                  {
                    <span>
                      {" "}
                      Title: {content.title ? content.title : content.name}
                    </span>
                  }
                </ModalTitle>
                <p>
                  {content.overview && (
                    <span>
                      <strong> Overview:</strong> {content.overview}
                    </span>
                  )}
                </p>
                <p>
                  {
                    <span>
                      {" "}
                      <strong>Release date</strong>:{" "}
                      {content.release_date
                        ? content.release_date
                        : content.last_air_date}
                    </span>
                  }
                </p>
                <p>
                  {content.tagline && (
                    <span>
                      {" "}
                      <strong>Tagline:</strong> {content.tagline}
                    </span>
                  )}
                </p>
                {/* <div>
                  {cast.map((cst) => (
                    <p>{cst.character}</p>
                  ))}
                </div> */}
                {/* <div>
                  {videos === undefined ? (
                    "video indisponible"
                  ) : (
                    <iframe
                      width="400"
                      height="315"
                      src={`https://www.youtube.com/embed/${videos}`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  )}
                </div> */}
                <div>
                  {similars.map((similar) => (
                    <p>{similar.overview}</p>
                  ))}
                </div>
              </div>
            </div>
          )}
        </Fade>
      </Modal>
    </>
  );
}
