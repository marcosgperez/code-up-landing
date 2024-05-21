import React, { useEffect, useRef, useState, useCallback } from "react";

const Otf = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [velocity, setVelocity] = useState({ x: 2, y: 2 });
  const [rotation, setRotation] = useState(0);
  const restitution = useRef(1);
  const [isMobile, setIsMobile] = useState(false);

  const updatePosition = useCallback(() => {
    const container = containerRef.current;
    const ball = ballRef.current;
    if (!container || !ball) return;
    const containerRect = container.getBoundingClientRect();
    const ballRect = ball.getBoundingClientRect();
    let newX = position.x + velocity.x;
    let newY = position.y + velocity.y;
    let newVelocity = { ...velocity };
    if (newX + ballRect.width >= containerRect.width + 100 || newX <= 0) {
      newVelocity.x = -newVelocity.x * restitution.current;
      newX = newX <= 0 ? 0 : containerRect.width - ballRect.width  + 100;
    }
    if (newY + ballRect.height >= containerRect.height + 100 || newY <= 0) {
      newVelocity.y = -newVelocity.y * restitution.current;
      newY = newY <= 0 ? 0 : containerRect.height - ballRect.height  + 100;
    }
    setPosition({ x: newX, y: newY });
    setVelocity(newVelocity);
    setRotation((prevRotation) => (prevRotation + 0.2) % 360);
  }, [position, velocity]);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (isMobile) return; 
    let animationFrameId: number;
    const animate = () => {
      updatePosition();
      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [updatePosition, isMobile]);

  return (
    <div
      className="otf"
      ref={containerRef}
      style={{
        position: "relative",
        overflow: "hidden"
      }}
    >
      {!isMobile && (
        <div
          className="animation-container"
          ref={ballRef}
          style={{
            position: "absolute",
            left: position.x,
            top: position.y,
            transform: `rotate(${rotation}deg)`
          }}
        >
          <div className="orange"></div>
          <div className="blue"></div>
        </div>
      )}
      <div className="container push-header">
        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
        <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur</p>
        <button className="d-flex btn btn-primary c-white">Look</button>
      </div>
    </div>
  );
};

export default Otf;
