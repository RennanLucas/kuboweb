const HeroCube = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`hero-cube-scene ${className}`}>
      <div className="hero-cube-wrapper">
        <div className="hero-cube-spinner">
          <div className="hero-cube-face hero-front" />
          <div className="hero-cube-face hero-back" />
          <div className="hero-cube-face hero-right" />
          <div className="hero-cube-face hero-left" />
          <div className="hero-cube-face hero-top" />
          <div className="hero-cube-face hero-bottom" />
        </div>
        {/* Edge wireframe overlay */}
        <div className="hero-cube-edges">
          <div className="hero-edge-face hero-front" />
          <div className="hero-edge-face hero-back" />
          <div className="hero-edge-face hero-right" />
          <div className="hero-edge-face hero-left" />
          <div className="hero-edge-face hero-top" />
          <div className="hero-edge-face hero-bottom" />
        </div>
      </div>
    </div>
  );
};

export default HeroCube;
