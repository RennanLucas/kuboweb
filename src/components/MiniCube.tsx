const MiniCube = ({ size = 20, className = "" }: { size?: number; className?: string }) => {
  const half = size / 2;
  return (
    <div
      className={`mini-cube-scene ${className}`}
      style={{ width: size, height: size }}
    >
      <div className="mini-cube-spinner" style={{ width: size, height: size }}>
        <div className="mini-cube-face mini-front" style={{ width: size, height: size, transform: `translateZ(${half}px)` }} />
        <div className="mini-cube-face mini-back" style={{ width: size, height: size, transform: `rotateY(180deg) translateZ(${half}px)` }} />
        <div className="mini-cube-face mini-right" style={{ width: size, height: size, transform: `rotateY(90deg) translateZ(${half}px)` }} />
        <div className="mini-cube-face mini-left" style={{ width: size, height: size, transform: `rotateY(-90deg) translateZ(${half}px)` }} />
        <div className="mini-cube-face mini-top" style={{ width: size, height: size, transform: `rotateX(90deg) translateZ(${half}px)` }} />
        <div className="mini-cube-face mini-bottom" style={{ width: size, height: size, transform: `rotateX(-90deg) translateZ(${half}px)` }} />
      </div>
    </div>
  );
};

export default MiniCube;
