import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  width: 500px;
  min-height: 500px;
  padding: 16px;
  display: flex;
  flex-direction: column;

  h2 {
    color: #363f5f;
    font-size: 2rem;
  }

  input {
    width: 90%;
    padding: 0.5rem;
    height: 4rem;
    border-radius: 0.25rem 0 0 0.25rem;

    border: 1px solid #d7d7d7;
    outline: none;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: #969cb2;
    }
  }

  .btn-add-task {
    width: calc(10% - 5px);
    padding: 0.5rem;
    height: 4rem;
    background: #33cc95;
    color: #fff;
    border-radius: 0 0.25rem 0.25rem 0;
    border: 0;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const FormGroup = styled.div`
  margin-top: 20px;
`;

export const TaskList = styled.div`
  margin-top: 20px;

  ul {
    list-style: none;
  }

  li {
    border-radius: 0.25rem;
    background-color: #e7e9ee;
    width: 100%;
    display: flex;

    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    padding-left: 0.5rem;
  }

  a {
    padding: 0.5rem;
    background: #e52e4d;
    color: #fff;
    border-radius: 0 0.25rem 0.25rem 0;
    border: 0;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const ClearAll = styled.button`
  justify-items: space;
  padding: 0.5rem;
  height: 2rem;
  background: #e52e4d;
  color: #fff;
  border-radius: 0.25rem;
  border: 0;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
