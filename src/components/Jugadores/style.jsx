import styled from 'styled-components';

export const JugadoresSection = styled.section`
    width: 95%;
    padding: 12px;
    margin: 20px auto;
    background: #ccc;
    border-radius: 5px;
    .container-jugadores{
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

    .actions{
        padding: 0 5px;
        display: flex;
        justify-content: space-between;
    }

    .delete{
        width: 90%;
        margin: 0 5%;
    }
`;