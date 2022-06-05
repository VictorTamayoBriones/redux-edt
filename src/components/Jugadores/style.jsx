import styled from 'styled-components';

export const JugadoresSection = styled.section`
    width: 95%;
    padding: 12px;
    margin: 20px auto;
    background: #ccccccbe;
    border-radius: 5px;
    .container-jugadores, .cancha{
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        margin-top: 12px;
    }
`;

export const CardJugador = styled.article`
    width: 200px;
    height: 200px;
    background: #2a2a2a;
    color: #fff;
    border-radius: 3px;
    overflow: hidden;
    img{
        width: 100%;
        
    }
    h3{
        padding: 0 5px;
    }
    .actions{
        padding: 0 5px;
        display: flex;
        justify-content: space-between;
    }

    .delete{
        width: 90%;
        margin: 0 5%;
    }

    @media(max-width:674px){
        width: 150px;
        height: max-content;
        .actions{
            padding: 0;
            button{
                width: 50%;
                font-size: 12px;
            }
        }
    }
`;