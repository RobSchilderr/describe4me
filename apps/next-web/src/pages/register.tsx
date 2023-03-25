import React from 'react'
import Header from 'ui/components/Header'
import { RegisterComponent } from 'ui/containers/Register/Register'

const RegisterPage = () => (
  <div className="space-y-6">
    <Header />
    <RegisterComponent />
  </div>
)

export default RegisterPage
