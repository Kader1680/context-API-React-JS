import React from 'react'
import Changeprofil from "./changeprofile/changeprofil"
export default function Profil(props) {
  return (
    <div>
      PROFILE section welcome <span style={{color : "red"}}>{props.name} <Changeprofil setname={props.setname}  /> </span>

    </div>
  )
}

