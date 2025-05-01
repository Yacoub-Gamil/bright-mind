"use client";
function ComponentSlider({ children, backGround }) {
  console.log(backGround);
  return (
    <div
      className={` ${backGround} mx-[.5rem] flex h-[10rem] flex-col justify-between rounded-3xl p-4`}
    >
      {children}
    </div>
  );
}

export default ComponentSlider;
