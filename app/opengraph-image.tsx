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
          backgroundColor: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '60px',
          color: 'black',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            backgroundColor: '#f3f4f6',
            marginRight: '60px',
            border: '2px solid #e5e7eb',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#374151',
          }}
        >
          Photo
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 'bold',
              marginBottom: 20,
              lineHeight: 1.2,
            }}
          >
            Gleb Shabanov
          </div>
          <div
            style={{
              fontSize: 28,
              marginBottom: 20,
              color: '#4b5563',
              lineHeight: 1.4,
            }}
          >
            Tech Entrepreneur & Software Developer
          </div>
          <div
            style={{
              fontSize: 20,
              color: '#6b7280',
              lineHeight: 1.5,
            }}
          >
            Building products that help people live better lives
          </div>
          <div
            style={{
              fontSize: 18,
              marginTop: 30,
              color: '#6b7280',
              display: 'flex',
              gap: '20px',
            }}
          >
            <span>Go</span>
            <span>•</span>
            <span>React</span>
            <span>•</span>
            <span>Ruby on Rails</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}