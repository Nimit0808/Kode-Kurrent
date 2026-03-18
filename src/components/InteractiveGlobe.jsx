import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function InteractiveGlobe() {
    const canvasRef = useRef();

    useEffect(() => {
        let phi = 0;

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: 300 * 2,
            height: 300 * 2,
            phi: 0,
            theta: 0.3,
            dark: 1, // Render the globe in a dark theme
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.1, 0.05, 0.2], // Deep purple base
            markerColor: [0.93, 0.45, 0.95], // Pinkish marker matching accent
            glowColor: [0.6, 0.2, 0.9], // Purple glow mapping to primary
            markers: [
                // Marker referencing India roughly (RGIPT location: ~26.2N, 81.6E)
                { location: [26.25, 81.6], size: 0.1 }
            ],
            onRender: (state) => {
                // Called on every animation frame.
                // `state` will be an empty object, return updated params.
                state.phi = phi;
                phi += 0.005; // Adjust the rotation speed
            },
            opacity: 0.9,
        });

        return () => {
            globe.destroy();
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative w-[300px] h-[300px] flex items-center justify-center overflow-hidden mix-blend-screen"
        >
            <canvas
                ref={canvasRef}
                style={{ width: 300, height: 300, aspectRatio: 1 }}
            />
        </motion.div>
    );
}
