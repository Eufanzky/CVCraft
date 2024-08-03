import styles from "../styles/GenerateForm.module.css";

export default function GenerateForm() {
  return (
    <form className="text-center mb-10 px-52">
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
      <button
        type="submit"
        className="mt-8 w-full h-12 border-blue-950 border-2 bg-slate-800 text-white shadow-lg hover:bg-white hover:text-black"
      >
        Create my CV!
      </button>
    </form>
  );
}
