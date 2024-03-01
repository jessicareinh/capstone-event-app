import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    display: flex;
    justify-content: center;
    background-color: #eee9e079;
  }

  .card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  width: 300px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card h3 {
  margin-top: 0;
}

.card p {
  margin-bottom: 10px;
}

.image-container {
  width: 300px;
  border-radius: 9px;
}

.event-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

`;
