import React, { useEffect, useRef } from 'react';
import '../index.css';

const Cursor: React.FC = () => {
  const delay = 18;

  const dot = useRef<HTMLDivElement | null>(null);
  const dotOutline = useRef<HTMLDivElement | null>(null);

  const cursorVisible = useRef<boolean>(true);
  const cursorEnlarged = useRef<boolean>(false);

  const endX = useRef<number>(window.innerWidth / 2);
  const endY = useRef<number>(window.innerHeight / 2);
  const _x = useRef<number>(0);
  const _y = useRef<number>(0);

  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const mouseOverEvent = () => {
      cursorEnlarged.current = true;
      toggleCursorSize();
    };

    const mouseOutEvent = () => {
      cursorEnlarged.current = false;
      toggleCursorSize();
    };

    const mouseEnterEvent = () => {
      cursorVisible.current = true;
      toggleCursorVisibility();
    };

    const mouseLeaveEvent = () => {
      cursorVisible.current = false;
      toggleCursorVisibility();
    };

    const mouseMoveEvent = (e: MouseEvent) => {
      cursorVisible.current = true;
      toggleCursorVisibility();

      endX.current = e.pageX;
      endY.current = e.pageY;

      if (dot.current) {
        dot.current.style.top = `${endY.current}px`;
        dot.current.style.left = `${endX.current}px`;
      }
    };

    const animateDotOutline = () => {
      _x.current += (endX.current - _x.current) / delay;
      _y.current += (endY.current - _y.current) / delay;

      if (dotOutline.current) {
        dotOutline.current.style.top = `${_y.current}px`;
        dotOutline.current.style.left = `${_x.current}px`;
      }

      requestRef.current = requestAnimationFrame(animateDotOutline);
    };

    document.addEventListener('mousedown', mouseOverEvent);
    document.addEventListener('mouseup', mouseOutEvent);
    document.addEventListener('mousemove', mouseMoveEvent);
    document.addEventListener('mouseenter', mouseEnterEvent);
    document.addEventListener('mouseleave', mouseLeaveEvent);

    animateDotOutline();

    return () => {
      document.removeEventListener('mousedown', mouseOverEvent);
      document.removeEventListener('mouseup', mouseOutEvent);
      document.removeEventListener('mousemove', mouseMoveEvent);
      document.removeEventListener('mouseenter', mouseEnterEvent);
      document.removeEventListener('mouseleave', mouseLeaveEvent);

      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  const toggleCursorVisibility = () => {
    if (cursorVisible.current) {
      dot.current?.style.opacity = '1';
      dotOutline.current?.style.opacity = '1';
    } else {
      dot.current?.style.opacity = '0';
      dotOutline.current?.style.opacity = '0';
    }
  };

  const toggleCursorSize = () => {
    if (cursorEnlarged.current) {
      dot.current?.style.transform = 'translate(-50%, -50%) scale(0.75)';
      dotOutline.current?.style.transform = 'translate(-50%, -50%) scale(1.5)';
    } else {
      dot.current?.style.transform = 'translate(-50%, -50%) scale(1)';
      dotOutline.current?.style.transform = 'translate(-50%, -50%) scale(1)';
    }
  };

  return (
    <>
      <div ref={dotOutline} className="cursor-dot-outline"></div>
      <div ref={dot} className="cursor-dot"></div>
    </>
  );
};

export default Cursor;
