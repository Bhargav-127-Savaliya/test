import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon, } from '@heroicons/react/24/outline'
import { CSVLink } from 'react-csv'
import { handler } from 'flowbite/plugin'
import { CloudArrowDownIcon } from "@heroicons/react/24/outline";
import { CheckBadgeIcon, CogIcon } from "@heroicons/react/20/solid"


function Model({ handleFileInputChange, handleExportClick }) {
    const [open, setOpen] = useState(true)

    const cancelButtonRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    // const ref = useRef < HTMLInputElement > (null);
    const fileInputRef = useRef(null);
    return (
        <div>
            <div >

                <button onClick={() => setOpen(!open)} className='rounded-lg z-50 tex-black px-4 py-2 bg-blue-500 text-white'>
                    upload csv +
                </button>
            </div>
            <Transition.Root show={!open} as={Fragment}>
                <Dialog as="div" className="relative z-50" initialFocus={cancelButtonRef} onClose={setOpen} >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"

                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className='w-fit float-right hover:bg-red-500 active:bg-red-600 hover:text-white p-2 px-4 rounded-es-lg hover:cursor-pointer' onClick={() => setOpen(!open)}>
                                        X
                                    </div>
                                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 space-y-3">
                                        export data of card to csv formt<br />
                                        <div className="text-blue-500 hover:cursor-pointer w-fit underline " onClick={handleExportClick}> Export CSV</div>
                                        <input type="file" accept=".csv" onChange={handleFileInputChange} ref={fileInputRef} className=""
                                        />
                                        <button onClick={() => fileInputRef.current.click()} className="rounded-md border-2 flex justify-center flex-col items-center text-green-400 border-green-400 border-dashed w-full h-20 ">
                                            <CloudArrowDownIcon className='h-10' />
                                            Import CSV File
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    )
}

export default Model