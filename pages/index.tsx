import Spline from '@splinetool/react-spline';

export default function Home() {
  return (
    <main>
      <div className="flex flex-row">
        <div>Message</div>
        <div className="w-[600px] h-[600px]">
          <Spline scene="https://prod.spline.design/JjuAUS8iM07Bemju/scene.splinecode" />
        </div>
      </div>
    </main>
  );
}
