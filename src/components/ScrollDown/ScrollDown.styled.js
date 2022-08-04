import styled from 'styled-components';

const StyledScrollDown = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .field {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 300px;
  }

  .scroll {
    width: 60px;
    height: 60px;
    border: 2px solid #333;
    border-radius: 50%;
    position: relative;
    animation: down 1.5s infinite;
    -webkit-animation: down 1.5s infinite;
    &::before {
      content: '';
      position: absolute;
      top: 15px;
      left: 18px;
      width: 18px;
      height: 18px;
      border-left: 2px solid #333;
      border-bottom: 2px solid #333;
      transform: rotate(-45deg);
    }
  }
  
  @keyframes down {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translateY(15px);
    }
    40% {
      transform: translate(0);
    }
  }
  
  @-webkit-keyframes down {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translateY(15px);
    }
    40% {
      transform: translate(0);
    }
  }
`

export default StyledScrollDown;