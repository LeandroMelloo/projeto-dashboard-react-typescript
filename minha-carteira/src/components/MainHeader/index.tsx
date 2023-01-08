// useMemo => é um Hooks do React que decora o valor.
// useCallback => é um Hooks do React que memoriza a função muda
import React, {useMemo} from 'react';

import Toggle from '../../components/Toogle';
import emojis from '../../utils/emojis';

import { 
    Container, 
    Profile, 
    UserName, 
    Welcome 
} from './styles';

const MainHeader: React.FC = () => {

    const emoji = useMemo(() => {
        // Math.floor => arredonda os valores com uma casa decimal 8.9999 fica 9
        // Math.random() * 10 => gera valores aleatorios de 0 a 10
        const indice = Math.floor(Math.random() * emojis.length); 
        return emojis[indice];
    }, []);

    return (
        <Container>
            <Toggle />

            <Profile>
                <Welcome>Olá {emoji}</Welcome>
                <UserName>Leandro Mello</UserName>
            </Profile>
        </Container>
    );
}

export default MainHeader;