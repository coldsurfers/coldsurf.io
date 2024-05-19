import Image from 'next/image'

export default function EventDetailPage() {
  return (
    <div className="flex flex-col h-screen">
      <div className="mt-0 mb-0 ml-auto mr-auto w-6/12">
        <div className="flex align-top w-full">
          <div className="sticky top-16" style={{ flex: '1 1 0%' }}>
            <div className="w-full">
              <Image
                src={'https://source.unsplash.com/random/300×300'}
                alt={'alt!'}
                width={256}
                height={256}
                className="w-full h-auto rounded shadow-md"
                style={{
                  aspectRatio: '1 / 1',
                }}
              />
            </div>
          </div>
          <div className="ml-12" style={{ flex: '2 1 0%' }}>
            <h1 className="text-5xl">
              Title Title Title Title Title Title Title Title Title Title Title
              Title Title Title Title Title Title Title Title Title Title Title
              Title Title Title Title Title Title Title Title Title Title
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}
