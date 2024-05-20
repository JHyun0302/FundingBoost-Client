//펀딩 바로가기 버튼
import React from 'react';
import Button from 'react-bootstrap/Button';

import  '../yellowBtn.scss';
import axios from "axios";


function SignUpBtn({username, email, password, passwordMatch, emailValid}){
    const handleSingUp = async () =>{
        if (!username || !email || !password) {
            alert('모든 정보를 입력해주세요.');
            return;
        } else if (!passwordMatch || !emailValid) {
            alert('잘못된 입력입니다.');
            return;
        }

        try{
            const data = JSON.stringify({
                nickName: username,
                password: password,
                email: email
            })
            console.log("postData:" +data)
            const response = await axios.post(`https://8bef-112-218-95-58.ngrok-free.app/api/v1/login`,data, {
                responseType: 'json',
                headers: ({
                    "Content-Type" : "application/json",
                    "Access-Control-Allow-Credentials" : true,
                    "ngrok-skip-browser-warning": true
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