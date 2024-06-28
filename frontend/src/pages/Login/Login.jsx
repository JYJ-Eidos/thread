import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  InnerContainer,
  RowBox,
  Input,
  HalfButton,
} from '../../components/styled.components';
import { Logo, LoginForm, FindIdPw } from './Login.styles';
import { HOST } from '../../variables/variables';

const Main = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState({ email: '', password: '' });

  const onChangeInfo = (e) => {
    const { name, value } = e.currentTarget;
    setInfo({ ...info, [name]: value });
  };

  const goToSignUp = () => {
    navigate('/signup');
  };

  const onSubmitLogin = (e) => {
    e.preventDefault();
    const url = `${HOST}/user/login`;
    const data = info;
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    axios
      .post(url, data, config)
      .then((res) => {
        const token = res.headers.authorization;
        localStorage.setItem('token', token);
        navigate('/post');
      })
      .catch((err) => {
        const { message } = err.response.data;
        if (message === 'EMAIL_DOES_NOT_EXIST') {
          window.confirm('존재하지 않는 아이디 입니다');
        } else if (message === 'CHECK_PASSWORD') {
          window.confirm('아이디 또는 비밀번호가 일치하지 않습니다.');
        }
      });
  };

  return (
    <Container>
      <InnerContainer>
        <Logo src='/images/logo.png' />
        <LoginForm>
          <Input
            name='email'
            onChange={onChangeInfo}
            placeholder='이메일'
            type='text'
            required
          />
          <Input
            name='password'
            onChange={onChangeInfo}
            placeholder='비밀번호'
            type='password'
            required
          />
          <RowBox>
            <HalfButton onSubmit={onSubmitLogin}>로그인</HalfButton>
            <HalfButton onClick={goToSignUp}>회원가입</HalfButton>
          </RowBox>
        </LoginForm>
        <FindIdPw to='/idpw-find'>아이디 / 비밀번호 찾기</FindIdPw>
      </InnerContainer>
    </Container>
  );
};

export default Main;
