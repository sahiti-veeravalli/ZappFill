import { Particles } from "./Particles";

export function AmbientBackground() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-60" />
        <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-violet/20 blur-[140px] animate-blob" />
        <div className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-indigo/20 blur-[160px] animate-blob [animation-delay:-4s]" />
        <div className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full bg-cyan/20 blur-[150px] animate-blob [animation-delay:-8s]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/60" />
      </div>
      <Particles />
    </>
  );
}
