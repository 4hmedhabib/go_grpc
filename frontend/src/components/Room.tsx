import React from 'react'

type Props = {}

const Room = (props: Props) => {
    const [votesToSkip, setVotesToSkip] = React.useState<number>(2);
    const [guestCanPause, setGuestCanPause] = React.useState<boolean>(false);
    const [host, setHost] = React.useState<boolean>(false);
    
  return (
    <div>Room</div>
  )
}

export default Room