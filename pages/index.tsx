import Spline from '@splinetool/react-spline';

export default function Home() {
  return (
    <main>
      <Spline scene="https://prod.spline.design/JjuAUS8iM07Bemju/scene.splinecode" />
      <div className="flex flex-row">
        <div>Message</div>
        <div style={{ width: 600, height: 600 }}></div>
      </div>
    </main>
  );
}
