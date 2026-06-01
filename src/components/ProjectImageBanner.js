import { useState } from 'react'

export default function ProjectImageBanner({ images, aspectRatio = '16/9' }) {
  const [popup, setPopup] = useState(null)

  const handleMouseEnter = (img, e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setPopup({ ...img, rect })
  }

  const handleMouseLeave = () => setPopup(null)

  // Natural width of each image at max height (180px), derived from aspect ratio.
  // flex-basis is set to this so portrait images don't stretch to fill the container;
  // landscape images that overflow will shrink via flex-shrink to fill it instead.
  const [aw, ah] = aspectRatio.split('/').map(Number)
  const naturalWidth = Math.round(180 * aw / ah)

  let popupStyle = null
  if (popup) {
    const width = popup.rect.width * 2
    const left = Math.max(8, Math.min(
      popup.rect.left + popup.rect.width / 2 - width / 2,
      window.innerWidth - width - 8
    ))
    popupStyle = {
      position: 'fixed',
      top: popup.rect.bottom + 8,
      left,
      width,
      zIndex: 1000,
      display: 'block',
      borderRadius: '8px',
      border: '3px solid white',
      boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
      pointerEvents: 'none',
    }
  }

  return (
    <>
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'space-evenly', margin: '-20px -40px 0 -40px', padding: '8px', width: 'calc(100% + 40px)' }}>
        {images.map((img, i) => (
          <div
            key={i}
            style={{ flex: `0 1 ${naturalWidth}px`, minWidth: 0, cursor: 'zoom-in' }}
            onMouseEnter={(e) => handleMouseEnter(img, e)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={img.src}
              alt={img.alt}
              style={{ width: '100%', aspectRatio, objectFit: 'cover', borderRadius: '4px', display: 'block', maxHeight: '180px' }}
            />
          </div>
        ))}
      </div>

      {popup && (
        <img
          src={popup.src}
          alt={popup.alt}
          style={popupStyle}
        />
      )}
    </>
  )
}
