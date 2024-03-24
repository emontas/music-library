/* eslint-disable react/prop-types */
import { useRef, useState, useEffect } from 'react';
import {
  PlayArrow,
  Pause,
  SkipPrevious,
  SkipNext,
  VolumeUp,
  VolumeOff,
} from '@mui/icons-material';
import WaveSurfer from 'wavesurfer.js';
/*import 'wavesurfer.js/dist/wavesurfer.css';*/

function AudioPlayer({ track }) {
  const audioRef = useRef(null);
  const wavesurferRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    wavesurferRef.current = WaveSurfer.create({
      container: audioRef.current,
      waveColor: 'violet',
      progressColor: 'purple',
      cursorColor: 'white',
      barWidth: 2,
      barRadius: 3,
      responsive: true,
      height: 100,
      hideScrollbar: true,
    });

    wavesurferRef.current.load(track.audio);

    wavesurferRef.current.on('play', () => {
      setIsPlaying(true);
    });

    wavesurferRef.current.on('pause', () => {
      setIsPlaying(false);
    });

    return () => {
      wavesurferRef.current.destroy();
    };
  }, [track]);

  const togglePlay = () => {
    if (isPlaying) {
      wavesurferRef.current.pause();
    } else {
      wavesurferRef.current.play();
    }
  };

  const handleSkipPrevious = () => {
    wavesurferRef.current.skipBackward();
  };

  const handleSkipNext = () => {
    wavesurferRef.current.skipForward();
  };

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    wavesurferRef.current.setVolume(newVolume);
    setVolume(newVolume);
    setIsMuted(false);
  };

  const toggleMute = () => {
    if (isMuted) {
      wavesurferRef.current.setVolume(volume);
    } else {
      wavesurferRef.current.setVolume(0);
    }
    setIsMuted(!isMuted);
  };

  return (
    <div className="audio-player">
      <div className="audio-waveform mb-4">
        <div ref={audioRef} />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex-grow">
          {/* Range input slider removed */}
        </div>
        <div className="flex items-center gap-4">
          <button onClick={handleSkipPrevious}>
            <SkipPrevious />
          </button>
          <button onClick={togglePlay}>
            {isPlaying ? <Pause /> : <PlayArrow />}
          </button>
          <button onClick={handleSkipNext}>
            <SkipNext />
          </button>
          <div className="flex items-center gap-2">
            {isMuted ? (
              <VolumeOff onClick={toggleMute} />
            ) : (
              <VolumeUp onClick={toggleMute} />
            )}
            <input
              type="range"
              value={isMuted ? 0 : volume}
              min={0}
              max={1}
              step={0.01}
              onChange={handleVolumeChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AudioPlayer;
