'use client'

import styled from "styled-components";

export const Button = styled.button<{rounded?: boolean}>`
  background-color: #000;
  color: #FFF;
  border-radius: ${props => props.rounded ? 50 : 0}px;
`