import dynamic from 'next/dynamic';
import Spline from '@splinetool/react-spline';

export default function Home() {
  return (
    <Spline
      className="w-[600px] h-[600px] animate-fade-in"
      // scene="https://prod.spline.design/7Q6tWbXyV4mITSCs/scene.splinecode"
      // scene="https://prod.spline.design/uUzsNaWpo0MUjzcd/scene.splinecode"
      // scene="https://prod.spline.design/xAHz9Rr9aiFmbwD4/scene.splinecode"
      scene="https://prod.spline.design/JjuAUS8iM07Bemju/scene.splinecode"
    />
  );
}
