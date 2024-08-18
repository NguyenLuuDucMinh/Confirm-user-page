import React from 'react';
import styled from 'styled-components'
import Avatar from './Avatar.jpg'
import Vector from './Vector.jpg'

const StyledContainer = styled.div`
    width: 100%;
    height: 100vh;
`;

const StyledNav= styled.div`
    background-color: #D3CBCB;
    width: 100%;
    height: 10%;
`;

const StyledProfile = styled.div`
    width: 80%;
    height: 70%;
    float: right;
    display: flex;
    flex-direction: column;
`;

const StyledAvatar = styled.div`
    width: 40%;
    height:30%;
    margin-top: 10px;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    
    img{
        width:20%;
        height:50%; 
    }
    button{
        margin-right: 10px;
        border-radius: 20px;
        background-color: #046CB8;
        color: white;
    }

    a{
        color: #046CB8;
        text-decoration: none;
    }

    .vector{
        width: 20px;
        height: 10px;
    }
`;

const StyledInfoProfile= styled.div`
    width: 100%;
    height: 60%;
    margin-top: 20px;
    margin-left: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`;

const StyledForm = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 5px;

    input{
        padding: 12px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
`;

const StyledConfirmButtom = styled.div`
    width: 50px;
    margin-top: 50px;
    margin-right: 20px;

    button{
        width: 100px;
        height:40px;
        margin-right: 10px;
        border-radius: 20px;
        background-color: #046CB8;
        color: white;
        cursor: pointer;
    }
`;

const Profile = () => {
    return (
        <StyledContainer>
            <StyledNav></StyledNav>
            <StyledProfile>
                <StyledAvatar>
                    <img src={Avatar} alt='Avatar' />
                    <div>
                        <button>Tripper</button>
                        <a href='#'>Chỉnh sửa ảnh</a>
                    </div>
                    <a href='#'>Nâng cấp tài khoản
                        <img className='vector' src={Vector} alt='Vector Icon' />
                    </a>
                </StyledAvatar>
                <StyledInfoProfile>
                    <StyledForm>
                        <label>Full Name</label>
                        <input placeholder='Your First Name' />
                    </StyledForm>
                    <StyledForm>
                        <label>Nick Name</label>
                        <input placeholder='Your Nick Name' />
                    </StyledForm>
                    <StyledForm>
                        <label>Email</label>
                        <input placeholder='Your Email' />
                    </StyledForm>
                    <StyledForm>
                        <label>Phone Number</label>
                        <input placeholder='Your Phone Number' />
                    </StyledForm>
                    <StyledForm>
                        <label>Birthday</label>
                        <input placeholder='Your Birthday' />
                    </StyledForm>
                    <StyledForm>
                        <label>Address</label>
                        <input placeholder='Your Address' />
                    </StyledForm>
                    <StyledForm>
                        <label>Loại hình du lịch yêu thích</label>
                        <input placeholder='Loại hình du lịch yêu thích' />
                    </StyledForm>
                    <StyledForm>
                        <label>Chủ đề quan tâm</label>
                        <input placeholder='Chủ đề quan tâm' />
                    </StyledForm>
                </StyledInfoProfile>
                <StyledConfirmButtom>
                    <button>Lưu</button>
                </StyledConfirmButtom>
            </StyledProfile>
        </StyledContainer>
    );
};

export default Profile;
