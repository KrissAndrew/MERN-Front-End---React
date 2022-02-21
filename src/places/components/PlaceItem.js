import { useState } from "react";

import classes from "./PlaceItem.module.css";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import Map from "../../shared/components/UIElements/Map";

const PlaceItem = (props) => {
  const [showMap, setShowMap] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const openMapHander = () => {
    setShowMap(true);
  };

  const closeMapHandler = () => {
    setShowMap(false);
  };

  const showDeleteHandler = () => {
    setShowDeleteModal(true);
  };

  const cancelDeleteHandler = () => {
    setShowDeleteModal(false);
  };

  const confirmDeleteHandler = () => {
    setShowDeleteModal(false);
    console.log("Deleting...");
  };

  return (
    <>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass={classes.placeItemModalContent}
        footerClass={classes.placeItemModalActions}
        footer={<Button onClick={closeMapHandler}>Close</Button>}
      >
        <div className={classes.mapContainer}>
          <Map center={props.coordinates} zoom={16} />
        </div>
      </Modal>

      <Modal
        show={showDeleteModal}
        onCancel={cancelDeleteHandler}
        header="Are you sure?"
        footerClass={classes.placeItemModalActions}
        footer={
          <>
            <Button danger onClick={confirmDeleteHandler}>
              Delete
            </Button>
            <Button inverse onClick={cancelDeleteHandler}>
              Cancel
            </Button>
          </>
        }
      >
        <p>
          Are you sure you want to delete this place? This cannot be undone.
        </p>
      </Modal>

      <li className={classes.placeItem}>
        <Card className={classes.placeItemContent}>
          <div className={classes.placeItemImage}>
            <img src={props.image} alt={props.title} />
          </div>
          <div className={classes.placeItemInfo}>
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className={classes.placeItemActions}>
            <Button inverse onClick={openMapHander}>
              View on Map
            </Button>
            <Button to={`/places/${props.id}`}>Edit</Button>
            <Button danger onClick={showDeleteHandler}>
              Delete
            </Button>
          </div>
        </Card>
      </li>
    </>
  );
};

export default PlaceItem;
