import SkeletonCard from '@/components/SkeletonCard';
import React from 'react';

const loading = () => {
  return (
    <div className=''>
        
      <div className=''>
        {''.split('').map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default loading;
