import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import React from "react";
import { useState } from "react";


export const But = ({ position, string }) => {

  return (
    <>
        <Button onClick={() => window.open('/contact', '_self')} target="_blank" variant="outline-light" size="lg">{string}</Button>
    </>
  );
};

