// src/data.js
import Bathy from "./components/images/Bathy.png"
import Flood from "./components/images/flood.png"
import Thank from "./components/images/thankq.png"
import Barcsnap from "./components/images/barcs.png"
import Python from "./components/images/python96.png"
import React from "./components/images/react80.png"
import Html from "./components/images/html96.png"
import Rails from "./components/images/rails96.png"
import Node from "./components/images/node96.png"
import Css from "./components/images/css96.png"
import Tensor from "./components/images/tensorflow300.png"
import Github from "./components/images/github128.png"
import Heroku from "./components/images/heroku.png"
import R from "./components/images/R.png"
import Mongo from "./components/images/mongo.png"
import Docker from "./components/images/docker.png"

export const projects = [
  {
    title: "RAGAS for Thai Language",
    subtitle: "watsonx.ai, watsonx.governance",
    description:
      "Building custom RAGAS metrics using llama-3.1 models and publishing metrics to watsonx.governance as a part of LLMOps cycle",
    image: Flood,
    link: "",
  },
  {
    title: "Building recommender systems",
    subtitle: "watsonx.ai",
    description:
      "Building recommender systems with Light FM models, deploying it to wml. Also explored building BERT-style recommendation when interaction data is lacking.",
    image: Flood,
    link: "",
  },
  {
    title: "Generative AI Incubation Program",
    subtitle: "watsonx.ai, watsonx.data, watsonx.assistant, Podman",
    description:
      "Education Highschool students, business partners and clients by giving a hands on workshop",
    image: Flood,
    link: "https://github.com/edsml-kl121/compact-watsonx-ai-incubation-program",
  },
  {
    title: "Thai Language RAG application",
    subtitle: "watsonx.ai, Elasticsearch, IBM Code Engine, watsonx.assistant",
    description:
      "deploying a full-stack application that integrates with IBM Watsonx, including setting up the environment, deploying models, and creating a UI interface.",
    image: Flood,
    link: "https://github.com/edsml-kl121/TH_RAG_watsonx_full_stack_v2",
  },
  {
    title: "Deploying Thai sentence transformer models",
    subtitle: "watsonx.ai",
    description:
      "Deploying Thai Language transformer models with watson machine learning",
    image: Thank,
    link: "https://github.com/edsml-kl121/wml-machine-learning-deployments",
  },
  {
    title: "Demand Forecasting",
    subtitle: "vertex ai, GCP, Google Big Query, Azure DevOps",
    description:
      "Building end-to-end custom demand forecast models with MLOps pipeline using various machine learning techniques",
    image: Thank,
    link: "",
    },
  {
    title: "Water Oracle",
    subtitle: "Mongo DB Atlas, express, React, Node.js, Heroku, Google earth engine (GEE), Google Cloud Platform (GCP), TensorFlow",
    description:
      "App to optimize water classification using Multiview deeplearning on U-Net in Google earth engine.",
    image: Flood,
    link: "https://geeimperial.herokuapp.com/",
  },
  {
    title: "BarcSnap",
    subtitle: "HTML, Barcode API, Ruby on Rails",
    description:
      "Collaborated with 3 developers to build an app to scan Japanese product's barcode to get information",
    image: Barcsnap,
    link: "https://github.com/2tonepantone/barcsnap",
  },
  // {
  //   title: "Flood Prediction Tool",
  //   subtitle: "Jupyter, machine learning, pytest, github actions",
  //   description:
  //     "Producing a map to show and predict flood risks and house prices scoring distinction, collaborating with imperial students.",
  //   image: Flood,
  //   link: "https://github.com/edsml-kl121/FloodDetectionTool",
  // },
  {
    title: "ThankyouChef",
    subtitle: "HTML, Mapbox API, Ruby on Rails, Heroku",
    description:
      "Created an app to enable hiring of personal chefs to your home",
    image: Thank,
    link: "https://thankyouchef.herokuapp.com/",
  },
  // {
  //   title: "Personal Portfolio v1",
  //   subtitle: "Vanilla JS, html, css",
  //   description:
  //     "Previous portfolio made right after LeWagon bootcamp, trying to get a game-like feel",
  //   image: Thank,
  //   link: "https://kandanai.me",
  // }
];

export const skills = [
  {
    name: "python",
    image: Python
  },
  {
    name: "docker",
    color:"blue",
    image: Docker
  },
  {
    name: "R",
    color:"blue",
    image: R
  },
  {
    name: "html",
    image: Html
  },
  {
    name: "css",
    image: Css
  }, 
  {
    name: "React",
    image: React
  },
  {
    name: "Node.js",
    image: Node
  },
  {
    name: "Ruby on Rails",
    image: Rails
  },
  {
    name: "Tensorflow",
    image: Tensor
  },
  {
    name: "github",
    image: Github
  },
  {
    name: "Heroku",
    color:"blue",
    image: Heroku
  },
  {
    name: "MongoDB",
    color:"blue",
    image: Mongo
  },
]

export const testimonials = [
  {
    quote : "He is the best developer in the world",
    image : Bathy,
    name: "Mew",
    company: "udemy"
  },
  {
    quote : "He is the best developer in the world",
    image : Bathy,
    name: "Mew",
    company: "udemy"
  },
  {
    quote : "He is the best developer in the world",
    image : Bathy,
    name: "Mew",
    company: "udemy"
  },
  {
    quote : "He is the best developer in the world",
    image : Bathy,
    name: "Mew",
    company: "udemy"
  }
]