import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  display: inline-block;
  animation: ${rotate360} 700ms linear infinite;
  transform: translateZ(0px);
  border-top: 3px solid grey;
  border-right: 3px solid grey;
  border-bottom: 3px solid grey;
  border-left: 4px solid teal;
  background: transparent;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin: auto;
`;

export default Spinner;
