import styled from 'styled-components';
import { GiCheckMark } from 'react-icons/gi';
import { RiCloseFill } from 'react-icons/ri';

export default function MessageContainer({ isSuccess, isError }) {
  return (
    <Message>
      {isSuccess ? <GiCheckMark className="icon_success" /> : null}
      {isError ? <RiCloseFill className="icon_error" /> : null}
    </Message>
  );
}

const Message = styled.div`
  display: flex;
  justify-content: flex-end;

  .icon_success {
    color: var(--success);
    font-size: var(--fs-700);
    margin: 1rem 0 0.5rem 0;
  }

  .icon_error {
    color: var(--danger);
    font-size: var(--fs-800);
    margin: 1rem 0 0.5rem 0;
  }
`;
