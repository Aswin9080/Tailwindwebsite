
import product from './assets/product.png'
export default function Subscribe() {
    return (
        <div>
            <section className="bg-red-100 rounded-2xl p-5 mb-10 py-28">
                <div className="container mx-auto sm:p-28 sm:px-28">
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-1/2 lg:pr-5 flex">
                            <img src={product} className='ml-auto my-auto rounded shadow-lg'></img>
                        </div>
                        <div className="w-full lg:w-1/2 lg:pl-5">
                            <div>
                                <h2 className='text-3xl md:text-5xl font-bold mt-5 lg:mt-0'>Subscribe to our Newsletter</h2>
                                <p className='mt-4 text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
                                    possimus consectetur incidunt, earum consequuntur atque aut enim ea
                                    ratione quis veritatis nihil eos repudiandae nam necessitatibus!
                                    Et commodi cumque nulla?
                                </p>

                                <div className='mt-5'>
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

                                        <div className='mt-5'>
                                            <input className='mr-2' type='checkbox' name='I Agree'></input>I Agree
                                            <button className='text-white bg-purple-500 rounded px-3 py-2 block font-semibold w-full md:w-auto mt-3'>Subscribe</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}