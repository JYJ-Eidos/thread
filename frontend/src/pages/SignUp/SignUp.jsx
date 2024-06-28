import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Input,
  ColumnBox,
  FullButton,
} from '../../components/styled.components';
import { ColumnForm, TitleSpan } from './SignUp.styles';
import SelectBirthday from '../../utils/SelectBirthday';
import { HOST } from '../../variables/variables';
import axios from 'axios';

const SignUp = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    email: '',
    password: '',
    checkPassword: '',
    nickname: '',
    phoneNumber: '',
    profile_image: '',
  });
  const {
    email,
    password,
    checkPassword,
    nickname,
    phoneNumber,
    profile_image,
  } = info;

  const [birthday, setBirthday] = useState({ year: '', month: '', date: '' });

  const onChangeInfo = (e) => {
    const { name, value } = e.currentTarget;
    setInfo({ ...info, [name]: value });
  };

  const onChangeBirthday = (e) => {
    const { name, value } = e.currentTarget;
    setBirthday({ ...birthday, [name]: value });
  };

  const onSubmitSignUp = (e) => {
    e.preventDefault();
    const { year, month, date } = birthday;
    const dateString = `${year}-${month}-${date}`;
    const url = `${HOST}/user/signup`;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!emailRegex.test(email)) {
      window.alert('이메일 형식을 확인해 주세요');
      return;
    } else if (!passwordRegex.test(password)) {
      window.alert('비밀번호 형식을 확인해 주세요');
      return;
    } else if (password !== checkPassword) {
      window.alert('비밀번호가 일치하지 않습니다');
      return;
    } else if (year === '' || month === '' || date === '') {
      window.alert('생일을 확인해 주세요');
      return;
    } else if (phoneNumber.length !== 11) {
      window.alert('휴대폰 번호를 확인해 주세요');
      return;
    }
    const data = {
      email,
      password,
      nickname,
      birthday: dateString,
      phoneNumber,
      profile_image,
    };
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    axios
      .post(url, data, config)
      .then((res) => {
        if (res.data.message === 'SIGNUP_SUCCESSFUL') {
          window.alert('회원가입 완료');
          navigate('/');
        }
      })
      .catch((err) => {
        const { message } = err.response.data;
        if (message === 'DUPLICATE_EMAIL') {
          window.alert('중복된 아이디 입니다');
        } else if (message === 'DUPLICATE_NICKNAME') {
          window.alert('중복된 닉네임 입니다.');
        } else if (message === 'DUPLICATE_PHONE_NUMBER') {
          window.alert('중복된 휴대폰 번호 입니다.');
        }
      });
  };

  return (
    <Container>
      <TitleSpan>thread 회원가입</TitleSpan>
      <ColumnForm>
        <ColumnBox>
          <Input
            name='email'
            onChange={onChangeInfo}
            type='text'
            placeholder='Email'
          />
        </ColumnBox>
        <ColumnBox>
          <Input
            name='password'
            onChange={onChangeInfo}
            type='password'
            placeholder='Password'
          />
          <Input
            name='checkPassword'
            onChange={onChangeInfo}
            type='password'
            placeholder='Check Password'
          />
          <span>대문자, 소문자, 특수문자, 숫자 포함</span>
        </ColumnBox>
        <ColumnBox>
          <Input
            name='nickname'
            onChange={onChangeInfo}
            placeholder='Nickname'
          ></Input>
        </ColumnBox>
        <SelectBirthday
          birthday={birthday}
          onChangeBirthday={onChangeBirthday}
        />
        <ColumnBox>
          phone number
          <Input name='phoneNumber' onChange={onChangeInfo} type='text' />
        </ColumnBox>
        <FullButton onClick={onSubmitSignUp}>회원가입 요청</FullButton>
      </ColumnForm>
    </Container>
  );
};

export default SignUp;
