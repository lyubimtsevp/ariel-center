'use client';

import { useEffect, useRef, useState } from 'react';

interface CustomScrollbarProps {
  children: React.ReactNode;
  className?: string;
  maxHeight?: string;
  thumbColor?: string;
  trackColor?: string;
}

export function CustomScrollbar({
  children,
  className = '',
  maxHeight = '400px',
  thumbColor = '#4A90A4',
  trackColor = '#e5e7eb'
}: CustomScrollbarProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollbarRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const [thumbHeight, setThumbHeight] = useState(0);
  const [thumbTop, setThumbTop] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ y: 0, scrollTop: 0 });

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const updateScrollbar = () => {
      const scrollRatio = content.clientHeight / content.scrollHeight;
      const newThumbHeight = Math.max(40, content.clientHeight * scrollRatio);
      setThumbHeight(newThumbHeight);

      const scrollProgress = content.scrollTop / (content.scrollHeight - content.clientHeight);
      const maxThumbTop = content.clientHeight - newThumbHeight;
      setThumbTop(scrollProgress * maxThumbTop);
    };

    updateScrollbar();
    content.addEventListener('scroll', updateScrollbar);
    window.addEventListener('resize', updateScrollbar);

    return () => {
      content.removeEventListener('scroll', updateScrollbar);
      window.removeEventListener('resize', updateScrollbar);
    };
  }, [children]);

  const handleThumbMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStart({
      y: e.clientY,
      scrollTop: contentRef.current?.scrollTop || 0
    });
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      const content = contentRef.current;
      if (!content) return;

      const deltaY = e.clientY - dragStart.y;
      const scrollRatio = content.scrollHeight / content.clientHeight;
      content.scrollTop = dragStart.scrollTop + deltaY * scrollRatio;
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragStart]);

  const handleTrackClick = (e: React.MouseEvent) => {
    const content = contentRef.current;
    const track = scrollbarRef.current;
    if (!content || !track) return;

    const rect = track.getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    const scrollRatio = clickY / content.clientHeight;
    content.scrollTop = scrollRatio * (content.scrollHeight - content.clientHeight);
  };

  return (
    <div className="relative">
      <div
        ref={contentRef}
        className={className}
        style={{
          maxHeight,
          overflowY: 'scroll',
          overflowX: 'hidden',
          paddingRight: '20px',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        {children}
      </div>

      {/* Кастомный scrollbar */}
      <div
        ref={scrollbarRef}
        onClick={handleTrackClick}
        className="absolute top-0 right-0 w-[14px] rounded-[7px] cursor-pointer"
        style={{
          height: maxHeight,
          backgroundColor: trackColor,
        }}
      >
        <div
          ref={thumbRef}
          onMouseDown={handleThumbMouseDown}
          className="absolute right-0 w-full rounded-[7px] transition-colors cursor-grab active:cursor-grabbing"
          style={{
            height: `${thumbHeight}px`,
            top: `${thumbTop}px`,
            backgroundColor: thumbColor,
            border: `3px solid ${trackColor}`,
          }}
        />
      </div>
    </div>
  );
}
