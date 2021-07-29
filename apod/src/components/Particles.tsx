import React from 'react';
import Particles from "react-tsparticles";

const ParticlesBG = () => {

    return (
        <Particles
            id="tsparticles"
            options={
                {
                    background: {
                        color: {
                            value: "#232741"
                        },
                    },
                    fullScreen: {
                        enable: true,
                        zIndex: 1
                    },
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "repulse"
                            },
                        onHover: {
                            enable: true,
                            mode: "bubble" 
                        }
                        },
                            modes: {
                                bubble: {
                                    distance: 250,
                                    duration: 2,
                                    opacity: 0,
                                    size: 0
                            },
                            grab: {
                                distance: 400
                        },
                            repulse: {
                                distance: 400
                        }
                        }
                    },
                        particles: {
                            color: {
                                value: "#ffffff"
                        },
                            links: {
                                color: {
                                    value: "#ffffff"
                            },
                                distance: 150,
                                opacity: 0.4
                        },
                            move: {
                                attract: {
                                    rotate: {
                                        x: 600,
                                        y: 600
                                }
                            },
                                enable: true,
                                outModes: {
                                    bottom:  "out" ,
                                    left:  "out" ,
                                    right:  "out" ,
                                    top:  "out" ,
                                    default:  "out" ,
                            },
                                random: true,
                                speed: 1
                        },
                            number: {
                                density: {
                                    enable: true
                            },
                            value: 160
                        },
                        opacity: {
                            random: {
                                enable: true,
                                minimumValue: 0
                            },
                            value: {
                                min: 0,
                                max: 1
                            },
                            animation: {
                                enable: true,
                                speed: 1
                            }
                        },
                        size: {
                            random: {
                                enable: true,
                                minimumValue: 0
                            },
                        },
                    }
                }
            }
        />
    );
}

export default ParticlesBG;