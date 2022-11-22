import { Player } from '@lottiefiles/react-lottie-player'
import OptionalData from '../asset/Loading.json';
import { LottieStyled } from '../style/InfoStyle';

export default function LottieCompo() {
    return (
      <LottieStyled>
        <Player
          autoplay
          loop
          src={OptionalData}
        />
      </LottieStyled>
    );
  }
  