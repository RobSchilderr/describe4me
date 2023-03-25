import React from 'react'
import Header from 'ui/components/Header'
import { LoginComponent } from 'ui/containers/Login/Login'

const LoginPage = () => (
  <div className="space-y-6">
    <Header />
    <LoginComponent />
  </div>
)

export default LoginPage
