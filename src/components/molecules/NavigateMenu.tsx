import React from 'react'
import { NavigateLinks } from '../atom/NavigateLinks'


export const NavigateMenu = () => {

  return (
    <>
      <ul>
        <li>
          <NavigateLinks linkAddress='/#' linkName='Home' />
        </li>
        <li>
          <NavigateLinks linkAddress='#about' linkName='About' />
        </li>
        <li>
          <NavigateLinks linkAddress='#projects' linkName='Projects' />
        </li>
      </ul>
    </>
  )
}
