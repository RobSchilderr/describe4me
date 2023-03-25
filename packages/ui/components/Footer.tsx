import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between w-full h-16 px-3 pt-4 mt-5 mb-3 space-y-3 text-center border-t sm:h-20 sm:pt-2 sm:flex-row sm:mb-0">
      <div>
        Powered by{' '}
        <a
          href="https://openai.com/blog/chatgpt"
          target="_blank"
          rel="noreferrer"
          className="font-bold transition hover:underline underline-offset-2"
        >
          ChatGPT{' '}
        </a>
        and{' '}
        <a
          href="https://vercel.com/"
          target="_blank"
          rel="noreferrer"
          className="font-bold transition hover:underline underline-offset-2"
        >
          Vercel Edge Functions.
        </a>
      </div>
    </footer>
  )
}
