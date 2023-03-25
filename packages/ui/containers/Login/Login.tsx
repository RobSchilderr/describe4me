import Head from 'next/head'
import React from 'react'
import {
  EmailPasswordLoginForm,
  LoginForm,
  PasswordlessLoginForm,
} from 'ui/containers/Forms/LoginForm'
import { AuthLayout } from 'ui/components/AuthLayout'
import { AppleButton, GoogleButton } from '../../components/SocialButtons'
import { onThirdPartyLogin } from 'lib/utils/supertokensUtilities'
import { usePlatform } from 'lib/utils/capacitor'
import TextDivider from '../../components/TextDivider'
import Link from 'next/link'
import { AUTH_MODE } from 'lib/utils/config'
import Header from '../../components/Header'

const ThirdPartyEmailPasswordLogin = () => {
  const platform = usePlatform()
  return (
    <>
      <Head>
        <title>Sign In - Supertokens</title>
      </Head>

      <AuthLayout>
        <div className="flex flex-col">
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-sm text-gray-700">
              Or{' '}
              <Link
                href="/register"
                className="font-medium text-blue-600 hover:underline"
              >
                go to register{' '}
              </Link>{' '}
            </p>
          </div>
        </div>

        <div className="mt-8">
          <div>
            <div>
              <p className="text-sm font-medium text-gray-700">Login with</p>
              <div className="flex flex-col mt-2 space-y-6">
                <GoogleButton
                  onClick={() =>
                    onThirdPartyLogin({
                      provider: 'google',
                      platform,
                    })
                  }
                />
                <AppleButton
                  onClick={() =>
                    onThirdPartyLogin({
                      provider: 'apple',
                      platform,
                    })
                  }
                />
              </div>
            </div>

            <div className="mt-6">
              <TextDivider text="Or login with" />
            </div>
          </div>
        </div>
        <div className="mt-6">
          <LoginForm />
        </div>
      </AuthLayout>
    </>
  )
}

const EmailPasswordLogin = () => {
  return (
    <>
      <Head>
        <title>Sign In - Supertokens</title>
      </Head>
      <AuthLayout>
        <div className="flex flex-col">
          <p className="mt-2 text-sm text-gray-700">
            <Link
              href="/"
              className="font-medium text-blue-600 hover:underline"
            >
              Go back to home{' '}
            </Link>{' '}
          </p>
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-sm text-gray-700">
              Or{' '}
              <Link
                href="/register"
                className="font-medium text-blue-600 hover:underline"
              >
                go to register{' '}
              </Link>{' '}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <EmailPasswordLoginForm />
        </div>
      </AuthLayout>
    </>
  )
}

const ThirdPartyLogin = () => {
  const platform = usePlatform()

  return (
    <>
      <Head>
        <title>Sign In - Supertokens</title>
      </Head>
      <AuthLayout>
        <div className="flex flex-col">
          <p className="mt-2 text-sm text-gray-700">
            <Link
              href="/"
              className="font-medium text-blue-600 hover:underline"
            >
              Go back to home{' '}
            </Link>{' '}
          </p>
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-900">
              Sign in to your account
            </h2>
          </div>
        </div>

        <div className="mt-8">
          <div>
            <div>
              <p className="text-sm font-medium text-gray-700">Login with</p>
              <div className="flex flex-col mt-2 space-y-6">
                <GoogleButton
                  onClick={() =>
                    onThirdPartyLogin({
                      provider: 'google',
                      platform,
                    })
                  }
                />
                <AppleButton
                  onClick={() =>
                    onThirdPartyLogin({
                      provider: 'apple',
                      platform,
                    })
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </AuthLayout>
    </>
  )
}

const PasswordlessLogin = () => {
  return (
    <>
      <Head>
        <title>Sign In - Supertokens</title>
      </Head>
      <AuthLayout>
        <div className="flex flex-col">
          <p className="mt-2 text-sm text-gray-700">
            <Link
              href="/"
              className="font-medium text-blue-600 hover:underline"
            >
              Go back to home{' '}
            </Link>{' '}
          </p>
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-900">
              Sign in to your account
            </h2>
          </div>
        </div>

        <div className="mt-6">
          <PasswordlessLoginForm />
        </div>
      </AuthLayout>
    </>
  )
}

const ThirdPartyPasswordlessLogin = () => {
  const platform = usePlatform()

  return (
    <>
      <Head>
        <title>Sign In - Supertokens</title>
      </Head>
      <AuthLayout>
        <div className="flex flex-col">
          <p className="mt-2 text-sm text-gray-700">
            <Link
              href="/"
              className="font-medium text-blue-600 hover:underline"
            >
              Go back to home{' '}
            </Link>{' '}
          </p>
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-900">
              Sign in to your account
            </h2>
          </div>
        </div>

        <div className="mt-8">
          <div>
            <div>
              <p className="text-sm font-medium text-gray-700">Login with</p>
              <div className="flex flex-col mt-2 space-y-6">
                <GoogleButton
                  onClick={() =>
                    onThirdPartyLogin({
                      provider: 'google',
                      platform,
                    })
                  }
                />
                <AppleButton
                  onClick={() =>
                    onThirdPartyLogin({
                      provider: 'apple',
                      platform,
                    })
                  }
                />
              </div>
            </div>

            <div className="mt-6">
              <TextDivider text="Or login with" />
            </div>

            <div className="mt-6">
              <PasswordlessLoginForm />
            </div>
          </div>
        </div>
      </AuthLayout>
    </>
  )
}

export const LoginComponent = () => {
  if (AUTH_MODE === 'emailpassword') {
    return <EmailPasswordLogin />
  }

  if (AUTH_MODE === 'thirdparty') {
    return <ThirdPartyLogin />
  }

  if (AUTH_MODE === 'passwordless') {
    return <PasswordlessLogin />
  }

  if (AUTH_MODE === 'thirdpartypasswordless') {
    return <ThirdPartyPasswordlessLogin />
  }

  return <ThirdPartyEmailPasswordLogin />
}
