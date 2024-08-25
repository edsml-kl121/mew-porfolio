// src/components/Contact.js

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
export default function Contact() {


  return (
    <section id="contact" className="relative">
        <footer>
          <Container className=" text-center">
              <a
              href="mailto:mew.chayutaphong@gmail.com?subject=Me&body=Hello!"
              className="inline-flex text-gray-700 border-0 py-5 px-10 focus:outline-none hover:bg-white-900 hover:text-secondary rounded text-lg">
              <FaEnvelope/>
            </a>
              <a
              href="https://www.linkedin.com/in/kandanai/"
              className="ml-4 inline-flex text-gray-400 border-0 py-5 px-10 focus:outline-none hover:bg-white-900 hover:text-secondary rounded text-lg">
              <FaLinkedin/>
            </a>
              <a
              href="https://github.com/edsml-kl121"
              className="ml-4 inline-flex text-gray-400 border-0 py-5 px-10 focus:outline-none hover:bg-white-900 hover:text-secondary rounded text-lg">
              <FaGithub/>
            </a>
              {/* </Col> */}
            {/* </Row> */}
            <br></br>
            <p className="m-0 text-secondary">Kandanai (Mew) Leenutaphong @2022</p>
          </Container>
          <br></br>
        </footer>
    </section>
  );
}