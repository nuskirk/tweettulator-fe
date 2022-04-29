type ModalProps = {
  title: string;
  inputChanged: (event: any) => void;
  closeModal: () => void;
  onSubmit: () => void;
};

export default function Modal(props: ModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
      <div className="relative my-6 mx-auto w-auto max-w-3xl">
        <div className="relative flex w-full flex-col rounded-lg border-2 bg-green-200 shadow-lg outline-none transition-all focus:outline-none">
          <div className="flex items-start justify-between rounded-t border-b border-solid border-gray-300 p-5 ">
            <h3 className="font=semibold text-3xl">{props.title}</h3>
          </div>
          <div className="relative flex-auto p-6">
            <form className="w-full rounded bg-gray-200 px-8 pt-6 pb-8 shadow-md">
              <label className="mb-1 block text-sm font-bold text-black">
                Message
              </label>
              <input
                className="w-full appearance-none rounded border py-2 px-1 text-black shadow"
                onChange={props.inputChanged}
              />
            </form>
          </div>
          <div className="border-blueGray-200 flex items-center justify-end rounded-b border-t border-solid p-6">
            <button
              className="background-transparent mr-1 mb-1 px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none focus:outline-none"
              type="button"
              onClick={props.closeModal}
            >
              Close
            </button>
            <button
              className="mr-1 mb-1 rounded bg-yellow-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none hover:shadow-lg focus:outline-none active:bg-yellow-700"
              type="button"
              onClick={() => props.onSubmit()}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
