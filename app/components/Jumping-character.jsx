import React, { useState, useEffect } from 'react';

export default function JumpingCharacter() {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [velocity, setVelocity] = useState({ vx: 0.1, vy: 0.1 });

  useEffect(() => {
    const characterSize = 50;

    const handleAnimation = () => {
      setPosition((prev) => {
        let newX = prev.x + velocity.vx;
        let newY = prev.y + velocity.vy;

        let newVx = velocity.vx;
        let newVy = velocity.vy;

        // Check for collisions and reverse direction if necessary
        if (newX + characterSize > window.innerWidth || newX < 0) {
          newVx = -newVx;
          newX = prev.x; // Reset to previous X position to avoid crossing the boundary
        }

        if (newY + characterSize > window.innerHeight || newY < 0) {
          newVy = -newVy;
          newY = prev.y; // Reset to previous Y position to avoid crossing the boundary
        }

        setVelocity({ vx: newVx, vy: newVy });
        return { x: newX, y: newY };
      });

      requestAnimationFrame(handleAnimation);
    };

    const animationFrame = requestAnimationFrame(handleAnimation);

    return () => cancelAnimationFrame(animationFrame);
  }, [velocity]);

  return (
    <div
      style={{
        position: 'absolute',
        top: position.y,
        left: position.x,
        width: '50px',
        height: '50px',
      }}
    >
      <img
        src="https://i.ibb.co/PZRhd6f/character.png"
        alt="Alien"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}
