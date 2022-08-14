import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";

type Props = {};

const CreateRoom = (props: Props) => {
  const [votesToSkip, setVotesToSkip] = useState<number>(2);
  const [guestCanPause, setGuestCanPause] = useState<boolean>(true);

  const handleVotesToSkipChange = (event: ChangeEvent<HTMLInputElement>) => {
    setVotesToSkip(Number(event.target.value));
    return;
  };

  const handleGuestCanPauseChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.value ? setGuestCanPause(true) : setGuestCanPause(false);
    return;
  };

  const handleRoomCreate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    await axios
      .post("/api/create-room/", {
        votes_to_skip: votesToSkip,
        guest_can_pause: guestCanPause,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-2xl my-2 font-bold font-sans">Create A Room</h1>
      <p className="text-sm text-gray-500 tracking-wide font-mono">
        Guest Control of Playback State
      </p>
      <form onSubmit={handleRoomCreate}>
        <div className="flex space-x-10 font-mono font-semibold">
          <div className="flex flex-col items-center justify-center my-5 space-y-2">
            <input
              type="radio"
              name="play/pause"
              id="play/pause"
              value="true"
              className="checked:accent-blue-500"
              onChange={(e) => handleGuestCanPauseChange(e)}
              checked={guestCanPause}
            />
            <label htmlFor="play/pause">Play/Pause</label>
          </div>
          <div className="flex flex-col items-center justify-center my-5 space-y-2">
            <input
              type="radio"
              name="play/pause"
              value="false"
              id="no-control"
              className="checked:accent-red-500"
              onChange={(e) => handleGuestCanPauseChange(e)}
              checked={!guestCanPause}
            />
            <label htmlFor="no-control">No Control</label>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <input
            type="number"
            min={1}
            name="votes"
            id="votes"
            step={1}
            value={votesToSkip}
            className="border-b-2 text-center pb-1 font-bold font-mono text-lg outline-none text-gray-800"
            onChange={(e) => handleVotesToSkipChange(e)}
          />
        </div>
        <div className="flex my-5 font-bold font-mono text-white space-x-5">
          <button type="submit" className="bg-blue-500 p-2 rounded-md">
            Create Room
          </button>
          <button type="button" className="bg-red-500 py-2 px-5 rounded-md">
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateRoom;
