import React from 'react'

export default function DataComponent({ data }: { data: unknown }) {
  return (
    <div>
      <h1>Data from API</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
