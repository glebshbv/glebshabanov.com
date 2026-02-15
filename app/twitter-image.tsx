import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Gleb Shabanov - Tech Entrepreneur & Software Developer'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 60,
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 20,
          }}
        >
          Gleb Shabanov
        </div>
        <div
          style={{
            fontSize: 32,
            textAlign: 'center',
            maxWidth: '80%',
            lineHeight: 1.4,
          }}
        >
          Tech Entrepreneur & Software Developer
        </div>
        <div
          style={{
            fontSize: 24,
            textAlign: 'center',
            maxWidth: '80%',
            marginTop: 20,
            opacity: 0.9,
          }}
        >
          Building products that help people live better lives
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}