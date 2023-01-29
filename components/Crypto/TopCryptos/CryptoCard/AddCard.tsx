export const AddCard = () => (
    <div className="col-span-12 sm:col-span-6 md:col-span-3">
        <div className="flex flex-row bg-white shadow-sm rounded h-full">
            <div id="empty-cover-art" className="grid place-items-center py-5 h-full rounded sm:w-full text-center opacity-50 md:border-solid md:border-2 md:border-gray-400">
                <svg className='text-center' width="48" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <div className="">
                    Add Crypto
                </div>
            </div>
        </div>
    </div>
);