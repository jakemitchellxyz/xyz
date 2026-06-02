import { useState, useRef, useEffect } from 'react'

export default function ProjectImageBanner({ images, aspectRatio = '16/9' }) {
  const [popup, setPopup] = useState(null) // { img, rect }
  const containerRef = useRef(null)
  const popupImgRef = useRef(null)
  const [popupLeft, setPopupLeft] = useState(0)
  const [popupReady, setPopupReady] = useState(false)

  const measurePopupLeft = (currentPopup) => {
    if (!popupImgRef.current || !currentPopup || !containerRef.current) return
    const w = popupImgRef.current.offsetWidth
    if (w === 0) return
    const containerBounds = containerRef.current.getBoundingClientRect()
    const thumbCenterX = currentPopup.rect.left + currentPopup.rect.width / 2
    const idealLeft = thumbCenterX - w / 2
    setPopupLeft(Math.max(containerBounds.left, Math.min(idealLeft, containerBounds.right - w)))
    setPopupReady(true)
  }

  useEffect(() => {
    setPopupReady(false)
    if (popup) measurePopupLeft(popup)
  }, [popup])

  const handleMouseEnter = (img, e) => {
    setPopup({ img, rect: e.currentTarget.getBoundingClientRect() })
  }

  const handleMouseLeave = () => setPopup(null)

  const handleClick = (img, e) => {
    e.stopPropagation()
    const rect = e.currentTarget.getBoundingClientRect()
    setPopup(prev => prev?.img.src === img.src ? null : { img, rect })
  }

  const [aw, ah] = aspectRatio.split('/').map(Number)
  const naturalWidth = Math.round(180 * aw / ah)

  let popupStyle = null
  if (popup && containerRef.current) {
    const containerBounds = containerRef.current.getBoundingClientRect()
    const spaceBelow = window.innerHeight - popup.rect.bottom - 16
    const spaceAbove = popup.rect.top - 16
    const showBelow = spaceBelow >= spaceAbove

    popupStyle = {
      position: 'fixed',
      left: popupLeft,
      maxWidth: containerBounds.width,
      maxHeight: showBelow ? spaceBelow : spaceAbove,
      width: 'auto',
      height: 'auto',
      opacity: popupReady ? 1 : 0,
      zIndex: 1000,
      borderRadius: '8px',
      border: '3px solid white',
      boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
      pointerEvents: 'none',
      ...(showBelow
        ? { top: popup.rect.bottom + 8 }
        : { bottom: window.innerHeight - popup.rect.top + 8 }
      ),
    }
  }

  return (
    <>
      <div
        ref={containerRef}
        style={{ display: 'flex', gap: '8px', justifyContent: 'space-evenly', margin: '-20px -40px 0 -40px', padding: '8px', width: 'calc(100% + 80px)' }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            style={{ flex: `0 1 ${naturalWidth}px`, minWidth: 0, cursor: 'zoom-in', borderRadius: '4px' }}
            onMouseEnter={(e) => handleMouseEnter(img, e)}
            onMouseLeave={handleMouseLeave}
            onClick={(e) => handleClick(img, e)}
          >
            <img
              src={img.src}
              alt={img.alt}
              style={{ width: '100%', aspectRatio, objectFit: 'cover', borderRadius: '4px', display: 'block', maxHeight: '180px' }}
            />
          </div>
        ))}
      </div>

      {popup && popupStyle && (
        <img
          ref={popupImgRef}
          src={popup.img.src}
          alt={popup.img.alt}
          style={popupStyle}
          onLoad={() => measurePopupLeft(popup)}
        />
      )}
    </>
  )
}
