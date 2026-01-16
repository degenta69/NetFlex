import React from 'react'

const SkeletonRow = () => {
    return (
        <div className="p-4 space-y-4">
            {/* Title Skeleton */}
            <div className="h-6 w-40 bg-gray-700 animate-pulse rounded"></div>

            {/* Posters Skeleton */}
            <div className="flex space-x-4 overflow-x-scroll no-scrollbar py-4">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="min-w-[150px] h-[225px] bg-gray-800 animate-pulse rounded-md"
                    ></div>
                ))}
            </div>
        </div>
    )
}

export default SkeletonRow
