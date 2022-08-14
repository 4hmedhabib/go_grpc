import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

type Props = {};

const Room = (props: Props) => {
  const [votes_to_skip, setVotesToSkip] = React.useState<number>(2);
  const [guest_can_pause, setGuestCanPause] = React.useState<boolean>(false);
  const [isHost, setIsHost] = React.useState<boolean>(false);

  const { roomCode, host } = useParams();

  const getRoomDetails = async () => {
    
    await axios
      .get(`/api/get-room/?code=${roomCode}&host=${host}`)
      .then((res) => {
        setVotesToSkip(res.data.votes_to_skip);
        setGuestCanPause(res.data.guest_can_pause);
        setIsHost(res.data.is_host);
        console.log(res.data.guest_can_pause)
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getRoomDetails();
  }, []);
  
  
  return (
    <div>
      <h3>code: {roomCode}</h3>
      <p>Votes: {votes_to_skip}</p>
      <p>Guest Can Pause: {guest_can_pause ? 'true': 'false'}</p>
      <p>Host: {isHost ? 'true': 'false'}</p>
    </div>
  );
};

export default Room;
