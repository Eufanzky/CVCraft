import Image from 'next/image';

export default function Home() {
  return (
    <div className='w-full' >

      <div className="flex gap-16 my-10 items-center justify-center relative">
        <form className="text-center mb-10">
          <div className="-mb-5 text-left">
            <svg
              width="44"
              height="51"
              viewBox="0 0 84 91"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative -left-12 top-16"
            >
              <path
                d="M69.8889 74.0121C70.8634 73.0298 70.8623 71.4452 69.8863 70.4726L53.9829 54.6241C53.007 53.6516 51.4259 53.6594 50.4514 54.6417C49.4769 55.624 49.478 57.2086 50.4539 58.1812L64.5903 72.2687L50.4744 86.497C49.4999 87.4793 49.501 89.0639 50.4769 90.0365C51.4529 91.009 53.034 91.0011 54.0085 90.0189L69.8889 74.0121ZM81.3773 0.0994189C67.1747 6.01039 51.3506 13.3983 37.543 21.1585C23.8248 28.8684 11.7897 37.1118 5.45311 44.8009C2.3038 48.6224 0.201295 52.7381 0.560239 56.8598C0.935592 61.1699 3.89318 64.5779 8.75261 67.1282C13.59 69.6669 20.7033 71.5899 30.3652 72.8746C40.0663 74.1644 52.5102 74.8317 68.1237 74.7539L68.12 69.7484C52.6404 69.8255 40.4409 69.1619 31.0427 67.9123C21.6054 66.6576 15.1635 64.8325 11.0841 62.6916C7.02677 60.5623 5.70599 58.3591 5.53569 56.4035C5.34898 54.2596 6.43354 51.4551 9.2983 47.9789C14.9898 41.0726 26.2911 33.2108 39.9716 25.5221C53.5628 17.8835 69.2001 10.5793 83.2759 4.72113L81.3773 0.0994189Z"
                fill="#424242"
              />
            </svg>

            <label className="icon first-letter:mb-11 text-blue-950 font-bold text-lg before:">
              Use your Gemini API KEY here
            </label>
            <input
              type="password"
              className="w-full p-2 border border-black rounded focus:outline-none box-border bg-white bg-opacity-75 shadow-lg"
              placeholder="You API key"
            />
          </div>
          <div className="mb-4 text-left">
            <svg
              width="44"
              height="51"
              viewBox="0 0 84 91"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative -left-12 top-16"
            >
              <path
                d="M69.8889 74.0121C70.8634 73.0298 70.8623 71.4452 69.8863 70.4726L53.9829 54.6241C53.007 53.6516 51.4259 53.6594 50.4514 54.6417C49.4769 55.624 49.478 57.2086 50.4539 58.1812L64.5903 72.2687L50.4744 86.497C49.4999 87.4793 49.501 89.0639 50.4769 90.0365C51.4529 91.009 53.034 91.0011 54.0085 90.0189L69.8889 74.0121ZM81.3773 0.0994189C67.1747 6.01039 51.3506 13.3983 37.543 21.1585C23.8248 28.8684 11.7897 37.1118 5.45311 44.8009C2.3038 48.6224 0.201295 52.7381 0.560239 56.8598C0.935592 61.1699 3.89318 64.5779 8.75261 67.1282C13.59 69.6669 20.7033 71.5899 30.3652 72.8746C40.0663 74.1644 52.5102 74.8317 68.1237 74.7539L68.12 69.7484C52.6404 69.8255 40.4409 69.1619 31.0427 67.9123C21.6054 66.6576 15.1635 64.8325 11.0841 62.6916C7.02677 60.5623 5.70599 58.3591 5.53569 56.4035C5.34898 54.2596 6.43354 51.4551 9.2983 47.9789C14.9898 41.0726 26.2911 33.2108 39.9716 25.5221C53.5628 17.8835 69.2001 10.5793 83.2759 4.72113L81.3773 0.0994189Z"
                fill="#424242"
              />
            </svg>

            <label className="text-blue-950 font-bold text-lg">
              Insert your prompt here
            </label>
            <textarea
              className="w-full p-2 border border-black rounded focus:outline-none box-border h-48 resize-none bg-white bg-opacity-75 shadow-lg"
              placeholder="Make a CV for a web developer with no experience..."
            />
          </div>

          <div className='relative mt-16' >
            <span className='font-bold text-5xl' >This is your result </span>
            <svg className="absolute -right-12 -top-10 size-20" viewBox="0 0 110 71" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M106.989 2.76694C106.86 1.39224 105.642 0.38217 104.267 0.510887L81.8649 2.60845C80.4902 2.73717 79.4802 3.95593 79.6089 5.33063C79.7376 6.70533 80.9564 7.7154 82.331 7.58668L102.244 5.72218L104.108 25.6351C104.237 27.0098 105.456 28.0198 106.831 27.8911C108.205 27.7624 109.215 26.5436 109.087 25.169L106.989 2.76694ZM0.487842 69.447C8.40982 71.1051 22.7812 69.4762 41.0988 60.2582C59.4937 51.0012 82.0463 34.0107 106.425 4.59527L102.575 1.40473C78.5537 30.3893 56.523 46.8988 38.8512 55.7918C21.1021 64.7238 7.92351 65.8949 1.51216 64.553L0.487842 69.447Z" fill="#000" />
            </svg>

          </div>
        </form>
        <div className=' border-black border-2' >
          <Image src="/cv-example-image.png" alt="cv-1" width={350} height={800} className='object-contain' />
        </div>
        <button className='bg-[#D9D9D9] p-2 rounded-md hover:border-black border border-black/50 absolute bottom-5  right-20 transition-all active:bg-[#D9D9D9]/80'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M7 10L12 15L17 10" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 15V3" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

        </button>
      </div>
      <footer className='border border-black w-full p-5 mt-16 sticky bottom-0 bg-white shadow-2xl shadow-black'>
        <div className='w-full flex justify-between' >

          <div className='bg-[#C32CDC]/30 w-[50%] h-full absolute top-0 left-0 rounded-br-[35px]' >
          </div>

          <button className='flex-1 text-center bg-transparent underline scale-95 hover:scale-100 active:scale-95 transition-transform flex items-center gap-5 text-2xl justify-center font-bold' >Re-create the CV
            <svg className='size-8' viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 20.5143C5 23.4811 5.87973 26.3812 7.52796 28.8479C9.17618 31.3146 11.5189 33.2372 14.2597 34.3725C17.0006 35.5079 20.0166 35.8049 22.9264 35.2261C25.8361 34.6473 28.5088 33.2187 30.6066 31.1209C32.7044 29.0232 34.133 26.3504 34.7118 23.4407C35.2906 20.531 34.9935 17.515 33.8582 14.7741C32.7229 12.0332 30.8003 9.69052 28.3336 8.0423C25.8668 6.39408 22.9667 5.51434 20 5.51434C15.8066 5.53012 11.7816 7.16638 8.76667 10.081L5 13.8477" stroke="black" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M5 5.51434V13.8477H13.3333" stroke="black" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round" />
            </svg>


          </button>
          <button className='flex-1 text-center bg-transparent underline scale-95 hover:scale-100 active:scale-95 transition-transform flex items-center gap-5 text-2xl justify-center font-bold' >Change CV

            <svg className='size-8' viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 33.8477H35" stroke="black" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M27.2933 6.55099C27.9568 5.88751 28.8567 5.51477 29.795 5.51477C30.7333 5.51477 31.6332 5.88751 32.2967 6.55099C32.9602 7.21448 33.3329 8.11435 33.3329 9.05266C33.3329 9.99097 32.9602 10.8908 32.2967 11.5543L12.28 31.5727C11.8835 31.9692 11.3934 32.2592 10.855 32.416L6.06835 33.8127C5.92493 33.8545 5.77291 33.857 5.62819 33.8199C5.48348 33.7828 5.35139 33.7076 5.24576 33.6019C5.14012 33.4963 5.06483 33.3642 5.02775 33.2195C4.99067 33.0748 4.99318 32.9227 5.03501 32.7793L6.43168 27.9927C6.58871 27.4549 6.87876 26.9654 7.27501 26.5693L27.2933 6.55099Z" stroke="black" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M25 8.84769L30 13.8477" stroke="black" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round" />
            </svg>


          </button>
        </div>
      </footer>
    </div>
  );
}
