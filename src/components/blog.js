
import product from './assets/product.png'
export default function Blogs() {
    return (
        <div>
            <section className="bg-purple-100 rounded-2xl p-5 mb-10">
                <div className="container mx-auto">
                    <div className="py-16 lg:py-28">
                        <h2 className="text-center text-3xl lg:text-5xl font-bold">
                            Blogs
                        </h2>
                        <p className="lg:w-1/2 text-center mx-auto mt-5">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, nobis deserunt dolor, corporis deleniti ab
                            necessitatibus repellendus tempora ad dolorem explicabo praesentium iste et assumenda eligendi ea pariatur,
                            reiciendis repellat!
                        </p>
                    </div>

                    <div className='flex flex-wrap justify-center'>
                        <div className='w-full lg:w-1/3 md:w-1/2 p-0 mg:p-1'>
                            <div className=' m-3'>
                                <img src={product} className='rounded-t-3xl'></img>
                                <div className='bg-white rounded-b-3xl p-5'>
                                    <h3 className='text-small font-bold text-gray-400'>May 12 2024</h3>
                                    <h2 className=' font-bold text-gray-600'>Some heading foe the blog</h2>
                                    <p className='mt-3'><span className='bg-gray-200 p-1 px-3 rounded-2xl'>Marketing</span></p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full lg:w-1/3 md:w-1/2 p-0 mg:p-1'>
                            <div className=' m-3'>
                                <img src={product} className='rounded-t-3xl'></img>
                                <div className='bg-white rounded-b-3xl p-5'>
                                    <h3 className='text-small font-bold text-gray-400'>May 12 2024</h3>
                                    <h2 className=' font-bold text-gray-600'>Some heading foe the blog</h2>
                                    <p className='mt-3'><span className='bg-gray-200 p-1 px-3 rounded-2xl'>Marketing</span></p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full lg:w-1/3 md:w-1/2 p-0 mg:p-1'>
                            <div className=' m-3'>
                                <img src={product} className='rounded-t-3xl'></img>
                                <div className='bg-white rounded-b-3xl p-5'>
                                    <h3 className='text-small font-bold text-gray-400'>May 12 2024</h3>
                                    <h2 className=' font-bold text-gray-600'>Some heading foe the blog</h2>
                                    <p className='mt-3'><span className='bg-gray-200 p-1 px-3 rounded-2xl'>Marketing</span></p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full lg:w-1/3 md:w-1/2 p-0 mg:p-1'>
                            <div className=' m-3'>
                                <img src={product} className='rounded-t-3xl'></img>
                                <div className='bg-white rounded-b-3xl p-5'>
                                    <h3 className='text-small font-bold text-gray-400'>May 12 2024</h3>
                                    <h2 className=' font-bold text-gray-600'>Some heading foe the blog</h2>
                                    <p className='mt-3'><span className='bg-gray-200 p-1 px-3 rounded-2xl'>Marketing</span></p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full lg:w-1/3 md:w-1/2 p-0 mg:p-1'>
                            <div className=' m-3'>
                                <img src={product} className='rounded-t-3xl'></img>
                                <div className='bg-white rounded-b-3xl p-5'>
                                    <h3 className='text-small font-bold text-gray-400'>May 12 2024</h3>
                                    <h2 className=' font-bold text-gray-600'>Some heading foe the blog</h2>
                                    <p className='mt-3'><span className='bg-gray-200 p-1 px-3 rounded-2xl'>Marketing</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className=" p-5 mb-10">
                <div className="container mx-auto bg-gradient-to-r rounded-2xl from-purple-400 to-red-400">
                    <div className="py-16 lg:py-18">
                        <h2 className="text-center text-3xl lg:text-5xl font-bold">
                        Let's do something amazing
                        </h2>
                        <p className="lg:w-1/2 text-center mx-auto mt-5">
                            Lorem ipsum dolor sit
                        </p>
                        <div className='flex mt-8'>
                            <button className='mx-auto p-2 text-gray-800 font-semibold text-lg bg-white px-3 rounded'>Contact Us</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}