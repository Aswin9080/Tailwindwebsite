
export default function Contact() {
    return (
        <div>
            <section className=" bg-red-100 rounded-2xl p-5 mb-10">
                <div className="container mx-auto mb-20">
                    <div className="py-16 lg:py-28">
                        <h2 className="text-center text-3xl lg:text-5xl font-bold">
                            Contact Us
                        </h2>
                        <p className="lg:w-1/2 text-center mx-auto mt-5">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam rem nesciunt cum aperiam laborum, modi at. Veritatis doloremque consectetur, est dignissimos quasi eos perferendis odio natus quas autem minus beatae
                        </p>
                    </div>

                    <div className='mt-5 lg:w-1/2 mx-auto'>
                        <form>
                            <div className='flex border bg-white p-2 focus-within:border-purple-500'>
                                <div className='w-auto flex px-2 text-gray-300'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 my-auto">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>

                                </div>
                                <div className='w-full '>
                                    <span className='block  text-gray-300'>Enter the Name</span>
                                    <input type='text' className='w-full p-1 focus:outline-none  border-b'></input>
                                </div>
                            </div>

                            <div className='flex mt-3 border bg-white p-2 focus-within:border-purple-500'>
                                <div className='w-auto flex px-2 text-gray-300'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 my-auto">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z" />
                                    </svg>
                                </div>
                                <div className='w-full '>
                                    <span className='block  text-gray-300'>Enter the Email</span>
                                    <input type='text' className='w-full focus:outline-none p-1  border-b'></input>
                                </div>
                            </div>

                            <div className='flex mt-3 border bg-white p-2 focus-within:border-purple-500'>
                                <div className='w-auto flex px-2 text-gray-300'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 my-auto">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z" />
                                    </svg>
                                </div>
                                <div className='w-full '>
                                    <span className='block  text-gray-300'>Choose One</span>
                                    <select className='w-full focus:outline-none p-1  border-b'>
                                        <option>Desin</option>
                                        <option>Mern Stack Developer</option>
                                        <option>Python Developer</option>
                                        <option>Java Developer</option>
                                    </select>
                                </div>
                            </div>

                            <div className='flex mt-3 border bg-white p-2 focus-within:border-purple-500'>
                                <div className='w-auto flex px-2 text-gray-300'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 my-auto">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z" />
                                    </svg>
                                </div>
                                <div className='w-full '>
                                    <span className='block  text-gray-300'>Enter the Message</span>
                                    <textarea className='w-full focus:outline-none p-1  border-b'></textarea>
                                </div>
                            </div>

                            <div className='mt-5'>
                                <button className='text-white bg-purple-500 rounded px-3 py-2 block font-semibold w-full md:w-auto mt-3'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section >
        </div >
    )
}