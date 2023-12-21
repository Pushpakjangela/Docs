import React from 'react'

function Background() {
  return (
    <>
    <div className='w-full h-screen fixed z-[2]'>

      <div className="w-full absolute top-[5%] py-10 flex justify-center font-semibold text-zinc-600 text-xl">
        Documents.
      </div>
      <h1 className="text-[13vw] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] tracking-tighter leading-none font-semibold text-zinc-900">
        Docs.
      </h1>
    </div>
    </>
  );
}

export default Background
