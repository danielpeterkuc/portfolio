import React from 'react'
import Particles from 'react-particles-js';


const Background = () => {
  return (
      <Particles id="particles-js" params={{
                particles: {
                    number: {
                        value: 25,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: '#fff'
                    },
                    shape: {
                        type:'polygon',
                        stroke: {
                            width: 3,
                            color: '#000'
                        },
                        polygon: {
                            nb_sides: 6
                          },
                          image: {
                            src: "img/github.svg",
                            width: 100,
                            height: 100
                          }
                    },
                    opacity: {
                        value: 0.5,
                        random: false,
                        anim: {
                          enable: false,
                          speed: 1,
                          opacity_min: 0.1,
                          sync: false
                        }
                      },
                      size: {
                        value: 110.4824135672403,
                        random: true,
                        anim: {
                          enable: false,
                          speed: 14.384694684855308,
                          size_min: 0.1,
                          sync: false
                        }
                      },
                      line_linked: {
                        enable: true,
                        distance: 150,
                        color: "#ff0000",
                        opacity: 1,
                        width: 1.5
                      },
                      move: {
                        enable: true,
                        speed: 3,
                        direction: "none",
                        random: false,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                        attract: {
                          enable: false,
                          rotateX: 600,
                          rotateY: 1200
                        }
                      }
                 },
                 interactivity: {
                    detect_on: "canvas",
                    events: {
                      onhover: {
                        enable: true,
                        mode: "grab"
                      },
                      onclick: {
                        enable: false,
                        mode: "repulse"
                      },
                      resize: true
                    },
                    modes: {
                      grab: {
                        distance: 400,
                        line_linked: {
                          opacity: 1
                        }
                      },
                      bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                      },
                      repulse: {
                        distance: 200,
                        duration: 0.4
                      },
                      push: {
                        particles_nb: 4
                      },
                      remove: {
                        particles_nb: 2
                      }
                    }
                  }   
            }}    
          />
  )
}

export default Background
