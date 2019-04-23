import styled from 'styled-components'
export const Container = styled.div`
    width: 992px;
    margin: 0 auto
`
export const FlexBox = styled.div `
    display: flex;
    `
export const FlexItem = styled.div`
    flex-grow: ${prop => prop.flexGrow || 1};
    padding: 0 5px;
    `