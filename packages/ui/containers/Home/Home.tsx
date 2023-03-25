import Head from 'next/head'
import { Toaster, toast } from 'react-hot-toast'
import DropDown, { VibeType } from 'ui/components/DropDown'
import Github from 'ui/components/GitHub'
import Header from 'ui/components/Header'
import LoadingSpinner from 'ui/components/LoadingSpinner'
import React, { useRef, useState } from 'react'

const Home = () => {
  const [loading, setLoading] = useState(false)
  const [bio, setBio] = useState('')
  const [vibe, setVibe] = useState<VibeType>('Funny')
  const [generatedBios, setGeneratedBios] = useState<String>('')

  const bioRef = useRef<null | HTMLDivElement>(null)

  const scrollToBios = () => {
    if (bioRef.current !== null) {
      bioRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const prompt = `Generate 2 ${vibe} descriptions and clearly labeled "1." and "2.". ${
    vibe === 'Funny'
      ? "Make sure there is a joke in there and it's a little ridiculous."
      : null
  }
      Make sure each generated description is less than 800 words, has catchy sentences that are found in descriptions, and base them on this context: ${bio}${
    bio.slice(-1) === '.' ? '' : '.'
  }`

  const generateBio = async (e: any) => {
    e.preventDefault()
    setGeneratedBios('')
    setLoading(true)
    try {
      console.log('we here')
      const response = await fetch('http://localhost:3001/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
        }),
      })
      console.log('response', response)

      if (!response.ok) {
        console.log(response)
        throw new Error(response.statusText)
      }

      console.log(response, 'response')
      // This data is a ReadableStream
      const data = response.body
      if (!data) {
        return
      }

      const reader = data.getReader()
      const decoder = new TextDecoder()
      let done = false

      while (!done) {
        const { value, done: doneReading } = await reader.read()
        done = doneReading
        const chunkValue = decoder.decode(value)
        console.log('Result:', chunkValue)

        setGeneratedBios(prev => prev + chunkValue)
      }

      scrollToBios()
      setLoading(false)
    } catch (error) {
      console.log(error)
      toast.error('Something went wrong, please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center max-w-5xl min-h-screen py-2 mx-auto">
      <Head>
        <title>Twitter Bio Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex flex-col items-center justify-center flex-1 w-full px-4 mt-12 text-center sm:mt-20">
        {/* <a
          className="flex items-center justify-center px-4 py-2 mb-5 space-x-2 text-sm text-gray-600 transition-colors bg-white border border-gray-300 rounded-full shadow-md max-w-fit hover:bg-gray-100"
          href="https://github.com/Nutlope/twitterbio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
          <p>Star on GitHub</p>
        </a> */}
        <h1 className="sm:text-6xl text-4xl max-w-[708px] font-bold text-slate-900">
          Generate your next description using chatGPT
        </h1>
        <p className="mt-5 text-slate-500">
          2,118 descriptions generated so far.
        </p>
        <div className="w-full max-w-xl">
          <div className="flex items-center mt-10 space-x-3">
            <img
              src="/1-black.png"
              width={30}
              height={30}
              alt="1 icon"
              className="mb-5 sm:mb-0"
            />
            <p className="font-medium text-left">
              Say in a few words what you want the description to be about.
            </p>
          </div>
          <textarea
            value={bio}
            onChange={e => setBio(e.target.value)}
            rows={4}
            className="w-full my-5 border-gray-300 rounded-md shadow-sm focus:border-black focus:ring-black"
            placeholder="e.g.  a self made herring salad prepared in Amsterdam with the fish from the North Sea. Good to eat with a genever on the side."
          />
          <div className="flex items-center mb-5 space-x-3">
            <img src="/2-black.png" width={30} height={30} alt="1 icon" />
            <p className="font-medium text-left">Select your vibe.</p>
          </div>
          <div className="block">
            <DropDown vibe={vibe} setVibe={newVibe => setVibe(newVibe)} />
          </div>

          {!loading && (
            <button
              className="w-full px-4 py-2 mt-8 font-medium text-white bg-black rounded-xl sm:mt-10 hover:bg-black/80"
              onClick={e => generateBio(e)}
              type="button"
            >
              Generate your description &rarr;
            </button>
          )}
          {loading && (
            <button
              className="w-full px-4 py-2 mt-8 font-medium text-white bg-black rounded-xl sm:mt-10 hover:bg-black/80"
              disabled
              type="button"
            >
              <LoadingSpinner />
            </button>
          )}
        </div>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{ duration: 2000 }}
        />
        <hr className="h-px bg-gray-700 border-1 dark:bg-gray-700" />
        <div className="my-10 space-y-10">
          {generatedBios && (
            <>
              <div>
                <h2
                  className="mx-auto text-3xl font-bold sm:text-4xl text-slate-900"
                  ref={bioRef}
                >
                  Your generated descriptions
                </h2>
              </div>
              <div className="flex flex-col items-center justify-center max-w-xl mx-auto space-y-8">
                {generatedBios
                  .substring(generatedBios.indexOf('1') + 3)
                  .split('2.')
                  .map(generatedBio => (
                    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/interactive-supports-focus
                    <div
                      role="button"
                      className="p-4 transition bg-white border shadow-md rounded-xl hover:bg-gray-100 cursor-copy"
                      onClick={() => {
                        navigator.clipboard.writeText(generatedBio)
                        toast('Bio copied to clipboard', {
                          icon: '✂️',
                        })
                      }}
                      key={generatedBio}
                    >
                      <p>{generatedBio}</p>
                    </div>
                  ))}
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  )
}

export default Home
