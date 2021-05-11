import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import axios from "axios";
const imageFromAPI = "https://image.tmdb.org/t/p/w200";
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

    border: "1px solid #282C34",
    borderRadius: 30,
    color: "white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 1, 3),
  },
}));
export default function ModalContainer({ children, media_type, id }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();
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
    console.log(data);
  };

  useEffect(() => {
    fetchData();
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
              {content.tagline && <h4>{content.tagline}</h4>}
              
              <div>
              {content.poster_path &&<img 
                src={
                  content.poster_path
                    ? `${imageFromAPI}/${content.poster_path}`
                    : unavailable
                }
                alt={content.title}
              />}</div>
              <p>{content.overview && <h4>{content.overview}</h4>}</p>
              <p>{content.last_air_date && <h4>{content.last_air_date}</h4>}</p>
            </div>
          )}
        </Fade>
      </Modal>
    </>
  );
}
