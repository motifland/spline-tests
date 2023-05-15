import Spline from '@splinetool/react-spline'

export default function Home() {
  return (
    <main>
      <div className="flex flex-row">
        <div className="">
          Enterprise-grade AI chatbots for your website and docs
        </div>
        <div className="relative z-0 hidden h-full border sm:block">
          <div className="h-[600px] w-[600px]">
            <Spline scene="https://prod.spline.design/JjuAUS8iM07Bemju/scene.splinecode" />
          </div>
        </div>
      </div>
    </main>
  )
}
