import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Nabvar() {
  return (
    <div class="p-4 bg-primary  d-flex align-item-center justify-content-center">
      <Link class="text-white text-decoration-none fw-bolder" to="/">Home</Link>
      <Link class="text-white text-decoration-none fw-bolder ms-4"  to="/profil">Profil</Link>
      <Link class="text-white text-decoration-none fw-bolder ms-4"  to="/contact">Contact</Link>
    </div>
  )
}
