import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useEffect, useState } from 'react';

const PreLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 z-50">
      <DotLottieReact src="https://lottie.host/ab3cb258-dc1e-4fc6-a17b-7d4851c2ecf4/UlGFgb8urI.lottie" style={{ width: '220px', height: '220px' }} loop autoplay />

      <p className="text-zinc-400 text-sm mt-4 animate-pulse">Loading your experience...</p>
    </div>
  );
};

export default PreLoader;
