import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
export const ParticlesOut = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#000000",
          },
          opacity : 0.2
        },
        fpsLimit: 120,
        interactivity: {
            detectOn: "canvas",
            events: {
            onHover: {
              enable: true,
              mode: "attract",
                parallax: { enable: false, force: 60, smooth: 10 }
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            attract: { distance: 200, duration: 0.4, factor: 5 }
          },
        },
        particles: {
          // color: {
          //   value: "#ffffff",
          // },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
        //   collisions: {
        //     enable: true,
        //   },
          move: {
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
            bounce: false,
            direction: "none",
            enable: true,
            outModes: "out",
            random: false,
            speed: 2,
            straight: false
          },
          number: { density: { enable: true, valueArea: 800 }, value: 20 },
          opacity: {
            anim: { enable: false, opacityMin: 0.1, speed: 1, sync: false },
            random: false,
            value: 0.5
          },
          shape: {
            character: {
              fill: false,
              font: "Verdana",
              style: "",
              value: "*",
              weight: "400"
            },
            image: {
              height: 100,
              replaceColor: true,
              src: "images/github.svg",
              width: 100
            },
            polygon: { nbSides: 5 },
            stroke: { color: "#000000", width: 0 },
            type: "circle"
          },
          size: {
            anim: { enable: false, sizeMin: 0.1, speed: 40, sync: false },
            random: true,
            value: 5
          }
        },
        polygon: {
          draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
          move: { radius: 10 },
          scale: 1,
          type: "none",
          url: ""
        },
        retinaDetect: true
      }}
    />
  );
};