
import product from './assets/product.png'
export default function Portfolio() {
    return (
        <div>
            <section className="bg-red-100 rounded-2xl p-5 mb-10">
                <div className="container mx-auto">
                    <div className="py-16 lg:py-28">
                        <h2 className="text-center text-3xl lg:text-5xl font-bold">
                            Our Portfolio
                        </h2>
                        <p className="lg:w-1/2 text-center mx-auto mt-5">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, nobis deserunt dolor, corporis deleniti ab
                            necessitatibus repellendus tempora ad dolorem explicabo praesentium iste et assumenda eligendi ea pariatur,
                            reiciendis repellat!
                        </p>
                    </div>

                    <div class="flex flex-wrap justify-center mb-24">
                        <div class="w-full md:w-1/2 py-4 md:pt-24">
                            <div class="w-full md:w-11/12 lg:w-8/12 mx-auto">
                                <div class="bg-white rounded-3xl shadow-lg">
                                    <img class="rounded-t-3xl" src={product} alt=""></img>
                                    <div class="p-5">
                                        <p>
                                            <span class="px-2 bg-red-100 rounded-3xl border border-red-200 py-1">branding</span>
                                            <span class="px-2 bg-green-100 rounded-3xl border border-green-200 py-1">design</span>
                                        </p>
                                        <h3 class="mt-4 text-lg font-bold">Design Item 1</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="w-full md:w-1/2 py-4 md:py-12">
                            <div class="w-full md:w-11/12 lg:w-8/12 mx-auto">
                                <div class="bg-white rounded-3xl shadow-lg">
                                    <img class="rounded-t-3xl" src={product} alt=""></img>
                                        <div class="p-5">
                                            <p>
                                                <span class="px-2 bg-red-100 rounded-3xl border border-red-200 py-1">branding</span>
                                                <span class="px-2 bg-green-100 rounded-3xl border border-green-200 py-1">design</span>
                                            </p>
                                            <h3 class="mt-4 text-lg font-bold">Design Item 1</h3>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 py-4 md:pt-24">
                            <div class="w-full md:w-11/12 lg:w-8/12 mx-auto">
                                <div class="bg-white rounded-3xl shadow-lg">
                                    <img class="rounded-t-3xl" src={product} alt=""></img>
                                        <div class="p-5">
                                            <p>
                                                <span class="px-2 bg-red-100 rounded-3xl border border-red-200 py-1">branding</span>
                                                <span class="px-2 bg-green-100 rounded-3xl border border-green-200 py-1">design</span>
                                            </p>
                                            <h3 class="mt-4 text-lg font-bold">Design Item 1</h3>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 py-4 md:py-12">
                            <div class="w-full md:w-11/12 lg:w-8/12 mx-auto">
                                <div class="bg-white rounded-3xl shadow-lg">
                                    <img class="rounded-t-3xl" src={product} alt=""></img>
                                        <div class="p-5">
                                            <p>
                                                <span class="px-2 bg-red-100 rounded-3xl border border-red-200 py-1">branding</span>
                                                <span class="px-2 bg-green-100 rounded-3xl border border-green-200 py-1">design</span>
                                            </p>
                                            <h3 class="mt-4 text-lg font-bold">Design Item 1</h3>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 py-4 md:pt-24">
                            <div class="w-full md:w-11/12 lg:w-8/12 mx-auto">
                                <div class="bg-white rounded-3xl shadow-lg">
                                    <img class="rounded-t-3xl" src={product} alt=""></img>
                                        <div class="p-5">
                                            <p>
                                                <span class="px-2 bg-red-100 rounded-3xl border border-red-200 py-1">branding</span>
                                                <span class="px-2 bg-green-100 rounded-3xl border border-green-200 py-1">design</span>
                                            </p>
                                            <h3 class="mt-4 text-lg font-bold">Design Item 1</h3>
                                        </div>
                                </div>
                            </div>
                        </div>                    </div>

                    <div className='flex pb-24 cursor-pointer'>
                        <span className='mx-auto bg-purple-600 font-semibold text-lg px-5 py-2 rounded text-white'>Explore</span>
                    </div>

                </div>
            </section>
        </div>
    )
}