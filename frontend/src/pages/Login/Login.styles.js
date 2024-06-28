import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Logo = styled.img`
  width: 100%;
  height: 350px;
  margin-bottom: 2rem;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  width: 100%;
`;

export const FindIdPw = styled(Link)`
  text-decoration: none;
  &:visited {
    color: blue;
  }
`;
