import styled from 'styled-components';
import { TiInfoLarge } from 'react-icons/ti';

export default function Information() {
  return (
    <>
      <Info>
        <TiInfoLarge className="icon_info" />
        <p className="info_description">
          When CIA analyst Jack Ryan stumbles upon a suspicious series of bank
          transfers his search for answers pulls him from the safety of his desk
          job and catapults him into a deadly game of cat and mouse throughout
          Europe and the Middle East, with a rising terrorist figurehead
          preparing for a massive attack against the US and her allies.
        </p>
      </Info>
    </>
  );
}

const Info = styled.article`
  display: grid;
  grid-template-columns: 5% 95%;
  margin-top: 2rem;

  .icon_info {
    animation: jump 1.2s infinite;
    font-size: var(--fs-600);

    @keyframes jump {
      0% {
        transform: translateY(0%) scale(1.25, 0.75);
      }
      50% {
        transform: translateY(-50%) scale(1, 1);
      }
      100% {
        transform: translateY(0%) scale(1.25, 0.75);
      }
    }
  }

  .info_description {
    animation: circleIn 1s ease-in;
    margin: 0 2rem 1rem 1rem;

    @keyframes circleIn {
      0% {
        opacity: 0;
        -webkit-transform-origin: 0 100%;
        transform-origin: 0 100%;
        -webkit-transform: scale(0, 0) translate(0px, -700px);
        transform: scale(0, 0) translate(0px, -700px);
      }
      100% {
        opacity: 1;
        -webkit-transform-origin: 100% 100%;
        transform-origin: 100% 100%;
        -webkit-transform: scale(1, 1) translate(0px, 0px);
        transform: scale(1, 1) translate(0px, 0px);
      }
    }
  }

  @media (max-width: 375px) {
    @keyframes circleIn {
      0% {
        opacity: 0;
        -webkit-transform-origin: 0 100%;
        transform-origin: 0 100%;
        -webkit-transform: scale(0, 0) translate(-700px, 0px);
        transform: scale(0, 0) translate(-700px, 0px);
      }
      100% {
        opacity: 1;
        -webkit-transform-origin: 100% 100%;
        transform-origin: 100% 100%;
        -webkit-transform: scale(1, 1) translate(0px, 0px);
        transform: scale(1, 1) translate(0px, 0px);
      }
    }
  }
`;
