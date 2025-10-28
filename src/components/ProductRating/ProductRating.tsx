export default function ProductRating({
  rating,
  activeClassname = 'h-3 w-3 fill-yellow-300 text-yellow-300',
  nonActiveClassname = 'h-3 w-3 fill-current text-gray-300'
}: {
  rating: number
  activeClassname?: string
  nonActiveClassname?: string
}) {
  const handleWidth = (order: number) => {
    if (order <= rating) {
      return '100%'
    }
    if (order > rating && order - rating < 1) {
      return (rating - Math.floor(rating)) * 100 + '%'
    }
    return '0%'
  }
  return (
    <div className='flex items-center'>
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <div className='relative' key={index}>
            <div className='absolute top-0 left-0 h-full overflow-hidden' style={{ width: handleWidth(index + 1) }}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                className={activeClassname}
                aria-hidden='true'
              >
                <path d='M12 .587l3.668 7.431 8.197 1.192-5.93 5.78 1.401 8.166L12 18.896 4.664 23.156l1.401-8.166L.135 9.21l8.197-1.192z' />
              </svg>
            </div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              className={nonActiveClassname}
              fill='none'
              stroke='currentColor'
              strokeWidth='1.5'
              aria-hidden='true'
            >
              <path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
            </svg>
          </div>
        ))}
    </div>
  )
}
