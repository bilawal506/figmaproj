import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function Nav() {
  return (
    <>
      <div className=" flex justify-between ml-6 mr-6 mt-3">
          <Image src="/donut 1.svg" width={42} height={42} alt="donut" />
        <div className=" flex space-x-4">
          <Link href={'/#'}>
            <Image src="/setting-2.svg" width={36} height={36} alt="donut" />
          </Link>
          <Link href={'/#'}>
            <Image src="/chart.svg" width={36} height={36} alt="donut" />
          </Link>
          <Link href={'/#'}>
            <Image src="/Frame 4.svg" width={108} height={36} alt="donut" />
          </Link>
          <Link href={'/#'}>
            <Image src="/Frame 5.svg" width={68} height={36} alt="donut" />
          </Link>
        </div>
      </div>
    </>
  );
}
