import styled from 'styled-components'

export const Container = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #A6A867;
    height: 10vh;
    width: auto;
    padding: 10px 0;
    
    .navLinks {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 60%;
        height: 100%;  
        z-index: 99999;
        
    }

    .navLink {
        color: #583E23;  
        margin-right: 10%;
        transition: all .2s ease-in-out;
    }
    .navLink:hover {
        border-bottom: 3px solid #583E23; 
        border-top: 3px solid #583E23;
    }
    
    h1 {
        font-size: 2.5rem;
        font-family: 'Elsie Swash Caps';
        width: 40%;
        text-align: left;
        margin-left: 20px;
        color: #583E23;
    }

@media screen and (max-width: 800px) {
    h1 {
        width: 70%;
    }

    .burger {
        display: flex;
        flex-direction: column;
        justify-content: space-between; 
        margin-right: 20px;
        cursor: pointer;   
        
    }
    .line1, 
    .line2,
    .line3 {
        margin: 2px;
        background: black;
        padding: 2px;
        width: 25px;
        border-radius: 5px; 
        transition: all .5s ease-in-out;
        background-color: #583E23;
    }

    .navLinks {
        background: #A6A867;
        font-size: 1.5rem;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        background:  rgb(166, 168, 103);
        position: absolute;
        right: 0px;
        top: 10vh;
        height: 50vh;
        width: 45%;
        transform: translateX(100%); 
        transition: transform .5s ease-in-out; 
        border-radius: 0px 0px 0px 24px;

    }

    .open .navLink {
        width: 100%;
        margin-right: 0;
        padding: 10% 0;
        transition: all .2s ease-in-out;

        &:last-child {
           margin-bottom: 5%;
        }
     
        &:hover {
            background: #E3DCC2;
            border: none;
        }

    }

    .open{
        transform: translateX(0%);
        display: flex; 
    }

    .toggle .line1 {
        transform: rotate(45deg) translate(6px, 5px);

    }
    .toggle .line2 {
        transform: translateX(-50px);
        background: transparent;
    }
    .toggle .line3 {
        transform: rotate(-45deg) translate(6px, -5px);
    }
}
`

