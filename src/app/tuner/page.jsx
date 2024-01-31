'use client'
import React, { useEffect, useState } from 'react';

const GuitarTuner = () => {
  const [audioContext, setAudioContext] = useState(null);
  const [analyser, setAnalyser] = useState(null);
  const [volumeThreshold, setVolumeThreshold] = useState(40); // Adjust this threshold as needed
  const [pitchArr,setPitchArr]=useState([])
  const [pitch,setPitch]=useState([])

  useEffect(() => {
    // Component Mount
    const initAudio = async () => {
      try {
        const context = new (window.AudioContext)();
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const microphone = context.createMediaStreamSource(stream);
        const analyzerNode = context.createAnalyser();
        analyzerNode.fftSize = 2048;

        // Connect the microphone to the analyzer
        microphone.connect(analyzerNode);

        setAudioContext(context);
        setAnalyser(analyzerNode);

        // Start audio processing
        context.resume();
      } catch (error) {
        console.error('Error initializing audio:', error);
      }
    };

    initAudio();

    // Component Unmount
    return () => {
      if (audioContext) {
        audioContext.close();
      }
    };
  }, []); // Run once on mount

  useEffect(() => {
    const updatePitch = () => {
      if (audioContext && analyser) {
        const dataArray = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(dataArray);

        // Calculate the average volume level
        const averageVolume = dataArray.reduce((sum, value) => sum + value, 0) / dataArray.length;

        // Check if the volume exceeds the threshold
        if (averageVolume > volumeThreshold) {
          // Example: Find the index of the peak frequency
          const maxIndex = dataArray.indexOf(Math.max(...dataArray));
          const note = maxIndex * (audioContext.sampleRate / analyser.fftSize);

          // Update UI or perform pitch detection logic here
          setPitch(note);
        }

        // Continue listening by requesting the next animation frame
        requestAnimationFrame(updatePitch);
      }
    };

    // Start the continuous listening
    if (audioContext && analyser) {
      requestAnimationFrame(updatePitch);
    }

    // Cleanup function
    return () => {
      cancelAnimationFrame(updatePitch);
    };
  }, [audioContext, analyser, volumeThreshold]);



  return (
    <div>
      <h1>Guitar Tuner</h1>
      {pitch}
    </div>
  );
};

export default GuitarTuner;

