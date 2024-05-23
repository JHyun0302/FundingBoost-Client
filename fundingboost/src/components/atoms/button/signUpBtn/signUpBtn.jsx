//펀딩 바로가기 버튼
import React from 'react';
import Button from 'react-bootstrap/Button';

import  '../yellowBtn.scss';
import axios from "axios";


function SignUpBtn({username, email, password, emailValid, passwordConfirm}){

    const handleSingUp = async () =>{
        if (!username || !email || !password) {
            alert('모든 정보를 입력해주세요.');
            return;
        } else if  (!emailValid){
            alert('이메일 형식이 올바르지 않습니다.');
            return;
        }
        else if  (password !== passwordConfirm){
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }
        else{
            alert('펀딩부스트에 오신 것을 환영합니다🎉 로그인해주세요.');
        }

        try{
            const data = JSON.stringify({
                nickName: username,
                password: password,
                email: email
            })
            console.log("postData:" +data)

            const response = await axios.post(`${process.env.REACT_APP_FUNDINGBOOST}/signup`,data, {
                responseType: 'json',
                headers: ({
                    "Content-Type" : "application/json",
                    "Access-Control-Allow-Credentials" : true,
                    "Access-Control-Allow-Origin": "http://localhost:3000/",
                }),
                withCredentials: true,
            });
            window.location.href = '/login';
        }catch(error){
            console.error('POST 에러:', error);
        }
    }

    return (
        <>
            <div className="Signup-btn">
                <Button className="yellowBtn" onClick={handleSingUp} >가입하기</Button>

            </div>
        </>

    );
}
export default SignUpBtn;