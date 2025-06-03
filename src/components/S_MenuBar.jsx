import React, { useState, useEffect } from 'react'
import { getPostTeasers } from '../js/search-data.js'
import A_MainMenu from './A_MainMenu.jsx'
import O_SearchBar from './O_SearchBar.jsx'

export default function S_MenuBar({ prerender, homeURL, menu }) {
  const currentURL = !prerender ? window.location.href : ''

  const menuElements = menu.map(({ text, url }, i) => {
    const linkURL = homeURL + url
    return (
      <A_MainMenu
        key={i}
        current={linkURL === currentURL}
        text={text}
        url={linkURL}
        type="text"
      />
    )
  })

  return (
    <>
      <A_MainMenu current={false} text="Главная" url={homeURL} type="logo" />
    </>
  )
}
