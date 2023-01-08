import styled from 'styled-components';
import Switch, { ReactSwitchProps } from 'react-switch';

export const Container = styled.div`
    display: flex;
    align-items: center;
`;

export const ToggleLabel = styled.span`
    color: ${props => props.theme.colors.white};
`;

// coloco entre parênteses styled(Switch) quando quero personalizar um as propriedades de um componente
// attrs para conseguir manipular as propriedades desse componente
export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
    ({ theme }) => ({
        onColor: theme.colors.info,
        offColor: theme.colors.warning,
    }))<ReactSwitchProps>`
    margin: 0 7px;
`;