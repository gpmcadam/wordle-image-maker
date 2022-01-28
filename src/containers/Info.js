import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Icon, Button } from "app/components";

const Overlay = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 2000;
`;

const Modal = styled.div`
  position: relative;
  padding: 0 32px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  width: 500px;
  max-height: 500px;
  background: white;
  border-radius: 5px;
  margin-top: 100px;
`;

const ModalNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  height: 46px;
`;

function InfoModal({ onClose }) {
  return (
    <Overlay>
      <Modal>
        <ModalNav>
          <Button onClick={onClose}>
            <Icon icon="close" />
          </Button>
        </ModalNav>
        <div>
          <h2>What is this?</h2>
          <p>
            Inspired by the clever{" "}
            <a
              href="https://www.instagram.com/p/CZJqVFYrxle/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram post from @wolves
            </a>{" "}
            I decided to create this tool to generate your own Wordle images.
          </p>
          <p>
            Simply type in your answers as normal and the grid will
            automatically appear as though you correctly solved a Wordle grid
            with the last full word being the &quot;solution&quot;.
          </p>
          <p>
            Once you&apos;re ready, hit the download button to save an image of
            your solution.
          </p>
          <p>
            Interested in how this was built? Check out{" "}
            <a href="#" target="_blank" rel="noreferrer">
              the code on GitHub
            </a>
            .
          </p>
          <p>
            Created by:{" "}
            <a href="https://gary.mcad.am" target="_blank" rel="noreferrer">
              gary.mcad.am
            </a>
          </p>
        </div>
      </Modal>
    </Overlay>
  );
}

InfoModal.propTypes = {
  onClose: PropTypes.func,
};

export default function Info() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button title="About Wordle Image Maker" onClick={() => setShow(true)}>
        <Icon icon="info" />
      </Button>
      {show && <InfoModal onClose={() => setShow(false)} />}
    </>
  );
}
