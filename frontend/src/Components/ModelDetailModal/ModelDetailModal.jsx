import React from "react";
import { Modal, Typography, Card, CardContent } from "@material-ui/core/";
import { ModelUpdateForm } from "Components";
import "./ModelDetailModal.scss";

const ModelDetailModal = (props) => {
  const { display, setDisplay, model, getListData } = props;

  const handleClose = () => {
    setDisplay(false);
    getListData();
  };
  return (
    <Modal id="model-modal" open={display} onClose={handleClose}>
      <Card>
        <CardContent>
          {display && (
            <div>
              <Typography variant="h5" component="h2">
                {`${
                  model.service.charAt(0).toUpperCase() + model.service.slice(1)
                } Details`}
              </Typography>
              <ModelUpdateForm
                setDisplay={setDisplay}
                model={model}
                getListData={getListData}
              />
            </div>
          )}
        </CardContent>
      </Card>
    </Modal>
  );
};

export default ModelDetailModal;
