import Link from 'next/link'
import React from 'react'
import { quicksand } from '@/utils/fonts';
import styled from 'styled-components';

interface INavigationLinks {
  linkAddress: string,
  linkName: string,
  target?: string,
  handleClose?: () => void,
}

const HoverableLink = styled.a`
  color: black;
    text-decoration: none;

    &:hover {
      color: #820ad1;
    }
`

export const NavigateLinks = (props: INavigationLinks) => {

  return (
    <>
      <Link href={props.linkAddress} legacyBehavior onClick={props?.handleClose}>
        <HoverableLink
          data-testid='NavegationLinkName-data-testId'
          style={quicksand.style} href={''}>
          {props.linkName}
        </HoverableLink>
      </Link >
    </>
  )
}
