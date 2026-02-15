import React from 'react'

export default function StravaWidget() {
  return (
    <div className="overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800">
      <iframe
        height="160"
        width="300"
        frameBorder="0"
        allowTransparency
        scrolling="no"
        src="https://www.strava.com/athletes/4930052/activity-summary/0595f8ffda3e98e3d9b5916b9c3a3d7c80ae81c0"
        title="Strava Activity Summary"
        className="block"
      />
    </div>
  )
}
