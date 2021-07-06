import styled from 'styled-components';

export default function Title() {
  return (
    <Header>
      <h3>The Ultimate Tom Clancy's</h3>
      <h1>
        <span>Jack Ryan</span>
      </h1>
    </Header>
  );
}

const Header = styled.section`
  text-align: center;

  h3 {
    animation: drop 2s cubic-bezier(0.23, 1, 0.23, 1);
    background: linear-gradient(#262626, #eaeaea, #262626);
    -webkit-background-clip: text;
    color: transparent;
    font-size: var(--fs-600);
    opacity: 0.9;

    @keyframes drop {
      from {
        transform: translateY(-255px);
      }
      to {
        transform: translateX(0);
      }
    }

    @media (max-width: 375px) {
      font-size: var(--fs-550);
      margin-top: 1rem;
    }
  }

  h1 {
    animation: zoom-in-zoom-out 3s ease-in-out;
    color: var(--white);
    margin: 1rem 0.5rem;

    @keyframes zoom-in-zoom-out {
      0% {
        transform: scale(1, 1);
        opacity: 0;
      }
      50% {
        transform: scale(1.5, 1.5);
        opacity: 0.5;
      }
      100% {
        transform: scale(1, 1);
        opacity: 1;
      }
    }

    @media (min-width: 375px) {
      @keyframes zoom-in-zoom-out {
        0% {
          transform: scale(1, 1);
          opacity: 0;
        }
        50% {
          transform: scale(1.15, 1.15);
          opacity: 0.5;
        }
        100% {
          transform: scale(1, 1);
          opacity: 1;
        }
      }
    }
  }

  h1 > span {
    background-image: url('https://dl.dropbox.com/s/r2s8s2r17wi0xm6/flame.png?dl=0');
    background-position: 0 -1000px;
    font-size: var(--fs-900);
    letter-spacing: 0.5rem;
    text-transform: uppercase;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    animation: fire 4s linear infinite;
    animation-delay: 4s;

    @keyframes fire {
      0% {
        background-position: 0% -50%;
      }
      100% {
        background-position: 0% -25%;
      }
    }

    @media (max-width: 375px) {
      font-size: var(--fs-850);
    }
  }

  @media (min-width: 375px) {
    margin-bottom: 6rem;
  }
`;
