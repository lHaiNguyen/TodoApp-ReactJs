import React, { Component } from 'react';
import styled from 'styled-components'

export const Button = styled.button`
     &:hover {
         color: green
     }
`
export const Box = styled.div `
    color: ${props => props.theme.color}
`