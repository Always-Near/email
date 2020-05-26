import { css } from 'emotion'

export const counter = css`
  width: 100%;
  height: 100%;
  position: relative;

  .back-home {
    position: absolute;
    bottom: 20%;
    left: 10px;
    z-index: 5;

    a {
      font-size: 1.4rem;
      color: #fff;
    }
  }

  .counter {
    font-size: 100px;
    line-height: 100px;
    padding-top: 100px;
  }

  .btn-group {
    position: absolute;
    top: 300px;
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto;

    button {
      text-align: center;
      font-size: 18px;
      font-weight: bold;
      background-color: #fff;
      border-radius: 50%;
      margin: 10px;
      width: 70px;
      height: 70px;
      opacity: 0.7;
      cursor: pointer;
      font-family: Arial, Helvetica, Helvetica Neue, sans-serif;
      vertical-align: top;
      outline: none;

      :hover {
        color: white;
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
  }
`
