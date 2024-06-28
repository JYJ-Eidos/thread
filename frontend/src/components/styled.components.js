import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 800px;
  border: 0.4rem solid skyblue;
  border-radius: 20px;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: 100%;
  padding: 80px 40px 40px 40px;
`;

export const Input = styled.input`
  width: 100%;
  height: 45px;
  border: 0.15rem solid skyblue;
  border-radius: 0.8rem;
  padding: 0.4rem;
  font-size: 1.2rem;
`;

export const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0.5rem;
  width: 100%;
`;
export const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
  width: 100%;
`;

export const RowForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0.5rem;
  width: 100%;
`;

export const FullButton = styled.button`
  width: 100%;
  height: 45px;
  border: none;
  border-radius: 10px;
  background-color: #2de1f2;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #2980b9;
  }
`;

export const HalfButton = styled.button`
  width: 49%;
  height: 45px;
  border: none;
  border-radius: 10px;
  background-color: #2de1f2;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #2980b9;
  }
`;

export const QuarterButton = styled.button`
  width: 25%;
  height: 45px;
  border: none;
  border-radius: 10px;
  background-color: #2de1f2;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #2980b9;
  }
`;
