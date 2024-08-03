// 'use client';

// import { useChat } from 'ai/react';

// export default function Chat() {
//   const { messages, input, handleInputChange, handleSubmit } = useChat();
//   return (
//     <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
//       {messages.map(m => (
//         <div key={m.id} className="whitespace-pre-wrap">
//           {m.role === 'user' ? 'User: ' : 'AI: '}
//           {m.content}
//         </div>
//       ))}

//       <form onSubmit={handleSubmit}>
//         <input
//           className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
//           value={input}
//           placeholder="Say something..."
//           onChange={handleInputChange}
//         />
//       </form>
//     </div>
//   );
// }

import GenerateForm from "../components/GenerateForm";
import ImagePreview from "../components/ImagePreview";

export default function Home() {
  return (
    <div>
      <div className="max-w-screen-lg w-full p-5 mx-auto">
        <GenerateForm />
        <div className="mt-2">
          <h2 className="icon first-letter:mb-11 text-blue-950 font-bold text-lg before:">
            Examples
          </h2>
          <div className="flex justify-around mb-10">
            <ImagePreview src="/cv-example-image.png" alt="cv-1" />
            <ImagePreview src="/cv-example-image.png" alt="cv-2" />
            <ImagePreview src="/cv-example-image.png" alt="cv-3" />
          </div>
        </div>
      </div>
    </div>
  );
}
