import { useRef, useState } from "react";
import Video from "../../assets/marsupilami.mp4";

const VideoPlayer = () => {
	const refVideo = useRef();
	const refInput = useRef();

	const [duration, setDuration] = useState();
	const [progress, setProgress] = useState(1);
	const [total, setTotal] = useState();

	const [pause, setPause] = useState(false);

	const handlePlay = (e) => {
		const value = refVideo.current;
		value.paused ? value.play() : value.pause();
		setPause(!pause);
	};

	const handleVolume = (e) => {
		const value = parseFloat(e.target.value);
		console.log(value);
		refVideo.current.volume = value;
	};

	const onLoadedMetadata = (e) => {
		const value = e.target.duration;
		setTotal(value);
	};
	return (
		<>
			<video onLoadedMetadata={onLoadedMetadata} src={Video} ref={refVideo}></video>
			<br />
			<button onClick={handlePlay}>{pause ? "Pause" : "Play"}</button>
			<br />
			<input
				onInput={handleVolume}
				type="range"
				min="0"
				max="1"
				step="0.01"
			/>
			<p>{Math.floor(total/60)} </p>
		</>
	);
};

export default VideoPlayer;
